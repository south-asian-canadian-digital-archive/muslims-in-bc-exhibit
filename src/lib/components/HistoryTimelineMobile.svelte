<script lang="ts">
  import { navItems } from "$lib/content/nav";
  import { goto } from "$app/navigation";

  let historyPages = navItems[2].pages?.slice(1) || [];
</script>

<div class="px-4 mb-10 pt-14 pb-4 h-[70vh] flex relative overflow-hidden">
  <div class="absolute bg-secondar-teal rounded-lg w-3 h-[80%] left-4"></div>

  <div class="flex flex-col gap-4 w-full justify-around">
    {#each historyPages as item, i}
      {#if item.years}
        <div>
          <div class="rounded-lg mx-8 flex flex-col justify-center text-center">
            <div
              class="absolute w-[90vw] bg-secondar-teal left-4 h-1 rounded-lg"
            >
              &nbsp;
            </div>

            <button
              class="bg-secondary-yellow rounded-lg w-full p-2 font-bold flex flex-col z-10"
              onclick={() => goto(item.path)}
            >
              {item.name}
              <span class="text-tertiary-green">{item.years}</span>
            </button>
          </div>
          <p class="pt-2 text-xs mx-8 text-center">{item.desc}</p>
        </div>
      {/if}
    {/each}
  </div>
</div>
