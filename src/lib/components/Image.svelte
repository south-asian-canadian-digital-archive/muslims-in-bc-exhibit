<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLSpanElement> {
    src?: string;
    alt?: string;
    children?: import('svelte').Snippet;   
  }

  let { src = "", alt = "", children, ...args }: Props = $props();
</script>

<span class="flex flex-col gap-4 {args?.class}">
  <img {src} {alt} class="border-b-[8px] border-primary-blue h-80 object-cover" />

  <span class="text-small">{@render children?.()}</span>
</span>
