<script lang="ts">
    export let path: string;
    export let currentPage: number;
    export let amountOfPages: number;
</script>

{#if amountOfPages > 1}
<div class="margin-top">
    <a href={`${path}/1`} class="normal">first</a> /
    {#if currentPage !== 1}
        <a href={`${path}/${currentPage - 1}`} class="normal">prev</a>
    {:else}
        ....
    {/if}
    /
    {#if currentPage !== amountOfPages}
        <a href={`${path}/${currentPage + 1}`} class="normal">next</a>
    {:else}
    ...
    {/if}
    / <a href={`${path}/${amountOfPages}`} class="normal">last</a>
</div>
{/if}

<style>
    div {
        display: inline-flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.75rem;
        justify-content: center;
    }
</style>