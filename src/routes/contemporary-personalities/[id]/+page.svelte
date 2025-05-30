<script lang="ts">
  import { base } from "$app/paths";
  import { goto } from "$app/navigation";
  import { PUBLIC_DOMAIN } from "$env/static/public";
  import type { PageData } from "./$types";
  import { ArrowLeft, ExternalLink } from "svelte-radix";
  import * as Carousel from "$lib/components/ui/carousel";
  import { ChevronLeft, ChevronRight } from "svelte-radix";

  let { data }: { data: PageData } = $props();
  let { personality } = data;

  let carouselApi: any = $state(null);
  let current = $state(0);
  let count = $state(0);

  function handleSlideChange(api: any) {
    current = api.selectedScrollSnap();
    count = api.scrollSnapList().length;
  }

  function truncateLink(url: string) {
    try {
      const urlObj = new URL(url);
      return urlObj.hostname.replace('www.', '');
    } catch {
      return url.length > 30 ? url.substring(0, 30) + '...' : url;
    }
  }
</script>

<svelte:head>
  <title>{personality.name} - Contemporary Personality | South Asian Muslims in BC</title>
  <meta
    name="description"
    content="{personality.shortDescription || personality.description.substring(0, 160)} - Profile of {personality.name}, a contemporary personality from the South Asian Muslim community in British Columbia."
  />
  <meta name="keywords" content="{personality.name}, contemporary personality, South Asian Muslim, {personality.title}, community leader, Muslim heritage BC" />
  <meta name="author" content="South Asian Studies Institute, University of the Fraser Valley" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="profile" />
  <meta property="og:title" content="{personality.name} - Contemporary Personality | South Asian Muslims in BC" />
  <meta property="og:description" content="{personality.shortDescription || personality.description.substring(0, 160)} - Profile from the South Asian Muslim community in British Columbia." />
  <meta property="og:image" content="{personality.thumbnailUrl}" />
  <meta property="og:url" content="https://{PUBLIC_DOMAIN}/contemporary-personalities/{personality.id}" />
  <meta property="og:site_name" content="South Asian Muslims in BC" />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="{personality.name} - Contemporary Personality | South Asian Muslims in BC" />
  <meta name="twitter:description" content="{personality.shortDescription || personality.description.substring(0, 160)}" />
  <meta name="twitter:image" content="{personality.thumbnailUrl}" />
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://{PUBLIC_DOMAIN}/contemporary-personalities/{personality.id}" />
  
  <!-- Structured Data -->
  {@html `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "${personality.name}",
      "description": "${personality.description}",
      "url": "https://${PUBLIC_DOMAIN}/contemporary-personalities/${personality.id}",
      "image": "${personality.thumbnailUrl}",
      "jobTitle": "${personality.title}",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "name": "${personality.name} - Contemporary Personality",
        "url": "https://${PUBLIC_DOMAIN}/contemporary-personalities/${personality.id}"
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
      }
    }
  </script>`}
</svelte:head>

<main class="container px-4 py-8 relative">
  <button
    onclick={() => goto(`${base}/contemporary-personalities`)}
    class="flex items-center mb-10 text-primary hover:text-primary-dark transition-colors"
  >
    <ArrowLeft class="mr-1" />
    Back to all personalities
  </button>

  <h1 class="text-4xl font-bold mb-2">{personality.name}</h1>
  <p class="text-gray-600 dark:text-gray-300 mb-8 text-xl">
    {personality.title}
  </p>

  <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-10">
    <!-- Main content area (3/4 width) -->
    <div class="lg:col-span-3 space-y-8">
      <!-- Photo Carousel or Single Image -->
      <div class="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
        <div class="aspect-video w-full">
          {#if personality.photoUrls && personality.photoUrls.length > 1}
            <Carousel.Carousel
              class="w-full"
              opts={{
                loop: true,
                align: "start"
              }}
              setApi={(api: any) => {
                carouselApi = api;
                if (api) {
                  api.on("select", () => handleSlideChange(api));
                }
              }}
            >
              <Carousel.CarouselContent>
                {#each personality.photoUrls as photoUrl, i}
                  <Carousel.CarouselItem>
                    <div class="p-1 h-full w-full flex items-center justify-center">
                      <img
                        src={photoUrl}
                        alt={`${personality.name}'s photo ${i + 1}`}
                        class="w-full h-full aspect-video object-cover rounded-lg"
                      />
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
          {:else}
            <!-- Single Image -->
            <img
              src={personality.thumbnailUrl}
              alt={`${personality.name}'s profile photo`}
              class="w-full h-full object-cover"
            />
          {/if}
        </div>
      </div>

      <!-- Photo Counter (only if multiple photos) -->
      {#if personality.photoUrls && personality.photoUrls.length > 1 && count > 0}
        <div class="text-center text-sm text-gray-600 dark:text-gray-300">
          Photo {current + 1} of {count}
        </div>
      {/if}

      <!-- Main Description -->
      <div class="prose prose-lg max-w-none">
        <h2 class="text-2xl font-semibold mb-4">About {personality.name}</h2>
        <p class="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          {personality.description}
        </p>
      </div>
    </div>

    <!-- Sidebar (1/4 width) -->
    <div class="lg:col-span-1">
      <div class="lg:sticky lg:top-32 space-y-6">
        <!-- Links -->
        {#if personality.links && personality.links.length > 0}
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h4 class="text-lg font-medium mb-4">Links & Resources</h4>
            <div class="space-y-3">
              {#each personality.links as link}
                <div>
                  <a
                    href={link}
                    class="inline-flex items-center text-primary hover:underline break-words"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink class="mr-2 h-4 w-4 flex-shrink-0" />
                    <span class="text-sm">{truncateLink(link)}</span>
                  </a>
                </div>
              {/each}
            </div>
          </div>
        {/if}

        <!-- Additional Info -->
        {#if personality.additionalInfo && personality.additionalInfo.length > 0}
          {#each personality.additionalInfo as info}
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 class="text-lg font-medium mb-3">{info.title}</h3>
              <p class="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{info.content}</p>
            </div>
          {/each}
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
