<script lang="ts">
    import { page } from '$app/stores';
    import Pagination from '$lib/components/Pagination.svelte';
    import { itemsPerPage } from '$lib/utils/postUtils';

    import PageList from '$lib/components/PageList.svelte';

    let currentPage: number;
    let path = '/posts';

    $: pathSegments = $page.url.pathname.split("/");
    $: if ($page.url.pathname !== path) {
        currentPage = parseInt(pathSegments[pathSegments.length - 1]);
    } else {
      currentPage = 1;
    }

    export let data: any;

    $: indexOfLastItem = currentPage * itemsPerPage;
    $: indexOfFirstItem = indexOfLastItem - itemsPerPage;

    $: amountOfPages = Math.ceil(data.posts.length / itemsPerPage);

    $: slicedList = data.posts.slice(indexOfFirstItem, indexOfLastItem);
</script>

<section class="center" >
  <h2>Recent posts</h2>

  <a href="/posts/tag">search by tag</a>
  <Pagination {currentPage} {amountOfPages} path={path}/>
</section>

<PageList posts={slicedList} />
