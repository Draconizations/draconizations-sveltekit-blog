// @ts-ignore
export const load = async ({ params, fetch }) => {
  const currentTag = params.tag
  const response = await fetch('/api/posts')
  const posts = await response.json()

  const matchingPosts = posts.filter(post => post.meta.tags ? post.meta.tags.includes(currentTag) : false)

  return {
  posts: matchingPosts,
  tag: currentTag
}
}
