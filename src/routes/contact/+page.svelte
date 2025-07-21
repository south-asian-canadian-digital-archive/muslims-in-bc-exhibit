<script lang="ts">
  import { onMount } from "svelte";
  import { base } from "$app/paths";
  import { PUBLIC_DOMAIN } from "$env/static/public";
  import Breadcrumb from "$lib/components/Breadcrumb.svelte";

  //   let { form }: { form: ActionData } = $props();

  let email: string = $state("");
  let subject: string = $state("");
  let message: string = $state("");
  let honeypot: string | undefined = $state();

  onMount(() => {
    // console.log($page.url.href);
  });
</script>

<svelte:head>
  <title>Contact Us - Share Your Story | South Asian Canadian Muslims in BC</title>
  <meta 
    name="description" 
    content="Get in touch with the South Asian Canadian Muslims in BC exhibit team. Share your stories, provide feedback, or ask questions about our digital archive collection and research project." 
  />
  <meta name="keywords" content="contact, share your story, South Asian Studies Institute, feedback, community stories, digital archive contribution, Muslim community BC, research participation" />
  <meta name="author" content="South Asian Studies Institute, University of the Fraser Valley" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Contact Us - Share Your Story | South Asian Canadian Muslims in BC" />
  <meta property="og:description" content="Get in touch with our team to share your story, provide feedback, or learn more about contributing to the South Asian Canadian Muslims in BC digital archive." />
  <meta property="og:image" content="{base}/content/2021_08_01_040.jpg" />
  <meta property="og:url" content="https://{PUBLIC_DOMAIN}/contact" />
  <meta property="og:site_name" content="South Asian Canadian Muslims in BC" />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Contact Us - Share Your Story | South Asian Canadian Muslims in BC" />
  <meta name="twitter:description" content="Get in touch with our team to share your story, provide feedback, or learn more about contributing to the digital archive." />
  <meta name="twitter:image" content="{base}/content/2021_08_01_040.jpg" />
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://{PUBLIC_DOMAIN}/contact" />
  
  <!-- Structured Data -->
  {@html `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Us - South Asian Canadian Muslims in BC",
      "description": "Contact page for the South Asian Canadian Muslims in BC digital exhibit project. Share your story or get in touch with our research team.",
      "url": "https://${PUBLIC_DOMAIN}/contact",
      "mainEntity": [
        {
          "@type": "ContactPoint",
          "contactType": "research inquiry",
          "email": "sasi@ufv.ca",
          "telephone": "+1-604-854-4547",
          "areaServed": "British Columbia",
          "availableLanguage": "English"
        },
        {
          "@type": "FAQPage",
          "name": "Frequently Asked Questions - South Asian Canadian Muslims in BC Project",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How can I share my story with the project?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can share your story by contacting us through this form, emailing sasi@ufv.ca, or calling 604-854-4547. We welcome stories from South Asian Canadian Muslims across British Columbia."
              }
            },
            {
              "@type": "Question", 
              "name": "Who can participate in the oral history project?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We welcome participation from South Asian Canadian Muslims in British Columbia who would like to share their experiences, stories, and perspectives as part of our digital archive collection."
              }
            },
            {
              "@type": "Question",
              "name": "What is the purpose of this digital exhibit?", 
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The South Asian Canadian Muslims in British Columbia digital exhibit documents and preserves the rich history, contributions, and experiences of South Asian Canadian Muslim communities in British Columbia through oral histories, archival research, and community partnerships."
              }
            }
          ]
        }
      ],
      "isPartOf": {
        "@type": "DigitalDocument",
        "name": "South Asian Canadian Muslims in BC - Digital Exhibit",
        "url": "https://${PUBLIC_DOMAIN}"
      },
      "publisher": {
        "@type": "Organization",
        "name": "South Asian Studies Institute",
        "url": "https://www.ufv.ca/sasi/",
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "sasi@ufv.ca",
          "telephone": "+1-604-854-4547"
        }
      }
    }
  </script>`}
</svelte:head>

<main class="bg-secondary-yellow flex flex-col pt-20 gap-20 md:my-20 max-w-full!">
  <Breadcrumb 
    items={[
      { name: "Share your story", current: true }
    ]}
  />

  <div
    class="md:px-32 px-6 md:flex-row flex-col flex justify-between gap-12 md:*:w-1/2"
  >
    <section class="flex flex-col gap-4">
      <h1
        class="text-primary-blue text-h2 font-source-serif-4 font-bold leading-normal"
      >
        Share Your Story
      </h1>
      <p>
        Whether you have inquiries about the <a href="https://sacda.ca/exhibits/index" target="_blank" rel="noopener">exhibit</a>, suggestions for
        improvement, or would like to share your own story as part of the <a href="https://sacda.ca" target="_blank" rel="noopener">South Asian Canadian Digital Archive</a>, we'd
        love to hear from you.
        <br />
        <br />

        Please use the contact form to the right to get in touch with our team at the <a href="https://www.ufv.ca/sasi/" target="_blank" rel="noopener">South Asian Studies Institute</a> and
        we'll do our best to respond promptly.
        <br />
        <br />

        Alternatively, you can also reach us at:
        <br />
        Email: <a href="mailto:sasi@ufv.ca">sasi@ufv.ca</a>
        <br />
        Phone: <a href="tel:+16048544547">(604) 854-4547</a>
        <br />
        Address:
        <a href="https://maps.app.goo.gl/bHXFioLNt51ueBsPA" target="_blank" rel="noopener">
          South Asian Studies Institute<br />
          Building K, University of the Fraser Valley<br />
          33844 King Road, Abbotsford, BC V2S 7M8
        </a>
      </p>
      
      <div class="mt-6 border-l-4 border-primary-blue pl-4 py-2 bg-white bg-opacity-50">
        <h2 class="font-semibold mb-2">Why Share Your Story?</h2>
        <p>
          Personal narratives are vital to understanding the rich tapestry of South Asian Muslim Canadian experiences. 
          By contributing to our <a href="https://sacda.ca" target="_blank" rel="noopener">digital archive</a>, you help preserve cultural heritage and build a more inclusive historical record for future generations.
        </p>
      </div>
    </section>

    <iframe
      src="https://us4.list-manage.com/contact-form?u=3c616907ab5cf63924a62f942&form_id=4627a6a210f05fa92ff0c5b25b1f44f9"
      frameborder="0"
      title="Contact form"
      class="min-h-[50vh] w-full h-[90vh] rounded-lg"
    ></iframe>
  </div>

  <div
    class="bg-pattern min-h-32 w-full bg-repeat-x overflow-hidden"
  >
    &nbsp;
  </div>
</main>
