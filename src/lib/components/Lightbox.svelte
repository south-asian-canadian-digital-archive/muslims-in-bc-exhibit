<script lang="ts">
  import { dialogImageSrc, dialogOpen, dialogImageCaption } from "$lib/utils/stores";
  import * as Dialog from "$lib/components/ui/dialog";
  import { ScrollArea } from "$lib/components/ui/scroll-area";
</script>

<Dialog.Root bind:open={$dialogOpen}>
  <Dialog.Content class="z-90 max-w-[80vw]! aspect-auto">
    <ScrollArea class="max-h-[90vh] object-contain relative">
      <img src={$dialogImageSrc?.toString()} alt="" class="w-full h-full object-contain" />

      {#if $dialogImageCaption}
        <div class="absolute bottom-4 right-4 max-w-sm">
          <div class="backdrop-blur-md bg-black/30 text-white p-3 rounded-lg shadow-lg">
            <div class="text-sm leading-relaxed [&_a]:text-blue-300 [&_a]:underline [&_a:hover]:text-blue-200">
              {@html $dialogImageCaption}
            </div>
          </div>
        </div>
      {/if}

    </ScrollArea>
  </Dialog.Content>
</Dialog.Root>
