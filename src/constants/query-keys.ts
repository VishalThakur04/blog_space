export const QUERY_KEYS = {
  posts: ["posts"] as const,
  blogs: ["blogs"] as const,
  user: (id: string) => ["user", id] as const,
};