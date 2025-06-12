import { base } from "$app/paths";

export interface Interview {
  id: string;
  name: string;
  title: string;
  location: string;
  thumbnailUrl: string;
  mediaType: 'video' | 'photos';
  videoUrl?: string;
  photoUrls?: string[];
  shortDescription?: string;
  description: string;
  additionalInfo?: {
    title: string;
    content: string;
  }[];
  links?: string[];
  interviewType?: "essay" | "interview";
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
    thumbnailUrl: `${base}/content/interviews/thumbnails/afia-raja.webp`,
    mediaType: 'video',
    videoUrl: "https://drive.google.com/file/d/1DHrttenzhmjiDxQRngKt5jQaP5WTT7m7/preview",
    shortDescription: "Dr. Afia Raja shares her experiences and insights on Muslim communities in British Columbia.",
    description: "Afia Raja was born in 1980 in Karachi, Pakistan and was raised there. Her father was a civil engineer, so he often had large construction projects offering better opportunities in Karachi, and ended up settling there before she was born. Afia received her early education at Beaconhouse School where she stood out academically, being self-motivated from a young age.",
    additionalInfo: [],
    links: ["https://www.ufv.ca/planning-geography-environmental-studies/faculty/raja-afia.htm"],
    interviewDate: "2024-12-19",
    interviewer: "Dr. Anushay Malik",
    contributors: ["Samarah Siddique", "Sadhikpreet Singh", "Thamilini Jothilingam"],
    narrativePdfUrl: `https://drive.google.com/file/d/1lAxgmjQheqntKg-roXVfi9Y_RbWty_SH/view?usp=drive_link`
  },

  {
    id: "hassan-javid",
    name: "Dr. Hassan Javid",
    title: "Associate Professor of Sociology, School of Culture and Media Studies",
    location: "UFV",
    thumbnailUrl: `${base}/content/interviews/thumbnails/hassan-javid.png`,
    mediaType: 'video',
    videoUrl: "https://drive.google.com/file/d/1Ew26UPxFMpFSdm4z0rC78vr3xAezSvQY/preview",
    shortDescription: "Dr. Hassan Javid shares his sociological perspective on Muslim communities in British Columbia.",
    description: `Hassan Javid was born in 1984 in Ireland, living there until the age of two when his family decided to move to London in 1986. When Hassan was seven years old, his family had decided to move to Pakistan where his parents are originally from, and lived there until he started graduate school in 2006, when he moved to London spending 6 years there. Following this, he decided to move back to Pakistan where he lived for another 6 years, finally he migrated to British Columbia in 2019 with his wife and two children during the COVID-19 lockdown.`,
    links: ["https://www.ufv.ca/scms/faculty-staff/javid-hassan.htm"],
    interviewDate: "2025-02-24",
    interviewer: "Samarah Siddique",
    contributors: ["Sadhik Preet Singh"],
    narrativePdfUrl: `https://drive.google.com/file/d/1bcHKhoWGiiTJeoqcd8uGXhyOnXxGHzOi/view?usp=drive_link`
  },

  {
    id: "munawar-sabir",
    name: "Dr. Munawar Sabir",
    title: "Physician",
    location: "British Columbia",
    thumbnailUrl: `${base}/content/interviews/thumbnails/munawar-sabir.jpg`,
    mediaType: 'photos',
    photoUrls: [
      "https://drive.google.com/file/d/1daDA5N0LelarrlsciI3WQtKFwQ7kNzEY/preview",
      "https://drive.google.com/file/d/1S4gj2jZQU9yxRoMOXXRCGJGJlHLkOYQX/preview",
      // "https://drive.google.com/file/d/1U9c9M_wW0l6kNjDB4ID-xBKQ_JZcihsB/preview",
      "https://drive.google.com/file/d/1dSz7O0kyenumokgbIwwj8Ity96YkBDqS/preview",
      // "https://drive.google.com/file/d/15KgpAL5iXVRfrekpGUWRHBgHC5JoFSKc/preview",
      "https://drive.google.com/file/d/1zZgf9jTnmuXPcezvOgUfGZmQY-fASkLT/preview",
      "https://drive.google.com/file/d/1zbJWs4daIsrxCFDrv68uN9wfquUAJeLF/preview"
    ],
    description: `My grandfather Ghulam Sabir began with the British railway as a clerk, and with his university education was able to move up into management, human resources, and finally, an accounting position. He was soon promoted to bursar and would travel by train, provided with his own bogie and guards to protect the coffers, visiting each station and paying the labourers lined up on payday. He went back to India around 1930 to marry my grandmother, Sardaran Khanum. They then returned to Kenya, where they would remain until my grandfather retired around 1958–59. Ghulam and Sardaran had four children, all born in Nairobi: Hamida (1931), Anwar (1932), Munawar (my father 1935), and Sureya (1939).`,
    shortDescription: "Dr. Munawar Sabir shares his experiences as a Muslim in British Columbia.",
    interviewType: "essay",
    interviewer: "Dr. Sarah Beaulieu",
    narrativePdfUrl: `https://drive.google.com/file/d/15KgpAL5iXVRfrekpGUWRHBgHC5JoFSKc/view`,
    links: ["https://sacda.ca/index.php/Detail/collections/938"]
  },

  {
    id: "ahsan-yousuf",
    name: "Ahsan Yousuf",
    title: "International student at UFV from Pakistan",
    location: "UFV",
    thumbnailUrl: `${base}/content/interviews/thumbnails/ahsan-yousuf.png`,
    mediaType: 'video',
    videoUrl: "https://drive.google.com/file/d/1ydrOMO6HAu23lOZlz9b15g6RAGHIObZA/preview",
    shortDescription: "Ahsan Yousuf discusses his experiences as an international student from Pakistan at UFV, with prior experience living in UAE.",
    description: "Ahsan Yousuf was born in Karachi, Pakistan and was raised in Dubai. His early life in Dubai shaped much of his upbringing by living in a diverse city and a close-knit family. ",
    interviewDate: "2025-03-04",
    interviewer: "Samarah Siddique",
    contributors: ["Sadhik preet Singh"],
    narrativePdfUrl: `https://drive.google.com/file/d/1kZB0h7b4RN3sULjUevHZ18dUYcP4UYIw/view?usp=drive_link`
  },

  {
    id: "mr-mrs-habib",
    name: "Dr. Naiyer Habib & Mahlaqa Naushaba Habib",
    title: "Physician | Academic",
    location: "British Columbia",
    thumbnailUrl: `${base}/content/interviews/thumbnails/mr-mrs-habib.png`,
    mediaType: 'video',
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
    narrativePdfUrl: `https://drive.google.com/open?id=1cX5Jc97NuUdPqV4yfEivp2A8THyHMnJ6`
  },

  {
    id: "rizwaan-abbas",
    name: "Rizwaan Abbas",
    title: "Archaeologist",
    location: "British Columbia",
    thumbnailUrl: `${base}/content/interviews/thumbnails/rizwaan-abbas.png`,
    mediaType: 'video',
    videoUrl: "https://drive.google.com/file/d/1qVzae2ocefKlSrjkyetTSrUVuUoxTKpG/preview",
    shortDescription: "Rizwaan Abbas shares his unique perspective as an Indo Fijian Muslim in British Columbia.",
    description: "Rizwaan Abbas is a 1st generation Canadian, from an Indo-Fijian descent who was born in 1977 in a town called Michele-Middletown-Natal near Sparwood, British Columbia and he was raised in Sparwood. He grew up in a small coal mining town which his father had immigrated to in 1973, living there for a few years until he went back to Fiji where he got married to Rizwaans mother, who then migrated with him to Sparwood in around 1974. ",
    interviewDate: "2025-03-24",
    interviewer: "Samarah Siddique",
    contributors: ["Sadhik preet Singh"],
    narrativePdfUrl: `https://drive.google.com/file/d/1cdnHR76Fx6SSy3yNeE7hj3ShTt31ZqE5/view?usp=drive_link`,
    links: ["https://linktr.ee/riz031"]
  },

  {
    id: "hana-amani",
    name: "Hana Amani",
    title: "Visual artist & Storyteller",
    location: "British Columbia",
    thumbnailUrl: `${base}/content/interviews/thumbnails/hana-amani.jpeg`,
    mediaType: 'photos',
    photoUrls: [
      "https://drive.google.com/file/d/1tnlGzzkKNRiY5LqRNlUwjgmgPvKo_NxC/preview",
      "https://drive.google.com/file/d/1N0yvxWEKCtd07M83xQk5_StaG2hx2ZwP/preview",
      "https://drive.google.com/file/d/1oDEYsFeAJOuStoxCIy-0Qz6sGV5_YJPa/preview",
      "https://drive.google.com/file/d/15zNTfgwQaMd93mORmdv6MTSKeiGEOg-I/preview",
      "https://drive.google.com/file/d/1hMtl5E8I_tywjw6d6KRtKwuVWZLgJVFr/preview",
      "https://drive.google.com/file/d/1EISUBQrtm8d1fcfJ7p2o12O0zSJ7tkWV/preview",
      "https://drive.google.com/file/d/1NpydxBRniDW7qr2xMGPnYV2LnJ2buxB8/preview",
      "https://drive.google.com/file/d/1nvsUXOlVpDTQU5-6xOkjHB-7HC0A5kSk/preview",
      "https://drive.google.com/file/d/1btvWENnFyFOm4Cn8QkF6Ovzzl6tPRn3v/preview",
      "https://drive.google.com/file/d/1NZ8JBNsdHZD-m9De_arxBXc63NDX-PYp/preview",
      "https://drive.google.com/file/d/1mdXn8uH13Por3_KJEKosu1cycGinzHY3/preview",
      "https://drive.google.com/file/d/1Vw7mV3MR5Ygzuf0YoGmf7eyTYSkH0AWH/preview",
      "https://drive.google.com/file/d/1F0B1e1zo_Kfp6wn4bKewUI8uFHRd8GjN/preview",
      "https://drive.google.com/file/d/1b3fUxFSZnye4tiyOwRH8mcK3ux_CW0mB/preview",
      "https://drive.google.com/file/d/1R53PY0ZoCRILpAqwnz0keb2JquNzE7Ye/preview",
      "https://drive.google.com/file/d/1zeZKQal1TY6eA4WK5dAQFXaJO9_u0tTz/preview",
      "https://drive.google.com/file/d/1oZCXc39OyMcyKbAiltQevrTHabhlZqp_/preview",
      "https://drive.google.com/file/d/1su8N1b8q586p2uMW_ucaIO-sK8d9LPCz/preview"
    ],
    // videoUrl: "https://drive.google.com/file/d/1tgo3d9mdR_131UiTUNWaepEwqHfkT-KH/preview", // https://drive.google.com/file/d/1_DTbYozPIw_DPOrjnJFCVCaYuhetarmm/preview
    shortDescription: "Hana Amani discusses her work at the Museum of Anthropology and her experiences as a Muslim in BC.",
    description: "Hana Amani was born in Colombo, Sri Lanka in 1994 coming from a Sufi Muslim background. Her family has been  in the gemstone trading business, which has passed down for their last 6 generations. The first seven years of her life were spent growing up in Los Angeles, where her father wanted to set up an office. However, she and her family moved back to Sri Lanka in 2000, living there for 10 years. ",
    links: ["https://thecapilanoreview.com/author/hanaamani/"],
    interviewDate: "2025-01-03",
    interviewer: "Samarah Siddique",
    contributors: ["Sadhikpreet Singh"],
    narrativePdfUrl: `https://drive.google.com/file/d/1gi9qQL2m08e_lJbHonDBhMiYfILyU-sh/view?usp=sharing`
  },

  {
    id: "farida-farook",
    name: "Farida Farook",
    title: "Founder and Director of Sapphire Gem Company LTD + Gemologist",
    location: "British Columbia",
    thumbnailUrl: `${base}/content/interviews/thumbnails/farida-farook.webp`,
    mediaType: 'photos',
    // videoUrl: "https://drive.google.com/file/d/1DofUfBUMUGGUa458QfkpNlkMHXGvHJkQ/preview",
    photoUrls: [
      // `${base}/content/interviews/thumbnails/farida-farook.webp`,
      "https://drive.google.com/file/d/1-LPRoqGhZu5ec6vMqzErItFZzmu4Zi0g/preview",
      "https://drive.google.com/file/d/123fDXbksITsWjiYcqU7-PsBKu2HsfGr8/preview",
      "https://drive.google.com/file/d/13hebsthNQHQWwuc9hmmabvpc50B_RFn8/preview",
      "https://drive.google.com/file/d/17_LU7AN-yVq6NzgVtPfXIVo5-z4Yt8LU/preview",
      "https://drive.google.com/file/d/1Bm6kipzfhTHEsspR7wmEJT424EASy2yQ/preview",
      "https://drive.google.com/file/d/1JN0RbubFN47RS3SkZLAr3Pa32Xb7GBPJ/preview",
      "https://drive.google.com/file/d/1Kugqabw1lkMpP6nv4WFjOQsJL8YyGKGC/preview",
      "https://drive.google.com/file/d/1OjsqmpTpBu50zMqceCEZBpsPU_YO5lpP/preview",
      "https://drive.google.com/file/d/1QXRv3n7W2pGr-Ulw5liNjm8DujGLoFhK/preview",
      "https://drive.google.com/file/d/1S4K_uHUlp56d3IT6ODP8OXO61ZwdrbRV/preview",
      "https://drive.google.com/file/d/1TkAL00yNEvoyBsMl-vwexv5inMx8_RBC/preview",
      "https://drive.google.com/file/d/1VUm-5TKtvpLM4IdxW0LyOnFK7kUGrTOe/preview",
      "https://drive.google.com/file/d/1WuatEbisoAcPbm7-r8qIyl_qYyUnjiFa/preview",
      "https://drive.google.com/file/d/1Y_38duUCH3jOy41EXjHu0PG5-XuzyVLu/preview",
      "https://drive.google.com/file/d/1anhHv2j34Bn6urBebGMSIstw4vE_s_af/preview",
      "https://drive.google.com/file/d/1blRb2jGUMkhzaHlGb3pMXt-MqGKCOH3c/preview",
      "https://drive.google.com/file/d/1byfIVsJqb1KwTdkNNUWQVnNP3owyoFIr/preview",
      "https://drive.google.com/file/d/1dU5c_pBrbtNLFeBdZlWuXZLyKm2odu-m/preview",
      "https://drive.google.com/file/d/1fMvB-kS8lnS9pLI29ZdMJqUyytkEcJNU/preview",
      "https://drive.google.com/file/d/1fTUvxj2DMdc7orxY9GRDl7nXoPobBNEA/preview",
      "https://drive.google.com/file/d/1gpmtyIRZwjigtYuvA9DPhk7uCvCfUKjU/preview",
      "https://drive.google.com/file/d/1neyWUENATp9POFvvRzURccmt64WBBLEz/preview",
      "https://drive.google.com/file/d/1v33gscqyDlWbJk4ZbzBcBSGSFzHY71YU/preview"
    ],
    shortDescription: "Farida Farook shares her experiences in the gem industry and as a Sri Lankan Muslim in British Columbia.",
    description: `Farida Yahya Farook Saleh was born in Sri Lanka, in a place once known as Ceylon. Her family has a long history in the jewelry business, with her grandfather and father serving as jewelers to the Maharajas of India, even having letters from Maharajas requesting meetings to take a look at their gemstones. Her aunt served for 40 years in the United Nations, initially with the Indian Mission and then later with the Sri Lankan Mission. Her great-grandfather, originally from Hadhramaut, Yemen, was a respected Imam and a businessman contributing significantly to Islamic culture and trade in the region. He also wrote the Quran by hand and produced sermons.`,
    interviewDate: "2025-01-12",
    interviewer: "Thamilini Jothilingam",
    contributors: ["Sadhik Preet Singh"],
    narrativePdfUrl: `https://drive.google.com/file/d/1wv9Ekh3vuKsWVIoC8LFZvucWZlyb6fXL/view?usp=drive_link`
  },

  // {
  //   id: "inayath-mohamed",
  //   name: "Inayath Mohamed",
  //   title: "Elementary School Teacher",
  //   location: "Mission, BC",
  //   thumbnailUrl: `${base}/content/interviews/thumbnails/inayath-mohamed.png`,
  //   mediaType: 'video',
  //   videoUrl: "https://drive.google.com/file/d/1WybxfbHP7BlsQvI6WIUWapiie9wjw2sk/preview",
  //   shortDescription: "Inayath Mohamed (born and raised in Sri Lanka) shares his experiences as an elementary school teacher with a global outlook, having taught at international schools in Indonesia, Oman, Singapore, Bangladesh, New Zealand and Saudi Arabia before returning to Canada.",
  //   description: "Inayath Mohamed was born and raised in Sri Lanka, growing up in a rural area where his father managed a rubber plantation and his mother was a homemaker. He was raised in a small nuclear family, consisting of his parents and younger brother. Life in Sri Lanka was peaceful during his childhood, and he finds that the rural environment was an ideal setting for a young boy. ",
  //   interviewDate: "2025-02-10",
  //   interviewer: "Samarah Siddique",
  //   contributors: ["Sadhik preet Singh"],
  //   narrativePdfUrl: `https://drive.google.com/file/d/1BHmlNYEAvS8qxd0Jp7hnnuo2fcbozEHQ/view?usp=drive_link`,
  //   links: ["https://whatsonmission.ca/in-the-community/life-of-a-writer-inayath-mohamed"]
  // },

  {
    id: "shakeel-gaya",
    name: "Shakeel Gaya",
    title: "Club Growth Director, Toastmasters International",
    location: "British Columbia",
    thumbnailUrl: `${base}/content/interviews/thumbnails/shakeel-gaya.png`,
    mediaType: 'video',
    videoUrl: "https://drive.google.com/file/d/1kFKx7DfL1YVcQ_sKHtJ_utp5iB17m8-0/preview",
    shortDescription: "Shakeel Gaya shares his experiences with Toastmasters International and as a Muslim in British Columbia.",
    description: "Shakeel Gaya was born in Karachi Pakistan on June 4, 1955. He belongs to a family which values and believes in attaining a good education. His paternal grandfather , a successful businessman in construction, had migrated from Bombay to Pakistan during the time of Partition in January 1948 as things were getting more challenging for Muslims in India during this time.",
    interviewDate: "2024-11-28",
    interviewer: "Dr. Anushay Malik",
    contributors: ["Thamilini Jothilingam", "Samarah Siddique"],
    narrativePdfUrl: `https://drive.google.com/file/d/1JTdhLAdkvlBZ9ZKr5qkNOtbOupPSxP2X/view?usp=drive_link`
  },

  {
    id: "hifza-shahzad",
    name: "Hifza Shahzad",
    title: "Community Member",
    location: "British Columbia",
    thumbnailUrl: `${base}/content/interviews/thumbnails/hifza-shahzad.png`,
    mediaType: 'video',
    videoUrl: "https://drive.google.com/file/d/181N6Ccs1ZaTQdk3fWoaXr0KokgHUQ4JU/preview",
    shortDescription: "Hifza Shahzad shares her experiences as a Muslim woman in British Columbia.",
    description: "Hifza Shahzad was born and raised in Rawalpindi, Pakistan. At a young age, her family relocated to the city of Mangla, where her father began working for a hydroelectric company called WAPDA. She spent her early childhood there, growing up with her four siblings consisting of three sisters and one brother, while her mother managed the household. For a lot of her childhood she was surrounded by Mangla’s natural beauty, living there for nearly a decade with her immediate family. When she began second grade, the family moved back to Rawalpindi, as her father was preparing to move to the Middle East for work, and the rest of the family settled in a more urban area.",
    interviewDate: "2025-03-23",
    interviewer: "Samarah Siddique",
    contributors: ["Sadhik preet Singh"],
    narrativePdfUrl: `https://drive.google.com/file/d/1Ec8VUdCS_ROIMU2UvU-iBUu5KE46mbRS/view?usp=sharing`
  },

  {
    id: "anushay-malik",
    name: "Dr. Anushay Malik",
    title: "Visiting Faculty for History and Labour Studies",
    location: "SFU",
    thumbnailUrl: `${base}/content/interviews/thumbnails/anushay-malik.png`,
    mediaType: 'video',
    videoUrl: "https://drive.google.com/file/d/1NbYkJt_9UPYy2fL-uF62C0f_QHQjsmKd/preview",
    shortDescription: "Dr. Anushay Malik discusses her research and perspectives on Muslim communities in British Columbia.",
    description: "Anushay Malik is a senior lecturer and historian at Simon Fraser University, who immigrated to British Columbia from Pakistan in 2019, primarily for better educational support for her child. She was born in Lahore and raised for a decade in Kuala Lumpur, Malaysia.",
    links: ["https://www.sfu.ca/history/faculty-and-staff/faculty-by-name/malik-anushay.html"],
    interviewDate: "2025-03-25",
    interviewer: "Samarah Siddique",
    contributors: ["Sadhikpreet Singh"],
    narrativePdfUrl: `https://drive.google.com/file/d/1mGTunDyrV_fLhkgM_Jyz0uoslLJ0uGuO/view?usp=drive_link`
  },

];

export function getInterviewById(id: string): Interview | undefined {
  return interviews.find(interview => interview.id === id);
}

export function getAllInterviewIds(): { id: string }[] {
  return interviews.map(interview => ({ id: interview.id }));
}
