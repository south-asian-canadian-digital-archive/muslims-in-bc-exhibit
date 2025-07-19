<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { base } from "$app/paths";
  import Image from "$lib/components/Image.svelte";
  import HistoryNavigation from "$lib/components/HistoryNavigation.svelte";
  import { PUBLIC_DOMAIN } from "$env/static/public";
  import Breadcrumb from "$lib/components/Breadcrumb.svelte";
  import { generateBreadcrumbSchema } from "$lib/utils/breadcrumb-schema";

  const breadcrumbs = [
    { name: "Home", url: `https://${PUBLIC_DOMAIN}/` },
    { name: "Historical Journey", url: `https://${PUBLIC_DOMAIN}/history` }
  ];

  onMount(() => {
    let domeAnimationTimeline = gsap.timeline({
      repeat: -1,
      onRepeat: () => {
        domeAnimationTimeline.invalidate();
      },
    });
    domeAnimationTimeline.add(
      gsap.to(".dome-bg", {
        backgroundPositionX: "-=10",
        duration: 5,
        ease: "none",
      })
    );
    domeAnimationTimeline.play();
  });
</script>

<svelte:head>
  <title>Historical Journey - South Asian Muslims in BC</title>
  <meta
    name="description"
    content="Explore the historical journey of South Asian Muslims in British Columbia from early 20th century migration to recent experiences. Discover timelines, case studies, and significant events that shaped the community."
  />
  <meta
    name="keywords"
    content="South Asian Muslim history, BC immigration history, Muslim community timeline, historical migration patterns, early 20th century, mid 20th century, recent experiences, case studies"
  />
  <meta
    name="author"
    content="South Asian Studies Institute, University of the Fraser Valley"
  />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Historical Journey - South Asian Muslims in BC"
  />
  <meta
    property="og:description"
    content="Explore the historical journey of South Asian Muslims in British Columbia from early migration to recent experiences through timelines and case studies."
  />
  <meta property="og:image" content="{base}/content/2021_08_01_040.jpg" />
  <meta property="og:url" content="https://{PUBLIC_DOMAIN}/history" />
  <meta property="og:site_name" content="South Asian Muslims in BC" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Historical Journey - South Asian Muslims in BC"
  />
  <meta
    name="twitter:description"
    content="Explore the historical journey of South Asian Muslims in British Columbia from early migration to recent experiences through timelines and case studies."
  />
  <meta name="twitter:image" content="{base}/content/2021_08_01_040.jpg" />

  <!-- Canonical URL -->
  <link rel="canonical" href="https://{PUBLIC_DOMAIN}/history" />

  <!-- Structured Data -->
  {@html `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Historical Journey - South Asian Muslims in BC",
      "description": "A comprehensive overview of the historical journey of South Asian Muslims in British Columbia, covering multiple time periods and significant events.",
      "url": "https://${PUBLIC_DOMAIN}/history",
      "mainEntity": {
        "@type": "HistoricalEvent",
        "name": "South Asian Muslim Migration to British Columbia",
        "description": "The ongoing history of South Asian Muslim communities establishing themselves in British Columbia",
        "startDate": "1900",
        "location": {
          "@type": "Place",
          "name": "British Columbia, Canada"
        }
      },
      "isPartOf": {
        "@type": "DigitalDocument",
        "name": "South Asian Muslims in BC - Digital Exhibit",
        "url": "https://${PUBLIC_DOMAIN}"
      },
      "author": {
        "@type": "Organization",
        "name": "South Asian Studies Institute",
        "url": "https://www.ufv.ca/sasi/"
      },
      "about": [
        {
          "@type": "Thing",
          "name": "Immigration History",
          "description": "Historical patterns of South Asian Muslim immigration to British Columbia"
        },
        {
          "@type": "Thing",
          "name": "Community Development",
          "description": "The establishment and growth of South Asian Muslim communities in BC"
        }
      ]
    }
  </script>`}

  <!-- Breadcrumb Schema -->
  {@html `<script type="application/ld+json">
    ${generateBreadcrumbSchema(breadcrumbs)}
  </script>`}
</svelte:head>

<Breadcrumb items={[{ name: "History", current: true }]} />

<HistoryNavigation currentId={null} />

<main class="container px-4 py-32">
  <section class="flex gap-14">
    <div class="">
      <div
        class="lg:flex float-right justify-between overflow-clip hidden h-[60vh] w-[25vw] ml-6 pb-4"
      >
        <div
          class="bg-secondary-teal rounded-xl p-2 w-full transition-all ease-in-out duration-300 dome overflow-hidden"
        >
          <div
            class="bg-pattern bg-repeat h-full w-screen dome-bg will-change-auto overflow-clip"
          ></div>
        </div>
      </div>

      <h1 class="page-title">Migration Overview</h1>

      <div class="content-section">
        The historical and contemporary presence of Muslim communities in Canada
        has often remained obscured, unacknowledged, and misrepresented. Their
        profound contributions to Canadian society warrant deeper appreciation,
        acknowledgement, and understanding. Our research project aims to
        contribute to this cause by focusing on South Asian Muslim communities
        of B.C. We use <a
          href="https://www.bac-lac.gc.ca/eng/discover/immigration/history-ethnic-cultural/Pages/south-asian.aspx"
          target="_blank"
          rel="noopener">archival records</a
        >, academic works, and personal interviews to highlight these, often
        untold, stories of South Asian Muslim communities in B.C.
        <br /><br />
        Far from being a monolithic religion, Islam is a mosaic. Its two main sects
        are Sunni and Shia, which further branch out into various sub-sects. Sunni
        sub-sects include Wahabi, Salafi, Barelvi, and Deobandi. Shia subsects include
        Twelver Shi'ism and Ismailism. Sufism, not strictly a sect but a mystical
        approach to Islam, is also important. Most South Asian Muslims in the area
        are Sunni, but many follow Sufi practices.
        <br /><br />
        In this virtual exhibit, we seek to narrate the migration history of South
        Asian muslims of British Columbia while acknowledging this internal diversity
        of Islam. We cover three major time periods:
      </div>
    </div>
  </section>

  <div class="history">
    <section class="">
      <h2 class="">Challenging Popular Assumptions</h2>
      <div class="">
        <p>
          Looking at the news today, it may seem like all conflicts around
          migrants seem to centre on Muslims.
          <br /><br />
          Globally, Muslims form 29% of the world’s migrants, second to Christians
          (47%) and so 4% of the world’s total Muslim population are international
          migrants (i.e. live outside of their country of birth). Contrary to popular
          belief, this is still a small percentage of the world’s total Muslims (about
          4%). Those who are from some of South Asia’s largest countries (India,
          Pakistan and Bangladesh) form a significant portion of international migrants,
          but the vast majority of these migrants from South Asia choose to go to
          places like the UAE or North Africa. According to the Pew Research Centre
          only a small percentage of Muslims choose to live in North America. In
          2024 this number was at 6%.
          <br /><br />

          This may sound surprising, but that is because Muslim migrants appear
          in the news and government pronouncements on immigration in North
          America far in excess of their actual presence, particularly after
          9/11.
          <br /><br />

          This is also why it is harder to trace the broader history of Muslim
          migration in North America. The sources are quite limited and
          disaggregating them by region is challenging.

          <Image
            src="/content/new/muslim_migrant_graphic.png"
            alt="Regions where muslims now live and where they came from"
            float="bottom"
            ><a
              target="_blank"
              href="https://www.pewresearch.org/religion/2024/08/19/muslim-migrants-around-the-world/"
              >https://www.pewresearch.org/religion/2024/08/19/muslim-migrants-around-the-world/</a
            ></Image
          >
        </p>
      </div>
    </section>

    <section class="">
      <h2 class="">Migration to British Columbia</h2>
      <div class="">
        <!-- <p> -->
        In the first half of the 20th century, the narrative of South Asian Muslim
        migration to British Columbia closely reflected the broader movement of people
        from the region. However, due to their smaller numbers and the lack of detailed
        data on South Asian Canadians, we can only piece together the presence of
        Muslims from this area through fragments of information. We do know that
        the community of Muslims in British Columbia grew very slowly in these early
        years, with 136 Muslims recorded in 1931 and 1335 recorded in 1971.

        <div class="flex flex-col md:flex-row gap-4 justify-center pt-6 md:pt-0">
          <Image src="/content/new/6226.jpg" alt="Historical image related to Komagata Maru"></Image>
          <Image src="/content/new/6232.jpg" alt="Historical image related to Komagata Maru"></Image>
        </div>

        <p class="text-xs text-center italic w-[80%] mx-auto">
          Most early accounts of South Asian migration rightly focus on colonial
          history and the Komagata Maru, a ship that attempted to subvert the
          immigration restrictions Canada had imposed at the time. There were 24
          Muslims aboard that ship.
        </p>

        <br />
        Prior to the 1960s, Canadian immigration policies were restrictive, favoring
        European immigrants while imposing restrictions on non-European groups, including
        South Asians. However, the introduction of the Immigration Act in 1962 marked
        a shift towards a more equitable system, although it took time for the number
        of South Asians immigrating to Canada to rise significantly.
        <br /><br />

        <Image
          src="/content/new/migration_timeline.png"
          alt="Migration of muslims after 1967"
          float="right"
          class="md:w-[35vw] "
        >
          <a
            class="text-xs md:px-8 break-all"
            href="https://books.google.ca/books?id=3MIZKq1ranYC&lpg=PP1&pg=PA10#v=onepage&q&f=false"
            >https://books.google.ca/books?id=3MIZKq1ranYC&lpg=PP1&pg=PA10#v=onepage&q&f=false</a
          >
        </Image>

        The prolonged period of restrictions had a significant impact on the
        demographic makeup of the country. Scholars of migration have noted how
        people tend to travel to places they are familiar with where they have
        existing community ties. It is then not surprising that the earliest
        established South Asian communities in British Columbia, primarily
        composed of Punjabis, grew more rapidly than the number of South Asian
        Muslims and in the early days there is also evidence that the
        multi-religious South Asian communities supported one another. As one of
        our interviews revealed, the sense of safety and social diversity that
        some Muslims families felt when they came to British Columbia then led
        them to believe that this was a place that they could call home.
        <br /><br />

        In 1967, the introduction of a points-based immigration system that
        prioritized skills and qualifications over ethnic background further
        increased the influx of South Asians into Canada, thereby aiding in the
        development of British Columbia’s diverse and vibrant South Asian
        communities. The new immigration act finally introduced in 1976 marked
        the turning point when Asian migrants to Canada increased substantially.
        <!-- </p> -->
      </div>
    </section>
  </div>
</main>
