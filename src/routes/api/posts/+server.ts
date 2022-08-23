import { json } from "@sveltejs/kit";

export const GET = async () => {
    const postModules = import.meta.glob('../../../posts/*.md', {eager: true});

    const allPosts = Object.entries(postModules).map(([key, value]: any) => {
        const contents = value.default.render();
        const meta = value.metadata;

        return {
            path: "/posts/" + meta.path,
            contents: contents,
            meta: meta
        }
    });

    const sortedPosts = allPosts.sort((a, b) => {
        return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
    });

    return json(sortedPosts);
}