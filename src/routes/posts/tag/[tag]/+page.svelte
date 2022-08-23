<script lang="ts">
  throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

  import { page } from '$app/stores';
  import PageList from '$lib/components/PageList.svelte';
  import Pagination from '$lib/components/Pagination.svelte';
  import { itemsPerPage } from '$lib/utils/postUtils';

  export let posts: any;
  export let tag: string;

  $: pathSegments = $page.url.pathname.split("/");

  $: path = "/posts/tag/" + pathSegments[pathSegments.length - 1];

  let currentPage = 1;

  $: indexOfLastItem = currentPage * itemsPerPage;
  $: indexOfFirstItem = indexOfLastItem - itemsPerPage;

  $: amountOfPages = Math.ceil(posts.length / itemsPerPage);

  $: slicedList = posts.slice(indexOfFirstItem, indexOfLastItem);
</script>

<section class="center">
  <h2>Posts tagged #{tag}</h2>

  <a href="/posts/tag">Back to tag catalog</a>

  <Pagination {currentPage} {amountOfPages} {path}/>
</section>

<PageList posts={slicedList} />