<script lang="ts">
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { SvelteSet } from "svelte/reactivity";

  import {
    team,
    committee,
    partners,
    sponsors,
    floatingSquareInfo,
  } from "$lib/content/about.content";

  let floatingSquareTweens: gsap.core.Tween[] = [];
  let commitment_expanded: SvelteSet<number> = $state(new SvelteSet());

  onMount(() => {
    gsap.utils
      .toArray<any>(".floating-square > div.left-0")
      .forEach((square) => {
        floatingSquareTweens.push(
          gsap.to(square, {
            translateX: "-=random(2, 7)",
            translateY: "-=random(2, 7)",
            ease: "sine.inOut",
            duration: 5,
            delay: "random(0.2, 1)",
            repeat: -1,
            yoyo: true,
          })
        );
      });
  });
</script>

<svelte:head>
  <title>About | South Asian Muslims in BC</title>
</svelte:head>

{#snippet FloatingSquare(
  title: string,
  desc: string,
  marginTop: string = "0px",
  idx: number
)}
  <div
    role="dialog"
    onfocus={() => {}}
    onmouseover={() => {
      floatingSquareTweens[idx].pause();
    }}
    onmouseleave={() => {
      floatingSquareTweens[idx].resume();
    }}
    style:margin-top={marginTop}
    class="floating-square relative *:absolute *:rounded-2xl lg:h-[20vw] h-[40vw] lg:w-[20vw] w-[40vw] *:h-full *:aspect-square"
  >
    <div
      class="z-50 -top-4 -left-4 bg-secondary-yellow p-[10%] overflow-auto *:will-change-transform will-change-transform"
    >
      <h6 class="text-h6 font-bold text-primary-black pb-[4%]">{title}</h6>
      <p class="text-p">{desc}</p>
    </div>
    <div class="bg-[#CED299] bg-secondary-yellowtop-0 left-0">&nbsp;</div>
  </div>
{/snippet}

<main class="lg:py-20 flex flex-col gap-16">
  <!-- heading -->
  <section class="bg-secondary-yellow flex flex-col lg:pt-24">
    <div class="flex lg:flex-row flex-col-reverse gap-16 lg:px-32 px-12 pb-24">
      <div class="flex flex-col gap-8">
        <h1 class="responsive-heading">
          About SASI
        </h1>
        <p class="text-p text-primary-black">
          The <a href="https://ufv.ca/sasi">South Asian Studies Institute</a> at the University of the Fraser
          Valley brings together South Asia scholars and students from diverse
          backgrounds and disciplines to create a nexus point for programs and
          activities that support our vision. <br /> <br /> The Institute
          fosters inter-disciplinary scholarly research, community and public
          engagement on issues related to South Asia and the Canadian South
          Asian Diaspora. The Institute initiates, directs and implements the
          development, maintenance and enhancement of scholarship, research and
          engagement in collaboration with faculty, students and community. The
          Institute takes direction from UFV's strategic goals to be a leader of
          social, cultural, economic and environmentally responsible development
          in the Fraser Valley. <br /> <br />The Institute is a repository of
          the pioneering history of immigrant settlers who make up the Canadian
          South Asian Diaspora. We also undertake much needed contemporary
          research that benefits academia, members of the community, government,
          organizations and agencies as well as global scholars and interested
          persons.
        </p>
        <div class="flex flex-wrap gap-4">
          {#each [["Meet Our Team", "#team"], ["Advisory Committee", "#committee"], ["Meet Our Partners", "#partners"]] as link, idx}
            <button
              class="bg-primary-blue rounded-lg whitespace-nowrap text-white px-6 py-3"
              aria-label="scrolls to {link[0]} section of the page"
              onclick={() => {
                document
                  .querySelector(link[1])
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {link[0]}
            </button>
          {/each}
        </div>
      </div>
      <div class="min-w-[35vw] min-h-[50vh] mt-16 h-auto bg-gray-300">
        <!-- TODO: image here -->
      </div>
    </div>

    <div
      class="bg-[url('/pattern.svg')] min-h-32 w-full bg-repeat-x overflow-hidden"
    >
      &nbsp;
    </div>
  </section>

  <!-- project history -->
  <section
    class="lg:p-32 p-10 pt-36 flex lg:flex-row flex-col gap-16"
    id="project-history"
  >
    <div class="grid grid-rows-2 grid-cols-2 gap-20">
      {#each floatingSquareInfo as info, idx}
        {@render FloatingSquare(
          info.title,
          info.desc,
          [2, 0].includes(idx) ? "-5vh" : "0",
          idx
        )}
      {/each}
    </div>

    <div class="h-full lg:w-[30vw] flex flex-col gap-4 text-right">
      <h3 class="text-h3 font-bold font-source-serif-4 text-primary-blue">
        Project History
      </h3>
      <p
        class="border-r-[4px] border-r-secondary-yellow h-max pr-4 font-martel"
      >
        The historical and contemporary presence of Muslim communities in
        Canada, particularly South Asian Muslims in B.C., has often been
        obscured. Our research project focuses on their contributions and covers
        three major timelines: early migration to BC, mid-20th-century
        migration, and recent migration to Canada. Exploring the diverse sects
        and cultural integration of Islam, including Sunni sub-sects like
        Wahabi, Salafi, Barelvi, and Deobandi, as well as Shia sub-sects like
        Twelver Shi'ism and Ismailism, along with Sufism, we aim to promote
        understanding and welcome feedback for future enhancements.
      </p>
    </div>
  </section>

  <!-- team -->
  <section class="bg-secondary-yellow flex flex-col" id="team">
    <div class="lg:p-32 p-12">
      <h1 class="text-h3 font-bold font-source-serif-4 text-primary-blue text-center pb-12">
        Our Team
      </h1>

      <div class="flex flex-col gap-6 items-center">
        {#each [team.slice(0, 3), team.slice(3, 7), team.slice(7)] as col, idy}
          <div
            class="flex flex-col lg:flex-row justify-center text-center gap-6 w-full"
          >
            {#each col as person, idx}
              <div
                class="lg:w-[20vw] lg:h-[20vw] rounded-lg aspect-square bg-white relative"
              >
                <span
                  class="top-0 left-0 p-2 bg-secondar-teal rounded-t-lg text-white font-martel absolute w-full z-20"
                  >{person.name}</span
                >
                <span
                  class="p-4 pt-10 absolute top-4 left-0 lg:h-[18vw] overflow-auto"
                >
                  {@html person.desc}
                </span>
              </div>
            {/each}
          </div>
        {/each}
      </div>
    </div>
    <div class="bg-[url('/pattern.svg')] min-h-32 w-full bg-repeat-x">
      &nbsp;
    </div>
  </section>

  <!-- committee -->
  <section class="lg:px-32 lg:py-24 py-8 px-12" id="committee">
    <h1
      class="text-h3 inline-flex flex-col items-center w-full font-bold font-source-serif-4 text-primary-blue text-center pb-12 mb-12 gap-2"
    >
      Advisory Committee
      <sub class="text-h6">2024 to present</sub>
    </h1>

    <div class="flex flex-col gap-6">
      {#each committee as person, idx}
        {@const EvenItem = !((idx + 1) % 2)}
        <div
          class="lg:w-[90%] h-min rounded-lg p-6 bg-secondary-yellow flex flex-col lg:flex-row gap-6"
          class:self-end={EvenItem}
          class:flex-row-reverse={EvenItem}
          class:lg:text-right={EvenItem}
        >
          <div
            class="aspect-square h-[30vh] lg:h-[20vw] bg-gray-100 relative flex rounded-lg overflow-clip object-cover"
          >
            <img src={person.img} alt="" class="object-cover w-full" />
            <span
              class="bottom-0 left-0 p-2 bg-secondar-teal rounded-b-lg text-white font-martel absolute w-full text-center"
              >{person.name} <br />
              <span class="text-xs">{@html person.position}</span></span
            >
          </div>
          <button
            class="p-4 flex items-center"
            onclick={() => {
              commitment_expanded.has(idx)
                ? commitment_expanded.delete(idx)
                : commitment_expanded.add(idx);
            }}
          >
            <span class="*:font-normal">
              {@html commitment_expanded.has(idx)
                ? person.desc
                : `${person.desc.split(" ").slice(0, 50).join(" ")}... <br /><br /><i class="hover:underline">Click to read more</i>`}
            </span>
          </button>
        </div>
      {/each}
    </div>
  </section>

  {#snippet partnerImage({
    src,
    alt,
    link,
    years,
  }: {
    src: string;
    alt: string;
    link: string;
    years: string;
  })}
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex flex-col items-center gap-2"
    >
      <img {src} {alt} class="aspect-video w-full object-contain" />
      <sub class="text-primary-black text-base">{years}</sub>
    </a>
  {/snippet}

  <!-- partners -->
  <section class="bg-secondary-yellow flex flex-col pt-24" id="partners">
    <div class="flex flex-col lg:px-32 px-12">
      <h2 class="text-h6 font-bold border-b-2 border-secondar-teal w-fit">
        Our Partners
      </h2>
      <!-- partners -->
      <div class="flex flex-wrap py-16 justify-evenly *:md:w-[25vw] *:w-[30vh]">
        {#each partners as partner}
          {@render partnerImage(partner)}
        {/each}
      </div>
    </div>
    <div class="bg-[url('/pattern.svg')] min-h-32 w-full bg-repeat-x">
      &nbsp;
    </div>
  </section>

  <!-- sponsors -->
  <section class=" flex flex-col pt-24" id="sponsors">
    <div class="flex flex-col lg:px-32 px-12">
      <h2 class="text-h6 font-bold border-b-2 border-secondar-teal w-fit">
        We thank our Financial Supporters
      </h2>
      <div
        class="flex flex-wrap gap-y-8 py-16 justify-evenly items-baseline *:md:w-[25vw] *:w-[30vh]"
      >
        {#each sponsors as sponsor}
          {@render partnerImage(sponsor)}
        {/each}
      </div>
    </div>
  </section>
</main>
