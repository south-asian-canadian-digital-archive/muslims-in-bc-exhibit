<script lang="ts">
  import { base } from "$app/paths";
  import { interviews } from "$lib/content/interviews.content";
  import { Play } from "svelte-radix";
</script>

<svelte:head>
  <title>Community Oral Histories - Muslims in BC</title>
  <meta
    name="description"
    content="Explore oral histories and interviews with South Asian Muslims in British Columbia"
  />
</svelte:head>

<main class="container px-4 py-32">
  <section class="mb-16">
    <h1 class="page-title">Community Oral Histories</h1>
    <p class="text-lg mb-8">
      Discover the rich tapestry of stories from <a target="_blank" rel="noopener">South Asian Muslims</a> across
      <a target="_blank" rel="noopener">British Columbia</a>. These <a target="_blank" rel="noopener">oral histories</a> capture personal journeys,
      community milestones, and cultural experiences that have shaped the <a target="_blank" rel="noopener">Muslim
      experience in BC</a>. Through these narratives, we gain insight into how <a target="_blank" rel="noopener">religious identity</a>, 
      <a target="_blank" rel="noopener">cultural heritage</a>, and <a target="_blank" rel="noopener">immigration experiences</a> have contributed to the vibrant 
      <a target="_blank" rel="noopener">multicultural fabric</a> of our province.
    </p>
  </section>

  <!-- Interview Grid -->
  <section>
    <div class="card-container">
      {#each interviews as interview}
        <a
          href="{base}/community-life/{interview.id}"
          class="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 !no-underline"
        >
          <div class="relative aspect-video">
            <img
              src={interview.thumbnailUrl}
              alt={`${interview.name}'s interview thumbnail`}
              class="w-full h-full object-cover"
            />
            <div
              class="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <div class="rounded-full bg-white p-3">
                <Play />
              </div>
            </div>
          </div>

          <div class="p-5">
            <h3 class="text-xl font-semibold mb-1">{interview.name}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">
              {interview.title} | {interview.location}
            </p>
            <p class="text-sm line-clamp-3">{interview.description}</p>
          </div>
        </a>
      {/each}
    </div>
  </section>
</main>

<style type="postcss">
  /* Remove common styles that are now in app.css */
</style>
