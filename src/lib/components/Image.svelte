<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  interface Props extends HTMLAttributes<HTMLSpanElement> {
    src?: string;
    alt?: string;
    float?: "left" | "right";
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

<figure
  class="m-6 {args?.class}"
  class:float-right={float === "right"}
  class:float-left={float === "left"}
>
  <img {src} {alt} />
  <figcaption class="text-center mt-2">{@render children?.()}</figcaption>
</figure>
