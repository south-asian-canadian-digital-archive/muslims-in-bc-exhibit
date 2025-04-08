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
				{ name: "Recent Timeline", path: `${base}/history/recent-timeline` },
				{ name: "Case Studies: Hidden Histories", path: `${base}/history/case-studies` }
			]
		},


		{ name: "Community Life", path: `${base}/community-life` },
		{ name: "Further Reading", path: `${base}/further-reading` },
		{ name: "Share your story", path: `${base}/contact` },
]
