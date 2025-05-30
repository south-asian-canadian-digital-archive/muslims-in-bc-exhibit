<script lang="ts">
  import { base } from "$app/paths";
  import { PUBLIC_DOMAIN } from "$env/static/public";
  import { navItems } from "$lib/content/nav";
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { resourceLinks } from "$lib/content/resources.content";
  import { interviews, type Interview } from "$lib/content/interviews.content";
  import { personalities } from "$lib/content/personalities.content";
  import { fly } from "svelte/transition";
  import Arrow from "$lib/components/Arrow.svelte";
  import { ArrowDown } from "svelte-radix";
  import { page } from "$app/stores";

  let curHoveredDome = $state(0);
  let historyPages = navItems[2].pages || [];
  let navTweens: gsap.core.Tween[] = $state([]);
  let prefix = "history-page-nav";

  let exploreInterviews: Interview[] = $derived(interviews.slice(-4));
  let showScrollIndicator = $state(true);
  let aboutSection: HTMLElement;

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

    historyPages.slice(1).forEach((e, i) => {
      navTweens.push(
        gsap.to(`button#${prefix}-${i}`, {
          zIndex: 999,
          color: "white",
          scale: 50,
          duration: 0.2,
          ease: "power4.in",
          paused: true,
          onComplete: () => {
            setTimeout(() => {
              goto(e.path);
            }, 400);
          },
        })
      );
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        const rect = entry.boundingClientRect;
        showScrollIndicator = !entry.isIntersecting && rect.top > 0;
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      observer.disconnect();
    };
  });
</script>

<svelte:head>
  <title>South Asian Muslims in BC - Digital Exhibit & Oral Histories</title>
  <meta
    name="description"
    content="Discover the rich history, cultural heritage, and significant contributions of South Asian Muslims in British Columbia. Explore oral histories, historical timelines, and community stories that have shaped the Muslim Canadian experience in BC."
  />
  <meta
    name="keywords"
    content="South Asian Muslims, British Columbia, oral histories, Muslim Canadian experience, cultural heritage, immigration history, community stories, digital archive, BC history, South Asian Studies"
  />
  <meta
    name="author"
    content="South Asian Studies Institute, University of the Fraser Valley"
  />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="South Asian Muslims in BC - Digital Exhibit & Oral Histories"
  />
  <meta
    property="og:description"
    content="Discover the rich history, cultural heritage, and significant contributions of South Asian Muslims in British Columbia. Explore oral histories, historical timelines, and community stories."
  />
  <meta property="og:image" content="{base}/content/2021_08_01_040.jpg" />
  <meta property="og:url" content="https://{PUBLIC_DOMAIN}" />
  <meta property="og:site_name" content="South Asian Muslims in BC" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="South Asian Muslims in BC - Digital Exhibit & Oral Histories"
  />
  <meta
    name="twitter:description"
    content="Discover the rich history, cultural heritage, and significant contributions of South Asian Muslims in British Columbia. Explore oral histories, historical timelines, and community stories."
  />
  <meta name="twitter:image" content="{base}/content/2021_08_01_040.jpg" />

  <!-- Canonical URL -->
  <link rel="canonical" href="https://{PUBLIC_DOMAIN}" />

  <!-- Structured Data -->
  {@html `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "DigitalDocument",
      "name": "South Asian Muslims in BC - Digital Exhibit",
      "description": "A comprehensive digital exhibit exploring the history, cultural heritage, and contributions of South Asian Muslims in British Columbia through oral histories, timelines, and community stories.",
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
      "publisher": {
        "@type": "Organization",
        "name": "South Asian Canadian Digital Archive",
        "url": "https://sacda.ca"
      },
      "inLanguage": "en-CA",
      "about": [
        {
          "@type": "Thing",
          "name": "South Asian Muslims",
          "description": "Muslim communities of South Asian origin in British Columbia"
        },
        {
          "@type": "Place",
          "name": "British Columbia",
          "description": "Province in western Canada"
        },
        {
          "@type": "Thing",
          "name": "Immigration History",
          "description": "Historical patterns of South Asian Muslim immigration to British Columbia"
        }
      ],
      "hasPart": [
        {
          "@type": "DigitalDocument",
          "name": "Community Oral Histories",
          "url": "https://${PUBLIC_DOMAIN}/oral-histories",
          "description": "Personal narratives and interviews from South Asian Muslim community members in British Columbia"
        },
        {
          "@type": "DigitalDocument", 
          "name": "Historical Timeline",
          "url": "https://${PUBLIC_DOMAIN}/history",
          "description": "Comprehensive historical overview of South Asian Muslim experiences in BC from early 20th century to present",
          "hasPart": [
            {
              "@type": "Article",
              "name": "Early 20th Century",
              "url": "https://${PUBLIC_DOMAIN}/history/early-20th-century",
              "description": "Early immigration patterns and establishment of South Asian Muslim communities in British Columbia"
            },
            {
              "@type": "Article", 
              "name": "Mid-20th Century",
              "url": "https://${PUBLIC_DOMAIN}/history/mid-20th-century",
              "description": "Community growth, challenges, and developments during the mid-20th century period"
            },
            {
              "@type": "Article",
              "name": "Recent Experiences of South Asian Muslims in BC", 
              "url": "https://${PUBLIC_DOMAIN}/history/recent-experiences",
              "description": "Contemporary experiences, achievements, and ongoing community development"
            },
            {
              "@type": "Article",
              "name": "Timeline",
              "url": "https://${PUBLIC_DOMAIN}/history/timeline", 
              "description": "Chronological overview of key events and milestones in South Asian Muslim BC history"
            },
            {
              "@type": "Article",
              "name": "Case Studies: Hidden Histories",
              "url": "https://${PUBLIC_DOMAIN}/history/case-studies",
              "description": "In-depth examination of lesser-known stories and experiences from the community"
            }
          ]
        }
      ]
    }
  </script>`}

  {@html `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "South Asian Studies Institute",
      "url": "https://www.ufv.ca/sasi/",
      "logo": "https://www.ufv.ca/media/assets/sasi/UFV_SASI_logo.png",
      "description": "The South Asian Studies Institute at the University of the Fraser Valley promotes research, education, and community engagement related to South Asian diaspora communities.",
      "parentOrganization": {
        "@type": "EducationalOrganization",
        "name": "University of the Fraser Valley",
        "url": "https://www.ufv.ca"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "sasi@ufv.ca",
        "contactType": "customer service"
      }
    }
  </script>`}
</svelte:head>

<!-- Scroll indicator -->
{#if showScrollIndicator}
  <button
    class="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 backdrop-blur-sm shadow-lg rounded-full px-6 py-3 border border-gray-200"
    transition:fly={{ y: 20, duration: 300 }}
    onclick={() => {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }}
  >
    <div class="flex items-center gap-2 text-gray-700">
      <span class="text-sm font-medium text-left">Scroll down to view more</span
      >
      <div class="animate-bounce">
        <ArrowDown size="1.25rem" />
      </div>
    </div>
  </button>
{/if}

<main
  class="container *:px-4 *:ld:px-0 px-0 pb-32 flex flex-col gap-8 md:gap-16 !w-full !max-w-full"
>
  <!-- intro -->
  <section class="md:py-32 py-16 flex gap-14 max-w-5xl lg:max-w-6xl mx-auto">
    <div class="">
      <div
        class="lg:flex float-right justify-between overflow-clip hidden h-full max-w-xl ml-6 pb-4"
      >
        {#each { length: 2 } as _, i}
          <div
            class="bg-secondar-teal rounded-xl p-2 min-h-[50vh] 2xl:min-h-[600px] w-[30%] transition-all ease-in-out duration-500 dome"
            class:w-[65%]={curHoveredDome === i}
            aria-label="dome"
            role="figure"
            onmouseover={() => (curHoveredDome = i)}
            onmouseleave={() => (curHoveredDome = 0)}
            onfocus={() => {}}
          >
            <div
              class="bg-pattern bg-repeat h-full w-screen block dome-bg will-change-auto"
            ></div>
          </div>
        {/each}
      </div>

      <h1 class="page-title">South Asian Muslims in British Columbia</h1>

      <div class="content-section">
        South Asian Muslims in Canada are a diverse group who have advocated for
        spaces to practice their religion and faced challenges along the way.
        This project records their stories to deepen understanding of the South
        Asian Canadian Muslim experience, especially in British Columbia (BC).
        <br />
        <br />
        The project gathers these stories through interviews, research and historical
        records. Viewing Islam as a mosaic, it focuses on the traditions and lived
        experiences of BC’s South Asian Muslim community. The South Asian Muslim
        community is made up of new immigrants and early settlers from the start
        of the 20th century. Recognizing that this project will be a first step in
        preserving these histories, we aim to provide a foundation for future researchers,
        artists and community members to continue documenting the stories of South
        Asian Muslims in BC.
        <br />
        <br />
        We welcome any feedback that can help us enhance this project by writing
        to us at <a href="mailto:sasi@ufv.ca">sasi@ufv.ca</a> or contacting us
        at <a href="tel:+6048544547">604-854-4547.</a>
        <br /><br />
        <button
          class="bg-primary-blue py-4 px-12 rounded-full text-white w-fit"
          onclick={() => {
            goto(`${base}/history`);
          }}>Explore</button
        >
      </div>
    </div>
  </section>

  <section
    class="bg-secondary-yellow relative !max-w-full w-full"
    bind:this={aboutSection}
  >
    <div
      class="md:!py-40 pt-20 pb-40 flex flex-col gap-5 w-full md:pr-96 max-w-5xl lg:max-w-6xl mx-auto"
    >
      <h2 class="page-title font-bold">About the Project</h2>
      <p>
        The South Asian Muslims in British Columbia (SAMBC) project is an online
        exhibit (developed between 2024 and 2025 as an ongoing project) within
        the <a href="https://sacda.ca"
          >South Asian Canadian Digital Archive (SACDA)</a
        >. This project seeks to create a foundational understanding of the
        <a
          href="https://www150.statcan.gc.ca/n1/pub/11-627-m/11-627-m2024058-eng.htm"
        >
          South Asian Muslim communities</a
        >
        in BC as a starting point to build a more robust engagement with the diverse
        communities and their experiences across Canada. What you will find here
        is the history of migration and settlement, oral history narratives of contemporary
        BC South Asian Muslims, a recent timeline of significant events and and many
        reading resources for you to explore.

        <br /><br />

        We thankfully acknowledge the financial support of our <a href="{base}/about#sponsors">funders</a> and the
        support of our <a href="{base}/about#partners">partners</a>.
      </p>
    </div>

    <div
      class="bg-pattern w-full h-[30vw] md:w-[30vw] md:bg-repeat-y absolute bottom-0 left-0 md:right-0 md:top-0 md:bottom-auto md:left-auto md:h-full"
    >
      &nbsp;
    </div>
  </section>

  <section>
    <div class="max-w-5xl lg:max-w-6xl mx-auto pb-20">
      <h2 class="page-title font-bold mb-10">Explore Our Content</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <!-- History Section -->
        <div
          class="bg-white rounded-xl shadow-lg p-6 border-t-4 border-primary-blue hover:shadow-xl transition-all"
        >
          <h3 class="text-xl font-bold mb-3 text-primary-blue">
            Historical Journey
          </h3>
          <p class="mb-4">
            Explore the migration and settlement of South Asian Muslims in
            British Columbia across different time periods:
          </p>
          <ul class="list-disc pl-5 mb-4 space-y-1 *:text-left">
            {#each historyPages.slice(1) as page}
              <li>
                <a href={page.path} class="text-secondar-teal hover:underline"
                  >{page.name}</a
                >
              </li>
            {/each}
          </ul>
          <a
            href="{base}/history"
            class="inline-block text-primary-blue font-medium hover:underline"
            >View all history pages →</a
          >
        </div>

        <!-- Oral Histories -->
        <div
          class="bg-white rounded-xl shadow-lg p-6 border-t-4 border-secondar-teal hover:shadow-xl transition-all"
        >
          <h3 class="text-xl font-bold mb-3 text-secondar-teal">
            Oral Histories
          </h3>
          <p class="mb-4">
            Discover the rich cultural and religious practices, community
            organizations, and daily life experiences:
          </p>
          <ul class="list-disc pl-5 mb-4 space-y-1 *:text-left">
            {#each exploreInterviews as interview}
              <li>
                <a
                  href="{base}/oral-histories/{interview.id}"
                  class="hover:underline">{interview.name} Interview</a
                >
              </li>
            {/each}
          </ul>
          <a
            href="{base}/oral-histories"
            class="inline-block text-secondar-teal font-medium hover:underline"
            >Explore Oral Histories →</a
          >
        </div>

        <!-- Contemporary Personalities -->
        <div
          class="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-600 hover:shadow-xl transition-all"
        >
          <h3 class="text-xl font-bold mb-3 text-green-600">
            Contemporary Personalities
          </h3>
          <p class="mb-4">
            Meet influential South Asian Muslim leaders, entrepreneurs, and changemakers in BC today:
          </p>
          <ul class="list-disc pl-5 mb-4 space-y-1 *:text-left">
            {#each personalities.slice(0, 3) as personality}
              <li>
                <a
                  href="{base}/contemporary-personalities/{personality.id}"
                  class="hover:underline">{personality.name}</a
                >
              </li>
            {/each}
          </ul>
          <a
            href="{base}/contemporary-personalities"
            class="inline-block text-green-600 font-medium hover:underline"
            >View all personalities →</a
          >
        </div>

        <!-- Further Reading -->
        <div
          class="bg-white rounded-xl shadow-lg p-6 border-t-4 border-secondary-yellow hover:shadow-xl transition-all"
        >
          <h3 class="text-xl font-bold mb-3 text-orange-700">
            Research Resources
          </h3>
          <p class="mb-4">
            Access academic research, articles, books and other resources about
            South Asian Muslims:
          </p>
          <ul class="list-disc pl-5 mb-4 space-y-1 *:text-left">
            {#each resourceLinks as linkItem}
              <li>
                <a
                  href="{base}/further-reading#{linkItem.title
                    .toLowerCase()
                    .split(' ')
                    .join('-')}"
                  class="hover:underline">{linkItem.title}</a
                >
              </li>
            {/each}
          </ul>
          <a
            href="{base}/further-reading"
            class="inline-block text-orange-700 font-medium hover:underline"
            >Browse resources →</a
          >
        </div>

        <!-- Share Your Story -->
        <div
          class="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-600 hover:shadow-xl transition-all h-full"
        >
          <h3 class="text-xl font-bold mb-3 text-purple-600">Participate</h3>
          <p class="mb-4">
            Contribute to this living archive by sharing your personal
            experience or family history:
          </p>
          <ul class="list-disc pl-5 mb-4 space-y-1 *:text-left">
            <li>
              <a href="{base}/contact" class="hover:underline"
                >Share Your Story</a
              >
            </li>
            <li>
              <a href="https://sacda.ca" class="hover:underline"
                >Contribute to SACDA</a
              >
            </li>
          </ul>
          <a
            href="{base}/contact"
            class="inline-block text-purple-600 font-medium hover:underline"
            >How to contribute →</a
          >
        </div>
      </div>
    </div>
  </section>
</main>
