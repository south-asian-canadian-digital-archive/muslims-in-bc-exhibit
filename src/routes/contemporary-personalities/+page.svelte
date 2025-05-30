<script lang="ts">
  import { base } from "$app/paths";
  import { personalities } from "$lib/content/personalities.content";
  import { PUBLIC_DOMAIN } from "$env/static/public";
  import { Person } from "svelte-radix";
</script>

<svelte:head>
  <title>Contemporary Personalities - South Asian Muslims in BC</title>
  <meta
    name="description"
    content="Discover influential contemporary personalities from the South Asian Muslim community in British Columbia. Learn about community leaders, entrepreneurs, educators, and innovators who are shaping BC's diverse landscape."
  />
  <meta name="keywords" content="contemporary personalities, South Asian Muslims BC, Muslim community leaders, BC Muslim professionals, community influencers, British Columbia Muslims, Muslim entrepreneurs, cultural leaders" />
  <meta name="author" content="South Asian Studies Institute, University of the Fraser Valley" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Contemporary Personalities - South Asian Muslims in BC" />
  <meta property="og:description" content="Discover influential contemporary personalities from the South Asian Muslim community in British Columbia. Learn about community leaders, entrepreneurs, and innovators." />
  <meta property="og:image" content="{base}/content/2021_08_01_040.jpg" />
  <meta property="og:url" content="https://{PUBLIC_DOMAIN}/contemporary-personalities" />
  <meta property="og:site_name" content="South Asian Muslims in BC" />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Contemporary Personalities - South Asian Muslims in BC" />
  <meta name="twitter:description" content="Discover influential contemporary personalities from the South Asian Muslim community in British Columbia." />
  <meta name="twitter:image" content="{base}/content/2021_08_01_040.jpg" />
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://{PUBLIC_DOMAIN}/contemporary-personalities" />
  
  <!-- Structured Data -->
  {@html `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Contemporary Personalities - South Asian Muslims in BC",
      "description": "A collection of profiles featuring influential contemporary personalities from the South Asian Muslim community in British Columbia.",
      "url": "https://${PUBLIC_DOMAIN}/contemporary-personalities",
      "mainEntity": {
        "@type": "ItemList",
        "name": "Contemporary Personality Profiles",
        "description": "Profiles of community leaders, entrepreneurs, and innovators",
        "numberOfItems": ${personalities.length},
        "itemListElement": [
          ${personalities.map((personality, index) => `{
            "@type": "Person",
            "position": ${index + 1},
            "name": "${personality.name}",
            "description": "${personality.shortDescription}",
            "url": "https://${PUBLIC_DOMAIN}/contemporary-personalities/${personality.id}",
            "image": "${personality.thumbnailUrl}",
            "jobTitle": "${personality.title}"
          }`).join(',')}
        ]
      },
      "isPartOf": [
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
        "url": "https://www.ufv.ca/sasi/"
      }
    }
  </script>`}
</svelte:head>

<main class="container px-4 py-32">
  <section class="mb-16">
    <h1 class="page-title">Contemporary Personalities</h1>
    <p class="text-lg mb-8">
      Meet the inspiring contemporary personalities from the South Asian Muslim 
      community who are making significant contributions across British Columbia. 
      These leaders, entrepreneurs, educators, and innovators represent the diverse 
      talents and achievements within our community, showcasing how cultural heritage 
      and modern innovation combine to enrich our province's social, economic, and 
      cultural landscape.
    </p>
  </section>

  <!-- Personalities List -->
  <section>
    <div class="space-y-8">
      {#each personalities as personality}
        <a
          href="{base}/contemporary-personalities/{personality.id}"
          class="group block bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 !no-underline"
        >
          <div class="grid grid-cols-1 lg:grid-cols-5 gap-0">
            <!-- Image Section -->
            <div class="lg:col-span-1 relative">
              <div class="aspect-square lg:aspect-[3/4] h-full">
                <img
                  src={personality.thumbnailUrl}
                  alt={`${personality.name}'s profile photo`}
                  class="w-full h-full object-cover"
                />
                <div
                  class="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div class="rounded-full bg-white p-2">
                    <Person class="w-5 h-5 text-gray-700" />
                  </div>
                </div>
              </div>
            </div>

            <!-- Content Section -->
            <div class="lg:col-span-3 p-5 lg:p-6 flex flex-col justify-center">
              <h2 class="text-xl lg:text-2xl font-semibold mb-3 text-left group-hover:text-primary-blue transition-colors duration-300">
                {personality.name}
              </h2>
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed text-left">
                {personality.shortDescription || personality.description.substring(0, 180) + "..."}
              </p>
            </div>

            <!-- CTA Section -->
            <div class="lg:col-span-1 p-5 lg:p-6 flex items-center justify-center lg:justify-end">
              <div class="bg-primary-blue text-white px-4 py-2 rounded-full text-sm font-medium group-hover:bg-secondar-teal transition-colors duration-300">
                Read More
              </div>
            </div>
          </div>
        </a>
      {/each}
    </div>

    <!-- Empty State -->
    {#if personalities.length === 0}
      <div class="text-center py-16">
        <Person class="w-16 h-16 mx-auto text-gray-400 mb-4" />
        <h3 class="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
          No Personalities Yet
        </h3>
        <p class="text-gray-500 dark:text-gray-400">
          Contemporary personality profiles will be added soon.
        </p>
      </div>
    {/if}
  </section>
</main>