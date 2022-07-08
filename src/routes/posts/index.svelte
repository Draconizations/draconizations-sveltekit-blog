<script context="module">
    // @ts-ignore
    export const load = async ({ fetch }) => {
      const posts = await fetch('/api/posts.json')
      const allPosts = await posts.json()
    
      return {
        props: {
          posts: allPosts
        }
      }
    }
</script>

<script lang="ts">
    import ShortPost from '$lib/components/ShortPost.svelte';
    import Pagination from '$lib/components/Pagination.svelte';

    export let posts: any;

    let currentPage = 1;
    const itemsPerpage = 5;

    $: indexOfLastItem = currentPage * itemsPerpage;
    $: indexOfFirstItem = indexOfLastItem - itemsPerpage;

    $: amountOfPages = Math.ceil(posts.length / itemsPerpage);

    $: slicedList = posts.slice(indexOfFirstItem, indexOfLastItem);
</script>

<section class="center" >
  <h2>Recent posts</h2>

  <a href="/posts/tag">search by tag</a>
  <Pagination bind:currentPage {amountOfPages}/>
</section>

<section class="gapped">
  {#if posts.length}
    {#each slicedList as post}
      <ShortPost {post} />
    {/each}
  {:else}
    <section class="block dropshadow">
      <p>No posts found.</p>
    </section>
  {/if}
</section>
