// @ts-ignore
export const load = async ({ params, fetch }) => {
  const currentPath = params.post
  const response = await fetch('/api/posts.json')
  const posts = await response.json()

  const matchingPosts = posts.filter(post => post.meta.path ? post.meta.path == currentPath : false)

  return {
  posts: matchingPosts,
  path: currentPath
}
}
