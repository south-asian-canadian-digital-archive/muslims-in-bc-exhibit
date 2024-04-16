import { writable } from "svelte/store";

export const navItems = [
	{ name: "Home", path: "/" },
	{ name: "About", path: "/about" },
	{
		name: "History",
		pages: [
			{ name: "Introduction", path: "/history/introduction" },
			{ name: "Early Migration", path: "/history/early-migration" },
			{ name: "Mid 20th centuary migration", path: "/history/mid-20th-centuary-migration" },
			{ name: "Recent Migration to Canada", path: "/history/recent-migration-to-canada" },
		]
	},
	{ name: "Resources", path: "/resources"},
	{ name: "Contact", path: "/contact" },
]

type NavItem = "Home" | "About" | "History" | "Resources" | "Contact";

export const curTab = writable<NavItem>("Home");
