<script lang="ts">
  import { page } from "$app/stores";
  import { PUBLIC_FORM_ACCESS_KEY } from "$env/static/public";
  import { onMount } from "svelte";

  //   let { form }: { form: ActionData } = $props();

  let email: string = $state("");
  let subject: string = $state("");
  let message: string = $state("");
  let honeypot: string | undefined = $state();

  onMount(() => {
    console.log($page.url.href);
  });
</script>

<svelte:head>
  <title>Contact | South Asian Muslims in BC</title>
  <meta 
    name="description" 
    content="Get in touch with the South Asian Muslims in BC exhibit team. Share your stories, provide feedback, or ask questions about our digital archive collection." 
  />
</svelte:head>

<main class="bg-secondary-yellow flex flex-col pt-20 gap-20 md:my-20 !max-w-full">
  <div
    class="md:px-32 px-6 md:flex-row flex-col flex justify-between gap-12 *:md:w-1/2"
  >
    <section class="flex flex-col gap-4">
      <h1
        class="text-primary-blue text-h2 font-source-serif-4 font-bold leading-[1.5]"
      >
        Share Your Story
      </h1>
      <p>
        Whether you have inquiries about the <a href="https://sacda.ca/exhibits" target="_blank" rel="noopener">exhibit</a>, suggestions for
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
          Personal narratives are vital to understanding the rich tapestry of <a href="https://en.wikipedia.org/wiki/South_Asian_Canadians" target="_blank" rel="noopener">South Asian Muslim Canadian</a> experiences. 
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
    class="bg-[url('/pattern.svg')] min-h-32 w-full bg-repeat-x overflow-hidden"
  >
    &nbsp;
  </div>
</main>
