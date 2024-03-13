<script lang="ts">
  import { onMount } from 'svelte';

  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import type { TechnologyDto } from "$lib/Models/DTO/Technology.Dto.Model";
  import { technologyStore } from "$lib/Store/Technology.Store";
  import { _, locale } from "svelte-i18n";

  let technologies: TechnologyDto[] = [];
  let isLoading: Boolean = true;
  let currentTechnologyIndex = 0;

  onMount(async () => {
    try {
      technologies = await technologyStore.getAll() as TechnologyDto[];
    } catch (e) {
      console.log(e);
    } finally {
      isLoading = false;
    }
    AOS.init(); // Initialize AOS here

  });

  $: currentTechnologyIndex, AOS.refresh(); // Refresh AOS whenever currentTechnologyIndex changes

  function goToNextTechnology() {
  if (currentTechnologyIndex < technologies.length - 1) {
    currentTechnologyIndex++;
  } else {
    currentTechnologyIndex = 0; // Wrap around to 0
  }
}

  function goToPreviousTechnology() {
  if (currentTechnologyIndex > 0) {
    currentTechnologyIndex--;
  } else {
    currentTechnologyIndex = technologies.length - 1; // Wrap around to maximum index
  }
}
</script>





<div class="w-full container mx-auto h-auto min-h-[400px] my-5">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="w-full h-[540px] flex justify-end items-center " data-aos="fade-up"
  data-aos-duration="2000">
    
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div on:click={()=>goToPreviousTechnology()} class="w-10 md:w-16 h-[540px] px-2 bg-gradient-to-b  from-[#3e3e3e] via-[#686868] to-[#3e3e3e] bg-[#3e3e3e]  dark:bg-gradient-to-b  dark:from-[#191919] dark:via-[#1d1d1d] dark:to-[#191919] dark:bg-[#191919] flex justify-center rounded-l-lg items-center cursor-pointer ">
        <img src="/images/newarrow.png" alt="" class="size-8 md:size-12 rotate-180">
      </div>
      <div class="w-full h-[540px] flex flex-col justify-end items-center " >

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="w-full h-12 flex justify-between items-center text-center bg-[#ffffff9a] dark:bg-[#21212192]" >
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          {#if technologies.length > 0}
            <p class="w-full h-12 text-center flex justify-center items-center bg-white dark:bg-[#3a3a3a] dark:text-white text-4xl font-bold">{technologies[currentTechnologyIndex].title[$locale + ""]}</p>
          {/if}
          
          <!-- svelte-ignore a11y-no-static-element-interactions -->
        </div>
  
        <div class="w-full h-full flex flex-wrap justify-center items-center bg-gradient-to-b  from-[#dad9d9] via-[#f8f8f8] to-[#dad9d9] bg-[#dad9d9]  dark:bg-gradient-to-b  dark:from-[#2f2f2f] dark:via-[#1c1c1c] dark:to-[#2f2f2f]  dark:bg-[#212121] gap-2 p-3 overflow-y-auto">
          {#if technologies.length > 0}
            {#key currentTechnologyIndex}
              {#each technologies[currentTechnologyIndex].technologyAttributes as attr, index}
                <div class="w-32 h-52 sm:w-44 sm:h-60 flex flex-col justify-end items-center bg-[#dddddd] dark:bg-zinc-700 fade-in rounded-lg shadow-lg hover:shadow-2xl duration-300 transition-all  ease-in-out"
                     data-aos="flip-left"
                     data-aos-duration="2000" data-aos-anchor-placement="top">
                  <img src="{attr.image}" class="w-24 h-24 object-contain my-12" alt="" />
                  <p class="w-full max-h-12 text-12 text-center flex justify-center items-center py-2 bg-[#f1f1f1] dark:bg-[#191919] dark:text-white rounded-b-lg">
                    {attr.title}
                  </p>
                </div>
              {/each}
            {/key}
          {/if}
        </div>
      </div>
    
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div on:click={()=>goToNextTechnology()} class="w-10 md:w-16 h-[540px] px-2 bg-gradient-to-b  from-[#3e3e3e] via-[#686868] to-[#3e3e3e] bg-[#3e3e3e]  dark:bg-gradient-to-b  dark:from-[#191919] dark:via-[#1d1d1d] dark:to-[#191919] dark:bg-[#191919] rounded-r-lg flex justify-center items-center cursor-pointer">
      <img src="/images/newarrow.png" alt="" class="size-8 md:size-12">
    </div>
  </div>
</div>

