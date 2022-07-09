<script lang="ts">
    import theme from '$lib/store/theme';
    import accent from '$lib/store/accent';
    
    let selectedTheme: string;
    let selectedAccentColor: string;

    let themeEmojis = {
        light: "☀️",
        dark: "🌙",
        faded: "✨"
    }

    let accentEmojis = {
        black: "🌑🐈‍⬛",
        red: "🩸🍒",
        orange: "🔥🧨",
        peachy: "🍑🏵️",
        yellow: "🍋🌻",
        lime: "🌱🏔️",
        green: "🐉🌲",
        teal: "💎🐬",
        sky: "🌧️💙",
        blue: "🌀🫐",
        purple: "🍇🔮",
        magenta: "🍷🌺",
        pink: "🌷🏳️‍⚧️",
        white: "🤍🍸"
    }

    const changeTheme = () => theme.set(selectedTheme);

    const changeAccentColor = () => accent.set(selectedAccentColor);

    $: switchFooterEmojis($accent);

    let currentAccentEmoji = "🐉✨";

    function switchFooterEmojis(accent: string) {
        Object.entries(accentEmojis).forEach(([key, value]) => {
            if (accent === key) currentAccentEmoji = value;
        });
    }

</script>

<footer>
    <span>{currentAccentEmoji}</span>

    <select bind:value={selectedTheme} aria-label="Change theme" on:change={changeTheme}>
        <option class="drgn-theme-option-default" default disabled>theme</option>
        {#each Object.keys(themeEmojis) as theme}
            <option class={`drgn-theme-option-${theme}`} value={theme}>{theme}</option>
        {/each}
    </select>
    <select bind:value={selectedAccentColor} aria-label="Change accent color" on:change={changeAccentColor} >
        <option class="drgn-accent-option-default" default disabled>accent</option>
        {#each Object.keys(accentEmojis) as accent}
            <option class={`drgn-accent-option-${accent}`} value={accent}>{accent}</option>
        {/each}
    </select>

    <span>made with <a href="https://kit.svelte.dev/">sveltekit</a></span>
</footer>

<style>
    footer {
        display: flex;
        flex-direction: row;
        gap: 0.75rem;
        flex-wrap: wrap;
        justify-content: center;
    }

    select {
        width: 7.5rem;
    }
</style>