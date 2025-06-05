<script lang="ts">
  import { base } from "$app/paths";
  import type { PageData } from "./$types";
  import { PUBLIC_DOMAIN } from "$env/static/public";
  import { onMount } from "svelte";

  import { ArrowLeft, FileText, ChevronLeft, ChevronRight } from "@lucide/svelte";
  import * as Carousel from "$lib/components/ui/carousel";
  import { goto } from "$app/navigation";

  let { data }: { data: PageData } = $props();
  const { interview } = data;

  // For carousel
  let currentSlide = $state(0);
  let carouselApi: any = null;
  let cursorOverCarousel = $state(false);

  function handleSlideChange(api: any) {
    if (!api) return;
    currentSlide = api.selectedScrollSnap();
  }

  function scrollToSlide(index: number) {
    if (carouselApi) {
      carouselApi.scrollTo(index);
    }
  }

  function truncateLink(url: string): string {
    // Remove protocol and www
    const cleanUrl = url.replace(/^(https?:\/\/)?(www\.)?/i, "");

    // Split by slash to get parts
    const parts = cleanUrl.split("/");
    const domain = parts[0];

    // Show domain and first path segment if exists
    if (parts.length > 1 && parts[1]) {
      const path =
        parts[1].length > 15 ? parts[1].substring(0, 12) + "..." : parts[1];
      return `${domain}/${path}`;
    }

    // Just return domain if no path or path is empty
    return domain;
  }
</script>

<svelte:head>
  <title>{interview.name} - Community Oral History | South Asian Muslims in BC</title>
  <meta
    name="description"
    content="{interview.shortDescription} - Listen to {interview.name}'s personal story about their experience as a South Asian Muslim in British Columbia, including their journey, community involvement, and cultural heritage."
  />
  <meta name="keywords" content="{interview.name}, oral history, South Asian Muslim, {interview.location}, personal story, immigration experience, community testimony, Muslim heritage BC" />
  <meta name="author" content="South Asian Studies Institute, University of the Fraser Valley" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="video.other" />
  <meta property="og:title" content="{interview.name} - Community Oral History | South Asian Muslims in BC" />
  <meta property="og:description" content="{interview.shortDescription} - Personal story from a South Asian Muslim community member in British Columbia." />
  <meta property="og:image" content="{interview.thumbnailUrl}" />
  <meta property="og:url" content="https://{PUBLIC_DOMAIN}/oral-histories/{interview.id}" />
  <meta property="og:site_name" content="South Asian Muslims in BC" />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="{interview.name} - Community Oral History | South Asian Muslims in BC" />
  <meta name="twitter:description" content="{interview.shortDescription}" />
  <meta name="twitter:image" content="{interview.thumbnailUrl}" />
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://{PUBLIC_DOMAIN}/oral-histories/{interview.id}" />
  
  <!-- Structured Data -->
  {@html `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": "${interview.name} - Community Oral History",
      "description": "${interview.description}",
      "url": "https://${PUBLIC_DOMAIN}/oral-histories/${interview.id}",
      "thumbnailUrl": "${interview.thumbnailUrl}",
      "uploadDate": "2024-01-01",
      "duration": "PT30M",
      "contentLocation": {
        "@type": "Place",
        "name": "${interview.location}",
        "containedInPlace": {
          "@type": "Place",
          "name": "British Columbia, Canada"
        }
      },
      "creator": {
        "@type": "Organization",
        "name": "South Asian Studies Institute",
        "url": "https://www.ufv.ca/sasi/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "South Asian Canadian Digital Archive",
        "url": "https://sacda.ca"
      },
      "about": [
        {
          "@type": "Thing",
          "name": "South Asian Muslim Experience",
          "description": "Personal narratives of South Asian Muslims in British Columbia"
        },
        {
          "@type": "Thing",
          "name": "Cultural Heritage",
          "description": "Preservation of cultural and religious traditions"
        },
        {
          "@type": "Thing",
          "name": "Immigration Stories",
          "description": "Personal accounts of migration and settlement"
        }
      ],
      "isPartOf": [
        {
          "@type": "CollectionPage",
          "name": "Community Oral Histories",
          "url": "https://${PUBLIC_DOMAIN}/oral-histories"
        },
        {
          "@type": "DigitalDocument",
          "name": "Community Life",
          "description": "Community narratives and contemporary profiles from South Asian Muslims in BC",
          "url": "https://${PUBLIC_DOMAIN}/oral-histories"
        },
        {
          "@type": "DigitalDocument",
          "name": "South Asian Muslims in BC - Digital Exhibit",
          "url": "https://${PUBLIC_DOMAIN}"
        }
      ],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "name": "${interview.name} - Community Oral History",
        "url": "https://${PUBLIC_DOMAIN}/oral-histories/${interview.id}"
      }
    }
  </script>`}
</svelte:head>

<main class="container px-4 py-8 relative">
  <button
    onclick={() => goto(`${base}/oral-histories`)}
    class="flex items-center mb-10 text-primary hover:text-primary-dark transition-colors"
  >
    <ArrowLeft class="mr-1" />
    Back to all interviews
  </button>

  <h1 class="text-4xl font-bold mb-2">{interview.name}</h1>
  <p class="text-gray-600 dark:text-gray-300 mb-8">
    {interview.title} | {interview.location}
  </p>

  <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-10 relative">
    <!-- Left column (3/5 width) -->
    <div class="lg:col-span-3">
      <!-- Left column sticky container -->
      <div class="lg:sticky lg:top-32 space-y-8">
        <!-- Video or Photo Carousel -->
        <div class="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
          <div class="aspect-video w-full">
            {#if interview.mediaType === "video"}
              <iframe
                src={interview.videoUrl}
                title={`${interview.name}'s interview`}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                class="w-full h-full object-cover"
              ></iframe>
            {:else if interview.mediaType === "photos" && interview.photoUrls && interview.photoUrls.length > 0}
              <Carousel.Carousel
                class="w-full"
                opts={{
                  loop: true,
                }}
                setApi={(api: any) => {
                  carouselApi = api;
                  if (api) {
                    api.on("select", () => handleSlideChange(api));
                  }
                }}
              >
                <Carousel.CarouselContent>
                  {#each interview.photoUrls as photoUrl, i}
                    <Carousel.CarouselItem>
                      <div
                        class="p-1 h-full w-full flex items-center justify-center"
                      >
                        <iframe
                          src={photoUrl}
                          title={`${interview.name}'s photo ${i + 1}`}
                          frameborder="0"
                          loading="lazy"
                          class="w-full h-full aspect-video object-contain rounded-lg"
                          style="min-height: 300px;"
                        ></iframe>
                      </div>
                    </Carousel.CarouselItem>
                  {/each}
                </Carousel.CarouselContent>
                <Carousel.CarouselPrevious class="carouselButtonClass left-2">
                  <ChevronLeft class="h-5 w-5" />
                </Carousel.CarouselPrevious>
                <Carousel.CarouselNext class="carouselButtonClass right-2">
                  <ChevronRight class="h-5 w-5" />
                </Carousel.CarouselNext>
              </Carousel.Carousel>

              <!-- Dot indicators and photo count -->
              {#if interview.photoUrls && interview.photoUrls.length > 1}
                <div class="flex flex-col items-center mt-2 pb-3">
                  <div class="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    Photo {currentSlide + 1} of {interview.photoUrls.length}
                  </div>
                  <div class="flex justify-center gap-1">
                    {#each interview.photoUrls as _, i}
                      <button
                        class={`h-2 w-2 rounded-full ${currentSlide === i ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"} transition-colors`}
                        aria-label={`Go to slide ${i + 1}`}
                        onclick={() => scrollToSlide(i)}
                      ></button>
                    {/each}
                  </div>
                </div>
              {/if}
            {/if}
          </div>
        </div>

        <!-- Interview Details Below Video -->
        {#if interview.interviewDate || interview.interviewer || interview.contributors || (interview.links && interview.links.length > 0)}
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mt-8">
            <h2 class="text-2xl font-semibold mb-4">
              {interview.interviewType === "essay" ? "Essay" : "Interview"} Details
            </h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {#if interview.interviewDate}
                <div class="flex flex-col">
                  <span class="font-medium w-16">Date:</span>
                  <span
                    >{new Date(interview.interviewDate).toLocaleDateString(
                      "en-US",
                      { month: "long", day: "numeric", year: "numeric" }
                    )}</span
                  >
                </div>
              {/if}

              {#if interview.interviewer}
                <div class="flex flex-wrap mb-3">
                  <span class="font-medium w-32"
                    >{interview.interviewType === "essay"
                      ? "Writer"
                      : "Interviewer"}:</span
                  >
                  <span>{interview.interviewer}</span>
                </div>
              {/if}

              {#if interview.contributors && interview.contributors.length > 0}
                <div class="flex flex-wrap mb-3">
                  <span class="font-medium w-32">Contributors:</span>
                  <span>{interview.contributors.join(", ")}</span>
                </div>
              {/if}
            </div>
          </div>
        {/if}
      </div>
    </div>

    <!-- Description (2/5 width on desktop) -->
    <div class="lg:col-span-2">
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md h-full">
        <h2 class="text-2xl font-semibold mb-3">About {interview.name}</h2>

        <div class="mb-3 space-y-2">
          <!-- <h4 class="text-lg font-semibold mb-2">Links</h4> -->
          {#if interview.links && interview.links.length > 0}
            <div class="space-y-1">
              {#each interview.links as link}
                <div>
                  <a
                    href={link}
                    class="text-primary hover:underline"
                    target="_blank"
                  >
                    {truncateLink(link)}
                  </a>
                </div>
              {/each}
            </div>
          {/if}
        </div>

        <p class="mb-6">
          {interview.description}
          {#if interview.narrativePdfUrl && interview.description.length}
            <a
              href={interview.narrativePdfUrl}
              class="italic text-xs"
              target="_blank"
            >
              ...click below to keep reading
            </a>
          {/if}
        </p>

        {#if interview.additionalInfo}
          {#each interview.additionalInfo as info}
            <div class="mb-4">
              <h3 class="text-lg font-medium mb-2">{info.title}</h3>
              <p>{info.content}</p>
            </div>
          {/each}
        {/if}

        {#if interview.narrativePdfUrl}
          <div class="mb-6">
            <a
              href={interview.narrativePdfUrl}
              class="inline-flex items-center text-primary hover:underline"
              target="_blank"
            >
              <FileText class="mr-2" />
              <span
                >Read Full {interview.interviewType === "essay"
                  ? "Essay"
                  : "Narrative"}</span
              >
            </a>
          </div>
        {/if}
      </div>
    </div>
  </div>
</main>

<style type="postcss">
  .carouselButtonClass {
    @apply absolute top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 shadow-md hover:bg-white dark:hover:bg-gray-700 z-10;
  }
</style>
