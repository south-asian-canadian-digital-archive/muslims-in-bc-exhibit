import { writable } from "svelte/store";
import { base } from "$app/paths";

export const navItems = [
	{ name: "Home", path: `${base}/` },
	{
		name: "About", path: `${base}/about`, pages: [
			{ name: "About SASI", path: `${base}/about` },
			{ name: "Project history", path: `${base}/about#project-history` },
			{ name: "Team", path: `${base}/about#team` },
			{ name: "Advisory committee", path: `${base}/about#committee` },

		]
	},
	{
		name: "History",
		pages: [
			{ name: "Migration Overview", path: `${base}/history/introduction`, desc: "" },
			{
				name: "Early Migration", path: `${base}/history/early-migration`,
				desc: "Pioneer settler history of migration, settlement and adaptation to Canadian society",
				years: "(pre 1962)"
			},
			{
				name: "Mid 20th century migration", path: `${base}/history/mid-20th-century-migration`,
				desc: "Canadian immigration changes allowed South Asian Muslims to migrate to B.C., fostering community organizations and mosques despite racism.",
				years: "(1962 - 2001)"
			},
			{
				name: "Recent Migration to Canada", path: `${base}/history/recent-migration-to-canada`,
				desc: "Post-9/11, South Asian Muslims in B.C. faced discrimination and surveillance, with emerging voices and solidarity with Indigenous groups.",
				years: "(2001 - present)"
			},
		]
	},
	{ name: "Community Life", path: "/community-life" },
	{ name: "Further Reading", path: `${base}/resources` },
	{ name: "Share your story", path: `${base}/contact` },
]

type NavItem = "Home" | "About" | "History" | "Resources" | "Contact";

export let curTab = $state<NavItem>("Home");
