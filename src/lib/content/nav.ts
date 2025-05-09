import { base } from "$app/paths";

export const navItems: {
	name: string;
	path: string;
	pages?: {
		name: string;
		path: string;
		desc?: string;
		years?: string;
	}[];
}[] = [
		{ name: "Home", path: `${base}/` },
		{
			name: "About", path: `${base}/about`, pages: [
				{ name: "About SASI", path: `${base}/about` },
				{ name: "Project history", path: `${base}/about#project-history` },
				{ name: "Team", path: `${base}/about#team` },
				{ name: "Advisory committee", path: `${base}/about#committee` },
				{ name: "Partners", path: `${base}/about#partners` },
				{ name: "Financial supporters", path: `${base}/about#sponsors` },
			]
		},
		{
			name: "History",
			path: `${base}/history`,
			pages: [
				{ name: "Migration Overview", path: `${base}/history` },
				{ name: "Early 20th Century", path: `${base}/history/early-20th-century` },
				{ name: "Mid-20th Century", path: `${base}/history/mid-20th-century` },
				{ name: "Recent experiences of South Asian Muslim in BC", path: `${base}/history/recent-experiences` },
				{ name: "Timeline", path: `${base}/history/timeline` },
				{ name: "Case Studies: Hidden Histories", path: `${base}/history/case-studies` }
			]
		},
		{ name: "Community Life", path: `${base}/community-life` },
		{ name: "Further Reading", path: `${base}/further-reading` },
		{ name: "Share your story", path: `${base}/contact` },
	]

export const historyEntries = [
	{ id: "early-20th-century" },
	{ id: "mid-20th-century" },
	{ id: "recent-experiences" },
	{ id: "timeline" },
	{ id: "case-studies" }
]
