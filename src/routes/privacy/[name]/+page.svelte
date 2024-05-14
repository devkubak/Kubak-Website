<script lang="ts">
	import { privacyInformationStore } from '$lib/Store/PrivacyInformation.Store';
	import { PrivaciesDto } from '$lib/Models/DTO/Privacies.DTO.Model';
	import { privaciesStore } from '$lib/Store/Privacies.Store';
	import { page } from '$app/stores';
  import { onMount } from "svelte";
  import moment from "moment";
  let privacy: PrivaciesDto = new PrivaciesDto();

   onMount(async() =>{
    await privaciesStore.getAll({
        limit: 100,
        search: $page.params.name,
    
    });
   
    privacy = $privaciesStore.data[0];
    
   })
</script>

<div class="container mx-auto flex justify-center items-center  md:flex-row flex-col-reverse  flex-wrap md:flex-nowrap px-4  pt-32" data-aos="fade-up" data-aos-duration="2000">
    <div class="w-full h-auto dark:bg-gradient-to-b shadow-inner shadow-[#f17d1868] dark:from-[#2f2f2f] dark:via-[#1c1c1c] dark:o-[#2f2f2f]   bg-gradient-to-b from-[#f6f6f6] via-[#dddddd] to-[#f6f6f6] dark:text-white rounded-3xl p-12 flex flex-col gap-4">

        <div class="w-full flex flex-col font-bold">
            
            <p class="text-xl">
                last update {privacy.lastUpdatedAt ? moment(privacy.lastUpdatedAt).format("DD/MM/YYYY") : ""}
            </p>
        
            <p class="text-lg md:text-4xl text-[#f17f18] " style="font-family:Bahij_Plain;">
                The Following Privacy
            </p>
        </div>
    {#each privacy.informations as data}
        <div class="w-full flex flex-col gap-24">
            <p class="text-justify">
                {data.title}
            </p>


            {@html data.description}

        </div>
        {/each}
    </div>



</div>


