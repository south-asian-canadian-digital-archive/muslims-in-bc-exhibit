<script>
  import "../app.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

  import { fade, fly } from "svelte/transition";
  import { onMount } from "svelte";
  import { page, navigating } from "$app/stores";

  let scrollY = 0;
  let load = false;
  let firstLoad = true;

  $: if ($navigating) {
    load = false;
  } else {
    if (!firstLoad) load = true;
  }

  onMount(() => {
    firstLoad = false;
    load = true;
  });
</script>

<svelte:head>
  <title>South Asian Muslims in BC</title>
</svelte:head>

<svelte:window bind:scrollY />

<Header />

{#key load}
  <div in:fly={{ y: 600, duration: 800 }}>
    <slot />

  </div>
  {/key}
 <!-- <Footer /> -->

{#if scrollY !== 0}
  <button
    transition:fade
    class="fixed right-6 bottom-6 z-[999] rounded-full object-cover bg-secondary-yellow py-0.5 group hover:-translate-y-1 transition-all duration-500"
    on:click={() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }}
  >
    <span
      class="fa fa-angle-left rotate-90 py-4 px-5 group-hover:scale-110 transition-all duration-500"
    ></span>
  </button>
{/if}
