<script lang="ts">
  import Image from "$lib/components/Image.svelte";
  import Modal from "$lib/components/Modal.svelte";

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
      desc: ` 
        Husain Rahim came from a Gujarati Muslim family and came to Canada as a tourist
        in 1910. Five months after his arrival, the immigration department started
        the procedure for deportation against him. However, Rahim fought the case
        and won it in court thereby, remaining in Vancouver.
        <br><br>
        In 1911, Rahim established the United India League, an organization focused
        on employing constitutional methods to stimulate social and political renewal
        within the Hindustanee populace.
        <br><br>
        In 1914 when the Komagata Maru incident occurred, Rahim was an active member
        of the local shore communities and played a prominent role in helping the
        ship's passengers. He, along with other members, raised some $22k to purchase
        the ship and find a way to evade Canadian policy. Unfortunately, while that
        did not work, his inspiring efforts to fight the discriminatory policies
        then has been forgotten by many.
        <br><br>
        
        Aside from this, he lived in Kobe, Japan for 15 years where he was known
        as, "Shagan Lall". He was also the editor for "The Hindustanee Newspaper",
        which was mainly read by the South Asian community residing in Vancouver
        and the lower mainland at the time. He owned a bookstore near Strawberry
        Hill, and is noted to be the first East Indian who married in Canada.
        <br><br>

        A commemorative plaque in Husain Rahim's name is located under the Cambie
        Bridge. Alongside Harnam Kaur Plaza and Khalsa Diwan Road, these memorial
        projects, undertaken by The Nameless Collective in collaboration with the
        City of Vancouver, aim to incorporate Punjabi and South Asian history into
        the cityscape. The plaque's inscription, crafted by Paneet Singh, honors
        Rahim's contributions. Resources:
        
        <br><br>
        <ol><li><span>Here is a link to an exhibit done by SACDA on the Komagata Maru,
              where Husain Rahim is discussed more intensively:

              <a href="https://sacda.ca/exhibits/km/english/bio/bio99.php">https://sacda.ca/exhibits/km/english/bio/bio99.php</a>
              The following links are what SACDA has in store about Husain Rahim:
              <ol><li><a href="https://sacda.ca/Detail/objects/11178">https://sacda.ca/Detail/objects/11178</a></li> <li><a href="https://sacda.ca/Detail/objects/11177">https://sacda.ca/Detail/objects/11177</a></li> <li><a href="https://sacda.ca/Detail/objects/9518">https://sacda.ca/Detail/objects/9518</a></li> <li><a href="https://sacda.ca/Detail/objects/9433">https://sacda.ca/Detail/objects/9433</a></li></ol></span></li> <li><a href="https://policyalternatives.ca/sites/default/files/uploads/publications/BC%20Office/2021/02/ccpa-bc_Challenging-Racist-BC.pdf">https://policyalternatives.ca/sites/default/files/uploads/publications/BC%20Office/2021/02/ccpa-bc_Challenging-Racist-BC.pdf</a></li> <li>Lal, Brij. “East Indians in British Columbia, 1904-1914: An
            historical study in growth and integration.” Thesis, UBC, The
            Faculty of Graduate Studies; Department of History. 1976.
            <a href="https://open.library.ubc.ca/media/stream/pdf/831/1.0093725/1">https://open.library.ubc.ca/media/stream/pdf/831/1.0093725/1</a> (Page 64-83 about Husain Rahim)</li> <li>Mayo, Joan. “Paldi Remembered: 50 Years in the Life of a Vancouver
            Island Logging Town.”Duncan: Priority Printing, 1997
            <a href="https://archive.org/details/paldiremembered50000mayo">https://archive.org/details/paldiremembered50000mayo</a> - Husain Rahim little info Chapter 2, page 4</li></ol>
      `,
    },
    {
      img: "",
      name: "Imanat Ali Khan",
      years: "(1887-",
      desc: `
        Imanat Ali Khan came to Canada at the age of 25 in 1912. He worked in Fraser
        Mills for 2 years, 1912-14, and witnessed the incident of Komagata Maru in
        1914. Khan moved to California after the Mill shut down in 1914. Living in
        Canada and America from 1912 to 1932, Khan went back to India and got married
        there. After living in Pakistan till 1976, Khan came back to California in
        1979 before settling in Canada.
        <br><br>
        Resources: 
        <ol><li><a href="https://digital.lib.sfu.ca/icohc-5/imanat-ali-khan">https://digital.lib.sfu.ca/icohc-5/imanat-ali-khan</a></li></ol>
        `,
    },
    {
      img: "",
      name: "Barkatullah",
      years: "(1858-1927)",
      desc: ` Barkatullah was one of the muslims on the Komagata Maru ship.
        Born in Bhopal, Barkatullah received his early education in a Madressah
        where he learnt "Arabic, Persian and other religious sciences". 
        Early on in his life, he was inspired by the anti imperialist
        campaign of Syed Jamaluddin Afghani.
        <br><br>

        After completing his education, he moved to London where he taught Arabic
        for 8 years. His criticism of British imperial policies did not bode well
        with the British government and he decided to migrate to the USA, where he
        actively participated in Ghaddar Party activities. Like many other revolutionary
        figures of the early twentieth century, Barkatullah traveled extensively
        across Central Asia, Russia, and Europe throughout his life to seek international
        solidarity and support for India's freedom. He was in Tokyo in 1914 when
        he heard about the sailing of the Komagata Maru ship and decided to board
        it.
        <br><br>
        Resources: 
        <ol><li>Husain, Iqbal. “BARKATULLAH — A HALF-FORGOTTEN REVOLUTIONARY.”
            Proceedings of the Indian History Congress 66 (2005): 1061-72. <a href="http://www.jstor.org/stable/44145919">http://www.jstor.org/stable/44145919.</a></li> <li>A portrait of Barkatullah Source:
            <a href="https://themuslimvibe.com/muslim-current-affairs-news/americas/these-muslims-challenged-canadas-immigration-ban-in-1914">https://themuslimvibe.com/muslim-current-affairs-news/americas/these-muslims-challenged-canadas-immigration-ban-in-1914</a></li></ol>
    `,
    },
    {
      img: "",
      name: "Muhammad Akbar",
      years: "-",
      desc: `
      Muhammed Akbar, son of Mian Alam, a prominent Muslim from the
        Janjua Rajput caste in Gujarat, Punjab (now Pakistan), emerged as a
        pivotal member of the Shore Committee supporting Komagata Maru's
        passengers. Previously affiliated with the Hong Kong police, Akbar
        transitioned into an active role within the Ghadar Party in Vancouver,
        demonstrating sustained commitment post the Komagata Maru incident.
        
        <br><br>
        Resources:
        <ol><li><a href="https://sacda.ca/Detail/objects/606">https://sacda.ca/Detail/objects/606</a></li></ol>
      `,
    },
    {
      img: "",
      name: "Dan Ali Muhammad",
      years: "-",
      desc: `Dan Ali Muhammad was the great grandfather of Khalad, a member of the Abbotsford Islamic Centre. Dan came to BC in 1906, even before the Komagata Maru incident. He traveled from India to Tacoma to Duncan in Vancouver Island, and then to Port Alberni and Boston Bar. He worked in the timber industry, logging, and sawmills. Being the only Muslim person living in Duncan at that time, he was involved in raising funds for a Gurdwara to be built there, as it was the only form of connection he had to the community. At the Duncan Gurdwara, his name is plastered in the main building as a contributor. An interesting point to note is that when the first Islamic Centre was to be built in Vancouver, the Sikhs living there also contributed money towards the funds for construction.
        <br><br>
        As a typical form of migration, families from Boston Bar would move towards the Hope/Chilliwack/Abbotsford area, as did Dan Ali Mohammed. Khalad's grandfather came to Boston Bar sometime in the late 1940s as a young child from India while his great-grandfather was still in Port Alberni. As he grew older, he too worked in sawmills and so.
        <br><br>
        Due to the policies set by the Canadian government, South Asian migrants had to typically travel back and forth for getting married and having children.
        <br><br>
        Khalad's mother was born in Pakistan and came to BC after her marriage. She worked in a government-run nursery in the mountains in North Bend at Boston Bar.`,
    },
    {
      img: "",
      name: "Roum Shah",
      years: "-",
      desc: `
      There is not a lot of information available about Roum Shah. A
        newspaper clipping from the April 23, 1914 issue of The Sun indicates
        that Roum Shah was the co-author of a pamphlet, “The Tyranny of the
        English Militarism.” He wrote this pamphlet to protest the forceful
        deportation of a prominent Ghaddar Party member, Bhagwan Singh, from
        Vancouver/Victoria to Hong Kong. 
        <br><br>
        Resources:
        <ol><li><a href="https://www.proquest.com/historical-newspapers/april-23-1914-page-9-12/docview/2239629663/se-2?accountid=5705">https://www.proquest.com/historical-newspapers/april-23-1914-page-9-12/docview/2239629663/se-2?accountid=5705</a></li></ol>
      `,
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
          class="absolute h-full w-full top-0 left-0 grid p-32 grid-cols-4 grid-rows-5 gap-10 *:rounded-lg"
        >
          {#each Array(4) as _, idx}
            <Modal personData={figures[idx]} key={idx} />
          {/each}

          <Modal
            personData={figures[4]}
            key={4}
            orientation="h"
            extraCss="ml-auto"
          />
          <Modal personData={figures[5]} key={5} orientation="h" />
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
