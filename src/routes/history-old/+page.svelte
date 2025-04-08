<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";

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

<main class="pb-40 flex flex-col">
  <section class="!flex-row !gap-14">
    <div class="">
      <div class="hidden lg:flex gap-4 px-8 pb-4 w-[35vw] float-right">
        <div
          class="bg-secondar-teal rounded-xl p-2 min-h-[70vh] w-full transition-all ease-in-out duration-300 dome overflow-hidden"
        >
          <div
            class="bg-[url('/pattern.svg')] bg-repeat h-full w-screen dome-bg will-change-auto overflow-clip"
          ></div>
        </div>
      </div>

      <h1
        class="font-source-serif-4 font-bold text-h2 leading-[1.15] text-primary-blue pb-8"
      >
        Migration Overview
      </h1>

      <p class="border-l-[5px] border-l-secondary-yellow pl-6">
        The historical and contemporary presence of Muslim communities in Canada
        has often remained obscured, unacknowledged, and misrepresented. Their
        profound contributions to Canadian society warrant deeper appreciation,
        acknowledgement, and understanding. Our research project aims to
        contribute to this cause by focusing on South Asian Muslim communities
        of B.C. We use archival records, academic works, and personal interviews
        to highlight these, often untold, stories of South Asian Muslim
        communities in B.C.
        <br /><br />
        Far from being a monolithic religion, Islam is a mosaic. Its two main sects
        are Sunni and Shia. Sunni sect is further divided into various sub-sects
        like Wahabi, Salafi, Barelvi, and Deobandi. Shia sect, on the other hand,
        is also divided into further sub sects like Twelver Shi'ism, and Ismailism.
        Other groups like Sufism exist across any such sectarian divisions. Historically,
        Muslim populations have also integrated themselves into diverse local customs,
        cultures, and traditions of Asia, Middle East, and Africa. Our project hopes
        to honor these diverse ways of being a Muslim.
        <br /><br />
        Lastly, we also acknowledge that South Asian Muslims in BC is a first of
        its kind project. We hope that this preliminary project will facilitate further,
        in-depth research projects, and exhibitions in the future. We welcome any
        feedback which can help us improve this project.
      </p>
    </div>
  </section>

  <section>
    <h2 class="">Challenging Popular Assumptions</h2>

    <p class="">
      Looking at the news today, it may seem like all conflicts around migrants
      seem to centre on Muslims.
      <br /><br />
      Globally, Muslims form 29% of the world’s migrants, second to Christians (47%)
      and so 4% of the world’s total Muslim population are international migrants
      (i.e. live outside of their country of birth). Contrary to popular belief,
      this is still a small percentage of the world’s total Muslims (about 4%). Those
      who are from some of South Asia’s largest countries (India, Pakistan and Bangladesh)
      form a significant portion of international migrants, but the vast majority
      of these migrants from South Asia choose to go to places like the UAE or North
      Africa. According to the Pew Research Centre only a small percentage of Muslims
      choose to live in North America. In 2024 this number was at 6%.
      <br /><br />

      This may sound surprising, but that is because Muslim migrants appear in
      the news and government pronouncements on immigration in North America far
      in excess of their actual presence, particularly after 9/11.
      <br /><br />

      This is also why it is harder to trace the broader history of Muslim
      migration in North America. The sources are quite limited and
      disaggregating them by region is challenging.
    </p>
  </section>

  <section>
    <h2>Migration to British Columbia</h2>
    <p>
      In the first half of the 20th century, the narrative of South Asian Muslim
      migration to British Columbia closely reflected the broader movement of
      people from the region. However, due to their smaller numbers and the lack
      of detailed data on South Asian Canadians, we can only piece together the
      presence of Muslims from this area through fragments of information. We do
      know that the community of Muslims in British Columbia grew very slowly in
      these early years, with 136 Muslims recorded in 1931 and 1335 recorded in
      1971.

      <br /><br />
      Prior to the 1960s, Canadian immigration policies were restrictive, favoring
      European immigrants while imposing restrictions on non-European groups, including
      South Asians. However, the introduction of the Immigration Act in 1962 marked
      a shift towards a more equitable system, although it took time for the number
      of South Asians immigrating to Canada to rise significantly.
      <br /><br />

      The prolonged period of restrictions had a significant impact on the
      demographic makeup of the country. Scholars of migration have noted how
      people tend to travel to places they are familiar with where they have
      existing community ties. It is then not surprising that the earliest
      established South Asian communities in British Columbia, primarily
      composed of Punjabis, grew more rapidly than the number of South Asian
      Muslims and in the early days there is also evidence that the
      multi-religious South Asian communities supported one another. As one of
      our interviews revealed, the sense of safety and social diversity that
      some Muslims families felt when they came to British Columbia then led
      them to believe that this was a place that they could call home.
      <br /><br />

      In 1967, the introduction of a points-based immigration system that
      prioritized skills and qualifications over ethnic background further
      increased the influx of South Asians into Canada, thereby aiding in the
      development of British Columbia’s diverse and vibrant South Asian
      communities. The new immigration act finally introduced in 1976 marked the
      turning point when Asian migrants to Canada increased substantially.
    </p>
  </section>
</main>

<style type="postcss">
  section {
    @apply first-of-type:pt-20 py-10 last-of-type:pb-20 h-min flex flex-col gap-8 px-8 lg:px-32 w-screen;
  }

  section h1 {
    @apply font-source-serif-4 font-bold text-h1 leading-[1.15] text-primary-blue pb-8;
  }

  section h2 {
    @apply font-source-serif-4 font-bold text-h3 text-primary-blue;
  }

  section p {
    @apply border-l-[5px] border-l-secondary-yellow pl-6;
  }
</style>
