<script lang="ts">
    import theme from '$lib/store/theme';
    import accent from '$lib/store/accent';

    import style from '$lib/styles/style.scss';
    import accentColors from '$lib/styles/accent.scss';
    import themes from '$lib/styles/theme.scss';
    import laserwave from '$lib/styles/prism-laserwave.css';

    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';

    $: currentTheme = $theme;
    $: currentAccentColor = $accent;
</script>

<div class={`theme-wrapper ${currentTheme} drgn-${currentAccentColor}`}>
    <div class="container">
        <Header>Fulmine</Header>

        <main>
            <slot/>
        </main>
        <br/>
        <Footer/>
    </div>
</div>