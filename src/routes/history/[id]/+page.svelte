<script lang="ts">
  import { page } from "$app/stores";
  import Introduction from "$lib/pages/Introduction.svelte";
  import EarlyMigration from "$lib/pages/EarlyMigration.svelte";
  import Mid20thCentuaryMigration from "$lib/pages/Mid20thCentuaryMigration.svelte";
  import RecentMigration from "$lib/pages/RecentMigration.svelte";

  const pageMap = {
    introduction: Introduction,
    "early-migration": EarlyMigration,
  };
</script>

{#if $page.params.id === "introduction"}
  <Introduction />
{:else if $page.params.id === "early-migration"}
  <EarlyMigration />
{:else if $page.params.id === "mid-20th-century-migration"}
  <Mid20thCentuaryMigration />
{:else if $page.params.id === "recent-migration"}
  <RecentMigration />
{:else}
  <div class="h-screen w-screen flex items-center justify-center text-h1">
    Page not found
  </div>
{/if}
