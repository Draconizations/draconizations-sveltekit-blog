<script lang="ts">
    import { trimPostContent } from "$lib/utils/postUtils";

    export let post: any;
</script>

<div class="block dropshadow" >
    <h3>
        <a class="title" href={post.path}>🔗 {post.meta.title}</a>
    </h3>
    <span class="italic">Posted on: {post.meta.date}</span>
    <hr/>
    {@html trimPostContent(post)}
</div>

<style>
    h3 {
        margin-top: 0rem;
    }
</style>