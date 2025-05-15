import { base } from "$app/paths";

export interface Interview {
  id: string;
  name: string;
  title: string;
  location: string;
  thumbnailUrl: string;
  videoUrl: string;
  description: string;
  additionalInfo?: {
    title: string;
    content: string;
  }[];
  links?: string[];
  interviewDate?: string;
  interviewer?: string;
  contributors?: string[];
  narrativePdfUrl?: string;
}

export const interviews: Interview[] = [
  {
    id: "afia-raja",
    name: "Dr. Afia Raja",
    title: "Department Head and Associate Professor, Planning, Geography, and Environmental Studies",
    location: "UFV",
    thumbnailUrl: `${base}/content/interviews/placeholder-interview.png`,
    videoUrl: "https://www.youtube.com/embed/placeholder",
    description: "Dr. Afia Raja shares her experiences and insights on Muslim communities in British Columbia.",
    additionalInfo: [
      {
        title: "Academic Background",
        content: "Dr. Raja is the Department Head and Associate Professor in Planning, Geography, and Environmental Studies at UFV."
      }
    ],
    links: ["https://www.ufv.ca/planning-geography-environmental-studies/faculty/raja-afia.htm"],
    interviewDate: "2024-12-19",
    interviewer: "Dr. Anushay Malik",
    contributors: ["Samarah Siddique", "Sadhikpreet Singh", "Thamilini Jothilingam"],
    narrativePdfUrl: `${base}/content/narratives/Narrative_Dr_Afia_Raja.pdf`
  },
  {
    id: "anushay-malik",
    name: "Dr. Anushay Malik",
    title: "Visiting Faculty for History and Labour Studies",
    location: "SFU",
    thumbnailUrl: `${base}/content/interviews/placeholder-interview.png`,
    videoUrl: "https://www.youtube.com/embed/placeholder",
    description: "Dr. Anushay Malik discusses her research and perspectives on Muslim communities in British Columbia.",
    links: ["https://www.sfu.ca/history/faculty-and-staff/faculty-by-name/malik-anushay.html"],
    interviewDate: "2025-03-25",
    interviewer: "Samarah Siddique",
    contributors: ["Sadhikpreet Singh"],
    narrativePdfUrl: `${base}/content/narratives/Narrative_of_Dr_Anushay_Malik.pdf`
  },
  {
    id: "hassan-javid",
    name: "Dr. Hassan Javid",
    title: "Associate Professor of Sociology, School of Culture and Media Studies",
    location: "UFV",
    thumbnailUrl: `${base}/content/interviews/placeholder-interview.png`,
    videoUrl: "https://www.youtube.com/embed/placeholder",
    description: "Dr. Hassan Javid shares his sociological perspective on Muslim communities in British Columbia.",
    links: ["https://www.ufv.ca/scms/faculty-staff/javid-hassan.htm"],
    interviewDate: "2025-02-24",
    interviewer: "Samarah Siddique",
    contributors: ["Sadhik Preet Singh"]
  },
  {
    id: "munawar-sabir",
    name: "Dr. Munawar Sabir",
    title: "Academic",
    location: "British Columbia",
    thumbnailUrl: `${base}/content/interviews/placeholder-interview.png`,
    videoUrl: "https://www.youtube.com/embed/placeholder",
    description: "Dr. Munawar Sabir shares his experiences as a Muslim in British Columbia.",
    interviewer: "Dr. Sarah Beaulieu"
  },
  {
    id: "habib-couple",
    name: "Dr. Naiyer Habib & Mahlaqa Naushaba Habib",
    title: "Community Members",
    location: "British Columbia",
    thumbnailUrl: `${base}/content/interviews/placeholder-interview.png`,
    videoUrl: "https://www.youtube.com/embed/placeholder",
    description: "Dr. Naiyer Habib and Mahlaqa Naushaba Habib share their experiences living as Muslims in British Columbia.",
    interviewDate: "2024-12-19",
    interviewer: "Samarah Siddique",
    contributors: ["Sadhikpreet Singh", "Thamilini Jothilingam"],
    narrativePdfUrl: `${base}/content/narratives/Narrative_of_Mr_Mrs_Habib.pdf`
  },
  {
    id: "hana-hussainaly",
    name: "Hana Hussainaly",
    title: "Museum of Anthropology",
    location: "British Columbia",
    thumbnailUrl: `${base}/content/interviews/placeholder-interview.png`,
    videoUrl: "https://www.youtube.com/embed/placeholder",
    description: "Hana Hussainaly discusses her work at the Museum of Anthropology and her experiences as a Muslim in BC.",
    links: ["https://thecapilanoreview.com/author/hanaamani/"],
    interviewDate: "2025-01-03",
    interviewer: "Samarah Siddique",
    contributors: ["Sadhikpreet Singh"],
    narrativePdfUrl: `${base}/content/narratives/Hanas_Narrative.pdf`
  },
  {
    id: "farida-farook",
    name: "Farida Farook",
    title: "Gem industry Sri Lanka",
    location: "British Columbia",
    thumbnailUrl: `${base}/content/interviews/placeholder-interview.png`,
    videoUrl: "https://www.youtube.com/embed/placeholder",
    description: "Farida Farook shares her experiences in the gem industry and as a Sri Lankan Muslim in British Columbia.",
    interviewDate: "2025-01-12",
    interviewer: "Thamilini Jothilingam",
    contributors: ["Sadhik Preet Singh"]
  },
  {
    id: "inayath-mohamed",
    name: "Inayath Mohamed",
    title: "Elementary School Teacher",
    location: "Mission, BC",
    thumbnailUrl: `${base}/content/interviews/placeholder-interview.png`,
    videoUrl: "https://www.youtube.com/embed/placeholder",
    description: "Inayath Mohamed shares her experiences as an elementary school teacher with a global outlook, having taught at international schools in Indonesia, Oman, Singapore, Bangladesh, New Zealand and Saudi Arabia before returning to Canada.",
    interviewDate: "2025-02-10",
    interviewer: "Samarah Siddique",
    contributors: ["Sadhik preet Singh"],
    narrativePdfUrl: `${base}/content/narratives/Inayath_Mohamed_Narrative.pdf`
  },
  {
    id: "rizwaan-abbas",
    name: "Rizwaan Abbas",
    title: "Indo Fijian Muslim",
    location: "British Columbia",
    thumbnailUrl: `${base}/content/interviews/placeholder-interview.png`,
    videoUrl: "https://www.youtube.com/embed/placeholder",
    description: "Rizwaan Abbas shares his unique perspective as an Indo Fijian Muslim in British Columbia.",
    interviewDate: "2025-03-24",
    interviewer: "Samarah Siddique",
    contributors: ["Sadhik preet Singh"],
    narrativePdfUrl: `${base}/content/narratives/Narrative_of_Rizwaan_Abbas.pdf`
  },
  {
    id: "shakeel-gaya",
    name: "Shakeel Gaya",
    title: "Club Growth Director, Toastmasters International",
    location: "British Columbia",
    thumbnailUrl: `${base}/content/interviews/placeholder-interview.png`,
    videoUrl: "https://www.youtube.com/embed/placeholder",
    description: "Shakeel Gaya shares his experiences with Toastmasters International and as a Muslim in British Columbia.",
    interviewDate: "2024-11-28",
    interviewer: "Dr. Anushay Malik",
    contributors: ["Thamilini Jothilingam", "Samarah Siddique"],
    narrativePdfUrl: `${base}/content/narratives/Shakeel_Gaya_Narrative.pdf`
  },
  {
    id: "hifza-shahzad",
    name: "Hifza Shahzad",
    title: "Community Member",
    location: "British Columbia",
    thumbnailUrl: `${base}/content/interviews/placeholder-interview.png`,
    videoUrl: "https://www.youtube.com/embed/placeholder",
    description: "Hifza Shahzad shares her experiences as a Muslim woman in British Columbia.",
    interviewDate: "2025-03-23",
    interviewer: "Samarah",
    contributors: ["Sadhik"],
    narrativePdfUrl: `${base}/content/narratives/Hifza_Shahzad_Narrative.pdf`
  },
  {
    id: "ahsan-yousuf",
    name: "Ahsan Yousuf",
    title: "Student at UFV, international student from Pakistan",
    location: "UFV",
    thumbnailUrl: `${base}/content/interviews/placeholder-interview.png`,
    videoUrl: "https://www.youtube.com/embed/placeholder",
    description: "Ahsan Yousuf discusses his experiences as an international student from Pakistan at UFV, with prior experience living in UAE.",
    interviewDate: "2025-03-04",
    interviewer: "Samarah",
    contributors: ["Sadhik"],
    narrativePdfUrl: `${base}/content/narratives/Narrative_Ahsan_Yousuf.pdf`
  }
];

export function getInterviewById(id: string): Interview | undefined {
  return interviews.find(interview => interview.id === id);
}
