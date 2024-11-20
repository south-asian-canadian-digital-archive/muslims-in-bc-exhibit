<script lang="ts">
  import { page } from "$app/stores";
  import Introduction from "$lib/pages/Introduction.svelte";
  import EarlyMigration from "$lib/pages/EarlyMigration.svelte";
  import Mid20thCentuaryMigration from "$lib/pages/Mid20thCentuaryMigration.svelte";
  import RecentMigration from "$lib/pages/RecentMigration.svelte";
  import HistoryTimeline from "$lib/components/HistoryTimeline.svelte";
</script>

<svelte:head>
  <title
    >{$page.params.id
      .split("-")
      .map((x) => `${x[0].toUpperCase()}${x.slice(1)}`)
      .join(" ")} | South Asian Muslims in BC</title
  >
</svelte:head>

{#if $page.params.id === "introduction"}
  <Introduction />
{:else if $page.params.id === "early-migration"}
  <EarlyMigration />
{:else if $page.params.id === "mid-20th-century-migration"}
  <Mid20thCentuaryMigration />
{:else if $page.params.id === "recent-migration-to-canada"}
  <RecentMigration />
{/if}

<!-- <HistoryTimeline /> -->
