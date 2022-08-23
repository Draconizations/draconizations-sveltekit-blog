<script lang="ts">
    import Tag from '$lib/components/Tag.svelte';

    export let data: any;
</script>

<section class="center">
    <h2>Tag catalog</h2>

    <a href="/posts">Back to all posts</a>
</section>

<section class="block dropshadow">
    {#if data.tags.length > 0}
        <ul class="tags">
            {#each data.tags as tag}
                <Tag {tag}/>
            {/each}
        </ul>
    {:else}
        <p>No tags found!</p>
    {/if}
</section>