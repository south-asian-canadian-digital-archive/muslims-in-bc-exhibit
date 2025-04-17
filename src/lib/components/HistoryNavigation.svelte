<script lang="ts">
  import { base } from "$app/paths";
  import { Button } from "$lib/components/ui/button";
  import * as Icon from "svelte-radix";
  import { historyEntries } from "$lib/content/nav";

  let { currentId = $bindable() }: { currentId: string | null } = $props();

  let currentIndex = $derived(
    historyEntries.findIndex((entry) => entry.id === currentId)
  );

  let prevUrl = $derived(
    currentId
      ? currentIndex - 1 >= 0
        ? `${base}/history/${historyEntries[currentIndex - 1].id}`
        : `${base}/history`
      : null
  );
  let nextUrl = $derived(
    currentId
      ? currentIndex + 1 <= historyEntries.length - 1
        ? `${base}/history/${historyEntries[currentIndex + 1].id}`
        : null
      : `${base}/history/${historyEntries[0].id}`
  );
</script>

<div class="fixed inset-0 pointer-events-none z-10">
  {#if prevUrl !== null}
    <a
      href={prevUrl}
      class="pointer-events-auto fixed left-0 top-1/2 -translate-y-1/2"
      aria-label="Previous section"
    >
      <Button variant="outline" class="shadow-md w-1 h-fit rounded-l-none bg-secondary-yellow">
        <span class="whitespace-normal my-2 uppercase leading-4">back</span>
      </Button>
    </a>
  {/if}

  {#if nextUrl !== null}
    <a
      href={nextUrl}
      class="pointer-events-auto fixed right-0 top-1/2 -translate-y-1/2"
      aria-label="Next section"
    >
      <Button variant="outline" class="w-1 h-fit shadow-md rounded-r-none bg-secondary-yellow">
        <span class="my-2 whitespace-normal uppercase leading-4">Next</span>
      </Button>
    </a>
  {/if}
</div>
