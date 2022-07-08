<script context="module" lang="ts">
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
            props: {
                tags: tagList
            }
        }
    }
</script>

<script lang="ts">
    import Tag from '$lib/components/tag.svelte';

    export let tags: string[];
</script>

<section class="center">
    <h2>Tag catalog</h2>

    <a href="/posts">Back to all posts</a>
</section>

<section class="block dropshadow">
    {#if tags.length > 0}
        <ul class="tags">
            {#each tags as tag}
                <Tag {tag}/>
            {/each}
        </ul>
    {:else}
        <p>No tags found!</p>
    {/if}
</section>