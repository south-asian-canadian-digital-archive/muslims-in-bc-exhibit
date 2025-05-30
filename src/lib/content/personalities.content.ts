import { base } from "$app/paths";

export interface Personality {
  id: string;
  name: string;
  title: string;
  description: string;
  shortDescription?: string;
  thumbnailUrl: string;
  photoUrls?: string[];
  links?: string[];
  additionalInfo?: {
    title: string;
    content: string;
  }[];
}

export const personalities: Personality[] = [
  {
    id: "afia-raja",
    name: "Dr. Afia Raja",
    title: "Department Head and Associate Professor, Planning, Geography, and Environmental Studies",
    description: "Dr. Afia Raja was born in 1980 in Karachi, Pakistan and was raised there. Her father was a civil engineer, so he often had large construction projects offering better opportunities in Karachi, and ended up settling there before she was born. Afia received her early education at Beaconhouse School where she stood out academically, being self-motivated from a young age. She currently serves as Department Head and Associate Professor at UFV, sharing her experiences and insights on Muslim communities in British Columbia.",
    shortDescription: "Department Head and Associate Professor at UFV, sharing insights on Muslim communities in British Columbia.",
    thumbnailUrl: `${base}/content/interviews/thumbnails/afia-raja.webp`,
    photoUrls: [
      `${base}/content/interviews/placeholder-1.png`,
      `${base}/content/interviews/placeholder-2.png`
    ],
    links: [
      "https://www.ufv.ca/planning-geography-environmental-studies/faculty/raja-afia.htm"
    ],
    additionalInfo: [
      {
        title: "Academic Background",
        content: "Born in Karachi, Pakistan in 1980, received early education at Beaconhouse School where she excelled academically."
      },
      {
        title: "Current Role",
        content: "Department Head and Associate Professor of Planning, Geography, and Environmental Studies at University of the Fraser Valley."
      }
    ]
  },
  {
    id: "anushay-malik",
    name: "Dr. Anushay Malik",
    title: "Visiting Faculty for History and Labour Studies",
    description: "Dr. Anushay Malik is a senior lecturer and historian at Simon Fraser University, who immigrated to British Columbia from Pakistan in 2019, primarily for better educational support for her child. She was born in Lahore and raised for a decade in Kuala Lumpur, Malaysia. Her research and perspectives focus on Muslim communities in British Columbia, bringing valuable insights from her multicultural background and academic expertise.",
    shortDescription: "Senior lecturer and historian at SFU, researching Muslim communities in British Columbia.",
    thumbnailUrl: `${base}/content/interviews/thumbnails/anushay-malik.png`,
    photoUrls: [
      `${base}/content/interviews/placeholder-2.png`,
      `${base}/content/interviews/placeholder-3.png`
    ],
    links: [
      "https://www.sfu.ca/history/faculty-and-staff/faculty-by-name/malik-anushay.html"
    ],
    additionalInfo: [
      {
        title: "Background",
        content: "Born in Lahore, raised for a decade in Kuala Lumpur, Malaysia, immigrated to BC from Pakistan in 2019."
      },
      {
        title: "Academic Focus",
        content: "Visiting Faculty for History and Labour Studies at Simon Fraser University, specializing in Muslim community research."
      }
    ]
  },
  {
    id: "hassan-javid",
    name: "Dr. Hassan Javid",
    title: "Associate Professor of Sociology, School of Culture and Media Studies",
    description: "Dr. Hassan Javid is an Associate Professor of Sociology in the School of Culture and Media Studies at UFV. His academic work and research contribute significantly to understanding social dynamics and cultural studies, with particular insights into Muslim communities and their experiences in British Columbia. His expertise spans sociology, media studies, and cultural analysis.",
    shortDescription: "Associate Professor of Sociology at UFV, contributing to cultural studies and Muslim community research.",
    thumbnailUrl: `${base}/content/interviews/thumbnails/hassan-javid.png`,
    photoUrls: [
      `${base}/content/interviews/placeholder-3.png`,
      `${base}/content/interviews/placeholder-1.png`
    ],
    links: [],
    additionalInfo: [
      {
        title: "Academic Position",
        content: "Associate Professor of Sociology in the School of Culture and Media Studies at University of the Fraser Valley."
      },
      {
        title: "Research Focus",
        content: "Specializes in sociology, media studies, and cultural analysis with insights into Muslim communities in BC."
      }
    ]
  },
  {
    id: "rizwaan-abbas",
    name: "Rizwaan Abbas",
    title: "Archaeologist",
    description: "Rizwaan Abbas is a 1st generation Canadian of Indo-Fijian descent who was born in 1977 in Michele-Middletown-Natal near Sparwood, British Columbia. He was raised in Sparwood, a small coal mining town which his father had immigrated to in 1973. His father lived there for a few years until he went back to Fiji where he got married to Rizwaan's mother, who then migrated with him to Sparwood around 1974. Rizwaan offers a unique perspective as an Indo Fijian Muslim in British Columbia, combining his archaeological expertise with his multicultural heritage.",
    shortDescription: "First-generation Canadian archaeologist of Indo-Fijian descent, offering unique perspectives on Muslim identity in BC.",
    thumbnailUrl: `${base}/content/interviews/thumbnails/rizwaan-abbas.png`,
    photoUrls: [
      `${base}/content/interviews/placeholder-1.png`,
      `${base}/content/interviews/placeholder-3.png`
    ],
    links: [
      "https://linktr.ee/riz031"
    ],
    additionalInfo: [
      {
        title: "Heritage",
        content: "First-generation Canadian of Indo-Fijian descent, born in 1977 in Michele-Middletown-Natal near Sparwood, BC."
      },
      {
        title: "Professional Background",
        content: "Works as an archaeologist, bringing unique perspectives as an Indo Fijian Muslim to his research and community engagement."
      }
    ]
  }
];

export function getPersonalityById(id: string): Personality | undefined {
  return personalities.find(personality => personality.id === id);
}

export function getAllPersonalityIds(): { id: string }[] {
  return personalities.map(personality => ({ id: personality.id }));
}
