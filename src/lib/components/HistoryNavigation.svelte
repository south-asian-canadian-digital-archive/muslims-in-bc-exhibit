<script lang="ts">
  import { base } from "$app/paths";
  import { Button } from "$lib/components/ui/button";
  import * as Icon from "@lucide/svelte";
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
      class="pointer-events-auto fixed left-0 md:top-1/2 md:-translate-y-1/2 top-24 !no-underline"
      aria-label="Previous section"
    >
      <Button
        variant="outline"
        class="shadow-md  md:h-fit w-fit h-8 rounded-l-none bg-secondary-yellow hover:bg-secondary-yellow border border-transparent hover:border-primary-blue md:py-3 flex items-center transition-all duration-100"
      >
        <span
          class="md:whitespace-normal md:my-2 uppercase md:leading-4 md:rotate-0 flex items-center"
        >
          <Icon.ArrowLeft class="h-4 w-4 mr-1" />
          back
        </span>
      </Button>
    </a>
  {/if}

  {#if nextUrl !== null}
    <a
      href={nextUrl}
      class="pointer-events-auto fixed right-0 md:top-1/2 md:-translate-y-1/2 top-24 !no-underline"
      aria-label="Next section"
    >
      <Button
        variant="outline"
        class="md:h-fit w-fit h-8 shadow-md rounded-r-none bg-secondary-yellow hover:bg-secondary-yellow border border-transparent hover:border-primary-blue md:py-3 flex items-center transition-all duration-100"
      >
        <span
          class="md:my-2 md:whitespace-normal uppercase md:leading-4 flex items-center"
        >
          Next
          <Icon.ArrowRight class="h-4 w-4  ml-1" />
        </span>
      </Button>
    </a>
  {/if}
</div>
