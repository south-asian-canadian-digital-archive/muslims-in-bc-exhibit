<script lang="ts">
  import { PUBLIC_DOMAIN } from "$env/static/public";
</script>

<svelte:head>
  <!-- Timeline Structured Data -->
  {@html `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "name": "A Timeline of Muslims in BC (1900s - present)",
      "headline": "Interactive Timeline of Muslims in British Columbia after 9/11",
      "description": "This interactive timeline showcases key events affecting Muslims in British Columbia after 9/11. Navigate through the timeline to explore significant events, dates, descriptions, and related media.",
      "author": {
        "@type": "Organization",
        "name": "South Asian Studies Institute",
        "url": "https://www.ufv.ca/sasi/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "South Asian Studies Institute",
        "url": "https://www.ufv.ca/sasi/"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "name": "Timeline - South Asian Canadian Muslims in BC",
        "url": "https://${PUBLIC_DOMAIN}/history/timeline"
      },
      "about": [
        {
          "@type": "HistoricalEvent",
          "name": "Muslims in British Columbia Timeline",
          "description": "Key events affecting Muslim communities in British Columbia from 1900s to present",
          "location": {
            "@type": "Place",
            "name": "British Columbia, Canada"
          },
          "startDate": "1900",
          "endDate": "2025",
          "subEvent": [
            {
              "@type": "Event",
              "name": "Quebec City Mosque Shooting",
              "description": "Tragic shooting at Islamic Cultural Centre of Quebec City",
              "startDate": "2017-01-29",
              "location": {
                "@type": "Place",
                "name": "Quebec City, Quebec, Canada"
              }
            },
            {
              "@type": "Event", 
              "name": "National Day of Remembrance and Action on Islamophobia",
              "description": "Annual commemoration established by Government of Canada",
              "startDate": "2021-01-29",
              "location": {
                "@type": "Place",
                "name": "Canada"
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
      "keywords": ["Timeline", "Muslims in BC", "British Columbia history", "South Asian Canadian Muslims", "Historical events", "Community history", "Islamophobia", "Post-9/11"],
      "inLanguage": "en-CA"
    }
  </script>`}
</svelte:head>

<main class="py-32 mx-auto flex flex-col gap-10">
  <h1 class="px-4 lg:px-0 page-title">
    A Timeline of Muslims in BC <br /> (1900s - present)
  </h1>
  <!-- <p class="desc-text">
    Timeline of significant events related to Muslims in Canada and British
    Columbia
  </p> -->

  <div class="flex flex-col gap-16 history">
    <section>
      <div class="">
        This interactive timeline showcases key events affecting Muslims in
        British Columbia after 9/11. Navigate through the timeline by clicking
        the arrows on either side or by scrolling horizontally. Each slide
        contains information about a specific event, including dates,
        descriptions, and related media. Click on images to enlarge them. The
        timeline is organized chronologically from left to right, with major
        events highlighted. For the best experience, we recommend viewing one
        slide at a time and reading each event as part of the larger historical
        narrative.
      </div>
      <!-- TODO: After publishing website, change photo links to production from vercel -->
      <iframe
        title="Recent Timeline of Muslims In British Columbia"
        src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=v2:2PACX-1vQq6XreVNJadGkn2skgHj7GBWJhdau9JJso43eaEQsU0DNecwrv7iJ-gYM-5Bz18OTA0KyCqLh62ktE&font=Default&lang=en&initial_zoom=0&height=800"
        width="100%"
        height="800"
        allowfullscreen
        frameborder="0"
      ></iframe>
    </section>
  </div>
</main>
