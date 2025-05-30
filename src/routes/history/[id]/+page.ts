import { historyEntries } from '$lib/content/nav';
import type { EntryGenerator } from './$types';

export const entries: EntryGenerator = () => {
	return historyEntries;
};

export const prerender = true;
export const trailingSlash = 'always';