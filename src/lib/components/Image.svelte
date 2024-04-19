<script>
  export let src = "";
  export let alt = "";
</script>

<span class="flex flex-col gap-4 {$$props.class}">
  <img {src} {alt} class="border-b-[8px] border-primary-blue w-full" />

  <caption class="text-small"><slot /></caption>
</span>
