import { writable } from "svelte/store";

export const dialogOpen = writable(false);
export const dialogImageSrc = writable<String | null>(null);
