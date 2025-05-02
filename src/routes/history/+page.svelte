<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import Image from "$lib/components/Image.svelte";
  import HistoryNavigation from "$lib/components/HistoryNavigation.svelte";

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
  });
</script>

<HistoryNavigation currentId={null} />

<main class="container mx-auto px-4 py-32 max-w-5xl">
  <section class="flex gap-14">
    <div class="">
      <div
        class="lg:flex float-right justify-between overflow-clip hidden h-[60vh] w-[25vw] ml-6 pb-4"
      >
        <div
          class="bg-secondar-teal rounded-xl p-2 w-full transition-all ease-in-out duration-300 dome overflow-hidden"
        >
          <div
            class="bg-[url('/pattern.svg')] bg-repeat h-full w-screen dome-bg will-change-auto overflow-clip"
          ></div>
        </div>
      </div>

      <h1 class="page-title">Migration Overview</h1>

      <div class="content-section">
        The historical and contemporary presence of <a target="_blank" rel="noopener">Muslim communities in Canada</a>
        has often remained obscured, unacknowledged, and misrepresented. Their
        profound contributions to <a target="_blank" rel="noopener">Canadian society</a> warrant deeper appreciation,
        acknowledgement, and understanding. Our research project aims to
        contribute to this cause by focusing on <a target="_blank" rel="noopener">South Asian Muslim communities
        of B.C.</a> We use <a href="https://www.bac-lac.gc.ca/eng/discover/immigration/history-ethnic-cultural/Pages/south-asian.aspx" target="_blank" rel="noopener">archival records</a>, academic works, and personal interviews
        to highlight these, often untold, stories of South Asian Muslim
        communities in B.C.
        <br /><br />
        Far from being a monolithic religion, <a target="_blank" rel="noopener">Islam is a mosaic</a>. Its two main sects
        are <a target="_blank" rel="noopener">Sunni</a> and <a target="_blank" rel="noopener">Shia</a>, which further branch out into various sub-sects. Sunni
        sub-sects include <a target="_blank" rel="noopener">Wahabi</a>, <a target="_blank" rel="noopener">Salafi</a>, <a target="_blank" rel="noopener">Barelvi</a>, and <a target="_blank" rel="noopener">Deobandi</a>. Shia subsects
        include <a target="_blank" rel="noopener">Twelver Shi'ism</a> and <a target="_blank" rel="noopener">Ismailism</a>. <a target="_blank" rel="noopener">Sufism</a>, not strictly a sect but
        a mystical approach to Islam, is also important. Most South Asian
        Muslims in the area are Sunni, but many follow <a target="_blank" rel="noopener">Sufi practices</a>.
        <br /><br />
        In this virtual exhibit, we seek to narrate the migration history of
        <a target="_blank" rel="noopener">South Asian muslims</a> of <a target="_blank" rel="noopener">British Columbia</a> while acknowledging
        this internal diversity of <a target="_blank" rel="noopener">Islam</a>. We cover three major time
        periods:
      </div>
    </div>
  </section>

  <div class="history">
    <section class="">
      <h2 class="">Challenging Popular Assumptions</h2>
      <div class="">
        <p>
          Looking at the news today, it may seem like all conflicts around
          migrants seem to centre on Muslims.
          <br /><br />
          Globally, Muslims form 29% of the world’s migrants, second to Christians
          (47%) and so 4% of the world’s total Muslim population are international
          migrants (i.e. live outside of their country of birth). Contrary to popular
          belief, this is still a small percentage of the world’s total Muslims (about
          4%). Those who are from some of South Asia’s largest countries (India,
          Pakistan and Bangladesh) form a significant portion of international migrants,
          but the vast majority of these migrants from South Asia choose to go to
          places like the UAE or North Africa. According to the Pew Research Centre
          only a small percentage of Muslims choose to live in North America. In
          2024 this number was at 6%.
          <br /><br />

          This may sound surprising, but that is because Muslim migrants appear
          in the news and government pronouncements on immigration in North
          America far in excess of their actual presence, particularly after
          9/11.
          <br /><br />

          This is also why it is harder to trace the broader history of Muslim
          migration in North America. The sources are quite limited and
          disaggregating them by region is challenging.

          <Image
            src="/content/new/muslim_migrant_graphic.png"
            alt="Regions where muslims now live and where they came from"
            float="bottom"
            ><a
              target="_blank"
              href="https://www.pewresearch.org/religion/2024/08/19/muslim-migrants-around-the-world/"
              >https://www.pewresearch.org/religion/2024/08/19/muslim-migrants-around-the-world/</a
            ></Image
          >
        </p>
      </div>
    </section>

    <section class="">
      <h2 class="">Migration to British Columbia</h2>
      <div class="">
        <p>
          In the first half of the 20th century, the narrative of South Asian
          Muslim migration to British Columbia closely reflected the broader
          movement of people from the region. However, due to their smaller
          numbers and the lack of detailed data on South Asian Canadians, we can
          only piece together the presence of Muslims from this area through
          fragments of information. We do know that the community of Muslims in
          British Columbia grew very slowly in these early years, with 136
          Muslims recorded in 1931 and 1335 recorded in 1971.

          <br /><br />
          Prior to the 1960s, Canadian immigration policies were restrictive, favoring
          European immigrants while imposing restrictions on non-European groups,
          including South Asians. However, the introduction of the Immigration Act
          in 1962 marked a shift towards a more equitable system, although it took
          time for the number of South Asians immigrating to Canada to rise significantly.
          <br /><br />

          <Image
            src="/content/new/migration_timeline.png"
            alt="Migration of muslims after 1967"
            float="right"
            class="w-[35vw] h-[50vh]"
          >
            <a
              class="text-xs px-8"
              href="https://books.google.ca/books?id=3MIZKq1ranYC&lpg=PP1&pg=PA10#v=onepage&q&f=false"
              >https://books.google.ca/books?id=3MIZKq1ranYC&lpg=PP1&pg=PA10#v=onepage&q&f=false</a
            >
          </Image>

          The prolonged period of restrictions had a significant impact on the
          demographic makeup of the country. Scholars of migration have noted
          how people tend to travel to places they are familiar with where they
          have existing community ties. It is then not surprising that the
          earliest established South Asian communities in British Columbia,
          primarily composed of Punjabis, grew more rapidly than the number of
          South Asian Muslims and in the early days there is also evidence that
          the multi-religious South Asian communities supported one another. As
          one of our interviews revealed, the sense of safety and social
          diversity that some Muslims families felt when they came to British
          Columbia then led them to believe that this was a place that they
          could call home.
          <br /><br />

          In 1967, the introduction of a points-based immigration system that
          prioritized skills and qualifications over ethnic background further
          increased the influx of South Asians into Canada, thereby aiding in
          the development of British Columbia’s diverse and vibrant South Asian
          communities. The new immigration act finally introduced in 1976 marked
          the turning point when Asian migrants to Canada increased
          substantially.
        </p>
      </div>
    </section>
  </div>
</main>
