<script lang="ts">
    throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

    import Tag from '$lib/components/Tag.svelte';

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