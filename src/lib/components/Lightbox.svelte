<script lang="ts">
  import { dialogImageSrc, dialogOpen } from "$lib/utils/stores";
  import * as Dialog from "$lib/components/ui/dialog";
  import { ScrollArea } from "$lib/components/ui/scroll-area";
</script>

<Dialog.Root bind:open={$dialogOpen}>
  <Dialog.Content class="z-90">
    <ScrollArea class="h-full w-full max-h-[80vh]">
      <img src={$dialogImageSrc?.toString()} alt="" class="w-full h-full" />
    </ScrollArea>
  </Dialog.Content>
</Dialog.Root>
