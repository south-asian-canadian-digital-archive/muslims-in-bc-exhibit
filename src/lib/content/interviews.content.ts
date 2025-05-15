import { base } from "$app/paths";

export interface Interview {
  id: string;
  name: string;
  title: string;
  location: string;
  thumbnailUrl: string;
  videoUrl: string;
  shortDescription?: string;
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
    shortDescription: "Dr. Afia Raja shares her experiences and insights on Muslim communities in British Columbia.",
    description: "Afia Raja was born in 1980 in Karachi, Pakistan and was raised there. Her father was a civil engineer, so he often had large construction projects offering better opportunities in Karachi, and ended up settling there before she was born. Afia received her early education at Beaconhouse School where she stood out academically, being self-motivated from a young age. Her mother, who was a home-maker, used to organize their school uniforms, meals, and schedules. Afia comes from a family of four siblings, two brothers and two sisters. Her older brother went into mechanical engineering and later earned a master’s in technology policy from Cambridge, eventually settling in the UAE. Her younger brother completed his PhD in finance from Germany and now lives there.",
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
    narrativePdfUrl: `#`
  },
  {
    id: "anushay-malik",
    name: "Dr. Anushay Malik",
    title: "Visiting Faculty for History and Labour Studies",
    location: "SFU",
    thumbnailUrl: `${base}/content/interviews/placeholder-interview.png`,
    videoUrl: "https://www.youtube.com/embed/placeholder",
    shortDescription: "Dr. Anushay Malik discusses her research and perspectives on Muslim communities in British Columbia.",
    description: "Anushay Malik is a senior lecturer and historian at Simon Fraser University, who immigrated to British Columbia from Pakistan in 2019, primarily for better educational support for her child. She was born in Lahore and raised for a decade in Kuala Lumpur, Malaysia. Her early years were shaped by living in two Muslim-majority countries, and she recalls feeling like an outsider in Malaysia due to her Pakistani identity. Returning to Lahore in 1994 with her family, she experienced life as a part of the religious and social majority in the country. She comes from a large family and grew up in a joint family system, with strong influence from both maternal and paternal grandparents. Her maternal grandfather was a doctor with an open interpretation of Islam, and her maternal grandmother was a proud Kashmiri Rajput woman, shaping her spiritual and moral outlook.",
    links: ["https://www.sfu.ca/history/faculty-and-staff/faculty-by-name/malik-anushay.html"],
    interviewDate: "2025-03-25",
    interviewer: "Samarah Siddique",
    contributors: ["Sadhikpreet Singh"],
    narrativePdfUrl: `#`
  },
  {
    id: "hassan-javid",
    name: "Dr. Hassan Javid",
    title: "Associate Professor of Sociology, School of Culture and Media Studies",
    location: "UFV",
    thumbnailUrl: `${base}/content/interviews/placeholder-interview.png`,
    videoUrl: "https://www.youtube.com/embed/placeholder",
    shortDescription: "Dr. Hassan Javid shares his sociological perspective on Muslim communities in British Columbia.",
    description: "",
    links: ["https://www.ufv.ca/scms/faculty-staff/javid-hassan.htm"],
    interviewDate: "2025-02-24",
    interviewer: "Samarah Siddique",
    contributors: ["Sadhik Preet Singh"],
    narrativePdfUrl: `#`
  },
  {
    id: "munawar-sabir",
    name: "Dr. Munawar Sabir",
    title: "Academic",
    location: "British Columbia",
    thumbnailUrl: `${base}/content/interviews/placeholder-interview.png`,
    videoUrl: "https://www.youtube.com/embed/placeholder",
    description: "Dr. Munawar Sabir shares his experiences as a Muslim in British Columbia.",
    interviewer: "Dr. Sarah Beaulieu",
    narrativePdfUrl: `#`
  },
  {
    id: "habib-couple",
    name: "Dr. Naiyer Habib & Mahlaqa Naushaba Habib",
    title: "Community Members",
    location: "British Columbia",
    thumbnailUrl: `${base}/content/interviews/placeholder-interview.png`,
    videoUrl: "https://www.youtube.com/embed/placeholder",
    shortDescription: "Dr. Naiyer Habib and Mahlaqa Naushaba Habib share their experiences living as Muslims in British Columbia.",
    description: "",
    additionalInfo: [
      {
        title: "Dr. Naiyer Habib ",
        content: "Dr. Naiyer Habib, originally from Danapur near Patna in Bihar, India, was born into a distinguished zamindar (landowning) family. His father was both a zamindar and an Aligarh-educated man involved in politics and refugee support, while his mother, though home-educated, practiced medicine informally in the village. He was influenced by his maternal grandfather to pursue medicine, and he eventually completed his education at Aligarh Muslim University and P earning the highest medical degrees in India. He later trained further in the U.S., Canada, and England, specializing in interventional cardiology."
      },
      {
        title: "Malahaqa Habib",
        content: "Mrs. Habib was born in Nathapur, Bihar, India, into an educated and landowning family. Her grandfather, a legal aide and landowner, always strongly emphasized education, resulting in many of his children becoming doctors and professors. During the partition of India and Pakistan, her family's home was burned, and they were displaced to a refugee camp. Eventually, her grandfather, who was an army doctor, found them and brought them to safety. After months of uncertainty, her father who was also a doctor, reunited with the family and decided they must leave for Pakistan, as they had lost everything in India. They initially settled in Jessore (in what is now Bangladesh), living in basic conditions in an airport hangar. Despite the hardships faced, she recalls childhood moments full of love and warmth, as she was little and unaware at the time of the challenges her parents were facing. She grew up with four sisters, completed a Master’s in Political Science in Karachi, and later got married to Dr. Habib."
      }
    ],
    interviewDate: "2024-12-19",
    interviewer: "Samarah Siddique",
    contributors: ["Sadhikpreet Singh", "Thamilini Jothilingam"],
    narrativePdfUrl: `#`
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
    narrativePdfUrl: `#`
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
    contributors: ["Sadhik Preet Singh"],
    narrativePdfUrl: `#`
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
    narrativePdfUrl: `#`
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
    narrativePdfUrl: `#`
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
    narrativePdfUrl: `#`
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
    narrativePdfUrl: `#`
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
    narrativePdfUrl: `#`
  }
];

export function getInterviewById(id: string): Interview | undefined {
  return interviews.find(interview => interview.id === id);
}
