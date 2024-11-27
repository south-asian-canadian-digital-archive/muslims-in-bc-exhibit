<script lang="ts">
  import { gsap } from "gsap";
  import { onMount } from "svelte";

  let floatingSquareTweens: gsap.core.Tween[] = [];
  const floatingSquareInfo: { title: string; desc: string }[] = [
    {
      title: "Consultation",
      desc: "SASI has spent time consulting with organizations, associations and individuals who have lived experiences as South Asian Canadian Muslims in BC and beyond. The goal is to record first-hand or oral histories of past and present.",
    },
    {
      title: "Building Relationships",
      desc: "We have formed strong partnerships with community and organizations to access personal stories and important archives. These relationships ensure that the research is inclusive and representative of the diverse South Asian Muslim experiences in B.C.",
    },
    {
      title: "Education & Outreach",
      desc: "Educating the public on the contributions of South Asian Muslims in B.C, through exhibits, workshops, and online resources, outreach has fostered cultural understanding that celebrates untold histories, heritage and culture.",
    },
    {
      title: "Grants & Funding",
      desc: "Generous grants and funding have made it possible for resources, to conduct in-depth research, create public exhibits, and develop educational programs that preserve and share this heritage.",
    },
  ];

  const team = [
    {
      name: "Dr. Satwinder Bains",
      desc: "Satwinder provides overall direction, management and support for research. She leads the outreach component and community engagement with a goal to create educational and participatory materials.",
    },
    {
      name: "Thamilini Jothilingam",
      desc: "Thamilini leads the archival recording, manages content development, supports the oral history interviews, transcription and narratives. She supports student researchers, community historians and community leaders.",
    },
    {
      name: "Antoinetta Holierhoek",
      desc: "Annet oversees the website's development and design, ensuring alignment with project goals. She collaborates with researchers and designers to maintain accuracy and accessibility, integrating feedback and media seamlessly.",
    },
    {
      name: "Anushay Mallik",
      desc: "Aushay Malik, PhD, Senior Lecturer at SFU is the contracted consultant who leads the research on the project. She brings a wealth of knowledge, lived experience and research expertise as a young Muslim Canadian scholar.",
    },
    { name: "Kiara Dabreo", desc: "" },
    {
      name: "Samarah Saddique",
      desc: "Samarah Siddique contributes to the BC Muslim Social History Project as a Research and Cataloguing Assistant. She conducts interviews with South Asian Muslim community members across BC, digitally archives their narratives.",
    },
    {
      name: "Habiba Khan",
      desc: "As a Research Assistant, Habiba contributes to the research, oral history interviews, and writing narratives. She works with other research assistants to create an accurate archive of the contributions of South Asian Muslims in British Columbia.",
    },
    { name: "Saumyaa Gelani", desc: "" },
    {
      name: "Rashneet",
      desc: "Rashneet contributed to the South Asian Muslims in BC Project as a graphic designer and research assistant. She developed the project’s design identity and created the foundational website design.",
    },
    {
      name: "Arnav Mehta",
      desc: "Arnav Mehta contributed to the project by developing and hosting the website. He implemented animations, ensured smooth functionality, and optimized the platform to align with the project’s goals.",
    },
  ];

  const committee: {
    name: string;
    position: string;
    desc: string;
    img: string;
  }[] = [
    {
      name: "Dr. Satwinder Bains",
      position: "PhD, Director,<br> South Asian Studies Institute",
      desc: "Satwinder Bains, PhD is Director of the South Asian Studies Institute at the University of the Fraser Valley and an Associate Professor in the School of Culture, Media and Society, College of Arts. Dr Bains’ research interests include the study of the impact of language, culture and identity on South Asian Canadian migration, settlement, and integration. She teaches anti-racist curriculum implementation; identity politics; migration and politics in the South Asian Canadian Diaspora and Punjabi Canadian cultural historiography. Dr Bains is the Chair of the Knowledge Network, Director of the Abbotsford Community Foundation and has served as a Commissioner on the Agricultural Land Commission, as a Director of the Fraser Basin Council, as a Bencher on the Law Society of British Columbia and as a member of the Farm Industry Review Board for British Columbia.",
      img: "/content/advisory_committee/Satwinder-Bains-2021.jpg",
    },
    {
      name: "Awneet Sivia",
      position: "PhD, Associate Vice President Teaching and Learning",
      desc: "Awneet Sivia is currently the Associate Vice President of Teaching and Learning, and has been an Associate Professor, Director, and Chair of programs in the School of Education at UFV. She is a passionate educator and researcher in social justice/antiracist pedagogy, science education, teacher identity, faculty development, and educational leadership. Awneet’s academic publications can be found in Studying Teacher Education, In Education, Canadian Journal of Scholarship of Teaching and Learning, Journal of Education, and in books published by Brill, Sense, and Lexington. Her current research interests include decolonizing methodologies, rehumanizing science education, narratives of racism/antiracism in teacher education, leadership in online education, and early career faculty experiences. Awneet leads numerous institutional initiatives, including the Institutional Learning Outcomes, the AI Task Force, the Learning Management System Project, Changemaker Education, Indigenizing new faculty development, and policy revisions. She has been a speaker at TEDx Abbotsford and has been honoured with several provincial and national teaching awards, including the 3M National Teaching Fellowship.",
      img: "/content/advisory_committee/Awneet Sivia.jpg",
    },
    {
      name: "Jas Uppal",
      position: "PhD, Assistant Professor, Teacher Education Program",
      desc: "Jas Uppal’s teaching experiences are vast and span not only grades and subjects, but also countries and curriculums. Her experience mirrors the lifecycle of the teacher: K-12 teaching of science and math, mentoring pre-service teachers at the school level, teaching and mentoring re-certifying teachers and pre-service teachers in international teacher education. She has also trained and built teacher capacity through programs in the U.K, through a study abroad program in India and a district mentoring program for 300+ teachers, as well as themed graduate diploma programs for practicing teachers. Her master’s degree focused on educational change, including assessment for learning, and teacher identity. During her doctoral studies, she researched pedagogical dynamics in encounters with difference through centering inequitable power relations. Jas’ research reflects her passion and commitment to take continuous risks to learn and unlearn who she is as an educator.",
      img: "/content/advisory_committee/juhershorn.img.2140374917.jpg",
    },
    {
      name: "Hassan Javid",
      position:
        "PhD, Associate Professor, School of Society, Culture and Society",
      desc: "Hassan Javid is an Associate Professor of Sociology in the School of Culture and Media Studies at UFV.Prior to joining UFV, Hassan held academic positions at the Lahore University of Management Sciences and at the London School of Economics. His work focuses on the legacies of colonialism in South Asia, focusing on processes of democratization and the mechanisms through which elite power is reproduced.",
      img: "/content/advisory_committee/2024-Hassan-Javid.jpg",
    },
    {
      name: "Shazad Nazir",
      position: "PhD, Assistant Professor, Teacher Education Program",
      desc: "Shahzad Nazir Khan is a Professional Agrologist with an M. Sc (Hons) Agriculture and an MBA . He is a well-known peace and social justice activist of South Asian community who immigrated to Canada from Pakistan back in 2006. For last many years, him and his group of Progressive Pakistani Canadians took many initiatives to raise awareness about the peace and issues related to South Asian diaspora. He celebrates ‘unity in diversity’.",
      img: "/content/advisory_committee/Shahzad-Nazir-Khan-2.png",
    },
    // { name: "", position: "", desc: "" },
    // { name: "", position: "", desc: "" },
  ];

  onMount(() => {
    gsap.utils
      .toArray<any>(".floating-square > div.left-0")
      .forEach((square) => {
        floatingSquareTweens.push(
          gsap.to(square, {
            translateX: "-=random(2, 7)",
            translateY: "-=random(2, 7)",
            ease: "sine.inOut",
            duration: 5,
            delay: "random(0.2, 1)",
            repeat: -1,
            yoyo: true,
          })
        );
      });
  });
</script>

<svelte:head>
  <title>About | South Asian Muslims in BC</title>
</svelte:head>

{#snippet FloatingSquare(
  title: string,
  desc: string,
  marginTop: string = "0px",
  idx: number
)}
  <div
    role="dialog"
    onfocus={() => {}}
    onmouseover={() => {
      floatingSquareTweens[idx].pause();
    }}
    onmouseleave={() => {
      floatingSquareTweens[idx].resume();
    }}
    style:margin-top={marginTop}
    class="floating-square relative *:absolute *:rounded-2xl h-[20vw] w-[20vw] *:h-full *:aspect-square"
  >
    <div
      class="z-50 -top-4 -left-4 bg-secondary-yellow p-[10%] overflow-auto *:will-change-transform will-change-transform"
    >
      <h6 class="text-h6 font-bold text-primary-black pb-[4%]">{title}</h6>
      <p class="text-p">{desc}</p>
    </div>
    <div class="bg-[#CED299] bg-secondary-yellowtop-0 left-0">&nbsp;</div>
  </div>
{/snippet}

<main class="py-20 flex flex-col gap-16">
  <section class="bg-secondary-yellow flex flex-col pt-24">
    <div class="flex flex-row gap-16 px-32 pb-24">
      <div class="flex flex-col gap-8">
        <h1
          class="text-primary-blue text-h2 font-source-serif-4 font-bold leading-[1.5]"
        >
          About SASI
        </h1>
        <p class="text-p text-primary-black">
          The South Asian Studies Institute (the Institute) at the University of
          the Fraser Valley brings together South Asia scholars and students
          from diverse backgrounds and disciplines to create a nexus point for
          programs and activities that support our vision. The Institute fosters
          inter-disciplinary scholarly research, community and public engagement
          on issues related to South Asia and the Canadian South Asian Diaspora.
          The Institute initiates, directs and implements the development,
          maintenance and enhancement of scholarship, research and engagement in
          collaboration with faculty, students and community. The Institute
          takes direction from UFV's strategic goals to be a leader of social,
          cultural, economic and environmentally responsible development in the
          Fraser Valley The Institute is a repository of the pioneering history
          of immigrant settlers who make up the Canadian South Asian Diaspora.
          We also undertake much needed contemporary research that benefits
          academia, members of the community, government, organizations and
          agencies as well as global scholars and interested persons.
        </p>
        <div class="flex flex-wrap gap-4">
          {#each [["Meet Our Team", "#team"], ["Meet Our Partners", "#partners"], ["Advisory Committee", "#committee"]] as link, idx}
            <button
              class="bg-primary-blue rounded-lg whitespace-nowrap text-white px-6 py-3"
              onclick={() => {
                document
                  .querySelector(link[1])
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {link[0]}
            </button>
          {/each}
        </div>
      </div>
      <div class="min-w-[35vw] h-auto bg-gray-300"></div>
    </div>

    <div class="bg-[url('/pattern.svg')] min-h-32 w-full bg-repeat-x">
      &nbsp;
    </div>
  </section>

  <section class="p-32 pt-36 flex flex-row gap-16">
    <div class="grid grid-rows-2 grid-cols-2 gap-20">
      {#each floatingSquareInfo as info, idx}
        {@render FloatingSquare(
          info.title,
          info.desc,
          [2, 0].includes(idx) ? "-5vh" : "0",
          idx
        )}
      {/each}
    </div>

    <div class="h-full w-[30vw] flex flex-col gap-4 text-right">
      <h3 class="text-h3 font-bold font-source-serif-4 text-primary-blue">
        Project History
      </h3>
      <p
        class="border-r-[4px] border-r-secondary-yellow h-max pr-4 font-martel"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt,
        voluptatum necessitatibus! Vel expedita officia aperiam amet at,
        aspernatur quos quisquam? Velit cum ullam voluptatem eius nostrum fugiat
        nihil dicta recusandae. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Labore totam architecto aut tenetur quo maiores fugiat
        deleniti voluptate nihil. Consectetur consequuntur incidunt assumenda
        dolorum quisquam doloribus necessitatibus, iusto quod voluptatibus.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos rem id
        aperiam molestiae recusandae, soluta animi est quas alias illum
        voluptates? Omnis placeat voluptatum rerum amet itaque, ipsum inventore
        dicta.
      </p>
    </div>
  </section>

  <!-- sponsors -->
  <section class="bg-secondary-yellow flex flex-col pt-24">
    <div class="flex flex-col px-32">
      <h2 class="text-h6 font-bold border-b-2 border-secondar-teal w-fit">
        We thank our Financial Supporters
      </h2>
      <div class="flex py-24 justify-between">
        <img src="/BlackResearchGraduateStudies.png" class="h-24" alt="" />
        <img src="/UFV_SASI_logo.png" alt="" class="h-24" />
        <img src="/Sacda-logo.svg" alt="" class="h-18" />
      </div>
    </div>

    <div class="bg-[url('/pattern.svg')] min-h-32 w-full bg-repeat-x">
      &nbsp;
    </div>
  </section>

  <section class="p-32" id="team">
    <h1
      class="text-h3 font-bold font-source-serif-4 text-primary-blue text-center pb-12"
    >
      Our Team
    </h1>

    <div class="flex flex-col gap-6 items-center">
      {#each [team.slice(0, 3), team.slice(3, 7), team.slice(7)] as col, idy}
        <div class="flex flex-row justify-center text-center gap-6 w-full">
          {#each col as person, idx}
            <div
              class="w-[20vw] rounded-lg aspect-square bg-secondary-yellow relative"
            >
              <span
                class="top-0 left-0 p-2 bg-secondar-teal rounded-t-lg text-white font-martel absolute w-full"
                >{person.name}</span
              >
              <span class="p-4 pt-10 absolute top-4 left-0">
                {person.desc}
              </span>
            </div>
          {/each}
        </div>
      {/each}
    </div>
  </section>

  <section class="bg-secondary-yellow flex flex-col pt-24" id="partners">
    <div class="flex flex-col px-32">
      <h2 class="text-h6 font-bold border-b-2 border-secondar-teal w-fit">
        Our Partners
      </h2>
      <div class="flex py-24 justify-between">
        <img src="/BlackResearchGraduateStudies.png" class="h-24" alt="" />
        <img src="/UFV_SASI_logo.png" alt="" class="h-24" />
        <img src="/Sacda-logo.svg" alt="" class="h-18" />
      </div>
    </div>

    <div class="bg-[url('/pattern.svg')] min-h-32 w-full bg-repeat-x">
      &nbsp;
    </div>
  </section>

  <section class="p-32" id="committee">
    <h1
      class="text-h3 font-bold font-source-serif-4 text-primary-blue text-center pb-12"
    >
      Advisory Committee
    </h1>

    <div class="flex flex-col gap-6">
      {#each committee as person, idx}
        {@const EvenItem = !((idx + 1) % 2)}
        <div
          class="w-[90%] h-min rounded-lg p-6 bg-secondary-yellow flex gap-6"
          class:self-end={EvenItem}
          class:flex-row-reverse={EvenItem}
          class:text-right={EvenItem}
        >
          <div
            class="aspect-square h-[20vw] bg-gray-100 relative flex rounded-lg overflow-clip object-cover"
          >
            <img src={person.img} alt="" class="object-cover w-full" />
            <span
              class="bottom-0 left-0 p-2 bg-secondar-teal rounded-b-lg text-white font-martel absolute w-full text-center"
              >{person.name} <br />
              <span class="text-xs">{@html person.position}</span></span
            >
          </div>
          <div class="p-4 flex items-center">
            {@html person.desc}
          </div>
        </div>
      {/each}
    </div>
  </section>
</main>
