<!-- @migration-task Error while migrating Svelte code: `<button>` is invalid inside `<button>` -->
<script lang="ts">
  import { clickOutside } from "$lib/utils/clickOutside.util";
  import { createEventDispatcher } from "svelte";
  import { slide } from "svelte/transition";

  export let value = "";
  export let options: string[] = [];

  export let dropdownOpen = false;
  export let inputFocused = false;

  $: dropdownClicked = false;
  const dispatch = createEventDispatcher();

  $: {
    dropdownOpen = inputFocused || dropdownClicked;
  }
</script>


<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  class="relative {$$props.class}"
  use:clickOutside
  on:click_outside={() => {
    dropdownOpen = false;
  }}
  on:click={() => {
    if (inputFocused) return;
    inputFocused = true;
  }}
  on:keydown
>
  <button
    class="cursor-pointer ease-in-out duration-200 transform select-none"
    on:click|stopPropagation={() => {
      dropdownOpen = !dropdownOpen;
      inputFocused = dropdownOpen;
    }}
    on:keydown
  >
    <slot />
    <span
      class="fa fa-angle-down ease-in-out duration-200 transform select-none"
      class:-rotate-180={dropdownOpen}
    ></span>
  </button>

  {#if dropdownOpen}
    <div
      class="absolute z-[999] bg-white w-fit rounded-lg text-sm font-medium flex flex-col shadow-lg"
      on:keydown
      on:click={() => {
        dropdownClicked = true;
      }}
      use:clickOutside
      on:click_outside={() => {
        dropdownClicked = false;
      }}
    >
      {#each options as option}
        <button
          class="flex flex-row items-center px-4 py-3 cursor-pointer w-full text-garden-grey-700 border-y border-secondary-yellow first:border-t-0 last:border-b-0 whitespace-nowrap"
          on:keydown
          on:click|stopPropagation={() => {
            dropdownOpen = false;
            inputFocused = false;
            value = option;
            dispatch("change", { value });
          }}
          transition:slide|global={{ duration: 100 }}
        >
          {option}
        </button>
      {/each}
    </div>
  {/if}
</div>
