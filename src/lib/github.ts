export type GithubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  archived: boolean;
  fork: boolean;
  pushed_at: string;
  topics: string[];
};

export type DisplayRepo = {
  name: string;
  description: string;
  url: string;
  language: string | null;
  stars: number;
  archived: boolean;
  pushedAt: string;
  topics: string[];
};

async function fetchAllRepos(username: string, token?: string): Promise<GithubRepo[]> {
  const headers: HeadersInit = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'nanda-personal-site',
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const repos: GithubRepo[] = [];
  let page = 1;
  const perPage = 100;

  while (true) {
    const url = `https://api.github.com/users/${username}/repos?per_page=${perPage}&page=${page}&sort=updated&direction=desc`;
    const res = await fetch(url, { headers });
    if (!res.ok) {
      throw new Error(`GitHub API ${res.status}: ${await res.text()}`);
    }
    const batch = (await res.json()) as GithubRepo[];
    repos.push(...batch);
    if (batch.length < perPage) break;
    page += 1;
    if (page > 10) break;
  }

  return repos;
}

export async function getDisplayRepos(options: {
  username: string;
  overrides?: Record<string, string>;
  limit?: number;
  token?: string;
  fallbackDescription?: string;
}): Promise<{ repos: DisplayRepo[]; total: number }> {
  const {
    username,
    overrides = {},
    limit = 12,
    token,
    fallbackDescription = 'Repository on GitHub.',
  } = options;
  const auth = token ?? process.env.GITHUB_TOKEN ?? process.env.GITHUB_TOKEN_FOR_BUILD;

  let raw: GithubRepo[] = [];
  try {
    raw = await fetchAllRepos(username, auth);
  } catch (err) {
    console.warn('[github] Failed to fetch repos:', err);
    return { repos: [], total: 0 };
  }

  const filtered = raw
    .filter((r) => !r.fork)
    .sort((a, b) => {
      // Non-archived first, then by pushed_at
      if (a.archived !== b.archived) return a.archived ? 1 : -1;
      return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime();
    });

  const mapped: DisplayRepo[] = filtered.map((r) => ({
    name: r.name,
    description: overrides[r.name] ?? r.description ?? fallbackDescription,
    url: r.html_url,
    language: r.language,
    stars: r.stargazers_count,
    archived: r.archived,
    pushedAt: r.pushed_at,
    topics: r.topics ?? [],
  }));

  return {
    repos: mapped.slice(0, limit),
    total: mapped.length,
  };
}
