<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/state";
  import CaseStudies from "$lib/pages/new/CaseStudies.svelte";
  import Early20thCentury from "$lib/pages/new/Early20thCentury.svelte";
  import Mid20thCentury from "$lib/pages/new/Mid20thCentury.svelte";
  import RecentExperiences from "$lib/pages/new/RecentExperiences.svelte";
  import HistoryNavigation from "$lib/components/HistoryNavigation.svelte";
  import Timeline from "$lib/pages/new/Timeline.svelte";
  import { PUBLIC_DOMAIN } from "$env/static/public";
  import Breadcrumb from "$lib/components/Breadcrumb.svelte";

  // Create reactive variable for current ID
  let currentId = $state(page.params.id);
  
  // Update currentId when page params change
  $effect(() => {
    currentId = page.params.id;
  });

  const pageTitle = $derived(page.params.id
    .split("-")
    .map((x) => `${x[0].toUpperCase()}${x.slice(1)}`)
    .join(" "));

  const getPageDescription = (id: string) => {
    switch(id) {
      case "early-20th-century":
        return "Explore the early migration patterns and settlement experiences of South Asian Canadian Muslims in British Columbia during the early 20th century, including challenges faced and communities established.";
      case "mid-20th-century":
        return "Discover the mid-20th century experiences of South Asian Muslim communities in BC, including policy changes, community growth, and cultural preservation efforts.";
      case "recent-experiences":
        return "Learn about contemporary experiences of South Asian Canadian Muslims in British Columbia, including modern community development, religious practices, and cultural integration.";
      case "timeline":
        return "Browse an interactive timeline of significant events in South Asian Muslim history in British Columbia, from early settlement to present day milestones.";
      case "case-studies":
        return "Examine detailed case studies highlighting specific experiences, challenges, and achievements of South Asian Muslim individuals and families in BC.";
      default:
        return "Explore the historical journey of South Asian Canadian Muslims in British Columbia through detailed period studies and community stories.";
    }
  };
</script>

<svelte:head>
  <title>{pageTitle} | Historical Journey - South Asian Canadian Muslims in BC</title>
  <meta name="description" content={getPageDescription(page.params.id)} />
  <meta name="keywords" content="South Asian Muslim history, {pageTitle}, BC immigration, Muslim community {page.params.id}, historical timeline, community development, British Columbia Muslims" />
  <meta name="author" content="South Asian Studies Institute, University of the Fraser Valley" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article" />
  <meta property="og:title" content="{pageTitle} | Historical Journey - South Asian Canadian Muslims in BC" />
  <meta property="og:description" content={getPageDescription(page.params.id)} />
  <meta property="og:image" content="{base}/content/2021_08_01_040.jpg" />
  <meta property="og:url" content="https://{PUBLIC_DOMAIN}/history/{page.params.id}" />
  <meta property="og:site_name" content="South Asian Canadian Muslims in BC" />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="{pageTitle} | Historical Journey - South Asian Canadian Muslims in BC" />
  <meta name="twitter:description" content={getPageDescription(page.params.id)} />
  <meta name="twitter:image" content="{base}/content/2021_08_01_040.jpg" />
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://{PUBLIC_DOMAIN}/history/{page.params.id}" />
  
  <!-- Structured Data -->
  {@html `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "${pageTitle} - South Asian Canadian Muslims in BC",
      "description": "${getPageDescription(page.params.id)}",
      "url": "https://${PUBLIC_DOMAIN}/history/${page.params.id}",
      "datePublished": "2024-01-01",
      "dateModified": "2025-01-01",
      "author": {
        "@type": "Organization",
        "name": "South Asian Studies Institute",
        "url": "https://www.ufv.ca/sasi/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "South Asian Canadian Digital Archive",
        "url": "https://sacda.ca"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "url": "https://${PUBLIC_DOMAIN}/history/${page.params.id}"
      },
      "isPartOf": {
        "@type": "WebPage",
        "name": "Historical Journey - South Asian Canadian Muslims in BC",
        "url": "https://${PUBLIC_DOMAIN}/history"
      },
      "about": [
        {
          "@type": "Thing",
          "name": "South Asian Muslim History",
          "description": "Historical experiences of South Asian Muslim communities in British Columbia"
        },
        {
          "@type": "Place",
          "name": "British Columbia",
          "description": "Province in western Canada"
        }
      ]
    }
  </script>`}
</svelte:head>

<Breadcrumb 
  items={[
    { name: "History", url: `${base}/history` },
    { name: pageTitle, current: true }
  ]}
/>

{#if page.params.id === "early-20th-century"}
  <Early20thCentury />
{:else if page.params.id === "mid-20th-century"}
  <Mid20thCentury />
{:else if page.params.id === "recent-experiences"}
  <RecentExperiences />
{:else if page.params.id === "timeline"}
  <Timeline />
{:else if page.params.id === "case-studies"}
  <CaseStudies />
{/if}

<HistoryNavigation bind:currentId />
