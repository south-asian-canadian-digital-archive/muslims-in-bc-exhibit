<script>
  import HistoryTimeline from "$lib/components/HistoryTimeline.svelte";
  import Arrow from "$lib/components/Arrow.svelte";

  const links = [
    {
      title: "Husain Rahim",
      content: [
        {
          subHeading: "Exhibit",
          content: [
            {
              text: "Exhibit done by SACDA on the Komagata Maru, where Husain Rahim is discussed more intensively.",
              link: "https://sacda.ca/exhibits/km/english/bio/bio99.php",
            },
          ],
        },
        {
          subHeading: "Images",
          content: [
            {
              text: "Husain Rahim mugshot",
              link: "https://sacda.ca/Detail/objects/11178",
            },
            {
              text: "Group photo of Husain Rahim and five unidentified individuals in front of the Immigrational Hall in Victoria, BC",
              link: "https://sacda.ca/Detail/objects/11177",
            },
            {
              text: "Statement given to Immigration officers by informers and their friends",
              link: "https://sacda.ca/Detail/objects/9518",
            },
          ],
        },
      ],
    },
  ];
</script>

<main class="p-32 w-screen flex flex-col gap-10">
  <p class="text-h2 font-bold text-primary-blue">Resources</p>

  <div class="flex flex-col gap-16 *:w-full *:grid *:grid-cols-12">
    {#each links as linkItem}
      <section>
        <h2>{linkItem.title}</h2>
        <div class="flex flex-col">
          {#each linkItem.content as contentItem}
            <b class="pb-4 pt-8 first:pt-0">{contentItem.subHeading}:</b>

            {#each contentItem.content as link, i}
              <div class:border-t-2={i === 0} class="link">
                <span class="text-body">
                  {link.text}
                </span>

                <a
                  href={link.link}
                  class="hover:scale-110 transition-all ease-in-out duration-200"
                >
                  <Arrow size={20} />
                </a>
              </div>
            {/each}
          {/each}
        </div>
      </section>
    {/each}
  </div>
</main>

<HistoryTimeline />

<style type="postcss">
  section > h2 {
    @apply text-h4 col-span-3;
  }
  section > div {
    @apply col-span-9 pt-5 pl-8;
  }

  .link {
    @apply flex text-left items-center justify-between gap-10 p-8 border-b-2 border-secondary-yellow hover:bg-secondary-yellow transition-all ease-in-out duration-300;
  }
</style>
