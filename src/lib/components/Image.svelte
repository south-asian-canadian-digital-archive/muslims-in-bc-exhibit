<script>
  export let src = "";
  export let alt = "";
</script>

<span class="flex flex-col gap-4 {$$props.class}">
  <img {src} {alt} class="border-b-3 border-primary-blue w-full h-full" />

  <caption><slot /></caption>
</span>
