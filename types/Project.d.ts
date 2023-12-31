export type Project = {
    path: any;
    github_id: string;
    id: number;
    labels: string[];
    name: string;
    description: string;
    category: string;
    github_url: string;
    homepage: string;
    license: string;
    created_at: string;
    updated_at: string;
    last_commit_pushed_at: string;
    commit_count: number;
    recent_commit_count: number;
    fork_count: number;
    watchers_count: number;
    pr_count: number;
    open_issue_count: number;
    closed_issue_count: number;
    star_count: number;
    latest_stable_release_published_at: string;
    latest_stable_release_number: string;
    github_release_downloads: number;
    monthly_downloads: number;
    release_count: number;
    dependent_project_count: number;
    github_dependent_project_count: number;
    contributor_count: number;
    projectrank: number;
    show: boolean;
    projectrank_placing: number;
    trending: number;
    updated_github_id: string;
}