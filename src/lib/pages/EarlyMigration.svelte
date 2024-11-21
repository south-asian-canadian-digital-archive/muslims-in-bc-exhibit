<script>
  import Image from "$lib/components/Image.svelte";
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
          <div class="row-span-3 col-span-1"></div>
          <div class="row-span-3 col-span-1"></div>
          <div class="row-span-3 col-span-1"></div>
          <div class="row-span-3 col-span-1"></div>

          <div class="col-span-2 row-span-2 w-9/12 ml-auto"></div>
          <div class="col-span-2 row-span-2 w-9/12"></div>
        </div>
      </figure>
    </section>
  </div>
</main>

<style type="postcss">
  .history > section {
    @apply pb-16 first:pt-16 flex flex-col gap-12;
  }

  .history > section > h2 {
    @apply text-h3 font-bold font-source-serif-4 text-center bg-secondary-yellow leading-[1.15] py-8;
  }

  .history > section > div,
  .desc-text {
    @apply mx-32 px-12 py-4 border-l-[4px] border-secondary-yellow;
  }
</style>
