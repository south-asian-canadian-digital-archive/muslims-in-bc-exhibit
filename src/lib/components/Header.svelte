<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { fade, scale, slide } from "svelte/transition";
  import { navItems, curTab } from "$lib/utils/nav.store.svelte";
  import Dropdown from "$lib/components/Dropdown.svelte";
  import { base } from "$app/paths";

  let mobileNavButtonWidth: number = $state(0);

  let mobileNavOpen = $state(false);

  // run(() => {
  //   mobileNavButtonWidth;
  // });
</script>

<nav
  class="sticky top-0 z-[9999] lg:h-24 md:h-24 lg:px-32 p-4 flex lg:flex-row md:flex-row flex-col items-center justify-between text-primary-black text-sm font-bold font-martel border-b-2 border-b-[#E3E7AF] bg-white"
>
  <div class="w-full md:w-fit md:max-w-[30vw]">
    <div
      class="lg:h-20 md:h-20 lg:w-fit md:w-fit w-[80vw] aspect-auto flex gap-4 pr-14 flex-row items-center"
    >
      <img src="{base}/UFV_SASI_logo.png" class="h-auto w-1/2" alt="" />
      <img src="{base}/ufv-logo.png" class="h-auto w-1/2" alt="" />
    </div>

    <button
      class="lg:hidden md:hidden bg-[#F99D2A] py-10 px-8 absolute right-4 top-0"
      bind:clientWidth={mobileNavButtonWidth}
      onclick={() => (mobileNavOpen = !mobileNavOpen)}
    >
      {#if mobileNavOpen}
        <span class="fa fa-times scale-150"></span>
      {:else}
        <span class="fa fa-bars scale-150"></span>
      {/if}
    </button>
  </div>

  {#if mobileNavButtonWidth == 0 || mobileNavOpen}
    <div
      transition:slide
      class="flex lg:flex-row md:flex-row flex-col gap-8 md:gap-8 items-center lg:pt-0 pt-6 lg:mt-0 mt-4 md:border-0 border-t-2 border-t-[#E3E7AF]"
    >
      {#each navItems as item}
        {#if item.pages}
          <Dropdown
            options={item.pages.map((i) => i.name)}
            on:change={(e) => {
              item.pages?.forEach((element) => {
                if (element.name === e.detail.value) {
                  mobileNavOpen = false;
                  goto(element.path || ".");
                }
              });
            }}
          >
            <span
              class="inline-flex flex-col gap-0 hover:-translate-y-1 transition-all ease-in-out duration-300 whitespace-nowrap break-keep"
            >
              {item.name}
              <span
                class="h-2 w-[150%] -mt-2 border-x-2 border-b-2 -ml-2"
                class:border-white={!$page.url.pathname.includes("/history/")}
                class:border-secondary-yellow={$page.url.pathname.includes(
                  "/history/"
                )}>&nbsp;</span
              >
            </span>
          </Dropdown>
        {:else}
          <button
            class="flex flex-col gap-0 items-center hover:-translate-y-1 transition-all ease-in-out duration-300 whitespace-nowrap"
            class:font-extrabold={$page.url.pathname === item.path}
            onclick={() => {
              mobileNavOpen = false;
              // item.name === "Contact"
              //   ? item.path && window.open(item.path, "_blank")
              //   : goto(item.path || ".");
              goto(item.path || ".");
            }}
          >
            {item.name}
            <span
              transition:slide
              class="h-2 w-[120%] -mt-2 border-x-2 border-b-2"
              class:border-white={$page.url.pathname !== item.path}
              class:border-secondary-yellow={$page.url.pathname === item.path}
              >&nbsp;</span
            >
          </button>
        {/if}
      {/each}
    </div>
  {/if}
</nav>
