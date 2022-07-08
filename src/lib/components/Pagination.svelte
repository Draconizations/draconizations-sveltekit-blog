<script lang="ts">
import { prevent_default } from "svelte/internal";

    export let currentPage: number;
    export let amountOfPages: number;
</script>

{#if amountOfPages > 1}
<div class="margin-top">
    <a href="#" class="normal" on:click={(e) => {e.preventDefault; currentPage = 1}}>first</a> /
    {#if currentPage !== 1}
        <a href="#" class="normal" on:click={(e) => {e.preventDefault; currentPage = currentPage - 1}}>prev</a>
    {:else}
        ....
    {/if}
    /
    {#if currentPage !== amountOfPages}
        <a href="#" class="normal" on:click={(e) => {e.preventDefault; currentPage = currentPage + 1}}>next</a>
    {:else}
    ...
    {/if}
    / <a href="#" class="normal" on:click={(e) => {e.preventDefault; currentPage = amountOfPages}}>last</a>
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