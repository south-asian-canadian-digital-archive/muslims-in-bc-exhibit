import { base } from "$app/paths";

const floatingSquareInfo: { title: string; desc: string, link?: string }[] = [
	{
		title: "Oral Histories",
		desc: "SASI has spent time consulting with organizations, associations, and individuals who have lived experiences as South Asian Canadian Muslims in BC and beyond. The goal is to record first-hand or oral histories of past and present.",
		link: `${base}/oral-histories`,
	},
	{
		title: "Building Relationships",
		desc: "We have formed strong partnerships with the community and organizations to access personal stories and important archives. These relationships ensure that the research is inclusive and representative of the diverse South Asian Canadian Muslims in British Columbia experiences in B.C.",
	},
	{
		title: "Education & Outreach",
		desc: "Educating the public on the contributions of South Asian Canadian Muslims in B.C, through exhibits, workshops, and online resources, outreach has fostered cultural understanding that celebrates untold histories, heritage, and culture.",
		link: `${base}/history`,
	},
	{
		title: "Grants & Funding",
		desc: "Generous grants and funding have made it possible for resources, to conduct in-depth research, create public exhibits, and develop educational programs that preserve and share this heritage.",
		link: `${base}/about#sponsors`,
	},
];

const team: {
	name: String;
	desc: String;
	years?: String;
	role: String;
}[] = [
		{
			name: "Dr. Satwinder Bains",
			desc: "Dr. Satwinder Bains provides overall direction, management, and support for research. She leads the outreach component and community engagement with the goal of creating educational and participatory materials.",
			role: "Director",
			years: "2006-2025"
		},
		{
			name: "Thamilini Jothilingam",
			desc: "Thamilini Jothilingam leads the archival recording, manages content development, and supports the oral history interviews, transcription, and narratives. She supports student researchers, community historians, and community leaders.",
			role: "Digital Archivist",
		},
		{
			name: "Annet Holierhoek",
			desc: "Annet Holierhoek oversees the website's development and design, ensuring alignment with project goals. She collaborates with researchers and designers to maintain accuracy and accessibility, integrating feedback and media seamlessly.",
			role: "Financial manager"
		},
		{
			name: "Dr. Anushay Malik",
			desc: "Dr. Anushay Malik, PhD, Senior Lecturer at SFU, is the contracted consultant who leads the research on the project. She brings a wealth of knowledge, lived experience, and research expertise as a young Muslim Canadian scholar.",
			role: "South Asian Research Fellow",
			years: "2024/25",
		},
		{
			name: "Kiara Dabreo",
			desc: `Kiara Dabreo conducts historical and archival research on early South Asian Canadian Muslims in British Columbia immigrants in BC, creating an archival collection, preserving records, and cataloging key individuals, organizations, and settlement locations. <p><a href="https://blogs.ufv.ca/sasi/2024/05/16/sasis-research-assistant-kiara-dabreo-presents-at-ufvs-student-research-day/" target="_blank" rel="noopener"> Research output </a></p>`,
			role: "Research Assistant",
			years: "2023/25",
		},
		{
			name: "Samarah Saddique",
			desc: `Samarah Siddique contributes to the BC Muslim Social History Project as a Research and Cataloguing Assistant. She conducts interviews with South Asian Canadian Muslims in British Columbia community members across BC and digitally archives their narratives. <p><a href="https://blogs.ufv.ca/sasi/2025/04/09/sasi-research-assistant-presents-at-student-research-day/" target="_blank" rel="noopener"> Research output </a></p>`,
			role: "Research Assistant",
			years: "2024/25",
		},
		{
			name: "Sadhik Preet Singh",
			desc: "Sadhik Preet Singh contributes to the BC Muslim Social History Project as a video editor and transcriber, also conducting interviews with South Asian Canadian Muslims in British Columbia community members across BC to document their stories.",
			role: "Research Assistant",
			years: "2024/25",
		},
		{
			name: "Saumyaa Gelani",
			desc: "Saumyaa Gelani contributes to the South Asian Canadian Muslims in BC Project as a Research Assistant and plays a key role in the website’s design. She ensures that the design is engaging and easy to use.",
			role: "Research Assistant",
			years: "2024/25",
		},
		{
			name: "Rashneet",
			desc: "Rashneet contributes to the South Asian Canadian Muslims in BC Project as a graphic designer and research assistant. She develops the project’s design identity and creates the foundational website design.",
			role: "Research Assistant",
			years: "2024/25",
		},
		{
			name: "Arnav Mehta",
			desc: "Arnav Mehta contributes to the project by developing and hosting the website. He implements animations, ensures smooth functionality, and optimizes the platform to align with the project’s goals.",
			role: "Research Assistant",
			years: "2024/25",
		},
	];

const committee: {
	name: string;
	position: string;
	desc: string;
	img: string;
}[] = [
		{
			name: "Dr. Satwinder Bains, PhD",
			position: "Director, South Asian Studies Institute",
			desc: "Satwinder Bains is Director of the South Asian Studies Institute and Associate Professor in the School of Culture, Media and Society, College of Arts. <br /> Dr. Bains’ research interests include the study of the impact of language, culture, and identity on South Asian Canadian migration, settlement, and integration. She teaches anti-racist curriculum implementation; identity politics; migration and politics in the South Asian Canadian Diaspora and Punjabi Canadian cultural historiography.",
			img: `${base}/content/advisory_committee/Satwinder-Bains-2021.jpg`,
		},
		{
			name: "Dr. Awneet Sivia, PhD",
			position: "Associate Vice President, Teaching and Learning",
			desc: "Dr. Awneet Sivia is the Associate Vice President of Teaching and Learning, and has been an Associate Professor, Director, and Chair of programs in the School of Education at UFV. She is a passionate educator and researcher in social justice/antiracist pedagogy, science education, teacher identity, faculty development, and educational leadership.<br /><br />Dr. Sivia’s academic publications can be found in Studying Teacher Education, In Education, Canadian Journal of Scholarship of Teaching and Learning, Journal of Education, and in books published by Brill, Sense, and Lexington. Her current research interests include decolonizing methodologies, rehumanizing science education, narratives of racism/antiracism in teacher education, leadership in online education, and early career faculty experiences.<br /><br />Dr. Sivia leads numerous institutional initiatives, including the Institutional Learning Outcomes, the AI Task Force, the Learning Management System Project, Changemaker Education, Indigenizing new faculty development, and policy revisions. She has been a speaker at TEDx Abbotsford and has been honored with several provincial and national teaching awards, including the 3M National Teaching Fellowship.",
			img: `${base}/content/advisory_committee/Awneet Sivia.jpg`,
		},
		{
			name: "Dr. Jas Uppal, PhD",
			position: "Assistant Professor, Teacher Education Program",
			desc: "Dr. Jas Uppal’s teaching experiences are vast and span not only grades and subjects, but also countries and curriculums. Her experience mirrors the lifecycle of the teacher: K-12 teaching of science and math, mentoring pre-service teachers at the school level, teaching and mentoring re-certifying teachers and pre-service teachers in international teacher education.<br /><br />Dr. Uppal has also trained and built teacher capacity through programs in the U.K, through a study abroad program in India and a district mentoring program for 300+ teachers, as well as themed graduate diploma programs for practicing teachers. Her master’s degree focused on educational change, including assessment for learning, and teacher identity.<br /><br />During Dr. Uppal's doctoral studies, she researched pedagogical dynamics in encounters with difference through centering inequitable power relations. Dr. Uppal’s research reflects her passion and commitment to take continuous risks to learn and unlearn who she is as an educator.",
			img: `${base}/content/advisory_committee/juhershorn.img.2140374917.jpg`,
		},
		{
			name: "Dr. Hassan Javid, PhD",
			position: "Associate Professor, School of Culture, Media and Society",
			desc: "Dr. Hassan Javid is an Associate Professor of Sociology in the School of Culture, Media and Society at UFV.<br /><br />Prior to joining UFV, Dr Javid held academic positions at the Lahore University of Management Sciences and at the London School of Economics. His work focuses on the legacies of colonialism in South Asia, focusing on processes of democratization and the mechanisms through which elite power is reproduced.",
			img: `${base}/content/advisory_committee/2024-Hassan-Javid.jpg`,
		},
		{
			name: "Shahzad Nazir Khan, P.Ag",
			position: "Professional Agrologist",
			desc: "Shahzad Nazir Khan is a Professional Agrologist with an M. Sc (Hons) Agriculture and an MBA.<br /><br />Mr. Nazir Khan is a well-known peace and social justice activist of the South Asian community who immigrated to Canada from Pakistan back in 2006. For the last many years, he and his group of Progressive Pakistani Canadians took many initiatives to raise awareness about peace and issues related to the South Asian diaspora.<br /><br />He celebrates ‘unity in diversity’.",
			img: `${base}/content/advisory_committee/Shahzad-Nazir-Khan-2.png`,
		},
		// { name: "", position: "", desc: "" },
		// { name: "", position: "", desc: "" },
	];

const partners = [
	{
		src: `${base}/content/heritage logo in the middle.png`,
		link: "https://www.southasiancanadianheritage.ca/",
		alt: "Heritage Logo",
		years: "2024-present",
	},
	{ src: `${base}/Sacda-logo.svg`, link: "https://sacda.ca", alt: "SACDA Logo", years: "2024-present" },
	{
		src: `${base}/content/abb muslim CC logo.png`,
		link: "https://org.thebcma.com/abbotsford/",
		alt: "Abbotsford Muslim Community Center Logo",
		years: "2024-present",
	},
];

const sponsors = [
	{ src: `${base}/content/cece logo.png`, link: "https://www.ufv.ca/jobs/", alt: "CECE Logo", years: "2024-2025", },
	{
		src: `${base}/content/reserach and grad stud logo.png`,
		link: "https://www.ufv.ca/research/",
		alt: "Research and Graduate Studies Logo",
		years: "2024-2025",
	},
	{
		src: `${base}/content/south asian fellowship logo.png`,
		link: "https://www.ufv.ca/sasi/research/fellowship/",
		alt: "South Asian Fellowship Logo",
		years: "2024-2025",
	},
	{ src: `${base}/UFV_SASI_logo.png`, link: "#", alt: "UFV SASI Logo", years: "2024-present", },
	{
		src: `${base}/content/Hari Sharma logo.png`,
		link: "https://harisharma.org/",
		alt: "Hari Sharma Foundation Logo",
		years: "2024",
	},
];


export { floatingSquareInfo, team, committee, partners, sponsors };

