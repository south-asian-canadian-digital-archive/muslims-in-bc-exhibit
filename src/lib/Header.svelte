<script lang="ts">
  import { goto } from "$app/navigation";
  import { scale, slide } from "svelte/transition";

  function searchButton() {}

  let search = "";
  let mobileNavButtonWidth: number;

  $: mobileNavOpen = false;

  $: {
    mobileNavButtonWidth;
  }
</script>

<nav
  class="lg:h-24 md:h-24 px-10 flex lg:flex-row md:flex-row flex-col items-center justify-between text-primary-black font-semibold font-martel border-b-2 border-b-[#E3E7AF]"
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
    <ul class="flex lg:flex-row md:flex-row flex-col gap-16 items-center">
      <li class="nav-item">
        <a class="nav-link" href="https://sacda.ca/index.php/Browse/objects"
          >BROWSE
        </a>
      </li>
    </ul>
  {/if}
</nav>
