import { writable } from "svelte/store";

export const navItems = [
	{ name: "Home", path: "/" },
	{ name: "About", path: "/about" },
	{
		name: "History",
		pages: [
			{ name: "Introduction", path: "/history/introduction", desc: "" },
			{
				name: "Early Migration", path: "/history/early-migration",
				desc: "Pioneer settler history of migration, settlement and adaptation to Canadian society",
				years: "(pre 1962)"
			},
			{
				name: "Mid 20th century migration", path: "/history/mid-20th-century-migration",
				desc: "Canadian immigration changes allowed South Asian Muslims to migrate to B.C., fostering community organizations and mosques despite racism.",
				years: "(1962 - 2001)"
			},
			{
				name: "Recent Migration to Canada", path: "/history/recent-migration-to-canada",
				desc: "Post-9/11, South Asian Muslims in B.C. faced discrimination and surveillance, with emerging voices and solidarity with Indigenous groups.",
				years: "(2001 - present)"
			},
		]
	},
	// { name: "Resources", path: "/resources" },
	{ name: "Contact", path: "https://www.ufv.ca/sasi/contact-us/" },
]

type NavItem = "Home" | "About" | "History" | "Resources" | "Contact";

export let curTab = $state<NavItem>("Home");
