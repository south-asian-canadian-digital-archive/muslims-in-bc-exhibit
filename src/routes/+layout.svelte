<script lang="ts">
  import { run } from 'svelte/legacy';

  import "../app.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

  import { fade, fly } from "svelte/transition";
  import { onMount } from "svelte";
  import { page, navigating } from "$app/stores";
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();

  let scrollY = $state(0);
  let firstLoad = $state(true);
  let load = $derived(firstLoad || !$navigating);

  onMount(() => {
    firstLoad = false;
    // load = true;
  });

</script>

<svelte:head>
  <title>South Asian Muslims in BC</title>
</svelte:head>

<svelte:window bind:scrollY />

<Header />

{#key load}
  <div in:fly={{ y: 600, duration: 800 }}>
    {@render children?.()}

  </div>
{/key}
 <Footer />

{#if scrollY !== 0}
  <button
    transition:fade
    class="fixed right-6 bottom-6 z-[999] rounded-full object-cover bg-secondary-yellow py-0.5 group hover:-translate-y-1 transition-all duration-500"
    aria-label="yuh"
    onclick={() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }}
  >
    <span
      class="fa fa-angle-left rotate-90 py-4 px-5 group-hover:scale-110 transition-all duration-500"
    ></span>
  </button>
{/if}
