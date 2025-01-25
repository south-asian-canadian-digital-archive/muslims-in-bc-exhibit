<script lang="ts">
  import { base } from "$app/paths";
  import { goto } from "$app/navigation";
</script>

<svelte:head>
  <title>Oral History - Coming Soon</title>
</svelte:head>

<main
  class="flex flex-col items-center justify-center min-h-screen bg-secondary-yellow text-center p-8"
>
  <h1 class="text-h2 font-bold text-primary-blue mb-4">Oral History</h1>
  <p class="text-lg mb-8">
    We are working hard to bring you this content. Stay tuned for more updates!
  </p>
  <button
    class="bg-primary-blue py-4 px-12 rounded-full text-white"
    onclick={() => {
      goto(`${base}`);
    }}
  >
    Visit Home Page
  </button>
</main>
