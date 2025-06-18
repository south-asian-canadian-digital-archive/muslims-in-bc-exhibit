<script lang="ts">
  import { base } from "$app/paths";
  import { goto } from "$app/navigation";
  import { PUBLIC_DOMAIN } from "$env/static/public";
  import type { PageData } from "./$types";
  import { ArrowLeft, ExternalLink } from "@lucide/svelte";
  import * as Carousel from "$lib/components/ui/carousel";
  import { ChevronLeft, ChevronRight } from "@lucide/svelte";
  import Breadcrumb from "$lib/components/Breadcrumb.svelte";

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
      return urlObj.hostname.replace("www.", "");
    } catch {
      return url.length > 30 ? url.substring(0, 30) + "..." : url;
    }
  }
</script>

<svelte:head>
  <title
    >{personality.name} - Contemporary Personality | South Asian Muslims in BC</title
  >
  <meta
    name="description"
    content="{personality.shortDescription ||
      personality.description.substring(
        0,
        160
      )} - Profile of {personality.name}, a contemporary personality from the South Asian Muslim community in British Columbia."
  />
  <meta
    name="keywords"
    content="{personality.name}, contemporary personality, South Asian Muslim, {personality.title}, community leader, Muslim heritage BC"
  />
  <meta
    name="author"
    content="South Asian Studies Institute, University of the Fraser Valley"
  />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="profile" />
  <meta
    property="og:title"
    content="{personality.name} - Contemporary Personality | South Asian Muslims in BC"
  />
  <meta
    property="og:description"
    content="{personality.shortDescription ||
      personality.description.substring(
        0,
        160
      )} - Profile from the South Asian Muslim community in British Columbia."
  />
  <meta property="og:image" content={personality.thumbnailUrl} />
  <meta
    property="og:url"
    content="https://{PUBLIC_DOMAIN}/contemporary-personalities/{personality.id}"
  />
  <meta property="og:site_name" content="South Asian Muslims in BC" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="{personality.name} - Contemporary Personality | South Asian Muslims in BC"
  />
  <meta
    name="twitter:description"
    content={personality.shortDescription ||
      personality.description.substring(0, 160)}
  />
  <meta name="twitter:image" content={personality.thumbnailUrl} />

  <!-- Canonical URL -->
  <link
    rel="canonical"
    href="https://{PUBLIC_DOMAIN}/contemporary-personalities/{personality.id}"
  />

  <!-- Structured Data -->
  {@html `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "${personality.name}",
      "description": "${personality.description}",
      "url": "https://${PUBLIC_DOMAIN}/contemporary-personalities/${personality.id}",
      "image": {
        "@type": "ImageObject",
        "url": "${personality.thumbnailUrl}",
        "caption": "Profile photo of ${personality.name}",
        "description": "${personality.name}, ${personality.title}"
      },
      "jobTitle": "${personality.title}",
      "hasOccupation": {
        "@type": "Occupation",
        "name": "${personality.title}",
        "occupationLocation": {
          "@type": "Place",
          "name": "British Columbia, Canada"
        }
      },
      "knowsAbout": [
        {
          "@type": "Thing",
          "name": "South Asian Muslim Community",
          "description": "Community leadership and cultural contributions"
        },
        {
          "@type": "Thing", 
          "name": "British Columbia",
          "description": "Living and working in British Columbia"
        }
      ],
      "memberOf": {
        "@type": "Organization",
        "name": "South Asian Muslim Community of British Columbia"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "name": "${personality.name} - Contemporary Personality",
        "url": "https://${PUBLIC_DOMAIN}/contemporary-personalities/${personality.id}",
        "description": "${personality.shortDescription || personality.description.substring(0, 160)}",
        "inLanguage": "en-CA",
        "isPartOf": {
          "@type": "WebSite",
          "name": "South Asian Muslims in BC - Digital Exhibit",
          "url": "https://${PUBLIC_DOMAIN}"
        }
      },
      "isPartOf": [
        {
          "@type": "CollectionPage",
          "name": "Contemporary Personalities",
          "url": "https://${PUBLIC_DOMAIN}/contemporary-personalities",
          "@id": "https://${PUBLIC_DOMAIN}/contemporary-personalities"
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
        "name": "South Asian Studies Institute",
        "url": "https://www.ufv.ca/sasi/"
      }
    }
  </script>`}
</svelte:head>

  <Breadcrumb 
    items={[
      { name: "Contemporary Personalities", url: `${base}/contemporary-personalities` },
      { name: personality.name, current: true }
    ]}
  />


<main class="container px-4 py-28 relative">
  <!-- <button
    onclick={() => goto(`${base}/contemporary-personalities#${personality.id}`)}
    class="flex items-center mb-10 text-primary hover:text-primary-dark transition-colors cursor-pointer"
  >
    <ArrowLeft class="mr-1" />
    Back to all personalities
  </button> -->

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
                align: "start",
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
                    <div
                      class="p-1 h-full w-full flex items-center justify-center"
                    >
                      <img
                        src={photoUrl}
                        alt={`${personality.name}'s photo ${i + 1} - ${personality.title}`}
                        class="w-full h-full aspect-video object-contain rounded-lg"
                      />
                    </div>
                  </Carousel.CarouselItem>
                {/each}
              </Carousel.CarouselContent>
              <Carousel.CarouselPrevious class="carouselButtonClass left-2" />
              <Carousel.CarouselNext class="carouselButtonClass right-2" />
            </Carousel.Carousel>
          {:else}
            <!-- Single Image -->
            <img
              src={personality.thumbnailUrl}
              alt={`${personality.name}'s profile photo - ${personality.title} from South Asian Muslim community in BC`}
              class="w-full h-full object-contain"
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

      <!-- References Section - Only show on mobile/tablet -->
      {#if personality.links && personality.links.length > 0}
        <div class="prose prose-lg max-w-none border-t pt-6 lg:hidden">
          <h3 class="text-xl font-semibold mb-4">References & Credits</h3>

          {#if personality.photoCredits && personality.photoCredits.length > 0}
            <div class="mb-4">
              <h4 class="text-lg font-medium mb-2">Image Credits</h4>
              <ul class="list-disc pl-6 space-y-1">
                {#each personality.photoCredits as credit, index}
                  <li class="text-sm text-gray-600 dark:text-gray-400">
                    {#if personality.photoUrls && personality.photoUrls.length > 1}
                      <span class="font-medium">Photo {index + 1}:</span>
                    {:else}
                      <span class="font-medium">Profile photo:</span>
                    {/if}
                    {#if credit.link}
                      <a
                        href={credit.link}
                        class="text-primary hover:underline ml-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {credit.text}
                      </a>
                    {:else}
                      <span class="ml-1">{credit.text}</span>
                    {/if}
                  </li>
                {/each}
              </ul>
            </div>
          {/if}

          <div>
            <h4 class="text-lg font-medium mb-2">External Sources</h4>
            <ul class="list-disc pl-6 space-y-1">
              {#each personality.links as link}
                <li>
                  <a
                    href={link}
                    class="text-primary hover:underline text-sm break-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link}
                  </a>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      {:else if personality.photoCredits && personality.photoCredits.length > 0}
        <div class="prose prose-lg max-w-none border-t pt-6 lg:hidden">
          <h3 class="text-xl font-semibold mb-4">Credits</h3>

          <div>
            <h4 class="text-lg font-medium mb-2">Image Credits</h4>
            <ul class="list-disc pl-6 space-y-1">
              {#each personality.photoCredits as credit, index}
                <li class="text-sm text-gray-600 dark:text-gray-400">
                  {#if personality.photoUrls && personality.photoUrls.length > 1}
                    <span class="font-medium">Photo {index + 1}:</span>
                  {:else}
                    <span class="font-medium">Profile photo:</span>
                  {/if}
                  {#if credit.link}
                    <a
                      href={credit.link}
                      class="text-primary hover:underline ml-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {credit.text}
                    </a>
                  {:else}
                    <span class="ml-1">{credit.text}</span>
                  {/if}
                </li>
              {/each}
            </ul>
          </div>
        </div>
      {/if}
    </div>

    <!-- Sidebar (1/4 width) -->
    <div class="lg:col-span-1">
      <div class="lg:sticky lg:top-32 space-y-6">
        <!-- Photo Credits - Only show on desktop -->
        {#if personality.photoCredits && personality.photoCredits.length > 0}
          <div
            class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hidden lg:block"
          >
            <h4 class="text-lg font-medium mb-4">Photo Credits</h4>
            <div class="space-y-2">
              {#each personality.photoCredits as credit, index}
                <p class="text-sm text-gray-600 dark:text-gray-400 text-left">
                  {#if personality.photoUrls && personality.photoUrls.length > 1}
                    <span class="font-medium">Photo {index + 1}:</span>
                  {/if}
                  {#if credit.link}
                    <a
                      href={credit.link}
                      class="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {credit.text}
                    </a>
                  {:else}
                    {credit.text}
                  {/if}
                </p>
              {/each}
            </div>
          </div>
        {/if}

        <!-- Links - Only show on desktop -->
        {#if personality.links && personality.links.length > 0}
          <div
            class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hidden lg:block"
          >
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
                    <ExternalLink class="mr-2 h-4 w-4 shrink-0" />
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
              <p
                class="text-sm leading-relaxed text-gray-700 dark:text-gray-300"
              >
                {info.content}
              </p>
            </div>
          {/each}
        {/if}
      </div>
    </div>
  </div>
</main>
