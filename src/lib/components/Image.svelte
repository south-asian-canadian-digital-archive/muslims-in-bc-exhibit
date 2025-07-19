<script lang="ts">
  import { base } from "$app/paths";
  import type { HTMLAttributes } from "svelte/elements";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import {
    dialogImageSrc,
    dialogOpen,
    dialogImageCaption,
  } from "$lib/utils/stores";

  interface Props extends HTMLAttributes<HTMLButtonElement> {
    src?: string;
    alt?: string;
    float?: "left" | "right" | "bottom";
    children?: import("svelte").Snippet;
  }

  let {
    src = "",
    alt = "",
    float = "right",
    children,
    ...args
  }: Props = $props();

  let figcaptionElement: HTMLElement | null = $state(null);

  function openLightbox() {
    $dialogOpen = true;
    $dialogImageSrc = `${base}${src}`;

    const captionHtml = figcaptionElement?.innerHTML?.trim() || alt || null;
    $dialogImageCaption = captionHtml;
  }
</script>

<button
  onclick={openLightbox}
  class="md:p-6 pb-6 {args?.class}"
  class:pr-0={float === "right"}
  class:md:float-right={float === "right"}
  class:pl-0={float === "left"}
  class:md:float-left={float === "left"}
>
  <figure>
    <img 
      src={`${base}${src}`} 
      {alt} 
      class="object-cover h-full w-auto max-w-full" 
      loading="lazy"
      decoding="async"
    />
    {#if children}
      <figcaption
        bind:this={figcaptionElement}
        class="text-center mt-2 text-xs"
      >
        {@render children?.()}
      </figcaption>
    {/if}
  </figure>
</button>
