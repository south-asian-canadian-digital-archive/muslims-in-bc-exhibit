import { base } from "$app/paths";

export interface Personality {
  id: string;
  name: string;
  title: string;
  description: string;
  shortDescription?: string;
  thumbnailUrl: string;
  photoUrls?: string[];
  photoCredits?: {
    text: string;
    link?: string;
  }[];
  links?: string[];
  additionalInfo?: {
    title: string;
    content: string;
  }[];
}

export const personalities: Personality[] = [
  {
    "id": "aziz-khakhi",
    "name": "Aziz Khakhi",
    "title": "Dr., Social Justice Advocate, Community Leader",
    "description": "Dr. Abdulaziz 'Aziz' Khaki (1929-2012) was a prominent Canadian Muslim leader, social justice advocate, and community builder.<br><br>Born in Zanzibar and raised in Dar es Salaam, Tanzania, he was active in the independence movement and served as Secretary General of the Tanzania Welfare Society, establishing a Muslim secondary school system. After fleeing political repression, he immigrated to Canada in 1973.<br><br>In British Columbia, he worked with the Pacific Interfaith Citizenship Association and led the Committee for Racial Justice. He was a respected public face of Islam in Vancouver and Canada, serving as an adviser to the BCMA, Vice President of the Council of Muslim Communities of Canada, and Vice President of the Canadian Muslim Federation. He co-founded the International Development & Relief Foundation (IDRF).<br><br>His public service included co-chairing the Provincial Committee on Diversity and Policing and serving on advisory committees for the RCMP and Treasury Board. He received the Federal Minister of Multiculturalism Award on Excellence in Race Relations and the Governor General's Award on the 125th Anniversary of Canada. In 2000, he was recognized as one of the 25 most influential spiritual leaders in British Columbia. He received an Honorary Doctor of Letters from St. Marks at UBC in 2009.",
    "shortDescription": "Dr. Aziz Khakhi was a pioneering Canadian Muslim leader, social justice advocate, and community builder, known for his significant contributions to multiculturalism, human rights, and interfaith relations in British Columbia and Canada.",
    "thumbnailUrl": "https://khojawiki.org/w/images/6/65/Aziz_Khaki.png",
    "photoUrls": [
      "https://khojawiki.org/w/images/6/65/Aziz_Khaki.png"
    ],
    "photoCredits": [
      {
        "text": "Photo courtesy of Khoja Wiki",
        "link": "https://khojawiki.org/Aziz_Khaki"
      }
    ],
    "links": [
      "https://khojawiki.org/Aziz_Khaki"
    ],
    "additionalInfo": [
      {
        "title": "Awards and Recognition",
        "content": "Federal Minister of Multiculturalism Award on Excellence in Race Relations, Governor General’s Award on the 125th Anniversary of Canada, Recognized as one of the 25 most influential spiritual leaders of the past 100 years in British Columbia (2000), Honorary Doctor of Letters from St. Marks at UBC (2009)."
      },
      {
        "title": "Key Roles",
        "content": "Secretary General of Tanzania Welfare Society, Leader of Committee for Racial Justice, Vice President of Council of Muslim Communities of Canada, Co-founder of IDRF, Co-chair of Provincial Committee on Diversity and Policing."
      }
    ]
  },
  {
    "id": "riasat-ali-khan",
    "name": "Riasat Ali Khan",
    "title": "Community Leader, Advocate for Diversity and Immigrant Integration",
    "description": "Riasat Ali Khan (1934-2003) was a prominent Canadian Muslim leader, businessman, and tireless advocate for diversity and immigrant integration in British Columbia.<br><br>He immigrated to Canada in 1959 and was a founding member of the Pakistan-Canada Association. He is credited with opening the first mosque in Western Canada in Vancouver in 1964.<br><br>Khan dedicated forty years of his life to helping immigrants integrate into Canadian society and championing diversity, serving as a former President of AMSSA (Affiliation of Multicultural Societies and Service Agencies of BC). He also served as the head of the B.C. Immigrant Services Society, was a board member of the B.C. Cancer Society, and a delegate to the Committee for Racial Justice. In 1963, he was Canada's only Muslim probation officer.<br><br>The Riasat Ali Khan Diversity Award was created in his honor by AMSSA to recognize innovative programming that strengthens diversity in British Columbia. He was a successful businessman and active in the Liberal Party's backroom politics, though he unsuccessfully sought a federal Liberal nomination in 1997. His death in 2003 captured national media attention.",
    "shortDescription": "Riasat Ali Khan was a pioneering Canadian Muslim leader and advocate for diversity, known for founding the Pakistan-Canada Association, establishing the first mosque in Western Canada, and dedicating four decades to immigrant integration in British Columbia.",
    "thumbnailUrl": `${base}/content/personalities/riasat-ali-khan/thumbnail.jpg`,
    "photoUrls": [
      `${base}/content/personalities/riasat-ali-khan/thumbnail.jpg`,
      // `${base}/content/personalities/riasat-ali-khan/2024_19_25_013.jpg`,
      `${base}/content/personalities/riasat-ali-khan/2024_19_25_019.jpg`,
      `${base}/content/personalities/riasat-ali-khan/2024_19_64_025.jpg`,
      `${base}/content/personalities/riasat-ali-khan/2024_19_64_032.jpg`,
      `${base}/content/personalities/riasat-ali-khan/2024_19_173_037.jpg`,
      `${base}/content/personalities/riasat-ali-khan/2024_19_173_038.jpg`,
      `${base}/content/personalities/riasat-ali-khan/2024_19_184_003.jpg`,
      `${base}/content/personalities/riasat-ali-khan/2024_19_184_004.jpg`,
      `${base}/content/personalities/riasat-ali-khan/2024_19_184_006.jpg`,
      `${base}/content/personalities/riasat-ali-khan/2024_19_208_024.jpg`,
      `${base}/content/personalities/riasat-ali-khan/2024_19_208_026.jpg`,
    ],

    "links": [
      "https://www.amssa.org/membership/diversity-awards/riasat-ali-khan-award/",
      "https://sencanada.ca/en/content/sen/chamber/372/debates/036db_2003-02-13-e#7",
      "https://web.archive.org/web/20211020233743/https://mobinajaffer.ca/statement/2003/02/13/the-late-mr-rashpal-dhillon-the-late-mr-riasat-ali-khan/#expand"
    ],
    "additionalInfo": [
      {
        "title": "Key Contributions",
        "content": "Founder of the Pakistan-Canada Association, credited with opening the first mosque in Western Canada (Vancouver, 1964), former President of AMSSA, head of the B.C. Immigrant Services Society, board member of the B.C. Cancer Society, delegate to the Committee for Racial Justice, Canada's only Muslim probation officer (1963)."
      },
      {
        "title": "Legacy",
        "content": "The Riasat Ali Khan Diversity Award was established in his honor by AMSSA to recognize excellence in strengthening diversity in British Columbia."
      }
    ]
  },
  {
    "id": "mobina-jaffer",
    "name": "Mobina S. B. Jaffer",
    "title": "Former Canadian Senator, Lawyer, Diplomat",
    "description": "Mobina S. B. Jaffer, KC (born August 20, 1949, Kampala, Uganda) is a distinguished Canadian lawyer and politician.<br><br>She made history as the first Muslim, first African-born, and first South Asian-descended senator appointed to the Canadian upper house, serving from June 13, 2001, until her retirement on August 20, 2024. Her family sought refuge in Canada in 1972 after fleeing Idi Amin's expulsion of Asians from Uganda.<br><br>Prior to her Senate appointment, Jaffer held various leadership roles within the Liberal Party of Canada, including Vice-President (1994-1998) and President of the National Women's Liberal Commission (1998-2003). From 2002 to 2006, she served as Canada's Special Envoy to the Peace Process in Sudan and chaired the Canadian Committee on Women Peace & Security.<br><br>In the Senate, she contributed to committees on National Security and Defence, Finance, Official Languages, and Internal Affairs. She was recognized with a Top 25 Canadian Immigrant Award in 2014. While facing allegations of overbilling in 2008, these were later dismissed in 2010.",
    "shortDescription": "Mobina Jaffer is a pioneering Canadian Senator and lawyer, notable as the first Muslim, African-born, and South Asian-descended senator, recognized for her work in national security, finance, and international peace processes.",
    "thumbnailUrl": `${base}/content/personalities/mobina-jaffer/thumbnail.jpg`,
    "photoUrls": [
      `${base}/content/personalities/mobina-jaffer/1.jpg`,
      `${base}/content/personalities/mobina-jaffer/thumbnail.jpg`,
      `${base}/content/personalities/mobina-jaffer/2.jpg`,
      `${base}/content/personalities/mobina-jaffer/3.jpg`,
    ],
    "photoCredits": [
      {
        "text": "Photo courtesy of sencanada.ca",
        "link": "https://sencanada.ca/en/sencaplus/people/meet-senator-mobina-jaffer"
      },
      {
        "text": "Photo courtesy of Senate 2009",
        "link": "https://lop.parl.ca/sites/ParlInfo/default/en_CA/People/Profile?personId=11967"
      }
    ],
    "links": [
      "https://lop.parl.ca/sites/ParlInfo/default/en_CA/People/Profile?personId=11967 ",
      "https://web.archive.org/web/20250409162148/https://mobinajaffer.ca/",
      " https://sencanada.ca/en/sencaplus/people/meet-senator-mobina-jaffer "
    ],
    "additionalInfo": [
      {
        "title": "Pioneering Achievements",
        "content": "First Muslim, African-born, and South Asian-descended senator in Canada. First East Indian woman lawyer to practice in British Columbia."
      },
      {
        "title": "Key Roles",
        "content": "Special Envoy to the Peace Process in Sudan (2002-2006), Chair of Canadian Committee on Women Peace & Security (2002), Vice-President of Liberal Party of Canada (1994-1998), President of National Women's Liberal Commission (1998-2003)."
      }
    ]
  },
  {
    "id": "nurjehan-mawani",
    "name": "Nurjehan Mawani",
    "title": "Lawyer, Public Servant, Diplomat",
    "description": "Nurjehan Mawani, C.M, LL.D. (hon) is a distinguished Canadian lawyer, public servant, and diplomat.<br><br>Her extensive career in the Public Service of Canada includes serving as Chairperson and CEO of the Immigration and Refugee Board of Canada, where in 1993, she issued groundbreaking Guidelines on Gender-Related Persecution, making Canada an international leader in recognizing gender-related violence. She later served as Commissioner of the Public Service Commission of Canada and Advisor on Diversity to the Clerk of the Privy Council.<br><br>From 2005 to 2019, she was the Diplomatic Representative of the Aga Khan Development Network (AKDN) to the Kyrgyz Republic and Afghanistan, leading AKDN's engagement during periods of significant transition.<br><br>Her contributions have been recognized with awards such as the Order of Canada, the Public Service of Canada Outstanding Achievement Award, and the UNIFEM Canada Award (2007) for her impact on refugee women and girls. She holds several honorary doctorates and is a founding member of the International Association of Refugee and Migration Judges. Currently, she is a Senior Fellow and Inaugural Chair in Global Engagement at Massey College.",
    "shortDescription": "Nurjehan Mawani is a distinguished Canadian lawyer, public servant, and diplomat, known for her groundbreaking work on gender-related persecution in refugee law and her diplomatic roles with the Aga Khan Development Network.",
    "thumbnailUrl":
      "https://idrc-crdi.ca/sites/default/files/styles/default_image_large/public/2022-12/IDRC_6244_8x10_PhotobyLindseyGibeau%20WEB%20Resolution.jpg?itok=3EVRs28H",
    "photoUrls": [
      `${base}/content/personalities/nurjehan-mawani/1.jpg`,
      "https://idrc-crdi.ca/sites/default/files/styles/default_image_large/public/2022-12/IDRC_6244_8x10_PhotobyLindseyGibeau%20WEB%20Resolution.jpg?itok=3EVRs28H",
    ],
    "photoCredits": [
      {
        "text": "Photo from linkedin",
        "link": "https://www.linkedin.com/posts/activity-7268436179694313472-rGq3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC3MmzcB22tX6ooQTtwuy7TI3Od9gzY8roc"
      },
      {
        "text": "Photo courtesy of IDRC",
        "link": "https://idrc-crdi.ca/en/about-idrc/board-governors/profile/nurjehan-mawani"
      },
    ],
    "links": [
      "https://idrc-crdi.ca/en/about-idrc/board-governors/profile/nurjehan-mawani",
      "https://www.linkedin.com/in/nurjehan-mawani/",
    ],
    "additionalInfo": [
      {
        "title": "Key Achievements",
        "content": "Issued groundbreaking Guidelines on Gender-Related Persecution (1993), Diplomatic Representative of the Aga Khan Development Network (2005-2019)."
      },
      {
        "title": "Awards and Honors",
        "content": "Order of Canada, Public Service of Canada Outstanding Achievement Award, UNIFEM Canada Award (2007), several honorary doctorates."
      }
    ]
  },
  {
    "id": "renisa-mawani",
    "name": "Renisa Mawani",
    "title": "Professor, Canada Research Chair in Colonial Legal Histories",
    "description": "Renisa Mawani is a Professor and Canada Research Chair in Colonial Legal Histories at the University of British Columbia's Department of Sociology.<br><br>Her research primarily explores critical theory and legal history, focusing on colonial dispossession concerning Indigenous peoples and restrictions on 'Asiatic' migration. Her notable works include Colonial Proximities (2009), which examines legal encounters on Canada's west coast, and Across Oceans of Law: The Komagata Maru and Jurisdiction in the Time of Empire (2018), which reorients the Komagata Maru journey to a global and maritime legal history.<br><br>Her current project, Enemies of Empire, investigates colonial control of maritime and land borders during World War I. She also researches the legalities of nature, exploring the intersection of science, law, and history.<br><br>Mawani has received numerous awards, including the Killam Research Prize (2023) and the Association for Asian American Studies Book Award for Across Oceans of Law (2020). She is affiliated with the Asian Canadian and Asian Migration Studies Program and the Social Justice Institute.",
    "shortDescription": "Renisa Mawani is a UBC Professor and Canada Research Chair specializing in colonial legal histories, known for her influential work on migration, Indigenous dispossession, and the legalities of nature, including her book Across Oceans of Law.",
    "thumbnailUrl": `${base}/content/personalities/renisa-mawani/thumbnail.avif`,
    "photoUrls": [`${base}/content/personalities/renisa-mawani/thumbnail.avif`],
    "links": [
      "https://sociology.ubc.ca/profile/renisa-mawani/",
      "https://www.renisamawani.org/",
      "https://abcbookworld.com/writer/mawani-renisa/"
    ],
    "photoCredits": [
      {
        "text": "Photo courtesy of UBC Sociology",
        "link": "https://sociology.ubc.ca/profile/renisa-mawani/"
      }
    ],
    "additionalInfo": [
      {
        "title": "Key Publications",
        "content": "Colonial Proximities: Crossracial Encounters and Juridical Truths in British Columbia, 1871-1921 (2009), Across Oceans of Law: The Komagata Maru and Jurisdiction in the Time of Empire (2018)."
      },
      {
        "title": "Awards and Honors",
        "content": "Canada Research Chair (Tier 1) (2022-2029), Killam Research Prize (2023), Association for Asian American Studies Book Award (2020), Finalist, Socio-Legal Association (U.K.) Theory and History Book Prize (2020)."
      }
    ]
  },
  {
    "id": "afia-raja",
    "name": "Dr. Afia Raja",
    "title": "Department Head and Associate Professor, Planning, Geography, and Environmental Studies",
    "description": "Dr. Afia Raja (born 1980, Karachi, Pakistan) is the Department Head and Associate Professor in Planning, Geography, and Environmental Studies at the University of the Fraser Valley (UFV).<br><br>Raised in Karachi, she excelled academically from a young age. Dr. Raja shares her experiences and insights on Muslim communities in British Columbia, contributing to the understanding of how religious identity, cultural heritage, and immigration experiences shape the Muslim Canadian experience in BC.<br><br>Her work focuses on planning, geography, and environmental studies, bringing an academic perspective to community issues.",
    "shortDescription": "Dr. Afia Raja is a Department Head and Associate Professor at UFV, specializing in planning, geography, and environmental studies, known for her insights into Muslim communities in British Columbia.",
    "thumbnailUrl": `${base}/content/interviews/thumbnails/afia-raja.webp`,
    "photoUrls": [
      "https://www.ufv.ca/media/assets/planning-geography-and-environmental-studies/Afia-Headshot.jpg"
    ],
    "links": [
      "https://sacda.ca/exhibits/sambc/oral-histories/afia-raja",
      "https://www.ufv.ca/planning-geography-environmental-studies/faculty/raja-afia.htm",
    ],
    "additionalInfo": []
  },
  {
    "id": "anushay-malik",
    "name": "Dr. Anushay Malik",
    "title": "Senior Lecturer, Social Historian",
    "description": "Dr. Anushay Malik is a Senior Lecturer in the Department of International Studies and Global Asia at Simon Fraser University, and a Visiting Faculty for History and Labour Studies at SFU.<br><br>Born in Lahore, Pakistan, and raised in Kuala Lumpur, Malaysia, she immigrated to British Columbia in 2019. As a social historian, her research focuses on labor, migration, and anti-colonial movements, exploring how historical contexts shape individuals' aspirations.<br><br>Her current work examines Bengali migrants in Pakistan and South Asian migrants in British Columbia. She co-authored a public history book on South Asians and the labor movement in BC and is expanding this work to include female farmworkers and Muslim migrants.<br><br>Dr. Malik has co-curated exhibitions like 'Kaghazi Kashtiyan (Paper Boats)' and 'Truths Not Often Told,' using counter-storytelling to highlight overlooked narratives of migration and resistance.",
    "shortDescription": "Dr. Anushay Malik is a Senior Lecturer and social historian at SFU, specializing in labor, migration, and anti-colonial movements, known for her public history exhibitions on South Asian migration.",
    "thumbnailUrl": `${base}/content/interviews/thumbnails/anushay-malik.png`,
    "photoUrls": [],
    "links": [
      "https://sfu.ca/internationalstudies/people/profiles/Malik.html",
      "https://sacda.ca/exhibits/sambc/oral-histories/anushay-malik"
    ],
    "additionalInfo": [
      {
        "title": "Key Research Areas",
        "content": "Labor, migration, anti-colonial movements, Bengali migrants in Pakistan, South Asian migrants in British Columbia, female farmworkers, Muslim migrants from South Asia."
      },
      {
        "title": "Public History Exhibitions",
        "content": "'Kaghazi Kashtiyan (Paper Boats)' (Karachi, Pakistan, 2023), 'Truths Not Often Told' (Burnaby Village Museum, Canada, 2023-2025)."
      }
    ]
  },
  {
    "id": "hassan-javid",
    "name": "Dr. Hassan Javid",
    "title": "Associate Professor of Sociology, Faculty Associate",
    "description": "Dr. Hassan Javid is an Associate Professor of Sociology in the School of Media and Cultural Studies at the University of the Fraser Valley (UFV) and a Faculty Associate at the South Asian Studies Institute at UFV.<br><br>He received his PhD in Sociology from the London School of Economics, where he was also a Fellow in Political Sociology. Prior to UFV, he was an Associate Professor at Lahore University of Management Sciences in Pakistan.<br><br>His research focuses on the legacies of colonialism in South Asia, particularly elite reproduction and the relationship between class, state, and power. He has published on elections, social movements, and democratization in Pakistan, and is currently researching the links between authoritarian rule and digital governance/surveillance.<br><br>Dr. Javid shares his sociological perspective on Muslim communities in British Columbia.",
    "shortDescription": "Dr. Hassan Javid is an Associate Professor of Sociology at UFV, specializing in the legacies of colonialism in South Asia, elite reproduction, and the relationship between class, state, and power, with a focus on Muslim communities in British Columbia.",
    "thumbnailUrl": `${base}/content/interviews/thumbnails/hassan-javid.png`,
    "photoUrls": [],
    "links": [
      "https://www.ufv.ca/sasi/governance/faculty-associates/javid-hassan.htm",
      "https://sacda.ca/exhibits/sambc/oral-histories"
    ],
    "additionalInfo": [
      {
        "title": "Academic Background",
        "content": "PhD in Sociology from London School of Economics, former Associate Professor at Lahore University of Management Sciences."
      },
      {
        "title": "Research Focus",
        "content": "Legacies of colonialism in South Asia, elite reproduction, class, state, and power, elections, social movements, democratization in Pakistan, digital governance and surveillance."
      }
    ]
  },
  {
    "id": "summer-pervez",
    "name": "Summer Pervez",
    "title": "Co-Chair, MENA Film Festival; Filmmaker, Academic",
    "description": "Summer Pervez is the Co-Chair of the MENA Film Festival, an academic, and a working filmmaker.<br><br>Born in Saudi Arabia to Pakistani parents, they received an American education while growing up internationally. Summer holds a PhD in English from the University of Ottawa and has taught World Literature and Film, with a focus on South Asia, at various universities in Canada and Pakistan since 2002, including the University of the Fraser Valley, Kwantlen Polytechnic University, and Lahore School of Economics.<br><br>They have published numerous articles on literature, film, and music, and recently taught screenwriting at the Vancouver Film School. Summer is currently writing a monograph on contemporary Pakistani TV dramas and produces shorts, features, and documentaries.",
    "shortDescription": "Summer Pervez is the Co-Chair of the MENA Film Festival, an academic with a PhD in English, and a filmmaker, specializing in World Literature and Film with a focus on South Asia.",
    "thumbnailUrl": `${base}/content/personalities/summer-pervez/thumbnail.jpg`,
    "photoUrls": [
      `${base}/content/personalities/summer-pervez/1.jpg`,
      `${base}/content/personalities/summer-pervez/thumbnail.jpg`
    ],
    "photoCredits": [
      {
        "link": "https://disfiguringidentity.com/portfolio/summer-pervez/",
        "text": "Photo courtesy of Disfiguring Identity.com"
      },
      {
        "text": "Photo courtesy of Surrey Muse",
        "link": "https://surreymuse.wordpress.com/2012/05/14/summer-pervez/"
      },
    ],
    "links": [
      "https://www.menafilmfestival.com/team/co-chair-2"
    ],
    "additionalInfo": [
      {
        "title": "Academic Background",
        "content": "PhD in English from the University of Ottawa, taught at University of the Fraser Valley, Kwantlen Polytechnic University, Lahore School of Economics, Vancouver Film School."
      },
      {
        "title": "Professional Focus",
        "content": "World Literature and Film (South Asia specialization), screenwriting, producing shorts, features, and documentaries, writing a monograph on contemporary Pakistani TV dramas."
      }
    ]
  },
  {
    "id": "rizwaan-abbas",
    "name": "Rizwaan Abbas",
    "title": "Archaeologist, Cultural Resource Manager, Museum Curator",
    "description": "Rizwaan Abbas is a first-generation Canadian of Indo-Fijian descent, born in Sparwood, British Columbia, in 1977.<br><br>He holds an Associate's Degree from Douglas College, a BA in Archaeology from SFU, an MSc in Paleoanthropology and Paleolithic Archaeology from University College London (UK), and a PSc in Collections Management from UVic.<br><br>With over two decades of experience in cultural resource management, he serves as an archaeologist for the Semiahmoo First Nation. Abbas is a Director of Heritage BC and the Indo-Fijian Cultural Society of Canada. He is also a member of the Historical Discrimination against People of South Asian Descent Advisory Committee and the South Asian Canadian Museum Engagement Committee in Vancouver.<br><br>He was a guest editor of BC History Magazine, curated the 'Surrey's Pocket of Paradise' exhibit at the Museum of Surrey, and authored a chapter in 'The Social History of South Asians in British Columbia.' His work emphasizes accurate representation of the Indo-Fijian community, including both Hindu and Islamic faiths, and incorporates Indigenous Fijian tapa designs.",
    "shortDescription": "Rizwaan Abbas is a Canadian archaeologist, cultural resource manager, and museum curator of Indo-Fijian descent, known for his work with Indigenous communities and his contributions to South Asian Canadian heritage in British Columbia.",
    "thumbnailUrl": `${base}/content/interviews/thumbnails/rizwaan-abbas.png`,
    "photoUrls": [
      `${base}/content/personalities/rizwaan-abbas/1.png`,
      `${base}/content/interviews/thumbnails/rizwaan-abbas.png`,
    ],
    "photoCredits": [
      {
        "text": "Photo courtesy of Heritage BC",
        "link": "https://heritagebc.ca/about/board-of-directors/"
      },
      {
        "text": "Personal collection",
        "link": "https://sacda.ca/exhibits/sambc/oral-histories/rizwaan-abbas/"
      },
    ],
    "links": [
      "https://heritagebc.ca/about/board-of-directors/",
      "https://sacda.ca/exhibits/sambc/oral-histories/rizwaan-abbas/"
    ],
    "additionalInfo": [
      {
        "title": "Academic Background",
        "content": "BA in Archaeology (SFU), MSc in Paleoanthropology and Paleolithic Archaeology (UCL), PSc in Collections Management (UVic)."
      },
      {
        "title": "Key Roles and Contributions",
        "content": "Archaeologist for Semiahmoo First Nation, Director of Heritage BC, Director of Indo-Fijian Cultural Society of Canada, curated 'Surrey's Pocket of Paradise' exhibit, authored chapter in 'The Social History of South Asians in British Columbia'."
      }
    ]
  },
  {
    "id": "john-nuraney",
    "name": "John Nuraney",
    "title": "Former Member of the British Columbia Legislative Assembly, Businessman",
    "description": "John Nuraney (October 31, 1937, Mombasa, Kenya – November 21, 2016, Surrey, British Columbia) was a Canadian politician and businessman.<br><br>He was the first Muslim elected as a Member of the Legislative Assembly of British Columbia, representing Burnaby-Willingdon from 2001 to 2009 for the BC Liberal Party. Nuraney immigrated to Canada from Zaire in 1974 after his business assets were nationalized. In Canada, he owned five A&W Restaurant franchises.<br><br>He was a respected leader in the Ismaili community, an entrepreneur, and a philanthropist. His volunteer work included serving as a director and past president of the Burnaby Rotary Club, director of the Michael J. Fox Theatre, and member of the Metrotown Community Policing Advisory Group. He instigated the 'Penny Harvest' project to feed hungry children in Burnaby.<br><br>Nuraney was multilingual, speaking six languages: English, French, Swahili, Lingala, Hindi, and Gujarati.",
    "shortDescription": "John Nuraney was a pioneering Canadian politician and businessman, the first Muslim MLA in British Columbia, known for his community leadership, philanthropy, and advocacy in Burnaby.",
    "thumbnailUrl": `${base}/content/personalities/john-nuraney/thumbnail.jpg`,
    "photoUrls": [
      `${base}/content/personalities/john-nuraney/1.jpg`,
      `${base}/content/personalities/john-nuraney/thumbnail.jpg`,
    ],
    "photoCredits": [
      {
        "text": "Photo courtesy of Heritage Burnaby",
        "link": "https://search.heritageburnaby.ca/link/archivedescription79278"
      },
      {
        "text": "Photo courtesy of BC Legislative Assembly",
        "link": "https://www.leg.bc.ca/members/37th-Parliament/Nuraney-John"
      }
    ],
    "links": [
      "https://www.leg.bc.ca/members/37th-Parliament/Nuraney-John",
      "https://search.heritageburnaby.ca/link/archivedescription79278"
    ],
    "additionalInfo": [
      {
        "title": "Pioneering Achievement",
        "content": "First Muslim elected as a Member of the Legislative Assembly of British Columbia."
      },
      {
        "title": "Key Roles",
        "content": "MLA for Burnaby-Willingdon (2001-2009), owner of A&W Restaurants, director and past president of Burnaby Rotary Club, instigator of 'Penny Harvest' project."
      }
    ]
  },
  {
    "id": "amna-shah",
    "name": "Amna Shah",
    "title": "Member of the Legislative Assembly (MLA) for Surrey City Centre",
    "description": "Amna Shah is a Member of the Legislative Assembly (MLA) for Surrey City Centre, representing David Eby's BC NDP team.<br><br>Having resided in Surrey for nearly two decades, she is deeply committed to public service and community advocacy, values instilled by her family. Her professional and volunteer work reflects these commitments, particularly in housing advocacy, where she worked with BC’s Ministry of Housing to advance affordable housing policies.<br><br>She is a dedicated volunteer and Board Director at the Surrey Food Bank, working to expand food distribution services and combat food insecurity. Shah's focus areas for Surrey include expanded transit, strengthening education, building more healthcare facilities, and enhancing community safety, demonstrating her effectiveness in achieving results for her constituents.",
    "shortDescription": "Amna Shah is the MLA for Surrey City Centre, a BC NDP team member, known for her advocacy in housing, food security, and community development in Surrey.",
    "thumbnailUrl": "https://amnashah.bcndp.ca/sites/default/files/headshots/amna_shah_src_headshot-1000x1000px-80.jpg",
    "photoUrls": [
      "https://amnashah.bcndp.ca/sites/default/files/headshots/amna_shah_src_headshot-1000x1000px-80.jpg"
    ],
    "links": [
      "https://www.leg.bc.ca/members/43rd-Parliament/Shah-Amna",
      "https://amnashah.bcndp.ca/"
    ],
    "additionalInfo": [
      {
        "title": "Key Focus Areas",
        "content": "Affordable housing policies, food security (Surrey Food Bank Board of Directors), expanded transit, education, healthcare facilities, community safety."
      }
    ]
  },
  {
    "id": "shahzad-nazir-khan",
    "name": "Shahzad Nazir Khan",
    "title": "Executive, Progressive Pakistani Canadians; Advisory Committee Member, Dhahan Prize",
    "description": "Shahzad Nazir Khan, born in Dera Ghazi Khan, Punjab, Pakistan, immigrated to Canada in 2006 and is a prominent peace and social justice activist within the South Asian community.<br><br>He serves as an Advisory Committee Member for The Dhahan Prize For Punjabi Literature and is an Executive with Progressive Pakistani Canadians. Through this group, he leads initiatives to raise awareness about peace and issues affecting the South Asian diaspora, advocating for a peaceful, tolerant, and non-violent society. He champions 'unity in diversity' and promotes peace to those in their native countries.<br><br>Academically, he holds master's degrees in Business Administration and Agriculture (Agronomy) from the University of Agriculture, Faisalabad, Pakistan. With over fifteen years of experience in agricultural sales and marketing, his primary interests lie in poetry, literature, and music.<br><br>He also hosts 'Mera Paigham Pakistan,' an Urdu talk show on Connect FM 91.5 FM, covering socio-economic and political updates and featuring interviews with community leaders.",
    "shortDescription": "Shahzad Nazir Khan is a Canadian peace and social justice activist, an executive with Progressive Pakistani Canadians, and an advisor to the Dhahan Prize, known for promoting unity and cultural understanding within the South Asian diaspora.",
    "thumbnailUrl": `${base}/content/advisory_committee/Shahzad-Nazir-Khan-2.png`,
    "photoUrls": [`${base}/content/advisory_committee/Shahzad-Nazir-Khan-2.png`],
    "links": [
      "https://dhahanprize.com/advisors/shahzad-nazir-khan/",
      "https://connectfm.ca/en/shows/su/view/mera-paigham-pakistan"
    ],
    "additionalInfo": [
      {
        "title": "Academic Background",
        "content": "Master's degrees in Business Administration and Agriculture (Agronomy) from University of Agriculture, Faisalabad, Pakistan."
      },
      {
        "title": "Key Roles",
        "content": "Advisory Committee Member for The Dhahan Prize For Punjabi Literature, Executive with Progressive Pakistani Canadians, Host of 'Mera Paigham Pakistan' on Connect FM."
      }
    ]
  },
  {
    "id": "fauzia-rafique",
    "name": "Fauzia Rafique",
    "title": "South Asian Canadian Author, Poet, Journalist, Activist",
    "description": "Fauzia Rafique is a South Asian Canadian author of fiction and poetry, a journalist, screenwriter, and arts activist.<br><br>Born in Pakistan, she worked as a journalist and screenwriter before coming to Canada as a Convention Refugee in 1986. She is a co-founder and coordinator of Surrey Muse Arts Society (SMAS).<br><br>Rafique has published three novels/novellas: 'Keeru', 'Skeena', and 'The Adventures of Saheban: Biography of a Relentless Warrior', and an eBook of poems 'Holier Than Life'. Her chapbook of English and Punjabi poems received Canada's Best 2012 award from Writers International Network (WIN). In 2020, she received the City of Surrey's Arts & Heritage Literary Arts Award, and her novella 'Keerru' won the Ali Arshad Mir Award.<br><br>Her work often centers on the empowerment of women, writers, and artists, and positions against religious oppression, class/caste prejudices, systemic racism, homophobia, and ableism, supporting the struggles and rights of POC, Indigenous Peoples, Queer communities, refugees, and migrants.",
    "shortDescription": "Fauzia Rafique is an award-winning South Asian Canadian author, poet, and activist, known for her fiction and poetry that advocate for women's empowerment and social justice, and as a co-founder of Surrey Muse Arts Society.",
    "thumbnailUrl": `${base}/content/personalities/fauzia-rafique/thumbnail.jpg`,
    "photoUrls": [
      `${base}/content/personalities/fauzia-rafique/1.jpg`,
      `${base}/content/personalities/fauzia-rafique/thumbnail.jpg`
    ],
    "photoCredits": [
      {
        "text": "Photo courtesy of Rungh",
        "link": "https://rungh.org/artists/fauzia-rafique/"
      },
      {
        "text": "Photo courtesy of Surrey Muse",
        "link": "https://surreymuse.wordpress.com/our-poets/fauzia-rafique/"
      },
    ],
    "links": [
      "https://gandholi.wordpress.com/",
      "https://www.linkedin.com/in/fauziarafique/?originalSubdomain=ca",
      "https://www.vancouverpoetryhouse.com/wordplay/our-poets/fauzia-rafique/",
      "https://surreymuse.wordpress.com/2016/06/19/fauzia-rafique-surrey-muse/",
      "https://rungh.org/artists/fauzia-rafique/",
      "https://www.amazon.com/stores/author/B0052XQMAM/about"
    ],
    "additionalInfo": [
      {
        "title": "Key Publications",
        "content": "Novels/Novellas: 'Keeru', 'Skeena', 'The Adventures of Saheban: Biography of a Relentless Warrior'; Poetry: 'Holier Than Life'."
      },
      {
        "title": "Awards and Recognition",
        "content": "Canada's Best 2012 award (Writers International Network), City of Surrey's Arts & Heritage Literary Arts Award (2020), Ali Arshad Mir Award (2020)."
      },
      {
        "title": "Activism and Advocacy",
        "content": "Co-founder and coordinator of Surrey Muse Arts Society (SMAS), advocates for women's empowerment, against oppression and discrimination, and for the rights of marginalized communities."
      }
    ]
  },
  {
    "id": "anosh-irani",
    "name": "Anosh Irani",
    "title": "Indo-Canadian Novelist and Playwright",
    "description": "Anosh Irani (born 1974, Mumbai, India) is an acclaimed Indo-Canadian novelist and playwright.<br><br>He attended the University of British Columbia and Capilano University, and currently teaches creative writing at Simon Fraser University. Irani's bold and courageous choice of subjects challenges readers to confront uncomfortable truths, often focusing on characters for whom hope is a luxury, such as those affected by caste conflict, street children, or transgender individuals.<br><br>His works include the novels The Song of Kahunsha (shortlisted for Canada Reads) and The Parcel (finalist for a Governor General's Literary Award and the Rogers Writers' Trust Fiction Prize). His play Bombay Black won five Dora Mavor Moore Awards, including Outstanding New Play. In 2019, he published his first short story collection, Translated from the Gibberish, and in 2023, he won the Writers' Trust Engel Findley Award.<br><br>Irani lives in North Vancouver.",
    "shortDescription": "Anosh Irani is an award-winning Indo-Canadian novelist and playwright, known for his powerful and compassionate storytelling that explores challenging social themes, including The Parcel and Bombay Black.",
    "thumbnailUrl": "https://milkweed.org/sites/default/files/styles/author_profile/public/authors/profile/Anosh_IraniRGB_0.jpg?h=f8a5f9cf&itok=4W63bOGp",
    "photoUrls": [
      "https://milkweed.org/sites/default/files/authors/profile/Anosh_IraniRGB_0.jpg"
    ],
    "photoCredits": [
      {
        "text": "Photo courtesy of Milkweed Editions",
        "link": "https://milkweed.org/authors/anosh-irani"
      },
    ],
    "links": [
      "https://www.writerstrust.com/authors/anosh-irani",
      "https://milkweed.org/author/anosh-irani",
      "https://creativewriting.ubc.ca/profile/anosh-irani/"
    ],
    "additionalInfo": [
      {
        "title": "Key Works",
        "content": "Novels: The Song of Kahunsha, The Parcel; Play: Bombay Black; Short Story Collection: Translated from the Gibberish."
      },
      {
        "title": "Awards and Honors",
        "content": "Writers' Trust Engel Findley Award (2023), Dora Mavor Moore Awards for Bombay Black (including Outstanding New Play), shortlisted for Canada Reads (The Song of Kahunsha), finalist for Governor General's Literary Award and Rogers Writers' Trust Fiction Prize (The Parcel)."
      }
    ]
  },
  {
    "id": "tariq-malik",
    "name": "Tariq Malik",
    "title": "Indo-Canadian Novelist, Poet, Screenwriter",
    "description": "Tariq Malik (born 1957, Lahore, Pakistan) is an Indo-Canadian novelist, poet, and screenwriter residing in Vancouver.<br><br>He immigrated to Canada in 1993, first living in Regina, Saskatchewan, before settling in Vancouver in 1996. Malik holds an MA in English literature from the University of the Punjab and has taught English at the University of Management and Technology in Lahore, Pakistan.<br><br>His literary contributions include three novels: Chants of a Minstrel: The Canzoniere (2000), a modern retelling of a Sufi legend; One Percent of Paradise (2006), set against the backdrop of the 9/11 events in Vancouver; and The Longing and the Loss (2014), which explores themes of violence and love across generations.<br><br>His work has been praised for its poetic language, compelling characters, and exploration of complex cultural and political issues. Malik is a member of The Writers' Union of Canada.",
    "shortDescription": "Tariq Malik is an Indo-Canadian novelist, poet, and screenwriter, known for his compelling narratives that explore Sufi legends, contemporary issues like 9/11, and themes of violence and love across generations.",
    "thumbnailUrl": `${base}/content/personalities/tariq-malik/thumbnail.jpg`,
    "photoUrls": [
      `${base}/content/personalities/tariq-malik/thumbnail.jpg`,
      `${base}/content/personalities/tariq-malik/1.jpg`,
    ],
    "photoCredits": [
      {
        "text": "Photo courtesy of The Writers' Union of Canada",
        "link": "https://writersunion.ca/member/t%C4%81riq-malik"
      },
      {
        "text": "Photo courtesy of ABC BookWorld",
        "link": "https://abcbookworld.com/writer/malik-tariq/"
      }
    ],
    "links": [
      "https://writersunion.ca/member/t%C4%81riq-malik",
      "https://abcbookworld.com/writer/malik-tariq/"
    ],
    "additionalInfo": [
      {
        "title": "Key Publications",
        "content": "Novels: Chants of a Minstrel: The Canzoniere (2000), One Percent of Paradise (2006), The Longing and the Loss (2014)."
      },
      {
        "title": "Academic Background",
        "content": "MA in English literature from the University of the Punjab, taught English at the University of Management and Technology in Lahore, Pakistan."
      }
    ]
  },
  {
    "id": "haroon-siddiqui",
    "name": "Haroon Siddiqui",
    "title": "Indo-Canadian Journalist, Columnist, Author",
    "description": "Haroon Siddiqui, CM OOnt (born June 1, 1942, India) is a distinguished Indo-Canadian newspaper journalist, columnist, and editorial page editor emeritus of the Toronto Star.<br><br>He immigrated to Canada in 1967 and has reported from over 50 countries, shaping media coverage of Canada for fifty years under ten prime ministers. During his three-decade tenure at the Toronto Star, he served as a foreign affairs analyst, columnist, national editor, and editorial page editor, retiring from journalism in 2015.<br><br>Siddiqui has held leadership roles in various organizations, including the Canadian Newspaper Association and the Canadian Civil Liberties Association. He is a member of the Order of Ontario (2000, 2001) for his contributions to a broader definition of Canadian identity.<br><br>He received an honorary Doctor of Letters from York University (2001) and the World Press Freedom Award (2002). In 2023, he was honored with the Lifetime Achievement Award from the Canadian Journalism Foundation for his commitment to diversity, journalistic integrity, and social justice. He is the author of the autobiography My Name Is Not Harry: A Memoir.",
    "shortDescription": "Haroon Siddiqui is an acclaimed Indo-Canadian journalist, columnist, and author, known for his extensive international reporting, his long tenure at the Toronto Star, and his advocacy for diversity and social justice in Canadian media.",
    "thumbnailUrl": `${base}/content/personalities/haroon-siddiqui/thumbnail.jpg`,
    "photoUrls": [
      `${base}/content/personalities/haroon-siddiqui/thumbnail.jpg`,
      `${base}/content/personalities/haroon-siddiqui/mynameisnotharry.jpg`,
      `${base}/content/personalities/haroon-siddiqui/1.jpg`
    ],
    photoCredits: [
      {
        text: "Haroon Siddiqui in the field, interviewing, in India Credit: Haroon Siddiqui ",
      },
      {
        text: "Manitoba Islamic Association. (2024). RSVP – Book Launch: My Name is Not Harry by Haroon Siddiqui – Winnipeg Grand Mosque (2445 Waverley St.). Miaonline.org. https://events.miaonline.org/events/mia/1226110",
        link: "https://events.miaonline.org/events/mia/1226110"
      },
      {
        text: "Famed journalist Haroon Siddiqui returns to Brandon to share memoirs. (2024, May 17). Brandon University News. https://news.brandonu.ca/2024/05/17/famed-journalist-haroon-siddiqui-returns-to-brandon-to-share-memoirs/",
        link: "https://news.brandonu.ca/2024/05/17/famed-journalist-haroon-siddiqui-returns-to-brandon-to-share-memoirs/"
      }
    ],
    "links": [
      "https://en.wikipedia.org/wiki/Haroon_Siddiqui",
      "https://agakhanmuseum.org/explore-at-home/listen/this-being-human-haroon-siddiqui/"
    ],
    "additionalInfo": [
      {
        "title": "Key Roles",
        "content": "Editorial Page Editor Emeritus of the Toronto Star, Foreign Affairs Analyst, Columnist, National Editor."
      },
      {
        "title": "Awards and Honors",
        "content": "Member of the Order of Ontario (2000, 2001), honorary Doctor of Letters from York University (2001), World Press Freedom Award (2002), Lifetime Achievement Award from the Canadian Journalism Foundation (2023)."
      },
      {
        "title": "Publication",
        "content": "Author of My Name Is Not Harry: A Memoir."
      }
    ]
  },
  {
    "id": "salim-jiwa",
    "name": "Salim Jiwa",
    "title": "Award-winning Investigative Journalist, Author",
    "description": "Salim Jiwa is an award-winning senior investigative journalist based in Vancouver, known for his extensive coverage of the Air India bombing.<br><br>He was the only reporter continuously on the Air India story from its inception, exploring the complex underworld of the accused terrorists. Jiwa is an authority on terrorism, appearing regularly on television and radio, and serving as a consultant for ABC News in New York.<br><br>He is the author of The Death of Air India Flight 182 (1986) and co-authored Margin of Terror: A Reporter's Twenty-Year Odyssey Covering the Tragedies of the Air India Bombing (2006) with Donald J. Hauka.<br><br>His work sheds light on the origins of Sikh militancy and the conspiracy behind the bombings, critically examining missteps by law enforcement and prosecution. Jiwa's reporting has been praised for its riveting eyewitness detail and balanced perspective.",
    "shortDescription": "Salim Jiwa is an award-winning investigative journalist and author based in Vancouver, renowned for his in-depth coverage and expertise on the Air India bombing and terrorism.",
    "thumbnailUrl": `${base}/content/personalities/salim-jiwa/thumbnail.jpg`,
    "photoUrls": [
      `${base}/content/personalities/salim-jiwa/thumbnail.jpg`,
      `${base}/content/personalities/salim-jiwa/1.jpg`
    ],
    "photoCredits": [
      {
        "text": "Photos Courtesy of Simerg.com",
        "link": "https://simerg.com/2024/10/24/award-winning-ismaili-journalist-salim-jiwa-passes-away-in-vancouver-aged-73/"
      }
    ],
    "links": [
      "https://abcbookworld.com/writer/jiwa-salim/",
      "https://simerg.com/2024/10/24/award-winning-ismaili-journalist-salim-jiwa-passes-away-in-vancouver-aged-73/"
    ],
    "additionalInfo": [
      {
        "title": "Key Publications",
        "content": "The Death of Air India Flight 182 (1986), Margin of Terror: A Reporter's Twenty-Year Odyssey Covering the Tragedies of the Air India Bombing (2006)."
      },
      {
        "title": "Expertise",
        "content": "Authority on terrorism, regular consultant for ABC News in New York."
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
