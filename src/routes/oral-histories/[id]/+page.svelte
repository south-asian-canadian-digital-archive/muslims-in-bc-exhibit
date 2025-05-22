<script lang="ts">
  import { base } from "$app/paths";
  import type { PageData } from "./$types";
  import { onMount } from "svelte";

  import { ArrowLeft, FileText, ChevronLeft, ChevronRight } from "svelte-radix";
  import * as Carousel from "$lib/components/ui/carousel";

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

  function goBack() {
    history.back();
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
  <title>{interview.name} - Community Oral History | Muslims in BC</title>
  <meta
    name="description"
    content={interview.description.substring(0, 155) + "..."}
  />
</svelte:head>

<main class="container px-4 py-8 relative">
  <button
    onclick={goBack}
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
            <h2 class="text-2xl font-semibold mb-4">Interview Details</h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                {#if interview.interviewDate}
                  <div class="flex flex-wrap mb-3">
                    <span class="font-medium w-32">Date:</span>
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
                    <span class="font-medium w-32">Interviewer:</span>
                    <span>{interview.interviewer}</span>
                  </div>
                {/if}
              </div>

              <div>
                {#if interview.contributors && interview.contributors.length > 0}
                  <div class="flex flex-wrap mb-3">
                    <span class="font-medium w-32">Contributors:</span>
                    <span>{interview.contributors.join(", ")}</span>
                  </div>
                {/if}

                <div class="mt-3 space-y-2">
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
              </div>
            </div>
          </div>
        {/if}
      </div>
    </div>

    <!-- Description (2/5 width on desktop) -->
    <div class="lg:col-span-2">
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md h-full">
        <h2 class="text-2xl font-semibold mb-4">About {interview.name}</h2>
        <p class="mb-6">{interview.description}</p>

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
              <span>Read Complete Narrative</span>
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
