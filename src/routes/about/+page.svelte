<script lang="ts">
  import { gsap } from "gsap";
  import { onMount } from "svelte";

  let floatingSquareTweens: gsap.core.Tween[] = []
  const floatingSquareInfo: { title: string, desc: string }[] = [
    {
        title: "Consultation",
        desc: "SASI spent a year and half (2023-2024) consulting with organizations, associations and individuals who have lived experiences as South Asian Canadian Muslims in BC and beyond. The goal of the consultations",
    },
    {
        title: "Building Relationships",
        desc: "We form strong partnerships with community members and organizations to access personal stories and archives. These relationships help ensure our research is inclusive and representative of the diverse South Asian Muslim experiences in B.C."
    },
    {
        title: "Education & Outreach", 
        desc: "Through exhibitions, workshops, and online resources, we educate the public on the contributions of South Asian Muslims in B.C. Our outreach fosters cultural understanding and celebrates these untold histories."
    },
    {
        title: "Grants & Funding",
        desc: "Our research and events are made possible through generous grants and funding. We use these resources to conduct in-depth research, create public exhibitions, and develop educational programs that preserve and share this heritage."
    }
  ]

  onMount(() => {

    gsap.utils.toArray<any>('.floating-square > div.left-0').forEach(square => {
        floatingSquareTweens.push(gsap.to(square, {
            translateX: "-=random(2, 7)",
            translateY: "-=random(2, 7)",
            ease: "sine.inOut",
            duration: 5,
            delay: "random(0.2, 1)",
            repeat: -1,
            yoyo: true,
        }))
    })

  })

</script>

{#snippet FloatingSquare(title: string, desc: string, marginTop: string = "0px", idx: number)}  
      <div
        role="dialog"
        onfocus={()=>{}}
        onmouseover={() => {
            floatingSquareTweens[idx].pause()
        }}
        onmouseleave={() => {
            floatingSquareTweens[idx].resume()
        }}
       style:margin-top={marginTop} class="floating-square relative *:absolute *:rounded-2xl h-[20vw] w-[20vw] *:h-full *:aspect-square">
        <div class="z-50 -top-4 -left-4 bg-secondary-yellow p-[10%] overflow-auto *:will-change-transform will-change-transform">
            <h6 class="text-h6 font-bold text-primary-black pb-[4%]">{title}</h6>
            <p class="text-p">{desc}</p>
        </div>
        <div class="bg-[#CED299] bg-secondary-yellowtop-0 left-0">&nbsp;</div>
      </div>
{/snippet}

<main class="py-20 flex flex-col gap-16">
  <section class="bg-secondary-yellow flex flex-col pt-24">
    <div class="flex flex-row gap-16 px-32 pb-24">
      <div class="flex flex-col gap-8">
        <h1
          class="text-primary-blue text-h2 font-source-serif-4 font-bold leading-[1.5]"
        >
          About SASI
        </h1>
        <p class="text-p text-primary-black">
          The South Asian Studies Institute (the Institute) at the University of
          the Fraser Valley brings together South Asia scholars and students
          from diverse backgrounds and disciplines to create a nexus point for
          programs and activities that support our vision. The Institute fosters
          inter-disciplinary scholarly research, community and public engagement
          on issues related to South Asia and the Canadian South Asian Diaspora.
          The Institute initiates, directs and implements the development,
          maintenance and enhancement of scholarship, research and engagement in
          collaboration with faculty, students and community. The Institute
          takes direction from UFV's strategic goals to be a leader of social,
          cultural, economic and environmentally responsible development in the
          Fraser Valley The Institute is a repository of the pioneering history
          of immigrant settlers who make up the Canadian South Asian Diaspora.
          We also undertake much needed contemporary research that benefits
          academia, members of the community, government, organizations and
          agencies as well as global scholars and interested persons.
        </p>
      </div>
      <div class="min-w-[35vw] h-auto bg-gray-300"></div>
    </div>

    <div class="bg-[url('/pattern.svg')] min-h-32 w-full bg-repeat-x">
      &nbsp;
    </div>
  </section>

  <section class="p-32 pt-36 flex flex-row gap-16">

    <div class="grid grid-rows-2 grid-cols-2 gap-20">

      {#each floatingSquareInfo as info, idx}

        {@render FloatingSquare(info.title, info.desc, [2,0].includes(idx) ? "-5vh" : "0", idx)}
        
      {/each}

    </div>

    <div>
      <h3 class="text-h3 font-bold font-source-serif-4">Project History</h3>
    </div>
  </section>

  <!-- sponsors -->
  <section class="bg-secondary-yellow flex flex-col pt-24">
    <div class="flex flex-col px-32">
      <h2 class="text-h6 font-bold border-b-2 border-secondar-teal w-fit">
        We thank our Financial Supporters
      </h2>
      <div class="flex py-24 justify-between">
        <img src="/BlackResearchGraduateStudies.png" class="h-24" alt="" />
        <img src="/UFV_SASI_logo.png" alt="" class="h-24" />
        <img src="/Sacda-logo.svg" alt="" class="h-18" />
      </div>
    </div>

    <div class="bg-[url('/pattern.svg')] min-h-32 w-full bg-repeat-x">
      &nbsp;
    </div>
  </section>
</main>
