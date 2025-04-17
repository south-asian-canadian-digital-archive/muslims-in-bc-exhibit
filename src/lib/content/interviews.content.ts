import { base } from "$app/paths";

export interface Interview {
  id: string;
  name: string;
  title: string;
  location: string;
  thumbnailUrl: string;
  videoUrl: string;
  description: string;
  images: {
    url: string;
    alt: string;
  }[];
  additionalInfo?: {
    title: string;
    content: string;
  }[];
}

export const interviews: Interview[] = [
  {
    id: "abdul-rahman",
    name: "Abdul Rahman",
    title: "Community Leader",
    location: "Vancouver, BC",
    thumbnailUrl: `${base}/content/interviews/placeholder-interview.png`,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Abdul Rahman shares his experiences of growing up as a South Asian Muslim in Vancouver during the 1980s. He discusses the challenges of establishing the first mosque in his neighborhood and how the community has evolved over time. He reflects on the importance of preserving cultural heritage while integrating into Canadian society.",
    images: [
      { url: `${base}/content/interviews/placeholder-1.png`, alt: "Abdul in his community center" },
      { url: `${base}/content/interviews/placeholder-2.png`, alt: "Historic photo of Vancouver's first mosque" },
      { url: `${base}/content/interviews/placeholder-3.png`, alt: "Community celebration" }
    ],
    additionalInfo: [
      {
        title: "Community Contributions",
        content: "Abdul has been instrumental in establishing youth programs that help young Muslims connect with their heritage while building strong Canadian identities."
      },
      {
        title: "Family History",
        content: "Abdul's family immigrated to Canada in 1975 from Pakistan, first settling in Toronto before moving to Vancouver in 1982."
      }
    ]
  },
  {
    id: "amina-khan",
    name: "Amina Khan",
    title: "Educator & Activist",
    location: "Surrey, BC",
    thumbnailUrl: `${base}/content/interviews/placeholder-interview.png`,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Amina Khan discusses her work as an educator and community activist in Surrey. She shares stories about establishing educational programs for Muslim women and her advocacy work following 9/11. Her interview highlights the resilience of the community and the importance of interfaith dialogue.",
    images: [
      { url: `${base}/content/interviews/placeholder-1.png`, alt: "Amina speaking at community event" },
      { url: `${base}/content/interviews/placeholder-2.png`, alt: "Women's education program" },
      { url: `${base}/content/interviews/placeholder-3.png`, alt: "Interfaith dialogue session" }
    ],
    additionalInfo: [
      {
        title: "Educational Initiatives",
        content: "Amina founded the Women's Islamic Learning Circle in 2003, which has provided educational opportunities for over 500 women in the community."
      }
    ]
  },
  {
    id: "yusuf-ibrahim",
    name: "Yusuf Ibrahim",
    title: "Business Owner",
    location: "Abbotsford, BC",
    thumbnailUrl: `${base}/content/interviews/placeholder-interview.png`,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Yusuf Ibrahim shares his journey as one of the first South Asian Muslim business owners in Abbotsford. He discusses the challenges of establishing a halal restaurant in the 1990s and how food became a bridge between different communities. His story highlights entrepreneurship as a form of cultural expression and community building.",
    images: [
      { url: `${base}/content/interviews/placeholder-1.png`, alt: "Yusuf in his restaurant" },
      { url: `${base}/content/interviews/placeholder-2.png`, alt: "Original restaurant location from 1993" },
      { url: `${base}/content/interviews/placeholder-3.png`, alt: "Family celebration" }
    ],
    additionalInfo: [
      {
        title: "Business Journey",
        content: "Yusuf's restaurant 'Spice of Life' opened in 1993 and has become a gathering place for both Muslims and non-Muslims in Abbotsford."
      },
      {
        title: "Community Impact",
        content: "Through his business, Yusuf has sponsored numerous community events and provided employment opportunities for new immigrants."
      }
    ]
  },
  {
    id: "fatima-hussain",
    name: "Fatima Hussain",
    title: "Healthcare Professional",
    location: "Victoria, BC",
    thumbnailUrl: `${base}/content/interviews/placeholder-interview.png`,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Fatima Hussain discusses her experiences as one of the first South Asian Muslim healthcare professionals in Victoria. She shares stories about adapting religious practices in a healthcare setting and her efforts to improve cultural competency in medical care. Her interview provides insights into the intersection of faith, profession, and identity.",
    images: [
      { url: `${base}/content/interviews/placeholder-1.png`, alt: "Fatima at medical conference" },
      { url: `${base}/content/interviews/placeholder-2.png`, alt: "Community health workshop" },
      { url: `${base}/content/interviews/placeholder-3.png`, alt: "Family photo" }
    ]
  }
];

export function getInterviewById(id: string): Interview | undefined {
  return interviews.find(interview => interview.id === id);
}
