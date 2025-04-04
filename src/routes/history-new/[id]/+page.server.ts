import type { EntryGenerator } from './$types';

export const entries: EntryGenerator = () => {
	return [
		{ id: 'overview' },
		{ id: "early-20th-century" },
		{ id: "mid-20th-century" },
		{ id: "recent-timeline" }
	];
};

export const prerender = true;