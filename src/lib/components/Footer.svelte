<script lang="ts">
  const sponsors = [
    {
      name: "SACDA",
      link: "http://sacda.ca",
      image:
        "https://sacda.ca//themes/sacda/assets/pawtucket/graphics/footer/sacda.svg",
    },
    {
      name: "South Asian Studies Institute",
      link: "http://www.ufv.ca/sasi",
      image:
        "https://sacda.ca//themes/sacda/assets/pawtucket/graphics/footer/sasi.svg",
    },
    {
      name: "University of the Fraser Valley",
      link: "http://www.ufv.ca/",
      image:
        "https://sacda.ca//themes/sacda/assets/pawtucket/graphics/footer/ufv.svg",
    },
    {
      name: "UFV Research and Graduate Studies",
      link: "https://www.ufv.ca/research/",
      image: "/ResearchGraduateStudies.png",
    },
  ];

  const socials = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/profile.php?id=100092345694324",
      element: "<i class='fa fa-facebook-square'></i>",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/sacda.sasi/",
      element: "<i class='fa fa-instagram'></i>",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/ufvsasi",
      element: "<i class='fa fa-twitter'></i>",
    },
    {
      name: "Youtube",
      link: "https://www.youtube.com/channel/UCN5tvG-Q8ly9z0YOyWsoaNA",
      element: "<i class='fa fa-youtube'></i>",
    },
    {
      name: "Flicker",
      link: "https://www.flickr.com/photos/ufvcics/albums",
      element: "<i class='fa fa-flickr'></i>",
    },
  ];
</script>

<footer
  class="bg-secondar-teal lg:pb-24 lg:pt-16 md:pb-24 pb-24 pt-10 px-12 flex flex-col-reverse gap-4 lg:flex-row md:flex-row justify-between items-end relative"
>
  <div
    class="flex flex-col-reverse lg:self-start gap-6 items-center lg:w-fit md:w-fit w-full"
  >

    <div class="rounded-xl bg-white py-4 px-20 self-start">input here</div>
    <p
      class="uppercase lg:self-start md:self-start border-b border-b-secondary-yellow font-bold text-white text-p w-fit pb-1"
    >
      GET IN TOUCH
    </p>

    <div class="flex flex-row gap-4">
      {#each socials as social}
        <a
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          class="text-white text-2xl hover:no-underline rounded-full border border-secondary-yellow w-16 h-16 aspect-square flex items-center justify-center"
        >
          {@html social.element}
        </a>
      {/each}
    </div>
  </div>

  <div class="flex flex-col justify-center items-center gap-2">

    <img src="/UFV_SASI_logo.png" class="h-32" alt="" />
    <p class="text-xs text-white text-center w-[18vw]">
      South Asian Studies Institute Univeristy of the Fraser Valley
      Building K 33780 King Rd, Abbotsford V2S7P2
    </p>
  </div>

  <div
    class="absolute bottom-6 text-white text-sm text-center self-center lg:self-start md:self-start w-full lg:w-fit md:w-fit"
  >
    <!-- mobile -->
    <div class="lg:hidden md:hidden w-full flex items-center justify-center">
      <p
        class="border-t border-t-secondary-yellow font-bold text-transparent text-lg w-fit pb-1"
      >
        GET IN TOUCH
      </p>
    </div>

    <a class="text-white" rel="_blank" href="https://sacda.ca/policy/takedown"
      >Statement of Use and Takedown Policy</a
    >
    |
    <a class="text-white" rel="_blank" href="https://sacda.ca/About/media">
      Media
    </a>| © 2024 South Asian Canadian Digital Archive
  </div>
</footer>
