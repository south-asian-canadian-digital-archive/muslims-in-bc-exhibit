<script lang="ts">
  import DomeThing from "$lib/components/DomeThing.svelte";

  const baseDomeWidth = 409;
  let domes = [
    {
      width: 409,
      hovered: true,
    },
    {
      width: 409/2,
      hovered: false,
    },
  ];
</script>

<main class="">
  <section class="h-screen flex pt-10 px-0 w-screen">
    <div class="flex flex-col gap-12 pl-32">
      <h1 class="font-source-serif-4 font-bold text-h2">
        South Asian Muslims in British Columbia
      </h1>

      <div
        class="border-l-[6px] border-l-secondary-yellow flex flex-col pl-8 gap-6"
      >
        <p>
          The South Asian Muslims in British Columbia digital exhibit sheds
          light on the often obscured and misrepresented historical and
          contemporary presence of Muslim communities in Canada, focusing on
          South Asian Muslim communities of B.C. Through archival records,
          academic works, and personal interviews, we aim to highlight their
          profound contributions to Canadian society and promote deeper
          appreciation and understanding.
        </p>
        <button
          class="bg-secondar-teal py-4 px-12 rounded-full text-white w-fit"
          >Explore</button
        >
      </div>
    </div>

    <div class="flex gap-4 pr-32 max-w-[50vw]">
      {#each domes as dome, i}
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <span
        on:mouseenter={() => {
          domes[i].hovered = true;
        }}
        on:mouseleave={() => {
          domes[i].hovered = false;
        }}
        >
          <DomeThing width={domes[i].hovered ? baseDomeWidth : baseDomeWidth/2} />
        </span>
      {/each}
    </div>
  </section>
</main>
