<script lang="ts">
    let expandNav = false;

    const toggleNav = () => expandNav = !expandNav;
</script>

<header class="block dropshadow">
    <a class="title" href="/"><slot /></a>
    <button class="hide-large" on:click={toggleNav}>Menu</button>
    
    <div class={`collapse ${expandNav ? "show" : ""}`}>
        <nav>
            <hr class="hide-large"/>
            <ul>
                <li>
                    <a href="/posts">Posts</a>
                </li>
                <li>
                    <a href="/pages/about">About</a>
                </li>
                <li>
                    <a href="/pages/contact">Contact</a>
                </li>
            </ul>
        </nav>
    </div>
</header>

<style lang="scss">
    header {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .title {
        font-size: 1.25rem;
    }

    .collapse {
        width: 100%;
        display: none;
        flex-direction: column;
        gap: 0.5rem;
    }

    .collapse.show {
        display: flex;
    }

    nav ul {
        display: flex;
        flex-direction: column;
        list-style-type: none;
        padding-left: 0;
        padding: 0.5rem;
        margin: 0;
        gap: 1rem;
    }

    @media(min-width: 640px) {
        header {
            gap: 1.5rem;
            padding: 0.75rem;
        }

        .collapse { 
            flex-direction: row;
            display: flex;
            flex: 1;
        }

        nav ul {
            margin-left: auto;
            flex-direction: row;
        }
        
        .hide-large {
            display: none;
        }
    }
</style>