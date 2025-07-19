<script lang="ts">
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { SvelteSet } from "svelte/reactivity";
  import { PUBLIC_DOMAIN } from "$env/static/public";
  import * as Accordion from "$lib/components/ui/accordion/index.js";

  import {
    team,
    committee,
    partners,
    sponsors,
    floatingSquareInfo,
  } from "$lib/content/about.content";
  import { base } from "$app/paths";
  import { goto } from "$app/navigation";
  import Breadcrumb from "$lib/components/Breadcrumb.svelte";
  import { generateBreadcrumbSchema } from "$lib/utils/breadcrumb-schema";

  const breadcrumbs = [
    { name: "Home", url: `https://${PUBLIC_DOMAIN}/` },
    { name: "About the Project", url: `https://${PUBLIC_DOMAIN}/about` }
  ];

  let floatingSquareTweens: gsap.core.Tween[] = [];
  let commitment_expanded: SvelteSet<number> = $state(new SvelteSet());

  onMount(() => {
    // if (page.url.href.includes('#')) {
    //   const hash = page.url.href.split('#')[1];
    //   const element = document.querySelector(`#${hash}`);
    //   if (element) {
    //     element.scrollIntoView({ behavior: "smooth" });
    //   }
    // }

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
  <title>About the Project - South Asian Muslims in BC</title>
  <meta
    name="description"
    content="Learn about the South Asian Muslims in British Columbia digital exhibit project, including the research team, community partners, methodology, and objectives behind documenting these important stories."
  />
  <meta
    name="keywords"
    content="about project, South Asian Studies Institute, research team, community partners, digital archive, SACDA, UFV, methodology, academic research, community engagement"
  />
  <meta
    name="author"
    content="South Asian Studies Institute, University of the Fraser Valley"
  />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="About the Project - South Asian Muslims in BC"
  />
  <meta
    property="og:description"
    content="Learn about the research team, community partners, and methodology behind the South Asian Muslims in BC digital exhibit project."
  />
  <meta property="og:image" content="{base}/content/2021_08_01_040.jpg" />
  <meta property="og:url" content="https://{PUBLIC_DOMAIN}/about" />
  <meta property="og:site_name" content="South Asian Muslims in BC" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="About the Project - South Asian Muslims in BC"
  />
  <meta
    name="twitter:description"
    content="Learn about the research team, community partners, and methodology behind the South Asian Muslims in BC digital exhibit project."
  />
  <meta name="twitter:image" content="{base}/content/2021_08_01_040.jpg" />

  <!-- Canonical URL -->
  <link rel="canonical" href="https://{PUBLIC_DOMAIN}/about" />

  <!-- Structured Data -->
  {@html `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About the Project - South Asian Muslims in BC",
      "description": "Information about the South Asian Muslims in British Columbia digital exhibit project, including research methodology, team members, and community partnerships.",
      "url": "https://${PUBLIC_DOMAIN}/about",
      "mainEntity": {
        "@type": "ResearchProject",
        "name": "South Asian Muslims in British Columbia Digital Exhibit",
        "description": "A digital exhibit documenting the history, experiences, and contributions of South Asian Muslim communities in British Columbia",
        "url": "https://${PUBLIC_DOMAIN}",
        "author": {
          "@type": "Organization",
          "name": "South Asian Studies Institute",
          "url": "https://www.ufv.ca/sasi/",
          "parentOrganization": {
            "@type": "EducationalOrganization",
            "name": "University of the Fraser Valley",
            "url": "https://www.ufv.ca"
          }
        },
        "funder": {
          "@type": "Organization",
          "name": "University of the Fraser Valley"
        },
        "isPartOf": {
          "@type": "DigitalDocument",
          "name": "South Asian Canadian Digital Archive",
          "url": "https://sacda.ca"
        }
      },
      "isPartOf": {
        "@type": "DigitalDocument",
        "name": "South Asian Muslims in BC - Digital Exhibit",
        "url": "https://${PUBLIC_DOMAIN}"
      }
    }
  </script>`}

  <!-- Breadcrumb Schema -->
  {@html `<script type="application/ld+json">
    ${generateBreadcrumbSchema(breadcrumbs)}
  </script>`}
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
    class="floating-square relative *:absolute *:rounded-2xl lg:h-[20vw] h-[40vw] lg:w-[20vw] w-[40vw] *:h-full *:aspect-square"
  >
    <div
      class="z-50 -top-4 -left-4 bg-secondary-yellow p-[10%] overflow-auto *:will-change-transform will-change-transform"
    >
      <h6 class="text-h6 font-bold text-primary-black pb-[4%] text-left">
        {title}
      </h6>
      <p class="text-p">{desc}</p>
    </div>
    <div class="bg-[#CED299] bg-secondary-yellowtop-0 left-0">&nbsp;</div>
  </div>
{/snippet}

<main class="lg:py-20 flex flex-col gap-16 max-w-full! m-0!">
  <Breadcrumb 
    items={[
      { name: "About", current: true }
    ]}
  />

  <!-- heading -->
  <section class="bg-secondary-yellow flex flex-col lg:pt-24">
    <div
      class="flex lg:flex-row flex-col-reverse lg:gap-16 gap-6 lg:min-h-[50vh] lg:px-32 px-12 pb-24"
    >
      <div class="flex flex-col lg:gap-8">
        <h1 class="page-title">About SASI</h1>
        <p class="text-p text-primary-black">
          The <a href="https://ufv.ca/sasi">South Asian Studies Institute</a> at
          the <a href="https://ufv.ca">University of the Fraser Valley</a>
          brings together South Asian scholars and students from diverse backgrounds
          and disciplines to create a nexus point for programs and activities that
          support our vision.
          <br /> <br /> The Institute fosters inter-disciplinary scholarly
          research, community and public engagement on issues related to South
          Asia and the Canadian South Asian Diaspora. The Institute initiates,
          directs and implements the development, maintenance and enhancement of
          scholarship, <a href="https://sacda.ca">research and engagement</a> in
          collaboration with faculty, students and community. The Institute
          takes direction from UFV's strategic goals to be a leader of social,
          cultural, economic and environmentally responsible development in the
          Fraser Valley. <br />
          <br />The Institute is a repository of the pioneering history of
          immigrant settlers who make up the Canadian South Asian Diaspora. We
          also undertake much needed
          <a href="https://southasiancanadianheritage.ca"
            >contemporary research</a
          >
          that benefits academia, members of the community, government, organizations
          and agencies as well as global scholars and interested persons.

          <br /><br />
          For inquiries, please contact us at
          <a href="mailto:sasi@ufv.ca">sasi@ufv.ca</a> or call 604-854-4547.
        </p>
        <div class="flex flex-wrap gap-4">
          {#each [["Meet Our Team", "#team"], ["Advisory Committee", "#committee"], ["Meet Our Partners", "#partners"], ["Contact SASI", "/contact"]] as link, idx}
            <button
              class="bg-primary-blue rounded-lg whitespace-nowrap text-white px-6 py-3"
              aria-label="scrolls to {link[0]} section of the page"
              onclick={() => {
                link[1].startsWith("#")
                  ? document
                      .querySelector(link[1])
                      ?.scrollIntoView({ behavior: "smooth" })
                  : goto(link[1]);
              }}
            >
              {link[0]}
            </button>
          {/each}
        </div>
      </div>
      <div class="min-w-[35vw] mt-16 h-auto bg-gray-300 object-cover">
        <img
          src="{base}/AboutCover.jpg"
          alt="About the South Asian Muslims in BC project - research team and community collaboration"
          class="w-full h-full object-cover rounded"
        />
      </div>
    </div>

    <div class="bg-pattern min-h-32 w-full bg-repeat-x overflow-hidden">
      &nbsp;
    </div>
  </section>

  <!-- project history -->
  <section class="lg:p-32 p-10 pt-36 flex lg:flex-row flex-col gap-16">
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

    <div class="h-full lg:w-[30vw] flex flex-col gap-4 text-right relative">
      <span id="project-history" class="absolute -top-96 h-1">&nbsp;</span>

      <h3 class="text-h3 font-bold font-source-serif-4 text-primary-blue">
        Project History
      </h3>
      <p class="border-r-4 border-r-secondary-yellow h-max pr-4 font-martel">
        The historical and contemporary presence of Muslim communities in
        Canada, particularly South Asian Muslims in B.C., has often been
        obscured. Our research project focuses on their contributions and covers
        three major timelines: early migration to BC, mid-20th-century
        migration, and recent migration to Canada. Exploring the diverse sects
        and cultural integration of Islam, including Sunni sub-sects like
        Wahabi, Salafi, Barelvi, and Deobandi, as well as Shia sub-sects like
        Twelver Shi'ism and Ismailism, along with Sufism, we aim to promote
        understanding and welcome feedback for future enhancements.
      </p>

      <Accordion.Root type="single">
        <Accordion.Item value="item-1">
          <Accordion.Trigger
            class="text-h4 font-bold font-source-serif-4 text-primary-blue"
            >Artist Statement</Accordion.Trigger
          >
          <Accordion.Content
            class="border-r-4 border-r-secondary-yellow h-max pr-4 font-martel"
          >
            The visual identity for South Asian Muslims in BC is rooted in the
            timeless aesthetics of Islamic architecture — a tradition where
            form, function, and meaning are deeply intertwined. At its heart are
            jaali-inspired patterns: intricate, repeating geometric forms that
            symbolize protection, interconnectedness, and the shared fabric of
            communal life. These designs are more than decorative; they reflect
            a history of perseverance, faith, tradition, resilience, migration,
            and multi-layered transnational experiences that continue to shape
            the South Asian Muslim presence in British Columbia.
            <br />
            <br />
            The arch emerges as another defining motif, serving both as a structural
            element and a spiritual threshold. It marks spaces of openness, passage,
            and sanctuary — framing physical and symbolic environments where memory,
            faith, and tradition gather. It offers a metaphor for the community’s
            ongoing journey: bridging homelands, navigating challenges, and cultivating
            spaces of belonging.
            <br />
            <br />
            Throughout the visual language, geometric repetition and symmetry echo
            the diversity within the South Asian Muslim community — a constellation
            of cultures, beliefs, and personal histories. This careful interplay
            of shape and pattern creates a visual metaphor for collective identity,
            where individual stories intersect within a shared, enduring framework.
            <br />
            <br />
            Together, these elements establish a contemporary visual identity that
            honours the historical depth of South Asian Muslim communities in BC
            while creating space for future narratives to be seen, heard, and remembered.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  </section>

  <!-- team -->
  <section class="bg-secondary-yellow flex flex-col relative">
    <span id="team" class="absolute -top-64">&nbsp;</span>
    <div class="lg:p-32 p-12">
      <h1
        class="text-h3 flex flex-col gap-2 font-bold font-source-serif-4 text-primary-blue text-center pb-12"
      >
        Our Team
        <sub class="text-h6 text-center">2024 to present</sub>
      </h1>

      <div class="flex flex-col gap-6 items-center">
        {#each [team.slice(0, 3), team.slice(3, 7), team.slice(7)] as col, idy}
          <div
            class="flex flex-col lg:flex-row justify-center text-center gap-6 w-full"
          >
            {#each col as person, idx}
              <div
                class="lg:w-[20vw] lg:h-[20vw] rounded-lg aspect-square bg-white relative"
              >
                <p
                  class="top-0 left-0 p-2 bg-secondary-teal rounded-t-lg text-white font-martel absolute w-full z-20 text-center"
                >
                  <span>
                    {person.name}
                  </span>
                  <br />
                  <span class="text-sm italic text-gray-100">
                    {person.role}
                    {#if person.years}
                      ({person.years})
                    {/if}
                  </span>
                </p>
                <span
                  class="p-4 pt-16 absolute top-4 left-0 lg:h-[18vw] overflow-auto"
                >
                  {@html person.desc}
                </span>
              </div>
            {/each}
          </div>
        {/each}
      </div>
    </div>
    <div class="bg-pattern min-h-32 w-full bg-repeat-x">&nbsp;</div>
  </section>

  <!-- committee -->
  <section class="lg:px-32 lg:py-24 py-8 px-12 relative">
    <span id="committee" class="absolute -top-64">&nbsp;</span>
    <h1
      class="text-h3 inline-flex flex-col items-center w-full font-bold font-source-serif-4 text-primary-blue text-center pb-12 mb-12 gap-2"
    >
      Advisory Committee
      <sub class="text-h6">2024 to present</sub>
    </h1>

    <div class="flex flex-col gap-6">
      {#each committee as person, idx}
        {@const EvenItem = !((idx + 1) % 2)}
        <div
          class="lg:w-[90%] h-min rounded-lg p-6 bg-secondary-yellow flex flex-col lg:flex-row gap-6"
          class:self-end={EvenItem}
          class:flex-row-reverse={EvenItem}
          class:lg:text-right={EvenItem}
        >
          <div
            class="aspect-square h-[30vh] lg:h-[20vw] bg-gray-100 relative flex rounded-lg overflow-clip object-cover"
          >
            <img src={person.img} alt="{person.name} - {person.position} at South Asian Studies Institute" class="object-cover w-full" />
            <span
              class="bottom-0 left-0 p-2 bg-secondary-teal rounded-b-lg text-white font-martel absolute w-full text-center"
              >{person.name} <br />
              <span class="text-xs">{@html person.position}</span></span
            >
          </div>
          <button
            class="p-4 flex items-center"
            onclick={() => {
              commitment_expanded.has(idx)
                ? commitment_expanded.delete(idx)
                : commitment_expanded.add(idx);
            }}
          >
            <span class="*:font-normal">
              {@html commitment_expanded.has(idx)
                ? person.desc
                : `${person.desc.split(" ").slice(0, 50).join(" ")}... <br /><br /><i class="hover:underline">Click to read more</i>`}
            </span>
          </button>
        </div>
      {/each}
    </div>
  </section>

  {#snippet partnerImage({
    src,
    alt,
    link,
    years,
  }: {
    src: string;
    alt: string;
    link: string;
    years: string;
  })}
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex flex-col items-center gap-2"
    >
      <img {src} {alt} class="aspect-video w-full object-contain" />
      <sub class="text-primary-black text-base">{years}</sub>
    </a>
  {/snippet}

  <!-- partners -->
  <section class="bg-secondary-yellow flex flex-col pt-24 relative">
    <span id="partners" class="absolute -top-64">&nbsp;</span>
    <div class="flex flex-col lg:px-32 px-12">
      <h2 class="text-h6 font-bold border-b-2 border-secondary-teal w-fit">
        Our Partners
      </h2>
      <!-- partners -->
      <div class="flex flex-wrap py-16 justify-evenly md:*:w-[25vw] *:w-[30vh]">
        {#each partners as partner}
          {@render partnerImage(partner)}
        {/each}
      </div>
    </div>
    <div class="bg-pattern min-h-32 w-full bg-repeat-x">&nbsp;</div>
  </section>

  <!-- sponsors -->
  <section class=" flex flex-col pt-24 relative">
    <span id="sponsors" class="absolute -top-64">&nbsp;</span>
    <div class="flex flex-col lg:px-32 px-12">
      <h2 class="text-h6 font-bold border-b-2 border-secondary-teal w-fit">
        We thank our Financial Supporters
      </h2>
      <div
        class="flex flex-wrap gap-y-8 py-16 justify-evenly items-baseline md:*:w-[25vw] *:w-[30vh]"
      >
        {#each sponsors as sponsor}
          {@render partnerImage(sponsor)}
        {/each}
      </div>
    </div>
  </section>
</main>
