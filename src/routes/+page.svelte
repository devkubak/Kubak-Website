<script lang="ts">
  import Carousel from "$lib/Components/Carousel.Component.svelte";
  import Technologies from "$lib/Components/Technologies.Component.svelte";
  import DevelopmentProcess from "$lib/Components/DevelopmentProcess.Component.svelte";
  import { onMount } from "svelte";
  import { projectStore } from "$lib/Store/Project.Store";
  import Ourprojects from "$lib/Components/Ourprojects.svelte";
  import { goto } from "$app/navigation";
  import type { Language } from "$lib/Models/common/Language.Common.Model";

  onMount(async () => {
    try {
      await projectStore.getAll();
    } catch (e) {
      console.log(e);
    }
  });

  function checkLanguage(
    selectedLanguage: string,
    text: Language
  ): string {
    console.log(text);
    if (Object.keys(text).includes(selectedLanguage)) {
      console.log(text);
      return text[
        selectedLanguage as keyof typeof text
      ] as string;
    } else {
      return text.en;
    }
  }
</script>

<Carousel />

<div
  class="container mx-auto text-center dark:text-white text-xs md:text-xl bg-white dark:bg-[#212121] rounded-2xl p-3"
>
  <p>
    Kubak is a software development company that offers IT solutions to
    businesses all around the world. Kubak provides a variety of software
    development solutions, including e-business solutions, enterprise
    applications, professional websites, design, product engineering, CMS
    Software, Payment Gateway solutions, Time and Attendance Tracking Software,
    Debt Collection Software, Appointment Reminder Solutions, Medical
    Transcription Services, and more. We research, design, develop, enhance,
    customize, implement, support, and maintain many parts of information
    technology.We are a professionally acknowledged software development company
    with vast experience in producing custom software and application
    development to meet your specific demands and specifications.
  </p>
</div>

<div class="w-full flex justify-center items-center text-center mt-12">
  <p class="text-black dark:text-white font-bold py-3 mt-3 md:text-4xl">
    DEVELOPMENT PROCESS
  </p>
</div>

<DevelopmentProcess />
<div
  class="w-full h-12 flex justify-center items-center text-center mt-12 mb-3"
>
  <p class="text-black dark:text-white font-bold py-3 mt-3 md:text-4xl">
    TECHNOLOGIES WE USE
  </p>
</div>

<Technologies />

<div
  class="w-full h-12 flex justify-center items-center text-center mt-12 mb-3"
>
  <p class="text-black dark:text-white font-bold py-3 mt-3 md:text-4xl">
    OUR PROJECTS
  </p>
</div>


<Ourprojects />
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
