<script lang="ts">
  import { goto } from "$app/navigation";
  import HistoryTimeline from "$lib/components/HistoryTimeline.svelte";
  import { navItems } from "$lib/utils/nav.store.svelte";
  import { gsap } from "gsap";
  import { onMount } from "svelte";

  let historyPages = navItems[2].pages || [];
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

<main class="pb-40 flex flex-col">
  <section class="py-20">
    <div class="h-min flex gap-14 px-0 w-screen">
      <div class="flex flex-col gap-12 pl-8 pr-8 lg:pl-32 lg:pr-0 lg:w-[80vw]">
        <h1
          class="font-source-serif-4 font-bold text-h2 leading-[1.15] text-primary-blue"
        >
          South Asian Muslims in British Columbia: Introduction
        </h1>

        <p class="border-l-[5px] border-l-secondary-yellow pl-6">
          The historical and contemporary presence of Muslim communities in
          Canada has often remained obscured, unacknowledged, and
          misrepresented. Their profound contributions to Canadian society
          warrant deeper appreciation, acknowledgement, and understanding. Our
          research project aims to contribute to this cause by focusing on South
          Asian Muslim communities of B.C. We use archival records, academic
          works, and personal interviews to highlight these, often untold,
          stories of South Asian Muslim communities in B.C.
          <br /><br />
          Far from being a monolithic religion, Islam is a mosaic. Its two main sects
          are Sunni and Shia. Sunni sect is further divided into various sub-sects
          like Wahabi, Salafi, Barelvi, and Deobandi. Shia sect, on the other hand,
          is also divided into further sub sects like Twelver Shi'ism, and Ismailism.
          Other groups like Sufism exist across any such sectarian divisions. Historically,
          Muslim populations have also integrated themselves into diverse local customs,
          cultures, and traditions of Asia, Middle East, and Africa. Our project
          hopes to honor these diverse ways of being a Muslim.
          <br /><br />
          Lastly, we also acknowledge that South Asian Muslims in BC is a first of
          its kind project. We hope that this preliminary project will facilitate
          further, in-depth research projects, and exhibitions in the future. We
          welcome any feedback which can help us improve this project.
        </p>
      </div>

      <div class="hidden lg:flex gap-4 pr-32 w-[40vw]">
        <div
          class="bg-secondar-teal rounded-xl p-2 max-h-[70vh] w-full transition-all ease-in-out duration-300 dome overflow-hidden"
        >
          <div
            class="bg-[url('/pattern.svg')] bg-repeat h-full w-screen dome-bg will-change-auto overflow-clip"
          ></div>
        </div>
      </div>
    </div>
  </section>

  <!-- history timeline -->
  <section class="lg:py-20">
    <h1
      class="lg:text-h3 text-h4 font-bold text-primary-blue text-center font-source-serif-4 px-4 lg:pb-[10vw] "
    >
      Historical Timeline
    </h1>

    <div class="hidden lg:flex flex-col lg:gap-[10vw] gap-4">
      {#snippet desc(text: string, align = "left")}
        <div class:text-right={align === "right"}>
          {@html text}
        </div>
      {/snippet}

      {#each historyPages.slice(1) as item, idx}
        <div
          class="relative lg:px-32 bg-secondary-yellow lg:h-[10vw] lg:overflow-visible flex flex-row items-center lg:gap-12 overflow-hidden"
        >
          {#if idx === 1}
            {@render desc(item.desc, "right")}
          {/if}
          <button
            aria-label="links to chapter {idx + 1}: {item.name}"
            id="{prefix}-{idx}"
            class="aspect-square rounded-full lg:min-w-[20vw] lg:h-auto h-[30vh] flex items-center justify-center border-[8px] hover:border-[16px] border-secondary-yellow bg-white transition-all duration-200 ease-in-out"
            onclick={(e) => {
              e.currentTarget.style.color = "white";
              if (e.currentTarget.parentElement)
                e.currentTarget.parentElement.style.overflow = "visible";
              navTweens[idx].resume();
            }}
          >
            <h6 class="text-p font-bold text-center">
              {item.name} <br />
              {item.years}
            </h6>
          </button>
          {#if idx !== 1}
            {@render desc(item.desc)}
          {/if}
        </div>
      {/each}
    </div>
    <div class="lg:hidden block">
      <HistoryTimeline />
    </div>
  </section>
</main>
