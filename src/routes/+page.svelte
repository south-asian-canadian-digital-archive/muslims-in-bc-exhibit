<script lang="ts">
  import { base } from "$app/paths";
  import { navItems } from "$lib/content/nav";
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import HistoryTimeline from "$lib/components/HistoryTimelineMobile.svelte";
  // import { horizontalLoop } from "$lib/utils/seemlessLoop.util";

  let curHoveredDome = $state(0);
  let historyPages = navItems[1].pages || [];
  let hoveredTag = $state(-1);
  // let loop: gsap.core.Timeline;
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
        duration: 5,
        ease: "none",
      })
    );
    domeAnimationTimeline.play();

    // let scrollingImageDivs = gsap.utils.toArray("#carousel > div");
    // loop = horizontalLoop(scrollingImageDivs, {
    //   center: true,
    //   repeat: -1,
    //   speed: 0.5,
    // });

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

<main class="container px-4 pb-32 flex flex-col">
  <!-- intro -->
  <section class="py-32 flex gap-14">
    <div class="">
      <div
        class="lg:flex float-right justify-between overflow-clip hidden max-h-[80vh] w-[40vw] ml-6 pb-4"
      >
        {#each { length: 2 } as _, i}
          <div
            class="bg-secondar-teal rounded-xl p-2 min-h-[70vh] w-[30%] transition-all ease-in-out duration-500 dome"
            class:w-[65%]={curHoveredDome === i}
            aria-label="dome"
            role="figure"
            onmouseover={() => (curHoveredDome = i)}
            onmouseleave={() => (curHoveredDome = 0)}
            onfocus={() => {}}
          >
            <div
              class="bg-[url('/pattern.svg')] bg-repeat h-full w-screen block dome-bg will-change-auto"
            ></div>
          </div>
        {/each}
      </div>

      <h1 class="responsive-heading">
        South Asian Muslims in British Columbia
      </h1>

      <div class="content-section">
        South Asian Muslims in Canada are a diverse group who have advocated for
        spaces to practice their religion and faced challenges along the way.
        This project records their stories to deepen understanding of the
        Canadian Muslim experience, especially in British Columbia (BC).
        <br />
        <br />
        The project gathers these stories through interviews, research and historical
        records. Viewing Islam as a mosaic, it focuses on the traditions and lived
        experiences of BC’s Muslim community. Recognizing that this project will
        be a first step in preserving these histories, we aim to provide a foundation
        for future researchers, artists and community members to continue documenting
        the stories of South Asian Muslims in BC.
        <br />
        <br />
        We welcome any feedback that can help us improve this project by writing
        to us at <a href="mailto:sasi@ufv.ca">sasi@ufv.ca</a> or contacting us at <a href="tel:+6048544547">604-854-4547.</a>
        <br /><br />
        <button
          class="bg-primary-blue py-4 px-12 rounded-full text-white w-fit"
          onclick={() => {
            goto(`${base}/history`);
          }}>Explore</button
        >
      </div>
    </div>
  </section>

  <!-- historical timeline -->
  <!-- <section class="">
    <div class="flex flex-col lg:items-center">
      <h2
        class="text-h4 lg:text-h2 text-center font-bold text-secondar-teal lg:translate-y-1/5"
      >
        Historical Timeline
      </h2>

      <div
        class="hidden lg:flex flex-col lg:flex-row gap-10 lg:gap-0 justify-evenly w-full lg:pt-0 pt-10 bg-secondary-yellow lg:bg-transparent"
      >
        {#each historyPages.slice(1) as item, i}
          {#if item.years}
            <button
              class="lg:aspect-square rounded-full lg:w-[20vw] lg:translate-y-[30%] flex flex-col gap-2 items-center justify-center border-[10px] border-secondary-yellow bg-white transition-all duration-500 ease-in-out"
              id="{prefix}-{i}"
              aria-label="link to page talking about {item.name}"
              onclick={(e) => {
                e.currentTarget.style.color = "white";
                navTweens[i].resume();
              }}
              onmouseenter={() => (hoveredTag = i)}
              onmouseleave={() => (hoveredTag = -1)}
              class:lg:translate-y-[70%]={hoveredTag !== -1 && hoveredTag !== i
                ? true
                : hoveredTag === i
                  ? false
                  : i === 1}
              class:opacity-50={hoveredTag !== -1 && hoveredTag !== i}
            >
              <h6
                class="text-p font-bold text-center inline-flex flex-col items-center p-4"
              >
                {item.name.split(":")[1]}
                <sub class="text-sm font-normal">{item.years}</sub>
              </h6>
            </button>
          {/if}
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
  </section> -->

  <!-- marquee -->
  <!-- <section
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
  </section> -->
</main>
