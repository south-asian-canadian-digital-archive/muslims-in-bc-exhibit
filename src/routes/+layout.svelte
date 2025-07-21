<script lang="ts">
  import { base } from "$app/paths";

  import "../app.css";
  import 'share-this/dist/share-this.css';
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

  import { fade, fly } from "svelte/transition";
  import { onDestroy, onMount } from "svelte";
  import { navigating } from "$app/state";
  import Lightbox from "$lib/components/Lightbox.svelte";

  import shareThis, { type ShareThisInstance } from "share-this";
  import * as twitterSharer from "share-this/dist/sharers/twitter";
  import * as redditSharer from "share-this/dist/sharers/reddit";
  import * as facebookSharer from "share-this/dist/sharers/facebook";
  import * as emailSharer from "share-this/dist/sharers/email";

  interface Props {
    children?: import("svelte").Snippet;
  }

  let { children }: Props = $props();

  let scrollY = $state(0);
  let firstLoad = $state(true);
  let load = $derived(firstLoad || !navigating);
  let selectionShare: ShareThisInstance | undefined = $state();

  onMount(() => {
    selectionShare = shareThis({
      selector: "#main-container",
      popoverClass: "custom-share-popover",
      sharers: [twitterSharer, facebookSharer, redditSharer, emailSharer],
    });

    selectionShare.init();

    firstLoad = false;
    // load = true;
  });

  onDestroy(() => {
    selectionShare?.destroy();
  });

  let mainuImageUrl = `${base}/content/2021_08_01_040.jpg`;
</script>

<svelte:head>
  <!-- <meta
    name="description"
    content="Discover the rich history, cultural heritage, and significant contributions of South Asian Canadian Muslims in British Columbia. Learn about their journey, challenges, and achievements in this comprehensive exhibit."
  />
  <meta
    name="keywords"
    content="South Asian Canadian Muslims, British Columbia, History, Cultural Heritage, Contributions, Exhibit, Journey, Challenges, Achievements"
  /> -->
  <meta name="author" content="South Asian Studies Institute" />
  <!-- <meta property="og:title" content="South Asian Canadian Muslims in BC" />
  <meta
    property="og:description"
    content="Discover the rich history, cultural heritage, and significant contributions of South Asian Canadian Muslims in British Columbia. Learn about their journey, challenges, and achievements in this comprehensive exhibit."
  /> -->
  <meta property="og:image" content={mainuImageUrl} />
  <!-- <meta property="og:url" content="{base}" /> -->
  <meta name="twitter:card" content="summary_large_image" />
  <!-- <meta name="twitter:title" content="South Asian Canadian Muslims in BC" />
  <meta
    name="twitter:description"
    content="Discover the rich history, cultural heritage, and significant contributions of South Asian Canadian Muslims in British Columbia. Learn about their journey, challenges, and achievements in this comprehensive exhibit."
  /> -->
  <meta name="twitter:image" content={mainuImageUrl} />
</svelte:head>

<svelte:window bind:scrollY />

<Lightbox />

<Header />

<!-- {#key load} -->
<div class="*:mx-auto *:max-w-5xl *:2xl::max-w-7xl" id="main-container">
  <!-- in:fly={{ y: 600, duration: 800 }} -->
  {@render children?.()}
</div>
<!-- {/key} -->
<Footer />

{#if scrollY !== 0}
  <button
    transition:fade
    class="fixed right-6 bottom-6 z-999 rounded-full shadow-lg object-cover bg-secondary-yellow py-0.5 group hover:-translate-y-1 transition-all duration-500"
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
