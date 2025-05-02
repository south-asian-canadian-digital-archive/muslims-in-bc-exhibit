<script lang="ts">
  import { base } from "$app/paths";
  import type { HTMLAttributes } from "svelte/elements";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import { dialogImageSrc, dialogOpen } from "$lib/utils/stores";

  interface Props extends HTMLAttributes<HTMLSpanElement> {
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
</script>

<!-- <Tooltip.Provider> -->
<!-- <Tooltip.Root openDelay={300}>
    <Tooltip.Trigger
      onclick={() => {
        $dialogOpen = true;
        $dialogImageSrc = `${base}${src}`;
      }}
    > -->

<button
  onclick={() => {
    $dialogOpen = true;
    $dialogImageSrc = `${base}${src}`;
  }}
  class="p-6 {args?.class}"
  class:pr-0={float === "right"}
  class:float-right={float === "right"}
  class:pl-0={float === "left"}
  class:float-left={float === "left"}
>
  <figure>
    <img src={`${base}${src}`} {alt} />
    <figcaption class="text-center mt-2 text-xs">
      {@render children?.()}
    </figcaption>
  </figure>
</button>
<!-- </Tooltip.Trigger>

    <Tooltip.Content>
      <span>Click to expand</span>
    </Tooltip.Content>
  </Tooltip.Root> -->
<!-- </Tooltip.Provider> -->
