<script lang="ts">
    import ShortPost from '$lib/components/ShortPost.svelte';

    export let posts: any;
</script>

<section class="gapped">
  {#if posts.length}
    {#each posts as post}
      <ShortPost {post} />
    {/each}
  {:else}
    <section class="block dropshadow">
      <p>No posts found.</p>
    </section>
  {/if}
</section>
