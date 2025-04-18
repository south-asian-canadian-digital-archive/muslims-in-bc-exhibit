<script lang="ts">
  import Callout from "$lib/components/Callout.svelte";
  import Image from "$lib/components/Image.svelte";
  import { caseStudies } from "$lib/content/case-studies";
</script>

<main class="py-32 mx-auto max-w-7xl flex flex-col gap-10">
  <h1
    class="lg:px-32 px-4 text-h2 font-bold text-primary-blue font-source-serif-4 leading-[1.15]"
  >
    Case Studies: Hidden Histories
  </h1>
  <p class="desc-text">
    Due to the lack of archives, we find only small traces of early South Asian
    muslim presence in B.C. For example, a memorandum sent by W.C Hopkinson to
    W.W Cory in 1912 indicates that the small number of muslims living in
    Vancouver at that time raised 900$ and sent it to the “Grand Vizier of
    Turkey” for the “brave soldiers” of the Ottoman empire . Similarly, a name,
    Roum Shah, emerged in a 1914 newspaper clipping of The Sun. There is not a
    lot of information available about Roum Shah. A newspaper clipping from the
    April 23, 1914 issue of The Sun indicates that Roum Shah was the co-author
    of a pamphlet, “The Tyranny of the English Militarism.” He wrote this
    pamphlet to protest the forceful deportation of a prominent Ghaddar Party
    member, Bhagwan Singh, from Vancouver/Victoria to Hong Kong.
    <br /><br />
    When the ship <a href="https://sacda.ca/exhibits/km/index.php">Komagata Maru</a> landed on the shores of Vancouver in 1914, around
    24 muslims were estimated to be on board. The well documented story of one of
    these muslim passengers, Barkatullah, indicates how bravely they were all fighting
    against the imperial world order of their times. The Shore committee formed to
    support and collect funds for Komagata Maru passengers also included muslim figures
    like Muhammad Akbar.
  </p>

  <!-- TODO -->
  <Callout title="Note">
    Need to double check the text and compare with document still
  </Callout>

  <div class="flex flex-col gap-16 *:w-full history">
    {#each caseStudies as caseStudy, idxcs}
      <section id={caseStudy.name.toLowerCase().split(" ").join("-")}>
        <h2 class="">
          Case Study {idxcs + 1}: {caseStudy.name}
          {caseStudy.years}
        </h2>
        <div class="">
          {@html caseStudy.desc}
        </div>
      </section>
    {/each}

    <!-- <section>
      <h2 class=""></h2>
      <div class="">
      </div>
    </section> -->
  </div>
</main>
