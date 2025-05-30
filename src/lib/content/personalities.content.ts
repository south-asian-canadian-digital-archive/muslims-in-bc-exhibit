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
  },
  {
    id: "aziz-khaki",
    name: "Aziz Khaki",
    title: "Community Leader and Diversity Advocate",
    description: "Aziz Khaki was a prominent community leader and diversity advocate who made significant contributions to promoting multiculturalism and social justice in British Columbia. He served as co-chair of the Provincial Committee on Diversity and Policing, was a member of the Commanding Officer's Advisory Committee on Cultural Diversity - RCMP 'E' Division, and served on the Advisory Committee to the Federal President of the Treasury Board on Employment of Visible Minorities in the Public Service and Crown Corporation. His work focused on building bridges between communities and ensuring fair representation in public institutions.",
    shortDescription: "Community leader and diversity advocate who championed multiculturalism and social justice in BC.",
    thumbnailUrl: `${base}/content/interviews/placeholder-1.png`,
    photoUrls: [
      `${base}/content/interviews/placeholder-1.png`,
      `${base}/content/interviews/placeholder-2.png`
    ],
    links: [
      "https://khojawiki.org/Aziz_Khaki"
    ],
    additionalInfo: [
      {
        title: "Community Leadership",
        content: "Co-chair of the Provincial Committee on Diversity and Policing and member of various diversity advisory committees."
      },
      {
        title: "Legacy",
        content: "Known for his dedication to promoting multiculturalism and ensuring fair representation of visible minorities in public service."
      }
    ]
  },
  {
    id: "mobina-jaffer",
    name: "The Honourable Mobina S.B. Jaffer, K.C.",
    title: "Former Canadian Senator for British Columbia",
    description: "Mobina S.B. Jaffer K.C. (born August 20, 1949) served as a Canadian Senator representing British Columbia from 2001 to 2024. She was appointed to the Senate on June 13, 2001, by Prime Minister Jean Chrétien, making history as the first Muslim to be appointed to the upper house, the first senator born in Africa, and the first of South Asian descent. Born in Kampala, Uganda, to an Indian family, Jaffer was educated in England and Canada, earning a law degree from the University of London in 1972. She served as Canada's Special Envoy for Peace and chaired the Standing Senate Committee on Human Rights, demonstrating her commitment to social justice and international diplomacy.",
    shortDescription: "First Muslim Canadian Senator, groundbreaking advocate for human rights and peace.",
    thumbnailUrl: `${base}/content/interviews/placeholder-2.png`,
    photoUrls: [
      `${base}/content/interviews/placeholder-2.png`,
      `${base}/content/interviews/placeholder-3.png`
    ],
    links: [
      "https://lop.parl.ca/sites/ParlInfo/default/en_CA/People/Profile?personId=11967",
      "https://en.wikipedia.org/wiki/Mobina_Jaffer"
    ],
    additionalInfo: [
      {
        title: "Historic Appointments",
        content: "First Muslim senator, first African-born senator, and first senator of South Asian descent in Canadian history."
      },
      {
        title: "International Service",
        content: "Served as Canada's Special Envoy for Peace and chaired the Standing Senate Committee on Human Rights."
      },
      {
        title: "Background",
        content: "Born in Kampala, Uganda, educated in England and Canada, with a law degree from the University of London (1972)."
      }
    ]
  },
  {
    id: "nurjehan-mawani",
    name: "Nurjehan Mawani, C.M., LL.D. (hon)",
    title: "Lawyer, Public Servant, and Diplomat",
    description: "Nurjehan Mawani, C.M., LL.D. (hon) is a distinguished lawyer, public servant, diplomat, and global Canadian leader. Born and raised in Mombasa, Kenya, she attended the Inns of Court School of Law in London, England, was called to the Bar at Lincoln's Inn in 1968, and admitted as a Solicitor of the Supreme Court of England and Wales in 1973. After moving to Canada, she practiced law with a Vancouver firm and was called to the British Columbia Bar in 1985. She became Chairperson and CEO of the Immigration and Refugee Board of Canada in 1992, where she issued groundbreaking Guidelines on Gender-Related Persecution in 1993 - the first of their kind in the world, which led other nations to adopt similar policies. She later served as Commissioner of the Public Service Commission of Canada and as Senior Advisor on Diversity. She is a recipient of the Order of Canada and numerous other awards for her contributions to public service.",
    shortDescription: "Pioneering lawyer and public servant who established groundbreaking refugee protection guidelines.",
    thumbnailUrl: `${base}/content/interviews/placeholder-3.png`,
    photoUrls: [
      `${base}/content/interviews/placeholder-3.png`,
      `${base}/content/interviews/placeholder-1.png`
    ],
    links: [
      "https://idrc-crdi.ca/en/about-idrc/board-governors/profile/nurjehan-mawani"
    ],
    additionalInfo: [
      {
        title: "Groundbreaking Work",
        content: "Issued the world's first Guidelines on Gender-Related Persecution for refugee claimants in 1993, which were adopted internationally."
      },
      {
        title: "Career Highlights",
        content: "Chairperson and CEO of Immigration and Refugee Board of Canada, Commissioner of Public Service Commission of Canada."
      },
      {
        title: "Recognition",
        content: "Recipient of the Order of Canada and Outstanding Achievement Award of the Public Service of Canada."
      }
    ]
  },
  {
    id: "renisa-mawani",
    name: "Dr. Renisa Mawani",
    title: "Professor of Sociology, University of British Columbia",
    description: "Dr. Renisa Mawani is a Professor of Sociology at the University of British Columbia and an award-winning scholar specializing in colonial legal history, maritime law, and South Asian migration. She is the author of 'Across Oceans of Law: The Komagata Maru and Jurisdiction in the Time of Empire' (2018), which won the 2020 Association for Asian American Studies Book Award for Outstanding Achievement in History and was a finalist for the Socio-Legal Association (U.K.) Theory and History Book Prize. Her groundbreaking research examines the historical and legal dimensions of the 1914 Komagata Maru incident, offering innovative methodologies for understanding British imperial power through racial, temporal, and legal contests. Her work has significantly contributed to scholarship on South Asian Canadian experiences and colonial legal history.",
    shortDescription: "Award-winning UBC sociology professor and scholar of colonial legal history and South Asian migration.",
    thumbnailUrl: `${base}/content/interviews/placeholder-1.png`,
    photoUrls: [
      `${base}/content/interviews/placeholder-1.png`,
      `${base}/content/interviews/placeholder-2.png`
    ],
    links: [
      "https://sociology.ubc.ca/profile/renisa-mawani/"
    ],
    additionalInfo: [
      {
        title: "Academic Achievement",
        content: "Professor of Sociology at UBC, author of award-winning book on the Komagata Maru and colonial law."
      },
      {
        title: "Research Focus",
        content: "Specializes in colonial legal history, maritime law, and the historical experiences of South Asian migration to Canada."
      },
      {
        title: "Recognition",
        content: "Winner of 2020 Association for Asian American Studies Book Award for Outstanding Achievement in History."
      }
    ]
  },
  {
    id: "john-nuraney",
    name: "John Nuraney (1937-2016)",
    title: "Former MLA for Burnaby-Willingdon",
    description: "John Nuraney (October 31, 1937 - November 21, 2016) was a groundbreaking Canadian politician who made history as the first Muslim elected as a Member of the Legislative Assembly of British Columbia. Born in Kenya, he represented the riding of Burnaby-Willingdon from 2001 to 2009 for the British Columbia Liberal Party. Nuraney's election marked a significant milestone in Canadian political representation, breaking barriers for Muslim Canadians in provincial politics. His political career was characterized by his commitment to serving his constituents and advocating for diverse communities in British Columbia. As a trailblazer, his legacy continues to inspire future generations of Muslim Canadian political leaders.",
    shortDescription: "First Muslim elected to the BC Legislature, representing Burnaby-Willingdon from 2001-2009.",
    thumbnailUrl: `${base}/content/interviews/placeholder-2.png`,
    photoUrls: [
      `${base}/content/interviews/placeholder-2.png`,
      `${base}/content/interviews/placeholder-3.png`
    ],
    links: [
      "https://en.wikipedia.org/wiki/John_Nuraney"
    ],
    additionalInfo: [
      {
        title: "Historic Achievement",
        content: "First Muslim elected as a Member of the Legislative Assembly of British Columbia (2001-2009)."
      },
      {
        title: "Political Career",
        content: "Represented Burnaby-Willingdon for the BC Liberal Party, breaking barriers for Muslim Canadian representation."
      },
      {
        title: "Legacy",
        content: "Paved the way for future Muslim Canadian politicians in provincial and federal politics."
      }
    ]
  },
  {
    id: "amna-shah",
    name: "Amna Shah",
    title: "MLA for Surrey City Centre, Parliamentary Secretary for Mental Health and Addictions",
    description: "Amna Shah is a Canadian politician who was elected to the Legislative Assembly of British Columbia in the 2024 provincial election, representing the electoral district of Surrey City Centre as a member of the British Columbia New Democratic Party. She narrowly defeated the Conservative candidate in her riding following an automatic recount, demonstrating the competitive nature of her electoral victory. Appointed as Parliamentary Secretary for Mental Health and Addictions in November 2024, she also serves as Deputy Government Whip. Shah is a legal professional and community leader who has served on the boards of the South Asian Bar Association and the BC Canadian Bar Association Human Rights Law Section, reflecting her commitment to legal advocacy and human rights.",
    shortDescription: "Newly elected NDP MLA for Surrey City Centre and Parliamentary Secretary for Mental Health and Addictions.",
    thumbnailUrl: `${base}/content/interviews/placeholder-3.png`,
    photoUrls: [
      `${base}/content/interviews/placeholder-3.png`,
      `${base}/content/interviews/placeholder-1.png`
    ],
    links: [
      "https://www.leg.bc.ca/members/43rd-Parliament/Shah-Amna",
      "https://amnashah.bcndp.ca/"
    ],
    additionalInfo: [
      {
        title: "Political Role",
        content: "MLA for Surrey City Centre (2024-present), Parliamentary Secretary for Mental Health and Addictions, Deputy Government Whip."
      },
      {
        title: "Legal Background",
        content: "Accomplished legal professional serving on boards of South Asian Bar Association and BC Canadian Bar Association Human Rights Law Section."
      },
      {
        title: "Community Leadership",
        content: "Active community volunteer and director on various boards, focusing on legal advocacy and human rights."
      }
    ]
  },
  {
    id: "summer-pervez",
    name: "Dr. Summer Pervez",
    title: "Filmmaker, Professor, and Co-Chair of MENA Film Festival",
    description: "Dr. Summer Pervez is a multifaceted filmmaker, screenwriter, poet, photographer, and professor who serves as Co-Chair of the Middle East and North Africa (MENA) Film Festival in Vancouver. Born in Saudi Arabia to Pakistani parents, Summer grew up in multiple countries and was educated in American schools. They hold a PhD in English from the University of Ottawa and have been teaching in various universities in Canada and Pakistan since 2002, including the University of the Fraser Valley, Kwantlen Polytechnic University, and the Lahore School of Economics. They specialize in World Literature and Film with a focus on South Asia, and have published extensively on literature, film, and music. Summer recently taught screenwriting at Vancouver Film School and is currently writing a monograph on contemporary Pakistani TV dramas. Their feature screenplay '1947' has earned recognition in international competitions, and they have written and produced several award-winning short films.",
    shortDescription: "Filmmaker, professor, and Co-Chair of Vancouver's MENA Film Festival, specializing in South Asian cinema and literature.",
    thumbnailUrl: `${base}/content/interviews/placeholder-1.png`,
    photoUrls: [
      `${base}/content/interviews/placeholder-1.png`,
      `${base}/content/interviews/placeholder-2.png`
    ],
    links: [
      "https://www.menafilmfestival.com/team/co-chair-2"
    ],
    additionalInfo: [
      {
        title: "Academic Career",
        content: "PhD in English from University of Ottawa, taught at UFV, KPU, Lahore School of Economics, and Vancouver Film School."
      },
      {
        title: "Film Industry",
        content: "Co-Chair of MENA Film Festival Vancouver, filmmaker of shorts and features, screenwriter with internationally recognized work."
      },
      {
        title: "Research Focus",
        content: "Specializes in World Literature and Film with focus on South Asia, currently writing monograph on Pakistani TV dramas."
      }
    ]
  },
  {
    id: "shahzad-nazir-khan",
    name: "Shahzad Nazir Khan, P.Ag",
    title: "Agronomist and Social Justice Advocate",
    description: "Shahzad Nazir Khan, P.Ag, is an accomplished agronomist and social justice advocate who has made significant contributions to both sustainable agriculture and community peace-building in British Columbia. Born in Dera Ghazi Khan, Pakistan, he immigrated to Canada in 2006 and has since become a prominent voice in the South Asian community. He holds master's degrees in Business Administration and Agriculture (Agronomy) from the University of Agriculture, Faisalabad, Pakistan. Currently working as an Agronomist and Sales Manager at TerraLink Horticulture Inc., he has over 26 years of experience in the agricultural sector, championing sustainable farming practices and environmental preservation. As Executive of Progressive Pakistani Canadians, he has led numerous initiatives to raise awareness about peace and issues related to the South Asian diaspora, promoting unity in diversity and non-violent coexistence. He is also a member of the Dhahan Prize advisory board, reflecting his commitment to literature and cultural preservation.",
    shortDescription: "Professional agronomist and peace advocate championing sustainable farming and South Asian community unity.",
    thumbnailUrl: `${base}/content/interviews/placeholder-2.png`,
    photoUrls: [
      `${base}/content/interviews/placeholder-2.png`,
      `${base}/content/interviews/placeholder-3.png`
    ],
    links: [
      "https://dhahanprize.com/advisors/shahzad-nazir-khan/",
      "https://connectfm.ca/en/shows/su/view/mera-paigham-pakistan"
    ],
    additionalInfo: [
      {
        title: "Professional Background",
        content: "Agronomist and Sales Manager at TerraLink Horticulture Inc. with 26+ years in agricultural sector, specializing in sustainable farming practices."
      },
      {
        title: "Community Leadership",
        content: "Executive of Progressive Pakistani Canadians, peace and social justice activist promoting unity in diversity among South Asian diaspora."
      },
      {
        title: "Education and Recognition",
        content: "Master's degrees in Business Administration and Agriculture from University of Agriculture, Faisalabad; Dhahan Prize advisory board member."
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
