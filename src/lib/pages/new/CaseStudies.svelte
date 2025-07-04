<script lang="ts">
  import Callout from "$lib/components/Callout.svelte";
  import Image from "$lib/components/Image.svelte";
  import { caseStudies } from "$lib/content/case-studies";
</script>

<main class="py-32 flex flex-col gap-10">
  <h1 class="px-4 lg:px-0 page-title">Case Studies: Hidden Histories</h1>
  <p class="desc-text">
    Due to the lack of archives, we find only small traces of early South Asian muslim
    presence in B.C. For example, a memorandum sent by
    W.C Hopkinson
    to W.W Cory in 1912 indicates that the small number of muslims living in
    Vancouver at that time raised $900 and
    sent it to the "Grand Vizier of
    Turkey" for the "brave soldiers" of
    the Ottoman empire. Similarly, a name,
    Roum Shah, emerged in a 1914 newspaper clipping of The Sun. There is not a
    lot of information available about Roum Shah, but the newspaper clipping
    indicates that he was a co-author of a pamphlet called "The Tyranny of the
    English Militarism".
  </p>

  <!-- <Callout title="Note">
    Need to double check the text and compare with document still
  </Callout> -->

  <div class="flex flex-col gap-16 *:w-full history">
    {#each caseStudies as caseStudy, idxcs}
      <section id={caseStudy.name.toLowerCase().split(" ").join("-")}>
        <h2 class="">
          Case Study {idxcs + 1}: {caseStudy.name}
          {caseStudy.years}
        </h2>
        <div class="">
          {#if caseStudy.img}
            <Image
              src={caseStudy.img}
              alt="Image depicting {caseStudy.name}"
              class="md:w-[30vw]"
              float="right"
            />
          {/if}
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
