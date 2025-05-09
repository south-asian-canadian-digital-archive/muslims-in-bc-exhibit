<script>
  import HistoryTimeline from "$lib/components/HistoryTimelineMobile.svelte";
  import Arrow from "$lib/components/Arrow.svelte";

  import { resourceLinks } from "$lib/content/resources.content";
</script>

<main class="py-32 flex flex-col gap-10">
  <p
    class="text-h2 font-bold text-primary-blue font-source-serif-4 leading-[1.5]"
  >
    Further Reading
  </p>

  <div class="flex flex-col gap-16 *:w-full *:grid *:grid-cols-12 history">
    {#each resourceLinks as linkItem}
      <section class="relative">
        <span
          id={linkItem.title.toLowerCase().split(" ").join("-")}
          class="absolute -top-48">&nbsp;</span
        >
        <h2>{linkItem.title}</h2>
        <div class="flex flex-col">
          {#each linkItem.content as contentItem}
            <b class="pb-4 pt-8 first:pt-0">{contentItem.subHeading}:</b>

            {#each contentItem.content as link, i}
              <div class:border-t-2={i === 0} class="link">
                <span class="text-body">
                  {link.text}
                </span>

                {#if link.link && link.link !== "#"}
                  <a
                    href={link.link}
                    class="hover:scale-110 transition-all ease-in-out duration-200"
                  >
                    <Arrow size={20} />
                  </a>
                {/if}
              </div>
            {/each}
          {/each}
        </div>
      </section>
    {/each}
  </div>
</main>

<!-- <HistoryTimeline /> -->

<style type="postcss">
  .link {
    @apply flex text-left items-center justify-between gap-10 p-8 border-b-2 border-secondary-yellow hover:bg-secondary-yellow transition-all ease-in-out duration-300;
  }
</style>
