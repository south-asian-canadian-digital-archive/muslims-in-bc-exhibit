<script>
  import "../app.css";

  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
</script>

<svelte:head>
  <title>South Asian Muslims in BC</title>
</svelte:head>

<Header />

<slot />

<Footer />