<script lang="ts">
  import DomeThing from "$lib/components/DomeThing.svelte";
  import { navItems } from "$lib/utils/nav.store.svelte";
  import Arrow from "$lib/components/Arrow.svelte";
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";

  let curHoveredDome = $state(0);
  let historyPages = navItems[2].pages || [];
  let hoveredTag = $state(-1);

  onMount(() => {
    let domeAnimationTimeline = gsap.timeline({
      repeat: -1,
      onRepeat: () => {
        domeAnimationTimeline.invalidate();
      },
    });
    domeAnimationTimeline.add(
      gsap.to(".dome-bg", {
        backgroundPositionX: "-=10",
        // backgroundPositionY: "+=random(-5, 5)",
        // translateX: "+=10",
        // translateY: "+=random(-5, 5)",
        duration: 5,
        ease: "none",
      })
    );
    domeAnimationTimeline.play();
  });
</script>

<main class="">
  <section class="py-32">
    <div
      class="h-min flex lg:flex-row md:flex-row flex-col gap-5 px-0 w-screen *:lg:w-[50vw] *:md:w-[50vw]"
    >
      <div class="flex flex-col gap-12 lg:pl-32 md:pl-32 pl-4">
        <h1
          class="font-source-serif-4 font-bold text-h2 text-primary-blue leading-[115%]"
        >
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
            aria-label="dome"
            onmouseover={() => (curHoveredDome = i)}
            onmouseleave={() => (curHoveredDome = 0)}
            onfocus={() => {}}
          >
            <div
              class="bg-[url('/pattern.svg')] bg-repeat h-full w-screen dome-bg will-change-auto"
            ></div>
          </button>
        {/each}
      </div>
    </div>
  </section>

  <section class="">
    <div class="flex flex-col items-center">
      <h2 class="text-h2 font-bold text-secondar-teal translate-y-1/3">
        Historical Timeline
      </h2>

      <div class="flex flex-row justify-evenly w-full translate-y-1/3">
        {#each historyPages.slice(1) as item, i}
          <button
            class="aspect-square rounded-full w-[20vw] flex items-center justify-center border-[10px] border-secondary-yellow bg-white transition-all duration-500 ease-in-out"
            onclick={() => goto(item.path)}
            onmouseenter={() => (hoveredTag = i)}
            onmouseleave={() => (hoveredTag = -1)}
            class:translate-y-[10%]={hoveredTag !== -1 && hoveredTag !== i
              ? true
              : hoveredTag === i
                ? false
                : item.path !== $page.url.pathname}
          >
            <h6 class="text-p font-bold text-center">
              {item.name} <br />
              {item.years}
            </h6>
          </button>
        {/each}
      </div>
    </div>

    <div class="bg-secondary-yellow flex flex-col pt-[25vh]">
      <div class="bg-[url('/pattern.svg')] min-h-32 w-full bg-repeat-x">
        &nbsp;
      </div>
    </div>
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
