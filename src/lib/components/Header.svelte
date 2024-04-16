<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { fade, scale, slide } from "svelte/transition";
  import { navItems, curTab } from "$lib/utils/nav.store";
  import Dropdown from "$lib/components/Dropdown.svelte";

  let mobileNavButtonWidth: number;

  $: mobileNavOpen = false;

  $: {
    mobileNavButtonWidth;
  }

  $: console.log($page.url.pathname);
</script>

<nav
  class="sticky top-0 lg:h-24 md:h-24 px-32 flex lg:flex-row md:flex-row flex-col items-center justify-between text-primary-black font-bold font-martel border-b-2 border-b-[#E3E7AF] bg-white"
>
  <div class="w-full lg:w-fit md:w-fit">
    <div></div>

    <button
      class="lg:hidden md:hidden bg-[#F99D2A] py-10 px-8 absolute right-10 top-0"
      bind:clientWidth={mobileNavButtonWidth}
      on:click={() => (mobileNavOpen = !mobileNavOpen)}
    >
      {#if mobileNavOpen}
        <span class="fa fa-times scale-150"></span>
      {:else}
        <span class="fa fa-bars scale-150"></span>
      {/if}
    </button>
  </div>

  {#if mobileNavButtonWidth == 0 || mobileNavOpen}
    <div class="flex lg:flex-row md:flex-row flex-col gap-16 items-center">
      {#each navItems as item}
        {#if item.pages}
          <Dropdown
            options={item.pages.map((i) => i.name)}
            on:change={(e) => {
              item.pages?.forEach((element) => {
                if (element.name === e.detail.value) {
                  goto(element.path || ".");
                }
              });
            }}
          >
            <span
              class="inline-flex flex-col gap-0 items-center hover:-translate-y-1 transition-all ease-in-out duration-300"
            >
              {item.name}
              {#if $page.url.pathname.startsWith("/history")}
                <span
                  class="h-2 w-[120%] -mt-2 border-x-2 border-b-2 border-secondary-yellow"
                  >&nbsp;</span
                >
              {/if}
            </span>
          </Dropdown>
        {:else}
          <button
            class="flex flex-col gap-0 items-center hover:-translate-y-1 transition-all ease-in-out duration-300"
            class:font-extrabold={$curTab === item.name}
            on:click={() => goto(item.path || ".")}
          >
            {item.name}
            {#if $page.url.pathname === item.path}
              <span
                transition:slide
                class="h-2 w-[120%] -mt-2 border-x-2 border-b-2 border-secondary-yellow"
                >&nbsp;</span
              >
            {/if}
          </button>
        {/if}
      {/each}
    </div>
  {/if}
</nav>
