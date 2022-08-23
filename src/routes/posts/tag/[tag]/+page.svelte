<script lang="ts">
  import { page } from '$app/stores';
  import PageList from '$lib/components/PageList.svelte';
  import Pagination from '$lib/components/Pagination.svelte';
  import { itemsPerPage } from '$lib/utils/postUtils';

  export let data: any;

  $: pathSegments = $page.url.pathname.split("/");

  $: path = "/posts/tag/" + pathSegments[pathSegments.length - 1];

  let currentPage = 1;

  $: indexOfLastItem = currentPage * itemsPerPage;
  $: indexOfFirstItem = indexOfLastItem - itemsPerPage;

  $: amountOfPages = Math.ceil(data.posts.length / itemsPerPage);

  $: slicedList = data.posts.slice(indexOfFirstItem, indexOfLastItem);
</script>

<section class="center">
  <h2>Posts tagged #{data.tag}</h2>

  <a href="/posts/tag">Back to tag catalog</a>

  <Pagination {currentPage} {amountOfPages} {path}/>
</section>

<PageList posts={slicedList} />