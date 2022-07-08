<script context="module">
  // @ts-ignore
  export const load = async ({ params, fetch }) => {
    const currentTag = params.tag
    const response = await fetch('/api/posts.json')
    const posts = await response.json()

    const matchingPosts = posts.filter(post => post.meta.tags ? post.meta.tags.includes(currentTag) : false)

    return {
      props: {
        posts: matchingPosts,
        tag: currentTag
      }
    }
  }
</script>

<script lang="ts">
  import ShortPost from '$lib/components/ShortPost.svelte';
  import Pagination from '$lib/components/Pagination.svelte';

  export let posts: any;
  export let tag: string;

  let currentPage = 1;
  const itemsPerpage = 5;

  $: indexOfLastItem = currentPage * itemsPerpage;
  $: indexOfFirstItem = indexOfLastItem - itemsPerpage;

  $: amountOfPages = Math.ceil(posts.length / itemsPerpage);

  $: slicedList = posts.slice(indexOfFirstItem, indexOfLastItem);
</script>

{#if posts.length}
  <section class="center">
    <h2>Posts tagged #{tag}</h2>

    <a href="/posts">Back to all posts</a>

    <Pagination bind:currentPage {amountOfPages}/>
  </section>

  <section class="gapped">
    {#each slicedList as post, index}
      <ShortPost {post} />
    {/each}
  </section>
{:else}
<section class="center margin-top">
  <h2>There are no posts tagged as #{tag}!</h2>
  <a href="/posts/tag">Back to tag catalog</a>
</section>
{/if}