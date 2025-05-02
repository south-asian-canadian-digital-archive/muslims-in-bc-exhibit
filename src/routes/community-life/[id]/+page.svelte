<script lang="ts">
  import { base } from "$app/paths";
  import type { PageData } from "./$types";
  import { onMount } from "svelte";

  import * as Carousel from "$lib/components/ui/carousel";
  import type { CarouselAPI } from "$lib/components/ui/carousel/context.js";
  import { ArrowLeft } from "svelte-radix";

  let { data }: { data: PageData } = $props();
  const { interview } = data;

  function goBack() {
    history.back();
  }

  let carouselApi = $state<CarouselAPI>();
  let current = $state(0);
  //   const count = $derived(carouselApi ? carouselApi.scrollSnapList().length : 0);

  $effect(() => {
    if (carouselApi) {
      current = carouselApi.selectedScrollSnap();
      carouselApi.on("select", () => {
        current = carouselApi!.selectedScrollSnap();
      });
    }
  });
</script>

<svelte:head>
  <title>{interview.name} - Community Oral History | Muslims in BC</title>
  <meta
    name="description"
    content={interview.description.substring(0, 155) + "..."}
  />
</svelte:head>

<main class="container mx-auto px-4 py-8 max-w-7xl">
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

  <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-10">
    <div
      class="lg:col-span-3 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden h-min"
    >
      <div class="aspect-video w-full">
        <iframe
          src={interview.videoUrl}
          title={`${interview.name}'s interview`}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="w-full h-full object-cover"
        ></iframe>
      </div>
    </div>

    <!-- Information (2/5 width on desktop) -->
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
      </div>
    </div>
  </div>

  {#if interview.images && interview.images.length > 0}
    <section class="mb-10">
      <h2 class="text-2xl font-semibold mb-6">Photo Gallery</h2>

      <Carousel.Root setApi={(api: any) => (carouselApi = api)}>
        <Carousel.Content>
          {#each interview.images as image}
            <Carousel.Item>
              <div
                class="aspect-[16/9] bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  class="h-full w-full object-contain"
                />
              </div>
            </Carousel.Item>
          {/each}
        </Carousel.Content>

        {#if interview.images.length > 1}
          <Carousel.Previous class="left-2 top-full lg:-left-12 lg:top-1/2" />
          <Carousel.Next class="right-2 top-full lg:-right-12 lg:top-1/2" />

          <!-- Carousel indicators -->
          <div class="flex justify-center gap-1 mt-4">
            {#each interview.images as _, i}
              <button
                class="w-2.5 h-2.5 rounded-full transition-colors {i === current
                  ? 'bg-primary'
                  : 'bg-gray-300 dark:bg-gray-600'}"
                aria-label="Go to slide {i + 1}"
                onclick={() => carouselApi?.scrollTo(i)}
              ></button>
            {/each}
          </div>
        {/if}
      </Carousel.Root>
    </section>
  {/if}
</main>
