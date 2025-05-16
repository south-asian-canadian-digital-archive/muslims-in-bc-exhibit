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
    videoUrl: "https://drive.google.com/file/d/1DHrttenzhmjiDxQRngKt5jQaP5WTT7m7/preview",
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
    videoUrl: "https://drive.google.com/file/d/1NbYkJt_9UPYy2fL-uF62C0f_QHQjsmKd/preview",
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
    videoUrl: "https://drive.google.com/file/d/1Ew26UPxFMpFSdm4z0rC78vr3xAezSvQY/preview",
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
    description: "",
    shortDescription: "Dr. Munawar Sabir shares his experiences as a Muslim in British Columbia.",
    interviewer: "Dr. Sarah Beaulieu",
    narrativePdfUrl: `#`
  },
  {
    id: "mr-mrs-habib",
    name: "Dr. Naiyer Habib & Mahlaqa Naushaba Habib",
    title: "Community Members",
    location: "British Columbia",
    thumbnailUrl: `${base}/content/interviews/placeholder-interview.png`,
    videoUrl: "https://drive.google.com/file/d/1hpjQtRPKCcBH5tbf-QWc5fag03jcSMh9/preview",
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
    videoUrl: "https://drive.google.com/file/d/1tgo3d9mdR_131UiTUNWaepEwqHfkT-KH/preview", // https://drive.google.com/file/d/1_DTbYozPIw_DPOrjnJFCVCaYuhetarmm/preview
    shortDescription: "Hana Hussainaly discusses her work at the Museum of Anthropology and her experiences as a Muslim in BC.",
    description: "Hana Amani was born in Colombo, Sri Lanka in 1994 coming from a Sufi Muslim background. Her family has been  in the gemstone trading business, which has passed down for their last 6 generations. The first seven years of her life were spent growing up in Los Angeles, where her father wanted to set up an office. However, she and her family moved back to Sri Lanka in 2000, living there for 10 years. Furthermore, Hana’s grandparents travelled to many places like Hong Kong, North America, and Japan for their gem business, visiting customers and taking part in exhibitions. Her father was the first generation in her extended family to gain academic education related to gems, where he went to GIA (Gemological Institute of America), getting academic knowledge of gem trade. Hana has a brother and a sister, both who were born in the United States, each having their own unique connection to Islam. ",
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
    videoUrl: "https://drive.google.com/file/d/1DofUfBUMUGGUa458QfkpNlkMHXGvHJkQ/preview",
    shortDescription: "Farida Farook shares her experiences in the gem industry and as a Sri Lankan Muslim in British Columbia.",
    description: "",
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
    videoUrl: "https://drive.google.com/file/d/1bbp5SFZsxTeKEI9R-AiWG7aRj8A67jRF/preview",
    shortDescription: "Inayath Mohamed shares her experiences as an elementary school teacher with a global outlook, having taught at international schools in Indonesia, Oman, Singapore, Bangladesh, New Zealand and Saudi Arabia before returning to Canada.",
    description: "Inayath Mohamed was born and raised in Sri Lanka, growing up in a rural area where his father managed a rubber plantation and his mother was a homemaker. He was raised in a small nuclear family, consisting of his parents and younger brother. Life in Sri Lanka was peaceful during his childhood, and he finds that the rural environment was an ideal setting for a young boy. Additionally, one memory Inayath has from his childhood is that storytelling played an important role in his upbringing, especially through his maternal grandmother who loved to share stories with her grandchildren. This tradition stayed with him, and he passed it on to his own children today. While his parents and brother remain in Sri Lanka, Inayath lives in Canada with his wife and their 2 children. Although he had no intention of migrating elsewhere, the political and economic state in Sri Lanka became increasingly unstable for minorities. He had realized it was time to look for a future somewhere else, between the time of 1989-1990 he moved to the United States for his higher studies. After completing his education and working there for a few years, he applied for permanent residency in Canada and immigrated in 2000. At first he lived in Ottawa and Toronto, spent time working in six different countries, and eventually settled in Mission, British Columbia, about four years ago. He now teaches at an elementary school in Mission. ",
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
    videoUrl: "https://drive.google.com/file/d/1qVzae2ocefKlSrjkyetTSrUVuUoxTKpG/preview",
    shortDescription: "Rizwaan Abbas shares his unique perspective as an Indo Fijian Muslim in British Columbia.",
    description: "Rizwaan Abbas is a 1st generation Canadian, from an Indo-Fijian descent who was born in 1977 in a town called Michelle Natal near Sparwood, British Columbia and he was raised in Sparwood. He grew up in a small coal mining town which his father had immigrated to in 1973, living there for a few years until he went back to Fiji where he got married to Rizwaans mother, who then migrated with him to Sparwood in around 1974. Growing up, he had the privilege of being raised in a diverse community with many of his friends being from various South Asian and European backgrounds. He emphasizes how this part of his life was the most enjoyable as he was able to understand and learn what life was like for others based on their cultures. A turning point in Rizwaans childhood started to make him realize that his identity is unique from those around him regardless of community building in Sparwood, this made him feel that growing up Muslim was a lot different. There were only a few Muslims in the town, including one Pakistani family. After meeting them at Eid parties and Iftars, he began to notice differences such as language and food that made him realize South Asians all come from their own unique cultures.",
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
    videoUrl: "https://drive.google.com/file/d/1kFKx7DfL1YVcQ_sKHtJ_utp5iB17m8-0/preview",
    shortDescription: "Shakeel Gaya shares his experiences with Toastmasters International and as a Muslim in British Columbia.",
    description: "Shakeel Gaya was born in Karachi Pakistan on June 4, 1955. He belongs to a family which values and believes in attaining a good education. His paternal grandfather , a successful businessman in construction, had migrated from Bombay to Pakistan during the time of Partition in January 1948 as things were getting more challenging for Muslims in India during this time. Throughout Shakeel's childhood there was a strong emphasis on education, attending private and missionary schools. His father had aspirations of studying medicine, but due to political events during the Partition disrupted his plans. Instead, their family ran a business selling premium pens until it was sold in 1968.",
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
    videoUrl: "https://drive.google.com/file/d/1uQJSRqm8LVA90BTxdACh10knCUgrgiCT/preview",
    shortDescription: "Hifza Shahzad shares her experiences as a Muslim woman in British Columbia.",
    description: "Hifza Shahzad was born and raised in Rawalpindi, Pakistan. At a young age, her family relocated to the city of Mangla, where her father began working for a hydroelectric company called WAPDA. She spent her early childhood there, growing up with her four siblings consisting of three sisters and one brother, while her mother managed the household. For a lot of her childhood she was surrounded by Mangla’s natural beauty, living there for nearly a decade with her immediate family. When she began second grade, the family moved back to Rawalpindi, as her father was preparing to move to the Middle East for work, and the rest of the family settled in a more urban area.",
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
    videoUrl: "https://drive.google.com/file/d/1t8CPpf1iGXpYtLwkHGx6ja28HUzuxqA5/preview",
    shortDescription: "Ahsan Yousuf discusses his experiences as an international student from Pakistan at UFV, with prior experience living in UAE.",
    description: "Ahsan Yousuf was born in Karachi, Pakistan and was raised in Dubai. His early life in Dubai shaped much of his upbringing by living in a diverse city and a close-knit family. He completed his early education from Dubai starting from grade one to grade twelve, additionally while also gaining Islamic studies that formed a core part of his education and upbringing.  His father is a mechanical engineer, and has been a vital part of Dubai’s construction industry for over 30 years, contributing to the city’s towering skyscrapers. His mother who was a teacher, stepped away from her career after the birth of their third child to become a full-time homemaker. ",
    interviewDate: "2025-03-04",
    interviewer: "Samarah",
    contributors: ["Sadhik"],
    narrativePdfUrl: `#`
  }
];

export function getInterviewById(id: string): Interview | undefined {
  return interviews.find(interview => interview.id === id);
}
