<script lang="ts">
  import { navItems } from "$lib/utils/nav.store.svelte";
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { horizontalLoop } from "$lib/utils/seemlessLoop.util";

  let curHoveredDome = $state(0);
  let historyPages = navItems[2].pages || [];
  let hoveredTag = $state(-1);
  // const scrollImagesContent = [];
  let loop: gsap.core.Timeline;
  let navTweens: gsap.core.Tween[] = $state([]);
  let prefix = "history-page-nav";

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

    let scrollingImageDivs = gsap.utils.toArray("#carousel > div");
    loop = horizontalLoop(scrollingImageDivs, {
      center: true,
      repeat: -1,
      speed: 0.5,
    });

    historyPages.slice(1).forEach((e, i) => {
      navTweens.push(
        gsap.to(`button#${prefix}-${i}`, {
          zIndex: 999,
          color: "white",
          scale: 50,
          duration: 0.5,
          ease: "power4.in",
          paused: true,
          onComplete: () => {
            setTimeout(() => {
              goto(e.path);
            }, 400);
          },
        })
      );
    });
  });
</script>

<svelte:head>
  <title>South Asian Muslims in BC</title>
</svelte:head>

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
          class="border-l-[6px] border-l-secondary-yellow flex flex-col px-8 lg:pl-8 lg:pr-0 gap-6"
        >
          <p>
            The South Asian Muslims in British Columbia research project (2023 -
            present) sheds light on the historical and contemporary presence of
            Muslim communities in Canada, focusing on South Asian Muslim
            communities of B.C. Through research, archival records, academic and
            scholarly work, and oral interviews, we aim to highlight profound
            contributions of Canadian South Asian Muslims to Canadian society
            with a goal to record the history, promote deeper appreciation and
            understanding and to contribute to the Canadian record. This is a
            work in progress and so far this represents the first stage of
            research supported by scholars, community researchers, and student
            researchers.
          </p>
          <button
            class="bg-primary-blue py-4 px-12 rounded-full text-white w-fit"
            onclick={() => {
              goto("/history/introduction");
            }}>Explore</button
          >
        </div>
      </div>

      <div class="lg:flex gap-4 pr-32 overflow-clip hidden">
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
    <!-- TODO: fix design for this section -->
    <div class="flex flex-col items-center">
      <h2 class="text-h3 lg:text-h2 text-center font-bold text-secondar-teal lg:translate-y-1/3">
        Historical Timeline
      </h2>

      <div class="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-evenly w-full lg:translate-y-[20%] lg:pt-0 pt-10 bg-secondary-yellow lg:bg-transparent">
        {#each historyPages.slice(1) as item, i}
          <button
            class="lg:aspect-square rounded-full lg:w-[20vw] flex flex-col gap-2 items-center justify-center border-[10px] border-secondary-yellow bg-white transition-all duration-500 ease-in-out"
            id="{prefix}-{i}"
            aria-label="link to page talking about {item.name}"
            onclick={(e) => {
              e.currentTarget.style.color = "white";
              navTweens[i].resume();
            }}
            onmouseenter={() => (hoveredTag = i)}
            onmouseleave={() => (hoveredTag = -1)}
            class:lg:translate-y-[40%]={hoveredTag !== -1 && hoveredTag !== i
              ? true
              : hoveredTag === i
                ? false
                : i === 1}
            class:opacity-50={hoveredTag !== -1 && hoveredTag !== i}
          >
            <h6 class="text-p font-bold text-center">
              {item.name} <br />
              {item.years}
            </h6>
            <!-- <span class="text-center text-xs">{item.desc}</span> -->
          </button>
        {/each}
      </div>
    </div>

    <div class="bg-secondary-yellow flex flex-col lg:pt-[25vh] pt-10">
      <div class="bg-[url('/pattern.svg')] min-h-32 w-full bg-repeat-x">
        &nbsp;
      </div>
    </div>
  </section>

  <section
    role="marquee"
    onmouseover={() => {
      loop.pause();
    }}
    onmouseleave={() => {
      loop.resume();
    }}
    onfocus={() => {}}
    id="carousel"
    class="lg:m-32 my-12 flex overflow-hidden items-center relative"
  >
    {#each Array(8) as _, idx}
      <div class="aspect-square lg:min-w-[20vw] min-w-[50vw] p-1 cursor-grab relative shrink-0">
        <div
          class="bg-gray-100 border-2 border-secondar-teal rounded h-full w-full select-none"
        >
          &nbsp;
        </div>
        <!-- TODO: insert images -->
      </div>
    {/each}
  </section>
</main>
