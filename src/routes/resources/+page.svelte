<script>
  import HistoryTimeline from "$lib/components/HistoryTimeline.svelte";
  import Arrow from "$lib/components/Arrow.svelte";
</script>

<main class="p-32 w-screen flex flex-col gap-10">
  <p class="text-h2 font-bold text-primary-blue">Resources</p>

  <div class="flex flex-col gap-16 *:w-full *:grid *:grid-cols-12">
    <section>
      <h2>Husain Rahim</h2>
      <div class="flex flex-col">
        <b class="pb-4">Exhibit:</b>
        <div
          class="flex text-left items-center justify-between p-14 border-y-2 border-secondary-yellow hover:bg-secondary-yellow transition-all ease-in-out duration-300"
        >
          <span class="text-body">
            Exhibit done by SACDA on the Komagata Maru, where Husain Rahim is
            discussed more intensively.
          </span>

          <a
            href="https://sacda.ca/exhibits/km/english/bio/bio99.php"
            class="hover:scale-110 transition-all ease-in-out duration-200"
          >
            <Arrow></Arrow>
          </a>
        </div>

        <b class="pt-16 pb-4">Images:</b>

        <div
          class="flex text-left items-center justify-between p-14 border-y-2 border-secondary-yellow hover:bg-secondary-yellow transition-all ease-in-out duration-300"
        >
          <span class="text-body"> Husain Rahim mugshot </span>

          <a
            href="https://sacda.ca/Detail/objects/11178"
            class="hover:scale-110 transition-all ease-in-out duration-200"
          >
            <Arrow></Arrow>
          </a>
        </div>

        <div
          class="flex text-left items-center justify-between p-14 border-b-2 border-secondary-yellow hover:bg-secondary-yellow transition-all ease-in-out duration-300"
        >
          <span class="text-body">
            Group photo of Husain Rahim and five unidentified individuals in
            front of the Immigrational Hall in Victoria, BC
          </span>

          <a
            href="https://sacda.ca/Detail/objects/11177"
            class="hover:scale-110 transition-all ease-in-out duration-200"
          >
            <Arrow></Arrow>
          </a>
        </div>

        <div
          class="flex text-left items-center justify-between p-14 border-b-2 border-secondary-yellow hover:bg-secondary-yellow transition-all ease-in-out duration-300"
        >
          <span class="text-body">
            Statement given to Immigration officers by informers and their
            friends
          </span>

          <a
            href="https://sacda.ca/Detail/objects/9518"
            class="hover:scale-110 transition-all ease-in-out duration-200"
          >
            <Arrow></Arrow>
          </a>
        </div>
      </div>
    </section>
  </div>
</main>

<HistoryTimeline />

<style type="postcss">
  section > h2 {
    @apply text-h4 col-span-3;
  }
  section > div {
    @apply col-span-9 pt-5 pl-8;
  }
</style>
