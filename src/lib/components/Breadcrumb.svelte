<script lang="ts">
  import { base } from "$app/paths";
  import { PUBLIC_DOMAIN } from "$env/static/public";
  import { ChevronRight, Home } from "@lucide/svelte";

  interface BreadcrumbItem {
    name: string;
    url?: string;
    current?: boolean;
  }

  interface Props {
    items: BreadcrumbItem[];
    showHome?: boolean;
  }

  let { items, showHome = true }: Props = $props();

  // Add structured data for breadcrumbs
  let breadcrumbStructuredData = $derived({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      ...(showHome ? [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `https://${PUBLIC_DOMAIN}/`
      }] : []),
      ...items.filter(item => !item.current).map((item, index) => ({
        "@type": "ListItem",
        "position": showHome ? index + 2 : index + 1,
        "name": item.name,
        "item": `https://${PUBLIC_DOMAIN}${item.url}`
      }))
    ]
  });
</script>

<svelte:head>
  <!-- Breadcrumb Structured Data -->
  {@html `<script type="application/ld+json">
    ${JSON.stringify(breadcrumbStructuredData)}
  </script>`}
</svelte:head>

<nav aria-label="Breadcrumb" class="absolute top-28 left-0 w-full z-50">
  <ol class="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300 *:list-none w-full">
    {#if showHome}
      <li class="flex items-center">
        <a 
          href="{base}/" 
          class="hover:text-primary-blue transition-colors flex items-center"
          aria-label="Go to homepage"
        >
          <Home class="w-4 h-4" />
          <span class="sr-only">Home</span>
        </a>
	<ChevronRight class="w-4 h-4 text-gray-400" />
      </li>
      <!-- <li>
      </li> -->
    {/if}
    
    {#each items as item, index}
      <li class="flex items-center">
        {#if item.current}
          <span class="text-gray-900 dark:text-gray-100 font-medium" aria-current="page">
            {item.name}
          </span>
        {:else}
          <a 
            href="{item.url}" 
            class="hover:text-primary-blue transition-colors"
          >
            {item.name}
          </a>
        {/if}
        
        {#if index < items.length - 1}
          <ChevronRight class="w-4 h-4 text-gray-400 ml-2" />
        {/if}
      </li>
    {/each}
  </ol>
</nav>
