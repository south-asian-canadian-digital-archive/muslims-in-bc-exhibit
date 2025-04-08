<script lang="ts">
  interface Props {
    title?: string;
    children?: import("svelte").Snippet;
  }

  let { title = "Note", children }: Props = $props();
</script>

<div class="bg-[#F5F5F5] p-6 rounded-lg mx-4 lg:mx-32 my-8">
  <div class="flex items-start gap-4">
    <div class="text-2xl">💡</div>
    <div class="text-sm">
      <p class="font-medium mb-2">{title}</p>
      <p class="text-gray-600">
        {@render children?.()}
      </p>
    </div>
  </div>
</div>
