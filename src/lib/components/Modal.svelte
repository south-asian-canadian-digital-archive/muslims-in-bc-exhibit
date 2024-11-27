<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { Flip } from "gsap/dist/Flip";

  interface Props {
    personData: {
      img: string;
      name: string;
      years: string;
      desc: string;
    };
    key: number;
    orientation?: "h" | "v";
    extraCss?: string;
  }

  let { personData, key, orientation = "v", extraCss = "" }: Props = $props();
  let initOrientation = orientation;

  let modalID = `person-modal-${key}`;
  let tween: gsap.core.Tween;
  let modalOpen = $state(false);

  let mainBox: HTMLButtonElement;
  let finalContainer: HTMLDivElement;
  let initContainer: HTMLDivElement;

  const switchContainers = () => {
    finalContainer.classList.toggle("hidden");
    //     mainBox.style.setProperty("flex-direction", "row");
    (mainBox.parentNode === initContainer
      ? finalContainer
      : initContainer
    ).appendChild(mainBox);
  };

  const animate = () => {
    const state = Flip.getState(`#${modalID}`);
    switchContainers();
    Flip.from(state, {
      duration: 0.4,
      ease: "power1.inOut",
      onStart: () => {
        modalOpen = !modalOpen;
        console.log(modalOpen);
      },
      onComplete: () => {
        console.log("");
      },
    });
  };

  onMount(() => {
    gsap.registerPlugin(Flip);
  });
</script>

<div
  bind:this={finalContainer}
  id="{modalID}-final"
  class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[60vh] hidden z-[99999]"
>
  &nbsp;
</div>

<div
  bind:this={initContainer}
  id="{modalID}-init"
  class="h-full {orientation === 'v'
    ? 'row-span-3 col-span-1'
    : 'col-span-2 row-span-2 w-9/12'} {extraCss}"
>
  <button
    id={modalID}
    bind:this={mainBox}
    aria-label="opens modal with more info"
    class="flex p-10 gap-4 w-full h-full bg-slate-50 rounded-lg shadow-lg relative"
    class:flex-col={modalOpen ? false : orientation === "v"}
    onclick={animate}
  >
    <div
      class="object-cover rounded-full overflow-hidden aspect-square min-h-[10vw] min-w-[10vw] max-h-[40vh] self-center"
      class:h-[50%]={modalOpen ? false : orientation === "v"}
    >
      {#if personData?.img !== ""}
        <img
          src={personData?.img || ""}
          alt=""
          class="aspect-square object-cover object-right rounded-full self-center"
        />
      {:else}
        <div
          class="aspect-square object-cover object-right rounded-full bg-black self-center"
          class:h-[60vh]={modalOpen}
        >
          &nbsp;
        </div>
      {/if}
    </div>
    <div class="w-full overflow-hidden">
      <h6 class="border-b border-b-black text-center">
        <b>{personData?.name}</b><br />{personData?.years}
      </h6>
      <p
        class="pt-2 {modalOpen
          ? 'overflow-scroll h-[40vh] whitespace-break-spaces'
          : 'whitespace-nowrap'}"
        class:whitespace-nowrap={!modalOpen}
      >
        {@html personData?.desc}
      </p>
    </div>
    <span class="absolute bottom-1 right-2 text-sm italic font-light">click to read more...</span>
  </button>
</div>

<style>
  .popout {
    flex-direction: row !important;
  }
</style>
