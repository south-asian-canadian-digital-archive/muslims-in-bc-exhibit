<script lang="ts">
  import { navItems } from "$lib/utils/nav.store.svelte";
  import DomeThing from "$lib/components/DomeThing.svelte";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";

  let historyPages = navItems[2].pages?.slice(1) || [];
  let hoveredTag = $state(-1);
</script>

<div
  class="bg-secondary-yellow px-32 mb-10 pt-14 pb-4 h-[70vh] flex justify-evenly relative overflow-hidden"
>
  <div
    class="absolute bg-tertiary-green rounded-lg h-1 w-[80%] top-[5rem]"
  ></div>

  {#each historyPages as item, i}
    <div
      class="flex flex-col items-center h-full transition-all duration-500 ease-in-out"
      class:opacity-50={hoveredTag !== -1 && hoveredTag !== i
        ? true
        : hoveredTag === i
          ? false
          : $page.url.pathname !== "/history/introduction" &&
            $page.url.pathname !== "/resources" &&
            item.path !== $page.url.pathname}
    >
      <div
        class="rounded-full bg-primary-blue w-12 min-h-12 aspect-square z-10"
></div>

      <div class="flex flex-col font-bold text-h6 text-center h-10 pt-4">
        <p>{item.name}</p>
        <p>{item.years}</p>
      </div>

      <button
        onclick={() => goto(item.path)}
        onmouseenter={() => (hoveredTag = i)}
        onmouseleave={() => (hoveredTag = -1)}
        class:pt-16={hoveredTag !== -1 && hoveredTag !== i
          ? true
          : hoveredTag === i
            ? false
            : item.path !== $page.url.pathname}
        class="scale-[70%] transition-all duration-500 ease-in-out"
      >
        <DomeThing />
      </button>
    </div>
  {/each}
</div>
