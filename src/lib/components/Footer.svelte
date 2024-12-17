<script lang="ts">
  import { base } from "$app/paths";

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
    // {
    //   name: "Twitter",
    //   link: "https://twitter.com/ufvsasi",
    //   element: "<i class='fa fa-twitter'></i>",
    // },
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
    {
      name: "Email",
      link: "mailto:sasi@ufv.ca",
      element: "<i class='fa fa-envelope'></i>",
    },
  ];
</script>

<footer
  class="bg-secondar-teal lg:pb-24 lg:pt-16 md:pb-24 pb-24 pt-10 px-12 flex flex-col-reverse gap-4 lg:flex-row md:flex-row justify-between items-end relative"
>
  <div
    class="flex flex-col-reverse lg:self-start gap-6 items-center lg:w-fit md:w-fit w-full overflow-hidden"
  >
    <div class="rounded-xl bg-white lg:self-start relative overflow-hidden">
      <div id="mc_embed_shell">
        <!-- <link
          href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
          rel="stylesheet"
          type="text/css"
        /> -->

        <div id="mc_embed_signup">
          <form
            action="https://ufv.us4.list-manage.com/subscribe/post?u=3c616907ab5cf63924a62f942&amp;id=b3dc827f85&amp;f_id=000356e2f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
          >
            <div id="mc_embed_signup_scroll" class="flex flex-row rounded-lg">
              <!-- <div class="indicates-required">
                <span class="asterisk">*</span> indicates required
              </div> -->
              <div class="mc-field-group">
                <!-- <label for="mce-EMAIL"
                  >Email Address <span class="asterisk">*</span></label
                > -->
                <input
                  type="email"
                  name="EMAIL"
                  class="required email rounded-l-lg py-4 pl-4 font-martel text-xs outline-none"
                  id="mce-EMAIL"
                  required
                  value=""
                  placeholder="email for signup"
                />
              </div>
              <div
                id="mce-responses"
                class="clear absolute text-sm top-[110%] text-white font-martel text-p min-w-[50vw] max-h-10 overflow-scroll text-left"
              >
                <div
                  class="response"
                  id="mce-error-response"
                  style="display: none;"
                ></div>
                <div
                  class="response"
                  id="mce-success-response"
                  style="display: none;"
                ></div>
              </div>
              <div
                aria-hidden="true"
                style="position: absolute; left: -5000px;"
              >
                <input
                  type="text"
                  name="b_3c616907ab5cf63924a62f942_b3dc827f85"
                  tabindex="-1"
                  value=""
                />
              </div>
              <div
                class="clear text-white bg-black rounded-r-lg w-1/3 flex items-center justify-center px-3 cursor-pointer"
              >
                <input
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  class="button font-martel text-xs cursor-pointer"
                  value="Subscribe"
                />
              </div>
            </div>
          </form>
        </div>
        <script
          type="text/javascript"
          src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
        ></script><script type="text/javascript">
          (function ($) {
            window.fnames = new Array();
            window.ftypes = new Array();
            fnames[0] = "EMAIL";
            ftypes[0] = "email";
            fnames[1] = "FNAME";
            ftypes[1] = "text";
            fnames[2] = "LNAME";
            ftypes[2] = "text";
          })(jQuery);
          var $mcj = jQuery.noConflict(true);
        </script>
      </div>
    </div>

    <p
      class="uppercase lg:self-start md:self-start border-b border-b-secondary-yellow font-bold text-white text-p w-fit pb-1"
    >
      SIGN UP FOR OUR NEWSLETTER
    </p>

    <div class="flex flex-row lg:gap-4 md:gap-4 gap-3">
      {#each socials as social}
        <a
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="contact us throught {social.name}"
          class="text-white lg:text-2xl md:text-2xl hover:no-underline rounded-full border border-secondary-yellow w-10 h-10 lg:w-16 lg:h-16 aspect-square flex items-center justify-center"
        >
          {@html social.element}
        </a>
      {/each}
    </div>
  </div>

  <div class="flex flex-col justify-center items-center gap-2">
    <img src="{base}/UFV_SASI_logo.png" class="lg:h-32 h-24" alt="" />
    <p class="text-xs text-white text-center lg:w-[18vw] md:w-[18vw]">
      South Asian Studies Institute,<br /> University of the Fraser Valley
      <br />
      <b>Visiting Address:</b> Building K, 33780 King Rd, Abbotsford, BC V2S7P2
      <br /><b>Mailing Address:</b> 33844 King Rd, Abbotsford, BC V2S7M8
    </p>
  </div>

  <div
    class="absolute bottom-6 text-white lg:text-sm md:text-sm text-xs text-center self-center lg:self-start md:self-start w-full lg:w-fit md:w-fit"
  >
    <!-- mobile -->
    <!-- <div class="lg:hidden md:hidden w-full flex items-center justify-center">
      <p
        class="border-t border-t-secondary-yellow font-bold text-transparent text-lg w-fit pb-1"
      >
        GET IN TOUCH
      </p>
    </div> -->

    <a class="text-white" rel="_blank" href="https://sacda.ca/policy/takedown"
      >Statement of Use and Takedown Policy</a
    >
    |
    <a class="text-white" rel="_blank" href="https://sacda.ca/About/media">
      Media
    </a>| © 2024 South Asian Canadian Digital Archive
  </div>
</footer>

<style type="postcss">
  .mce_inline_error {
    position: absolute;
    bottom: -1rem;
  }
</style>
