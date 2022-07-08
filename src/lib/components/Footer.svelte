<script lang="ts">
    import theme from '$lib/store/theme';
    import accent from '$lib/store/accent';
    
    let selectedTheme: string;
    let selectedAccentColor: string;

    const changeTheme = () => theme.set(selectedTheme);

    const changeAccentColor = () => accent.set(selectedAccentColor);

    $: switchFooterEmojis($accent);

    let emojis = "🐉✨";

    function switchFooterEmojis(accent: string) {
        switch (accent) {
            case "black": emojis = "🌑🐈‍⬛";
            break;
            case "red": emojis = "🩸🍒";
            break;
            case "orange": emojis = "🔥🧨";
            break;
            case "peachy": emojis = "🍑🏵️";
            break;
            case "yellow": emojis = "🍋☀️";
            break;
            case "lime": emojis = "🌱🏔️";
            break;
            case "green": emojis = "🐉🌲";
            break;
            case "teal": emojis = "💎🐬";
            break;
            case "sky": emojis = "🌧️💙";
            break;
            case "blue": emojis = "🌀🫐";
            break;
            case "purple": emojis = "🍇🔮";
            break;
            case "magenta": emojis = "🍷🌺";
            break;
            case "pink": emojis = "🌷🏳️‍⚧️";
            break;
            case "white": emojis = "🤍🍸";
        }
    }

</script>

<footer>
    <span>{emojis}</span>

    <select bind:value={selectedTheme} aria-label="Change theme" on:change={changeTheme}>
        <option default disabled>theme</option>
        <option value="drgn-light" >light</option>
        <option value="drgn-dark" >dark</option>
        <option value="drgn-faded" >faded</option>
    </select>
    <select bind:value={selectedAccentColor} aria-label="Change accent color" on:change={changeAccentColor} >
        <option default disabled>accent</option>
        <option value="black">black</option>
        <option value="red" >red</option>
        <option value="orange">orange</option>
        <option value="peachy">peachy</option>
        <option value="yellow">yellow</option>
        <option value="lime">lime</option>
        <option value="green">green</option>
        <option value="teal">teal</option>
        <option value="sky">sky</option>
        <option value="blue" >blue</option>
        <option value="purple">purple</option>
        <option value="magenta">magenta</option>
        <option value="pink">pink</option>
        <option value="white">white</option>
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