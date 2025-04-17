<script lang="ts">
  import { page } from "$app/state";
  import CaseStudies from "$lib/pages/new/CaseStudies.svelte";
  import Early20thCentury from "$lib/pages/new/Early20thCentury.svelte";
  import Mid20thCentury from "$lib/pages/new/Mid20thCentury.svelte";
  import RecentTimeline from "$lib/pages/new/RecentTimeline.svelte";
  import HistoryNavigation from "$lib/components/HistoryNavigation.svelte";
</script>

<svelte:head>
  <title
    >{page.params.id
      .split("-")
      .map((x) => `${x[0].toUpperCase()}${x.slice(1)}`)
      .join(" ")} | South Asian Muslims in BC</title
  >
</svelte:head>

{#if page.params.id === "early-20th-century"}
  <Early20thCentury />
{:else if page.params.id === "mid-20th-century"}
  <Mid20thCentury />
{:else if page.params.id === "recent-timeline"}
  <RecentTimeline />
{:else if page.params.id === "case-studies"}
  <CaseStudies />
{/if}

<HistoryNavigation bind:currentId={page.params.id} />
