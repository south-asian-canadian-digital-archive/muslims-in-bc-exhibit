<script>
  import HistoryTimeline from "$lib/components/HistoryTimelineMobile.svelte";
  import Arrow from "$lib/components/Arrow.svelte";
  import { PUBLIC_DOMAIN } from "$env/static/public";

  import { resourceLinks } from "$lib/content/resources.content";
  import { base } from "$app/paths";
  import Breadcrumb from "$lib/components/Breadcrumb.svelte";
</script>

<svelte:head>
  <title>Further Reading & Resources - South Asian Muslims in BC</title>
  <meta name="description" content="Explore curated academic resources, books, articles, and research materials about South Asian Muslims in British Columbia and Canada. Access scholarly works and community resources for deeper understanding." />
  <meta name="keywords" content="further reading, academic resources, South Asian Muslim research, scholarly articles, books, academic papers, research materials, bibliography, BC Muslim history, South Asian studies" />
  <meta name="author" content="South Asian Studies Institute, University of the Fraser Valley" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Further Reading & Resources - South Asian Muslims in BC" />
  <meta property="og:description" content="Access curated academic resources, books, and research materials about South Asian Muslims in British Columbia and their experiences in Canada." />
  <meta property="og:image" content="{base}/content/2021_08_01_040.jpg" />
  <meta property="og:url" content="https://{PUBLIC_DOMAIN}/further-reading" />
  <meta property="og:site_name" content="South Asian Muslims in BC" />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Further Reading & Resources - South Asian Muslims in BC" />
  <meta name="twitter:description" content="Access curated academic resources, books, and research materials about South Asian Muslims in British Columbia and their experiences in Canada." />
  <meta name="twitter:image" content="{base}/content/2021_08_01_040.jpg" />
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://{PUBLIC_DOMAIN}/further-reading" />
  
  <!-- Structured Data -->
  {@html `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Further Reading & Resources - South Asian Muslims in BC",
      "description": "A curated collection of academic resources, books, articles, and research materials about South Asian Muslims in British Columbia.",
      "url": "https://${PUBLIC_DOMAIN}/further-reading",
      "mainEntity": {
        "@type": "ItemList",
        "name": "Academic Resources and Further Reading",
        "description": "Curated list of scholarly resources about South Asian Muslims in British Columbia",
        "numberOfItems": ${resourceLinks.length}
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
          "name": "South Asian Muslim Research",
          "description": "Academic research and scholarly materials about South Asian Muslim communities"
        },
        {
          "@type": "Thing",
          "name": "Academic Bibliography",
          "description": "Curated bibliography of resources for further study and research"
        }
      ]
    }
  </script>`}
</svelte:head>

<main class="py-32 flex flex-col gap-10">
  <Breadcrumb 
    items={[
      { name: "Further Reading", current: true }
    ]}
  />

  <p
    class="text-h2 font-bold text-primary-blue font-source-serif-4 leading-normal"
  >
    Further Reading
  </p>

  <div class="flex flex-col gap-16 history">
    {#each resourceLinks as linkItem}
      <section class="relative">
        <span
          id={linkItem.title.toLowerCase().split(" ").join("-")}
          class="absolute -top-48">&nbsp;</span
        >
        <h2>{linkItem.title}</h2>
        <div class="flex flex-col">
          {#each linkItem.content as contentItem}
            <b class="pb-4 pt-8 first:pt-0">{contentItem.subHeading}:</b>

            {#each contentItem.content as link, i}
              {#if link.link === "#"}
                <div class:border-t-2={i === 0} class="link">
                  <span class="text-body">
                    {link.text}
                  </span>
                </div>
              {:else}
                <a
                  href={link.link}
                  class:border-t-2={i === 0}
                  onclick={(e) => link.link === "#" && e.preventDefault()}
                  class="link no-underline! text-foreground!"
                  class:!cursor-default={link.link === "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span class="text-body">
                    {link.text}
                  </span>

                  <span
                    class="hover:scale-110 transition-all ease-in-out duration-200"
                  >
                    <Arrow size={20} />
                  </span>
                </a>
              {/if}
            {/each}
          {/each}
        </div>
      </section>
    {/each}
  </div>
</main>

<!-- <HistoryTimeline /> -->

<style type="postcss">
    @reference "../../app.css";
  .link {
    @apply flex text-left items-center justify-between gap-10 p-8 border-b-2 border-secondary-yellow hover:bg-secondary-yellow transition-all ease-in-out duration-300;
  }
</style>
