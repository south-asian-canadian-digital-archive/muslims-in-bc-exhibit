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
  // New fields
  email?: string;
  links?: string[];
  interviewDate?: string;
  interviewType?: string;
  interviewer?: string;
  contributors?: string[];
  transcriptAvailable?: boolean;
  transcriptUrl?: string;
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
    ],
    email: "abdul.rahman@example.com",
    links: ["https://communityorgs.example.com/abdul-rahman"],
    interviewDate: "2023-11-15",
    interviewType: "In-person",
    interviewer: "Dr. Sarah Ahmed",
    contributors: ["Mahmoud Ali", "Nadia Khan"],
    transcriptAvailable: true,
    transcriptUrl: `${base}/content/transcripts/abdul-rahman-transcript.pdf`
  },
];

export function getInterviewById(id: string): Interview | undefined {
  return interviews.find(interview => interview.id === id);
}
