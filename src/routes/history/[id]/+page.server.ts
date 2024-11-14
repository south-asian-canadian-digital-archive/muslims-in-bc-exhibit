import type { EntryGenerator } from './$types';

export const entries: EntryGenerator = () => {
	return [
		{ id: 'introduction' },
		{ id: "early-migration" },
		{ id: "mid-20th-centuary-migration" },
		{ id: "recent-migration-to-canada" }
	];
};

export const prerender = true;