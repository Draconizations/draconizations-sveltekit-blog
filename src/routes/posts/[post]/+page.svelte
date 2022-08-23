<script lang="ts">
  import Tag from '$lib/components/Tag.svelte';

  export let data: any;
</script>

{#if data.posts.length}
<div class="gapped">
  {#each data.posts as post, index}
    <div class="gapped margins">
      <section class="block dropshadow">
        <h2>{post.meta.title}</h2>
        <span>Posted on: {post.meta.date}</span>
        <hr/>
        {@html post.contents.html}
      </section>
      {#if post.meta.tags}
      <i>tagged as</i>
      <ul class="tags">
        {#each post.meta.tags as tag}
          <Tag {tag}/>
        {/each}
      </ul>
      {:else}
      <i>no tags</i>
      {/if}
    </div>
  {/each}
  </div>
{:else}
<section class="block dropshadow">
  post {data.path} doesn't exist!
</section>
{/if}

<style>
  h2 {
    margin-top: 0;
  }

  .block {
    margin-bottom: 1.5rem;
  }
</style>