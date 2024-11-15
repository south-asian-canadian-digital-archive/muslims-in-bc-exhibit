import { writable } from "svelte/store";

export const navItems = [
	{ name: "Home", path: "/" },
	{ name: "About", path: "/about" },
	{
		name: "History",
		pages: [
			{ name: "Introduction", path: "/history/introduction", desc: ""},
			{ name: "Early Migration", path: "/history/early-migration", desc: "Early Muslim presence in B.C. pre-1962 immigration policy shift: highlighting figures like Husain Rahim and Imanat Ali Khan, the Komagata Maru incident, and the Ghadar Party's activism.", years: "(pre 1962)"},
			{ name: "Mid 20th centuary migration", path: "/history/mid-20th-centuary-migration", desc: "1962-2001: South Asian Muslim migration to BC surged, reshaping communities amid evolving immigration policies and cultural dynamics, amidst prevailing racism.", years: "(1962 - 2001)" },
			{ name: "Recent Migration to Canada", path: "/history/recent-migration-to-canada", desc: "Recent South Asian Muslim migration to BC results in a visible and diverse community presence, with nuanced narratives emerging post-9/11, highlighting integration challenges.", years: "(2001 - present)" },
		]
	},
	{ name: "Resources", path: "/resources"},
	{ name: "Contact", path: "https://www.ufv.ca/sasi/contact-us/" },
]

type NavItem = "Home" | "About" | "History" | "Resources" | "Contact";

export let curTab = $state<NavItem>("Home");
