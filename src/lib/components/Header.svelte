<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  import { slide } from "svelte/transition";
  import { navItems } from "$lib/content/nav";
  import { base } from "$app/paths";

  import Button from "./ui/button/button.svelte";

  let mobileNavButtonWidth: number = $state(0);
  let mobileNavOpen = $state(false);

  let expandedItem: string | null = $state(null);
  let dropdownContainer: HTMLElement | null = $state(null);
  let mobileNavContainer: HTMLElement | null = $state(null);
  let headerElement: HTMLElement | null = $state(null);

  function toggleExpand(itemName: string) {
    expandedItem = expandedItem === itemName ? null : itemName;
  }
  function closeExpanded() {
    expandedItem = null;
  }
  function closeMobileNav() {
    mobileNavOpen = false;
  }
  function isItemActive(item: any) {
    const currentPath = page.url.pathname;
    if (currentPath === item.path) return true;
    if (item.pages && item.pages.some((page: any) => currentPath === page.path))
      return true;
    return false;
  }
  function setupClickOutside(node: HTMLElement, callback = closeExpanded) {
    const handleClick = (event: MouseEvent) => {
      if (
        node &&
        !node.contains(event.target as Node) &&
        headerElement &&
        !headerElement.contains(event.target as Node)
      ) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClick, true);
    return {
      destroy() {
        document.removeEventListener("mousedown", handleClick, true);
      },
    };
  }
</script>

<nav
  bind:this={headerElement}
  class="sticky top-0 z-60 flex flex-col items-center bg-white border-b-2 border-b-[#E3E7AF]"
>
  <div
    class="min-h-24 px-4 mx-auto max-w-6xl xl:max-w-7xl flex lg:flex-row flex-col w-full lg:items-center justify-between text-primary-black text-sm font-bold font-martel overflow-x-hidden"
  >
    <div class="lg:max-w-[25vw] h-full">
      <a
        href="{base}/"
        onclick={(e) => {
          e.preventDefault();
          goto("/");
        }}
      >
        <div
          class="lg:h-20 h-24 w-fit aspect-auto flex gap-2 pr-4 flex-row items-center"
        >
          <!-- <House class="w-8 h-8" /> -->

          <img
            src="{base}/UFV_SASI_logo.png"
            class="h-auto w-1/2 lg:max-w-[40vw]"
            alt=""
          />
          <!-- <img
            src="{base}/ufv-logo.png"
            class="h-auto w-1/2 max-w-[40vw]"
            alt=""
          />  -->
        </div>
      </a>
    </div>

    <button
      class="lg:hidden bg-[#F99D2A] py-8 px-6 absolute right-2 top-0 z-10"
      bind:clientWidth={mobileNavButtonWidth}
      onclick={() => (mobileNavOpen = !mobileNavOpen)}
    >
      {#if mobileNavOpen}
        <span class="fa fa-times scale-125"></span>
      {:else}
        <span class="fa fa-bars scale-125"></span>
      {/if}
    </button>

    {#if mobileNavButtonWidth == 0 || mobileNavOpen}
      <div
        bind:this={mobileNavContainer}
        use:setupClickOutside={closeMobileNav}
        transition:slide
        class="flex flex-wrap justify-center w-full lg:w-auto gap-6 lg:gap-8 items-center lg:py-0 py-6 md:mt-0 mt-4 lg:border-0 border-t-2 border-t-[#E3E7AF] overflow-x-hidden"
      >
        {#each navItems as item, idxi}
          {#if idxi === navItems.length - 1}
            <Button
              class="bg-secondary-teal"
              onclick={() => {
                if (item.pages) {
                  toggleExpand(item.name);
                } else {
                  closeExpanded();
                  mobileNavOpen = false;
                  goto(item.path || ".");
                }
              }}>{item.name}</Button
            >
          {:else}
            <div
              class="inline-flex flex-col items-center relative border-b-2 cursor-pointer hover:border-b-secondary-yellow transition-all ease-in-out duration-150 {isItemActive(
                item
              )
                ? 'border-b-secondary-yellow'
                : 'border-b-transparent'}"
            >
              <button
                class="flex flex-col gap-0 items-center whitespace-nowrap cursor-pointer"
                class:font-extrabold={isItemActive(item)}
                onclick={() => {
                  if (item.pages) {
                    toggleExpand(item.name);
                  } else {
                    closeExpanded();
                    mobileNavOpen = false;
                    goto(item.path || ".");
                  }
                }}
              >
                <span class="inline-flex items-center gap-1">
                  {item.name}
                  {#if item.pages}
                    <span
                      class="fa fa-angle-down ease-in-out duration-200 transform select-none"
                      class:-rotate-180={expandedItem === item.name}
                    ></span>
                  {/if}
                </span>
              </button>
            </div>
          {/if}
        {/each}
      </div>
    {/if}
  </div>

  {#if expandedItem && (mobileNavButtonWidth == 0 || mobileNavOpen)}
    <div
      bind:this={dropdownContainer}
      use:setupClickOutside
      transition:slide
      class="w-full bg-white border-b-2 border-b-[#E3E7AF] flex justify-center py-4 px-2 md:px-8 shadow-xs overflow-x-hidden md:h-48"
    >
      <div class="flex flex-wrap gap-4 md:gap-6 justify-center items-center">
        {#each navItems.find((item) => item.name === expandedItem)?.pages || [] as subpage, idx (`${subpage.name}-${idx}`)}
          <button
            class="text-primary-black py-2 px-3 md:px-4 hover:bg-gray-100 rounded transition-colors whitespace-normal md:whitespace-nowrap text-xs md:text-sm flex items-center gap-1 md:gap-2 h-fit"
            class:font-bold={page.url.pathname === subpage.path}
            class:bg-gray-100={page.url.pathname === subpage.path}
            onclick={() => {
              mobileNavOpen = false;
              expandedItem = null;
              goto(subpage.path || ".");
            }}
          >
            {subpage.name}
            {#if subpage.years}
              <span class="text-xs text-gray-500">({subpage.years})</span>
            {/if}
          </button>
        {/each}
      </div>
    </div>
  {/if}
</nav>
