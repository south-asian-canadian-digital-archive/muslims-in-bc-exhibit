<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { Flip } from "gsap/dist/Flip";
  import * as Dialog from "$lib/components/ui/dialog";

  interface Props {
    personData: {
      img: string;
      name: string;
      years: string;
      desc?: string;
    };
    key: number;
    orientation?: "h" | "v";
    extraCss?: string;
    children?: import("svelte").Snippet;
  }

  let {
    personData,
    key,
    orientation = "v",
    extraCss = "",
    children,
  }: Props = $props();

  let modalOpen = $state(false);

  let modalID = `person-modal-${key}`;
  let mainBox: HTMLButtonElement;
  let finalContainer: HTMLDivElement;
  let initContainer: HTMLDivElement;

  const switchContainers = () => {
    finalContainer.classList.toggle("hidden");
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
  class="h-full {orientation === 'v'
    ? 'lg:row-span-3 lg:col-span-1'
    : 'lg:col-span-2 lg:row-span-2 lg:w-9/12'} {extraCss} hidden"
>
  <Dialog.Root>
    <Dialog.Trigger></Dialog.Trigger>
    <Dialog.Content>
      <Dialog.Header>
        <Dialog.Title>Are you sure absolutely sure?</Dialog.Title>
        <Dialog.Description>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </Dialog.Description>
      </Dialog.Header>
    </Dialog.Content>
  </Dialog.Root>
</div>

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
    ? 'lg:row-span-3 lg:col-span-1'
    : 'lg:col-span-2 lg:row-span-2 lg:w-9/12'} {extraCss}"
>
  <button
    id={modalID}
    bind:this={mainBox}
    aria-label="opens modal with more info"
    class="flex p-6 gap-4 w-full h-full bg-slate-50 rounded-lg shadow-lg relative items-center lg:flex-row flex-col"
    class:lg:flex-col={modalOpen ? false : orientation === "v"}
    onclick={animate}
  >
    <div
      class="object-cover rounded-full overflow-hidden aspect-square min-h-[8vw] min-w-[8vw] *:max-h-[40vh] h-[30vw]"
      class:lg:h-[10vw]={!modalOpen}
    >
      {#if personData?.img !== ""}
        <img
          src={personData?.img || ""}
          alt=""
          class="aspect-square object-cover object-right rounded-full h-full"
        />
      {:else}
        <div
          class="aspect-square object-cover object-right rounded-full bg-black"
          class:h-[60vh]={modalOpen}
        >
          &nbsp;
        </div>
      {/if}
    </div>
    <div class="w-full overflow-hidden">
      <h6 class="lg:border-b border-b-black text-center">
        <b>{personData?.name}</b><br />{personData?.years}
      </h6>
      <div
        class="pt-2 {modalOpen
          ? 'overflow-scroll h-[48vh] whitespace-break-spaces'
          : orientation === 'h' && 'h-[10vh]'}"
      >
        {#if modalOpen}
          {@html personData.desc}
        {:else}
          {personData.desc?.slice(0, 100)}
        {/if}
      </div>
    </div>
    <span class="absolute bottom-1 right-2 text-sm italic font-light">
      {modalOpen ? "click to minimize" : "click to read more..."}
    </span>
  </button>
</div>

<style>
  .popout {
    flex-direction: row !important;
  }
</style>
