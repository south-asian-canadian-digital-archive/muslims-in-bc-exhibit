<script lang="ts">
  import Image from "$lib/components/Image.svelte";

  let figures: {
    img: string;
    name: string;
    years: string;
    desc: string;
  }[] = [
    {
      img: "/content/2021_08_01_041.jpg",
      name: "Husain Rahim",
      years: "(1865-1937)",
      desc: "Husain Rahim came from a Gujarati Muslim family and came to Canada as a tourist in 1910. Five months after his arrival, Read more...",
    },
    {
      img: "",
      name: "Imanat Ali Khan",
      years: "(1887-",
      desc: "Imanat Ali Khan came to Canada at the age of 25 in 1912. He worked in Fraser Mills for 2 years. Read more...",
    },
    {
      img: "",
      name: "Barkatullah",
      years: "(1858-1927)",
      desc: "Barkatullah was one of the muslims on the Komagata Maru ship. Born in Bhopal, Barkatullah, received his early education, Read more...",
    },
    {
      img: "",
      name: "Muhammad Akbar",
      years: "-",
      desc: "Muhammed Akbar, son of Mian Alam, a prominent Muslim from the Janjua Rajput caste in Gujarat, Punjab. Read more...",
    },
    {
      img: "",
      name: "Dan Ali Muhammad",
      years: "-",
      desc: "Dan Ali Muhammad was the great grandfather of Khalad, a member of the Abbotsford Islamic Centre. Dan came to BC in 1906,  Read more...",
    },
    {
      img: "",
      name: "Roum Shah",
      years: "-",
      desc: "There is not a lot of information available about Roum Shah. A newspaper clipping from the April 23, 1914, Read more...",
    },
  ];
</script>

<main class="py-32 w-screen flex flex-col gap-10">
  <h1
    class="px-32 text-h2 font-bold text-primary-blue font-source-serif-4 leading-[1.15]"
  >
    Early Migration (pre 1962)
  </h1>
  <p class="desc-text">
    The historical and contemporary presence of Muslim communities in Canada has
    often remained obscured, unacknowledged, and misrepresented. Their profound
    contributions to Canadian society warrant deeper appreciation,
    acknowledgement, and understanding. Our research project aims to contribute
    to this cause by focusing on South Asian Muslim communities of B.C. We use
    archival records, academic works, and personal interviews to highlight
    these, often untold, stories of South Asian Muslim communities in B.C.
    <br />
    <br />
    Far from being a monolithic religion, Islam is a mosaic. Its two main sects are
    Sunni and Shia. Sunni sect is further divided into various sub-sects like Wahabi,
    Salafi, Barelvi, and Deobandi. Shia sect, on the other hand, is also divided
    into further sub sects like Twelver Shi'ism, and Ismailism. Other groups like
    Sufism exist across any such sectarian divisions. Historically, Muslim populations
    have also integrated themselves into diverse local customs, cultures, and traditions
    of Asia, Middle East, and Africa. Our project hopes to honor these diverse ways
    of being a Muslim.
    <br />
    <br />
    Lastly, we also acknowledge that South Asian Muslims in BC is a first of its
    kind project. We hope that this preliminary project will facilitate further,
    in-depth research projects, and exhibitions in the future. We welcome any feedback
    which can help us improve this project.
  </p>

  <div class="flex flex-col gap-16 *:w-full history">
    <section>
      <h2 class="">Early migration to BC</h2>
      <div class="">
        Early migration to BC (till 1962, when the immigration policies changed
        to merit/point system) Due to the lack of archives, we find only small
        traces of early South Asian muslim presence in B.C. For example, a
        memorandum sent by W.C Hopkinson to W.W Cory in 1912 indicates that the
        small number of muslims living in Vancouver at that time raised 900$ and
        sent it to the “Grand Vizier of Turkey” for the “brave soldiers” of the
        Ottoman empire[1]. Similarly, a name, Roum Shah, emerged in a 1914
        newspaper clipping of The Sun. When the ship of Komagata Maru landed on
        the shores of Vancouver in 1914, around 24 muslims were estimated to be
        on board. The well documented story of one of these muslim passengers,
        Barkatullah, indicates how bravely they were all fighting against the
        imperial world order of their times. The Shore committee formed to
        support and collect funds for Komagata Maru passengers also included
        muslim figures like Husain Rahim, and Muhammad Akbar. Another archived
        muslim figure of the early twentieth century is Imanat Ali Khan who was
        working in the Fraser Mills at the time of the Komagata Maru incident.
        Lastly, in the Duncan Gurdwara, the name of a Dan Ali Mohammed has been
        plastered for his contributions in building the Gurdwara
      </div>
    </section>

    <section>
      <h2 class="">Earlly Muslim migrants / historical Muslim figures in BC</h2>
      <div class="">
        Early migration to BC (till 1962, when the immigration policies changed
        to merit/point system) Due to the lack of archives, we find only small
        traces of early South Asian muslim presence in B.C. For example, a
        memorandum sent by W.C Hopkinson to W.W Cory in 1912 indicates that the
        small number of muslims living in Vancouver at that time raised 900$ and
        sent it to the “Grand Vizier of Turkey” for the “brave soldiers” of the
        Ottoman empire[1]. Similarly, a name, Roum Shah, emerged in a 1914
        newspaper clipping of The Sun. When the ship of Komagata Maru landed on
        the shores of Vancouver in 1914, around 24 muslims were estimated to be
        on board. The well documented story of one of these muslim passengers,
        Barkatullah, indicates how bravely they were all fighting against the
        imperial world order of their times. The Shore committee formed to
        support and collect funds for Komagata Maru passengers also included
        muslim figures like Husain Rahim, and Muhammad Akbar. Another archived
        muslim figure of the early twentieth century is Imanat Ali Khan who was
        working in the Fraser Mills at the time of the Komagata Maru incident.
        Lastly, in the Duncan Gurdwara, the name of a Dan Ali Mohammed has been
        plastered for his contributions in building the Gurdwara
      </div>
      <figure
        class="h-screen w-screen relative overflow-hidden object-cover object-center"
      >
        <img src="/map.jfif" alt="" class="absolute top-0 left-0 opacity-45" />
        <div class="bg-[#C2755466] h-full w-full absolute top-0 left-0"></div>

        <div
          class="absolute h-full w-full top-0 left-0 grid p-32 grid-cols-4 grid-rows-5 gap-10 *:bg-slate-50 *:rounded-lg"
        >
          {#snippet personBlock(
            personData: {
              img: string;
              name: string;
              years: string;
              desc: string;
            },
            orientation: "h" | "v" = "v",
            extraCss = ""
          )}
            <div
              class="flex p-10 gap-4 {orientation === 'v'
                ? 'row-span-3 col-span-1 *:h-1/2 items-center'
                : 'col-span-2 row-span-2 w-9/12'} {extraCss}"
              class:flex-col={orientation === "v"}
            >
              <div
                class="object-cover rounded-full overflow-hidden aspect-square min-w-min"
              >
                {#if personData?.img !== ""}
                  <img
                    src={personData?.img || ""}
                    alt=""
                    class="aspect-square object-cover object-right rounded-full"
                  />
                {:else}
                  <div
                    class="aspect-square object-cover object-right rounded-full bg-black"
                  >
                    &nbsp;
                  </div>
                {/if}
              </div>
              <div class="">
                <h6 class="h-1/3 border-b border-b-black text-center">
                  <b>{personData?.name}</b><br />{personData?.years}
                </h6>
                <p class="h-2/3 overflow-auto pt-2">{personData?.desc}</p>
              </div>
            </div>
          {/snippet}

          {#each Array(4) as _, idx}
            {console.log(figures)}

            {@render personBlock(figures[idx])}
          {/each}

          {@render personBlock(figures[4], "h", "ml-auto")}
          {@render personBlock(figures[5], "h")}
        </div>
      </figure>
    </section>

    <section>
      <h2 class="">Ghadar Party</h2>
      <div class="">
        <Image
          src="/content/ghadar_movement_flag.png"
          alt="Ghadar Movement Flag">Ghadar Movement Flag</Image
        >

        The Ghadar Party, comprised of Indian expatriates in Canada and the
        United States, was an anti-colonial organization with the objective of
        overthrowing British rule in the Indian subcontinent through armed
        resistance. It established branches worldwide, including in Vancouver,
        BC.[5] Among its early leaders were individuals from the Sikh, Hindu and
        Muslim communities, and its publication prominently featured the names
        "Ram, Allah, and Nanak" on its masthead.[6]
        <br /><br />
        Academic studies of the movement often focus primarily on its secular and
        socialist aspects, neglecting the diverse religious influences that also
        shaped it. This oversight is particularly evident in the case of Muslim Ghadarites,
        whose religious beliefs are dismissed as unrelated to their involvement in
        the movement.[7] Ironically, two prominent Muslim members of the movement,
        Maulana 'Ubayd Allah Sindhi (1872-1944) and Maulana Barkatullah Bhopali (1859-1927)
        who was also a passenger of the Komagata Maru, were esteemed scholars deeply
        rooted in traditional teachings.
        <br /><br />
        Maulana 'Ubayd Allah Sindhi (1872-1944) stands as a significant figure within
        the Ghadar movement. A Deobandi school of thought follower, he embraced anti-imperialist
        ideals, going beyond religion and societal barriers in his hope for India's
        liberation. He was known for his involvement in the 1915 Ghadarite project,
        Provisional Azad Hind Government project in Afghanistan where he became Home
        Minister and Barkatullah as Prime Minister.
        <br /><br />
        Maulana Barkatullah Bhopali (1859-1927) is known for being one of the founding
        members of the Ghadar Party, and his stays and work in Europe, Japan and
        the Americas. It is worth noting that Barkatullah was one of the passengers
        in the Komagata Maru, however, he was not one of the selected passengers
        who were allowed to stay and so, went to San Francisco. Both Barakatullah
        and Sindhi, along with the majority of their Ghadarite members, held onto
        the idea of Hindu-Muslim unity until the very end
      </div>
    </section>

    <section>
      <h2 class="">Komagata Maru</h2>
      <div class="">
        <Image
          src="/content/komagatamaru.png"
          alt="Komagata Maru incident"
          class="w-2/3 ml-12">Komagata Maru incident</Image
        >

        Early migration to BC (till 1962, when the immigration policies changed
        to merit/point system) Due to the lack of archives, we find only small
        traces of early South Asian muslim presence in B.C. For example, a
        memorandum sent by W.C Hopkinson to W.W Cory in 1912 indicates that the
        small number of muslims living in Vancouver at that time raised 900$ and
        sent it to the “Grand Vizier of Turkey” for the “brave soldiers” of the
        Ottoman empire[1]. Similarly, a name, Roum Shah, emerged in a 1914
        newspaper clipping of The Sun.

        <br /><br />
        When the ship of Komagata Maru landed on the shores of Vancouver in 1914,
        around 24 muslims were estimated to be on board. The well documented story
        of one of these muslim passengers, Barkatullah, indicates how bravely they
        were all fighting against the imperial world order of their times. The Shore
        committee formed to support and collect funds for Komagata Maru passengers
        also included muslim figures like Husain Rahim, and Muhammad Akbar. Another
        archived muslim figure of the early twentieth century is Imanat Ali Khan
        who was working in the Fraser Mills at the time of the Komagata Maru incident.
        Lastly, in the Duncan Gurdwara, the name of a Dan Ali Mohammed has been plastered
        for his contributions in building the Gurdwara.
      </div>
    </section>

    <section>
      <h2 class="">Orientalism</h2>
      <div class="">
        Edward Said has defined Orientalism as a production of stereotypical
        knowledge about the customs and traditions of the East or Orient since
        at least the "late eighteenth century" in the West.[9] In the early
        twentieth century B.C too, we find an interest in plays, novels, and
        articles about the East, or Orient. The December 8, 1906 issue of The
        Victoria Daily Times announced the serial publication of a novel, The
        Persian Roseleaf, written by Col. Andrew Haggard. The novel was based on
        his experiences of fighting battles in Soudan. Similarly, a play titled
        “Paradise of Mahoment” was staged in the Victoria Theatre in October,
        1911, after its “successful” staging in New York. Though seemingly
        harmless and entertaining, these and other similar works of Orientalism
        shaped popular perceptions about Muslims in the early twentieth century
        B.C.

        <br /><br />
        Resources:

        <ol>
          <li>
            The Persian Roseleaf

            <ol>
              <li>
                NewspaperAnnouncement: <a
                  href="https://www.proquest.com/historical-newspapers/december-8-1906-page-16/docview/2257245860/se-2?accountid=5705"
                  >https://www.proquest.com/historical-newspapers/december-8-1906-page-16/docview/2257245860/se-2?accountid=5705</a
                >
              </li>
              <li>
                FirstEpisode: <a
                  href="https://www.proquest.com/historical-newspapers/december-8-1906-page-14-16/docview/2257244932/se-2?accountid=5705"
                  >https://www.proquest.com/historical-newspapers/december-8-1906-page-14-16/docview/2257244932/se-2?accountid=5705</a
                >
              </li>
            </ol>
          </li>

          <li>
            Paradise of Mahoment
            <ol>
              <li>
                Advertisement: <a
                  href="https://www.proquest.com/historical-newspapers/october-28-1911-page-13-24/docview/2257246097/se-2?accountid=5705"
                  >https://www.proquest.com/historical-newspapers/october-28-1911-page-13-24/docview/2257246097/se-2?accountid=5705</a
                >
              </li>
              <li>
                Reviews: <a
                  href="https://www.proquest.com/historical-newspapers/october-28-1911-page-19-24/docview/2257246218/se-2?accountid=5705"
                  >https://www.proquest.com/historical-newspapers/october-28-1911-page-19-24/docview/2257246218/se-2?accountid=5705</a
                >
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </section>

    <section>
      <h2 class="">Bibliography</h2>
      <div class="">
        [1]Brij Lal. 1976. “East Indians in British Columbia 1904-1914 : An
        Historical Study in Growth and Integration.” Retrospective Theses and
        Dissertations, 1919-2007. T, University of British Columbia, doi: <a
          href="http://dx.doi.org/10.14288/1.0093725"
          >http://dx.doi.org/10.14288/1.0093725</a
        >, Page 92.
        <br /><br />
        [2] Mayo, Joan. 1997. Paldi Remembered: 50 Years in the Life of a Vancouver
        Island Logging Town. Duncan: Priority Printing, Pp3.
        <br /><br />
        [3] Iqbal Hussain. “BARKATULLAH — A HALF-FORGOTTEN REVOLUTIONARY.” Proceedings
        of the Indian History Congress 66 (2005): 1061–72.
        <a href="http://www.jstor.org/stable/44145919"
          >http://www.jstor.org/stable/44145919</a
        >, Page 1061.
        <br /><br />
        [4] SACDA, Komagata Maru; Biographies: Shore Committee. Accessed December
        15, 2023.
        <br /><br />
        [5]Sohi, Seema. “The Ghadar Party,” South Asian American Digital Archive
        (SAADA), 2018. Accessed March 20, 2024.
        <a href="https://www.saada.org/tides/article/the-ghadar-party"
          >https://www.saada.org/tides/article/the-ghadar-party</a
        >
        <br /><br />
        [6] “The Ghadar Party: Freedom for India,” The Pluralism Project, Harvard
        University. Accessed March 20, 2024.
        <a href="https://pluralism.org/the-ghadar-party-freedom-for-india"
          >https://pluralism.org/the-ghadar-party-freedom-for-india</a
        >
        <br /><br />
        [7] Mohammed Ayub Khan. “His Master’s Voice?: Ubayd Allah Sindhi’s Re-interpretation
        of Orthodox Islam as Inclusive Revolutionary Ideology.” Ghadar Centennial
        Conference Proceedings, Centre for Indo-Canadian Studies, University of the
        Fraser Valley, 2013, 99.
        <a
          href="https://ufv.ca/media/assets/cics/resources/68861-UFV-Booklet-May-2015.pdf"
          >https://ufv.ca/media/assets/cics/resources/68861-UFV-Booklet-May-2015.pdf</a
        >
        <br /><br />
        [8] Khan, His Master's Voice?, 99 -114.
        <br /><br />
        [9] Said, Edward. Orientalism, Penguin Books, 2003, 3.
      </div>
    </section>

    <!-- <section>
      <h2 class=""></h2>
      <div class="">
      </div>
    </section> -->
  </div>
</main>
