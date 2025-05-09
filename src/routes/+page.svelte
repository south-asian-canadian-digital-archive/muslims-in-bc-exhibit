<script lang="ts">
  import { base } from "$app/paths";
  import { navItems } from "$lib/content/nav";
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { resourceLinks } from "$lib/content/resources.content";
  import { interviews, type Interview } from "$lib/content/interviews.content";
  // import HistoryTimeline from "$lib/components/HistoryNavigation.svelte";
  // import { horizontalLoop } from "$lib/utils/seemlessLoop.util";

  let curHoveredDome = $state(0);
  let historyPages = navItems[2].pages || [];
  let hoveredTag = $state(-1);
  // let loop: gsap.core.Timeline;
  let navTweens: gsap.core.Tween[] = $state([]);
  let prefix = "history-page-nav";

  let exploreInterviews: Interview[] = $state([]);

  onMount(() => {
    exploreInterviews = interviews
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.min(4, interviews.length));

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

<main
  class="container *:px-4 *:ld:px-0 px-0 pb-32 flex flex-col gap-16 !w-full !max-w-full"
>
  <!-- intro -->
  <section class="py-32 flex gap-14 max-w-5xl lg:max-w-6xl mx-auto">
    <div class="">
      <div
        class="lg:flex float-right justify-between overflow-clip hidden h-full max-w-xl ml-6 pb-4"
      >
        {#each { length: 2 } as _, i}
          <div
            class="bg-secondar-teal rounded-xl p-2 min-h-[50vh] 2xl:min-h-[600px] w-[30%] transition-all ease-in-out duration-500 dome"
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

      <h1 class="page-title">South Asian Muslims in British Columbia</h1>

      <div class="content-section">
        South Asian Muslims in Canada are a diverse group who have advocated for
        spaces to practice their religion and faced challenges along the way.
        This project records their stories to deepen understanding of the South
        Asian Canadian Muslim experience, especially in British Columbia (BC).
        <br />
        <br />
        The project gathers these stories through interviews, research and historical
        records. Viewing Islam as a mosaic, it focuses on the traditions and lived
        experiences of BC’s South Asian Muslim community. The South Asian Muslim
        community is made up of new immigrants and early settlers from the start
        of the 20th century. Recognizing that this project will be a first step in
        preserving these histories, we aim to provide a foundation for future researchers,
        artists and community members to continue documenting the stories of South
        Asian Muslims in BC.
        <br />
        <br />
        We welcome any feedback that can help us improve this project by writing
        to us at <a href="mailto:sasi@ufv.ca">sasi@ufv.ca</a> or contacting us
        at <a href="tel:+6048544547">604-854-4547.</a>
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

  <section class="bg-secondary-yellow relative !max-w-full w-full">
    <div
      class="py-40 flex flex-col gap-5 w-full pr-96 max-w-5xl lg:max-w-6xl mx-auto"
    >
      <h2 class="page-title font-bold">About the Project</h2>
      <p>
        The South Asian Muslims in British Columbia (SAMBC) project is an online
        exhibit within the <a href="https://sacda.ca"
          >South Asian Canadian Digital Archive (SACDA)</a
        >. This project seeks to create a foundational understanding of the
        <a
          href="https://www150.statcan.gc.ca/n1/pub/11-627-m/11-627-m2024058-eng.htm"
        >
          South Asian Muslim communities</a
        >
        in BC as a starting point to build a more robust engagement with the diverse
        communities and their experiences across Canada. What you will find here
        is the history of migration and settlement, oral history narratives of contemporary
        BC South Asian Muslims, a recent timeline of significant events and and many
        reading resources for you to explore.
        <!-- <br /> <br />To learn more, please refer to the timeline provided below. -->
      </p>
    </div>

    <div
      class="bg-[url('/pattern.svg')] w-[30vw] bg-repeat-y absolute right-0 top-0 h-full"
    >
      &nbsp;
    </div>
  </section>

  <section>
    <div class="max-w-5xl lg:max-w-6xl mx-auto pb-20">
      <h2 class="page-title font-bold mb-10">Explore Our Content</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- History Section -->
        <div
          class="bg-white rounded-xl shadow-lg p-6 border-t-4 border-primary-blue hover:shadow-xl transition-all"
        >
          <h3 class="text-xl font-bold mb-3 text-primary-blue">
            Historical Journey
          </h3>
          <p class="mb-4">
            Explore the migration and settlement of South Asian Muslims in
            British Columbia across different time periods:
          </p>
          <ul class="list-disc pl-5 mb-4 space-y-1 *:text-left">
            {#each historyPages.slice(1) as page}
              <li>
                <a href={page.path} class="text-secondar-teal hover:underline"
                  >{page.name}</a
                >
              </li>
            {/each}
          </ul>
          <a
            href="{base}/history"
            class="inline-block text-primary-blue font-medium hover:underline"
            >View all history pages →</a
          >
        </div>

        <!-- Community Life -->
        <div
          class="bg-white rounded-xl shadow-lg p-6 border-t-4 border-secondar-teal hover:shadow-xl transition-all"
        >
          <h3 class="text-xl font-bold mb-3 text-secondar-teal">
            Community Life
          </h3>
          <p class="mb-4">
            Discover the rich cultural and religious practices, community
            organizations, and daily life experiences:
          </p>
          <ul class="list-disc pl-5 mb-4 space-y-1 *:text-left">
            {#each exploreInterviews as interview}
              <li>
                <a
                  href="{base}/community-life/{interview.id}"
                  class="hover:underline">{interview.name} Interview</a
                >
              </li>
            {/each}
          </ul>
          <a
            href="{base}/community"
            class="inline-block text-secondar-teal font-medium hover:underline"
            >Explore community life →</a
          >
        </div>

        <!-- Further Reading -->
        <div
          class="bg-white rounded-xl shadow-lg p-6 border-t-4 border-secondary-yellow hover:shadow-xl transition-all"
        >
          <h3 class="text-xl font-bold mb-3 text-orange-700">
            Research Resources
          </h3>
          <p class="mb-4">
            Access academic research, articles, books and other resources about
            South Asian Muslims:
          </p>
          <ul class="list-disc pl-5 mb-4 space-y-1 *:text-left">
            {#each resourceLinks as linkItem}
              <li>
                <a
                  href="{base}/further-reading#{linkItem.title
                    .toLowerCase()
                    .split(' ')
                    .join('-')}"
                  class="hover:underline">{linkItem.title}</a
                >
              </li>
            {/each}
          </ul>
          <a
            href="{base}/further-reading"
            class="inline-block text-orange-700 font-medium hover:underline"
            >Browse resources →</a
          >
        </div>

        <!-- Share Your Story -->
        <div
          class="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-600 hover:shadow-xl transition-all h-full"
        >
          <h3 class="text-xl font-bold mb-3 text-purple-600">Participate</h3>
          <p class="mb-4">
            Contribute to this living archive by sharing your personal
            experience or family history:
          </p>
          <ul class="list-disc pl-5 mb-4 space-y-1 *:text-left">
            <li>
              <a href="{base}/contact" class="hover:underline"
                >Share Your Story</a
              >
            </li>
            <li>
              <a href="https://sacda.ca" class="hover:underline"
                >Contribute to SACDA</a
              >
            </li>
          </ul>
          <a
            href="{base}/contact"
            class="inline-block text-purple-600 font-medium hover:underline"
            >How to contribute →</a
          >
        </div>
      </div>
    </div>
  </section>
</main>
