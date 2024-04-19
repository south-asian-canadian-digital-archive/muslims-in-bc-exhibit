<script>
  import { page } from "$app/stores";
</script>

{#if $page.status === 404}
  <div class="h-screen w-screen flex items-center justify-center text-h1">
    Page not found
  </div>
{:else}
  <div class="h-screen w-screen flex items-center justify-center text-h1">
    {$page.status} : {$page.error?.message}
  </div>
{/if}
