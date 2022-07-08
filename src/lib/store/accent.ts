import { writable } from "svelte/store"
import { browser } from "$app/env"

let defaultValue = 'blue';
const initialValue = browser ? window.localStorage.getItem('drgn-accent') ?? defaultValue : defaultValue;

export const accent = writable<string>(initialValue);

accent.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem('drgn-accent', value);
    }
});

export default accent;