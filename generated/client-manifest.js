export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\pages\\__layout.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\pages\\about.md"),
	() => import("..\\..\\src\\routes\\pages\\contact.md"),
	() => import("..\\..\\src\\routes\\posts\\[post].svelte"),
	() => import("..\\..\\src\\routes\\posts\\index.svelte"),
	() => import("..\\..\\src\\routes\\posts\\tag\\[tag].svelte"),
	() => import("..\\..\\src\\routes\\posts\\tag\\index.svelte")
];

export const dictionary = {
	"": [[0, 3], [1]],
	"posts": [[0, 7], [1]],
	"pages/about": [[0, 2, 4], [1]],
	"pages/contact": [[0, 2, 5], [1]],
	"posts/tag": [[0, 9], [1]],
	"posts/tag/[tag]": [[0, 8], [1]],
	"posts/[post]": [[0, 6], [1]]
};