<script lang="ts">
  import { page } from "$app/state";
  import { base } from "$app/paths";
  import { goto } from "$app/navigation";
</script>

<svelte:head>
  <title>Page Not Found - South Asian Canadian Muslims in BC</title>
  <meta name="description" content="The page you're looking for could not be found. Return to the South Asian Canadian Muslims in BC exhibit homepage." />
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

{#if page.status === 404}
  <div class="min-h-screen w-full flex flex-col items-center justify-center px-4 text-center bg-gradient-to-b from-white to-gray-50">
    <div class="max-w-md mx-auto">
      <h1 class="text-6xl font-bold text-gray-400 mb-4">404</h1>
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
      <p class="text-gray-600 mb-8">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <button 
        onclick={() => goto(`${base}/`)}
        class="inline-flex items-center px-6 py-3 bg-[#F99D2A] text-white font-medium rounded-lg hover:bg-[#e88b1a] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#F99D2A] focus:ring-offset-2"
      >
        <span class="fa fa-home mr-2"></span>
        Return to Homepage
      </button>
    </div>
  </div>
{:else}
  <div class="min-h-screen w-full flex flex-col items-center justify-center px-4 text-center bg-gradient-to-b from-white to-gray-50">
    <div class="max-w-md mx-auto">
      <h1 class="text-6xl font-bold text-gray-400 mb-4">{page.status}</h1>
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">Something went wrong</h2>
      <p class="text-gray-600 mb-8">
        {page.error?.message || 'An unexpected error occurred.'}
      </p>
      <button 
        onclick={() => goto(`${base}/`)}
        class="inline-flex items-center px-6 py-3 bg-[#F99D2A] text-white font-medium rounded-lg hover:bg-[#e88b1a] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#F99D2A] focus:ring-offset-2"
      >
        <span class="fa fa-home mr-2"></span>
        Return to Homepage
      </button>
    </div>
  </div>
{/if}
