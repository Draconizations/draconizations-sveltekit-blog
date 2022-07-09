import { writable } from "svelte/store"
import { browser } from "$app/env"

let defaultValue = 'drgn-dark';
const initialValue = browser ? window.localStorage.getItem('drgn-theme') ?? defaultValue : defaultValue;

export const theme = writable<string>(initialValue);

theme.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem('drgn-theme', value);
    }
});

export default theme;