<script lang="ts">
  import Carousel from "$lib/Components/Carousel.Component.svelte";
  import DevelopmentProcess from "$lib/Components/DevelopmentProcess.Component.svelte";
	import OurProjects from '$lib/Components/OurProjects.Component.svelte';
  import { onMount } from "svelte";
  import { projectStore } from "$lib/Store/Project.Store";
  import { _, locale } from "svelte-i18n";
  import { languageStore } from "$lib/Store/Language.Store";
  import NewTech from "$lib/Components/NewTechnologies.Component.svelte"
  let showFullText = false;

  function toggleShowFullText() {
    showFullText = !showFullText;
  }

  onMount(async () => {
    try {
      await projectStore.getAll();
    } catch (e) {
      console.log(e);
    }
  });

  $:{
    console.log("Language",$locale);
    
  }

</script>

<Carousel />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="container mx-auto text-center dark:text-white leading-[.1rem] text-md md:text-xl dark:bg-gradient-to-b shadow-inner shadow-[#f17d1868] dark:from-[#2f2f2f] dark:via-[#1c1c1c] dark:o-[#2f2f2f]   bg-gradient-to-b from-[#ededed] via-[#d1d1d1] to-[#f1f1f14d] rounded-2xl p-3 duration-300 ease-in-out"
  data-aos="fade-up"
  data-aos-anchor-placement="center" data-aos-duration="3000"
>

<p class="leading-10 duration-150 ease-in-out {$locale == "en" ? "english" : "kurdish"}">
  {showFullText
    ? $_("aboutDescription")
    : $_("aboutDescription").length > 200
      ? $_("aboutDescription").slice(0, 200) + "..."
      : $_("aboutDescription")}
</p>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="text-[#f17f18] hover:text-[#f19718] my-5 cursor-pointer ease-in-out duration-300 " style="font-family:Bahij_Plain;"  on:click={toggleShowFullText}>
  {showFullText ? $_("showLess") : $_("showMore") }
</div>
</div>

<div class="w-full flex justify-center items-center text-center mt-12">
  <p class="text-black dark:text-white font-bold py-3 mt-3 md:text-4xl" style="font-family:Bahij_Plain;" data-aos="zoom-out-up" data-aos-anchor-placement="center" data-aos-duration="1000">
    {$_("DevelopmentProcess")}
  </p>
</div>

<DevelopmentProcess selectedLanguage={$locale + ""} />
<div
  class="w-full h-12 flex justify-center items-center text-center mt-12 mb-3"
>
  <p class="text-black dark:text-white font-bold py-3 mt-3 md:text-4xl" style="font-family:Bahij_Plain;" data-aos="zoom-out-up" data-aos-anchor-placement="center" data-aos-duration="1000">
    {$_("technologiesWeUse")}
  </p>
</div>

<NewTech />
<div
  class="w-full h-12 flex justify-center items-center text-center mt-12 mb-3"
>
  <p class="text-black dark:text-white font-bold py-3 mt-3 md:text-4xl" style="font-family:Bahij_Plain;" data-aos="zoom-out-up" data-aos-anchor-placement="center" data-aos-duration="1000">
    {$_("ourProjects")}
  </p>
</div>

<OurProjects />
<!-- <div
  class="container mx-auto flex flex-wrap h-auto justify-center items-center mt-3 gap-2"
> -->
<!-- 
{#each $projectStore.data.slice(0, 3) as project}
<div
class="w-80 h-96 bg-white dark:bg-[#212121] rounded-2xl flex flex-col justify-end items-center gap-3 border-2 border-[#f17f18]"
>
<div class="w-full h-full p-3 relative flex justify-center">

  <img
    src={project.image}
    class="w-60 h-60 rounded-2xl object-cover"
    alt=""
  />
</div>

<p class="font-bold h-20 text-xl dark:text-white mt-4">{project.name}</p>
</div>
{/each}

</div>
{#if $projectStore.data.length > 3} -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- <div class="text-lg w-full flex justify-center items-center h-auto">
  <a href="/viewMore" class="w-34 h-12 flex justify-center items-center text-center my-5 bg-[#f17f18] text-white rounded-xl px-4">View More</a>
</div>
{/if} -->

