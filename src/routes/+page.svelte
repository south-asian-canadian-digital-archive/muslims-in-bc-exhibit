<script lang="ts">
  import DomeThing from "$lib/components/DomeThing.svelte";
  import { navItems } from "$lib/utils/nav.store";
  import Arrow from "$lib/components/Arrow.svelte";

  let curHoveredDome = 0;
  let historyPages = navItems[2].pages || [];
</script>

<main class="">
  <section class="h-screen pt-20">

    <div class="h-min flex lg:flex-row md:flex-row flex-col gap-5 px-0 w-screen *:lg:w-[50vw] *:md:w-[50vw]">

      <div class="flex flex-col gap-12 lg:pl-32 md:pl-32 pl-4">
        <h1 class="font-source-serif-4 font-bold text-h2 text-primary-blue leading-[115%]">
          South Asian Muslims in British Columbia
        </h1>

        <div
          class="border-l-[6px] border-l-secondary-yellow flex flex-col pl-8 gap-6"
        >
          <p>
            The South Asian Muslims in British Columbia digital exhibit sheds
            light on the often obscured and misrepresented historical and
            contemporary presence of Muslim communities in Canada, focusing on
            South Asian Muslim communities of B.C. Through archival records,
            academic works, and personal interviews, we aim to highlight their
            profound contributions to Canadian society and promote deeper
            appreciation and understanding.
          </p>
          <button
            class="bg-primary-blue py-4 px-12 rounded-full text-white w-fit"
            >Explore</button
          >
        </div>
      </div>

      <div class="flex gap-4 pr-32">
        {#each { length: 2 } as _, i}
          <button
            class="bg-secondar-teal rounded-xl p-2 min-h-[60vh] w-[30%] transition-all ease-in-out duration-500 dome"
            class:w-[70%]={curHoveredDome === i}
            on:mouseover={() => (curHoveredDome = i)}
            on:mouseleave={() => (curHoveredDome = 0)}
            on:focus
          >
            <div class="bg-[url('/pattern.svg')] bg-repeat h-full"></div>
          </button>
        {/each}
      </div>

    </div>

  </section>

  <section class="bg-secondary-yellow pl-32 flex justify-between">
    <div class="w-1/2 py-40 flex flex-col gap-5">
      <h2 class="text-h2 font-bold">About the Project</h2>
      <p>
        The historical and contemporary presence of Muslim communities in
        Canada, particularly South Asian Muslims in B.C., has often been
        obscured. Our research project focuses on their contributions and covers
        three major timelines: early migration to BC, mid-20th-century
        migration, and recent migration to Canada. Exploring the diverse sects
        and cultural integration of Islam, including Sunni sub-sects like
        Wahabi, Salafi, Barelvi, and Deobandi, as well as Shia sub-sects like
        Twelver Shi'ism and Ismailism, along with Sufism, we aim to promote
        understanding and welcome feedback for future enhancements.

        <br /> <br />To learn more, please refer to the timeline provided below.
      </p>
    </div>

    <div class="bg-[url('/pattern.svg')] w-[30vw] bg-repeat-y">&nbsp;</div>
  </section>

  <section class="flex flex-col py-40 px-32 gap-10">
    <h2 class="text-h2 font-bold">Historical Timeline</h2>

    <div class="flex flex-col">
      {#each historyPages as item, i}
        <div
          class="flex text-left items-center justify-between p-14 first:border-t-2 border-b-2 border-secondary-yellow hover:bg-secondary-yellow transition-all ease-in-out duration-300"
        >
          <span class="text-h6 font-bold w-[30%]"
            >{`0${i + 1}. `}{item.name}</span
          >

          <span class="text-body w-[50%]">{item.desc}&nbsp;</span>

          <a
            href={item.path}
            class="hover:scale-110 transition-all ease-in-out duration-200"
          >
            <Arrow></Arrow>
          </a>
        </div>
      {/each}
    </div>
  </section>
</main>
