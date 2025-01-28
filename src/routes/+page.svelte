<script lang="ts">
  import { base } from "$app/paths";
  import { navItems } from "$lib/utils/nav.store.svelte";
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { horizontalLoop } from "$lib/utils/seemlessLoop.util";
  import HistoryTimeline from "$lib/components/HistoryTimeline.svelte";

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
          duration: 0.2,
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
  <!-- intro -->
  <section class="py-32">
    <div
      class="h-min flex lg:flex-row md:flex-row flex-col gap-5 px-0 w-[99vw]"
    >
      <div class="flex flex-col gap-12 md:px-32 px-4">
        <h1
          class="font-source-serif-4 font-bold text-h2 text-primary-blue leading-[115%]"
        >
          South Asian Muslims in British Columbia
        </h1>

        <div
          class="border-l-[6px] border-l-secondary-yellow flex flex-col pl-8 gap-6"
        >
          <div>
            <div class="float-right relative ps-8 pb-6">
              <span
                class="lg:flex justify-between overflow-clip hidden max-h-[80vh] w-[40vw]"
              >
                {#each { length: 2 } as _, i}
                  <span
                    class="bg-secondar-teal rounded-xl p-2 min-h-[60vh] w-[30%] transition-all ease-in-out duration-500 dome"
                    class:w-[65%]={curHoveredDome === i}
                    aria-label="dome"
                    role="figure"
                    onmouseover={() => (curHoveredDome = i)}
                    onmouseleave={() => (curHoveredDome = 0)}
                    onfocus={() => {}}
                  >
                    <span
                      class="bg-[url('/pattern.svg')] bg-repeat h-full w-screen block dome-bg will-change-auto"
                    ></span>
                  </span>
                {/each}
              </span>
            </div>

            The historical and contemporary presence of Muslim communities in
            Canada is regionally diverse and long, replete with stories of
            successes as they have advocated for spaces to practice their
            religion and gain their rights, but it also has stories of the
            challenges they have faced along the way. Recording and preserving
            these stories is an important step toward building greater
            appreciation and understanding of what constitutes the Canadian
            Muslim experience and how they have contributed to the betterment of
            Canadian society. Our research project aims to contribute to this
            cause by focusing on South Asian Canadian Muslim communities of B.C.
            We use existing academic and community research, archival records,
            and oral interviews to highlight these, often untold, stories of
            South Asian Muslim communities in B.C.
            <br /><br />
            Our project understands Islam as a mosaic both in terms of how the religion
            is practiced across time and geography. It hopes to honor these diverse
            ways of being Muslim by focusing not on the textual traditions in and
            of themselves, but on what they mean to the community in BC. Taking a
            community-centered approach, our project aims to highlight how religion
            and religious identity are lived within British Columbia. We acknowledge
            that this project is a first step toward preserving these community histories.
            We aim to honor these stories by presenting them as they are and being
            very careful to not oversimplify a religious and community experience
            that has so much difference within it. This project, therefore, will
            form a foundation for future researchers, artists, and community members
            to engage with so that we may continue to develop the history of South
            Asian Muslims in BC.
            <br />We welcome any feedback that can help us improve this project
            by writing to us at sasi@ufv.ca or contacting us at 604-854-4547.
          </div>
          <button
            class="bg-primary-blue py-4 px-12 rounded-full text-white w-fit"
            onclick={() => {
              goto(`${base}/history/introduction`);
            }}>Explore</button
          >
        </div>
      </div>
    </div>
  </section>

  <!-- historical timeline -->
  <section class="">
    <!-- TODO: fix design for this section -->
    <div class="flex flex-col lg:items-center">
      <h2
        class="text-h4 lg:text-h2 text-center font-bold text-secondar-teal lg:translate-y-1/3"
      >
        Historical Timeline
      </h2>

      <div
        class="hidden lg:flex flex-col lg:flex-row gap-10 lg:gap-0 justify-evenly w-full lg:translate-y-[20%] lg:pt-0 pt-10 bg-secondary-yellow lg:bg-transparent"
      >
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
      <div class="lg:hidden">
        <HistoryTimeline />
      </div>
    </div>

    <div class="bg-secondary-yellow flex flex-col lg:pt-[25vh] pt-10">
      <div class="bg-[url('/pattern.svg')] min-h-32 w-full bg-repeat-x">
        &nbsp;
      </div>
    </div>
  </section>

  <!-- marquee -->
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
    {#each ["https://sacda.ca", `${base}/history/early-migration`, `${base}/history/mid-20th-century-migration`, `${base}/history/recent-migration-to-canada`, `${base}/contact`, `${base}/about`] as link, idx}
      <div class="aspect-square lg:w-[20vw] w-[50vw] p-1 relative shrink-0">
        <a
          class="bg-gray-100 border-2 border-secondar-teal rounded h-full w-full select-none object-cover overflow-hidden flex items-center justify-center"
          href={link}
        >
          <img
            src={`${base}/content/marquee/${idx + 1}.png`}
            class="aspect-square hover:scale-105 transition-all duration-300 ease-in-out"
            alt=""
          />
        </a>
      </div>
    {/each}
  </section>
</main>
