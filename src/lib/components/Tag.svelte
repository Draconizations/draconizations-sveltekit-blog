<script lang="ts">
    export let tag: string;
</script>

<li>
    <a class="tag-text" href={`/posts/tag/${tag}`}>#{tag}</a>
</li>