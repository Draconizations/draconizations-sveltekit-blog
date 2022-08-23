// @ts-ignore
export const load = async ({ params, fetch }) => {
    const response = await fetch('/api/posts.json');
    const posts = await response.json();

    let tagList: string[] = [];
    posts.forEach(post => {
        if (post.meta.tags) post.meta.tags.forEach(tag => tagList.push(tag));
    });

    tagList = [...new Set(tagList)];

    return {
    tags: tagList
}
}
