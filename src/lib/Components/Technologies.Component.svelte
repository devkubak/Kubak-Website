<script lang="ts">
  import type { Language } from "$lib/Models/Common/Language.Common.Model";
  import type { TechnologyDto } from "$lib/Models/DTO/Technology.Dto.Model";
  import { technologyStore } from "$lib/Store/Technology.Store";
  import { Tabs, TabItem } from "flowbite-svelte";
  import { onMount } from "svelte";
  import { _, locale } from "svelte-i18n";


  let technologies: TechnologyDto[] = [];

  onMount(async () => {
    try {
     technologies = await technologyStore.getAll() as TechnologyDto[];
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
  export let selectedLanguage: string;
</script>


{#if $locale == "en"}
<div
  class="container mx-auto w-full md:w-1/2 flex flex-col md:flex-row justify-center items-center h-auto bg-[#e3e3e3] dark:bg-[#212121] rounded-3xl p-5"
  data-aos="fade-up"
  data-aos-duration="2000"
>
  <Tabs
    style="pill"
    class="flex"
    defaultClass="flex flex-row md:flex-col-reverse gap-3 mb-4 mr-2 md:mb-0 flex-wrap justify-center"
    contentClass=" w-full h-[410px] bg-white dark:bg-[#363636] rounded-2xl flex items-center justify-center"
  >
    {#each technologies as technology}
      <TabItem
        open
        activeClasses="bg-white dark:bg-[#363636] w-full rounded-lg md:rounded-xl py-5 w-full px-4 text-[#f17f18] font-bold duration-300 ease-in-out mr-2"
        inactiveClasses="hover:bg-[#f1f1f1] dark:hover:bg-[#404040] w-full rounded-lg md:rounded-xl py-5 w-full px-4 text-black dark:text-white font-bold duration-300 ease-in-out"
      >
        <span slot="title" class="text-sm">{checkLanguage(selectedLanguage, technology.title)}</span>
        <div
          class="flex flex-wrap w-full h-auto justify-center items-center p-4 gap-3"
        >
          {#each technology.technologyAttributes as attribute}
            <div
              class="border-2 border-solid border-[#f17f18] w-14 sm:w-20 2xl:w-28 h-14 sm:h-20 2xl:h-28 flex rounded-full justify-center items-center flex-col p-4 gap-2"
            >
              <img
                src={attribute.image ?? "/images/swift.png"}
                class="w-4 sm:w-10"
                alt=""
              />
              <p class="text-[8px] text-center dark:text-white">
                {attribute.title}
              </p>
            </div>
          {/each}
        </div>
      </TabItem>
    {/each}
  </Tabs>
</div>
{:else}

<div
  class="container mx-auto w-full md:w-1/2 flex flex-col md:flex-row-reverse justify-center items-center h-auto bg-[#e3e3e3] dark:bg-[#212121] rounded-3xl p-5"
>
  <Tabs
    style="pill"
    class="flex"
    defaultClass="flex flex-row md:flex-col-reverse gap-3 mb-4 ml-2 md:mb-0 flex-wrap justify-center"
    contentClass=" w-full h-[410px] bg-white dark:bg-[#363636] rounded-2xl flex items-center justify-center"
  >
    {#each technologies as technology}
      <TabItem
        open
        activeClasses="bg-white dark:bg-[#363636] w-full rounded-lg md:rounded-xl py-5 w-full px-4 text-[#f17f18] font-bold duration-300 ease-in-out mr-2"
        inactiveClasses="hover:bg-[#f1f1f1] dark:hover:bg-[#404040] w-full rounded-lg md:rounded-xl py-5 w-full px-4 text-black dark:text-white font-bold duration-300 ease-in-out"
      >
        <span slot="title" class="text-sm">{checkLanguage(selectedLanguage, technology.title)}</span>
        <div
          class="flex flex-wrap w-full h-auto justify-center items-center p-4 gap-3"
        >
          {#each technology.technologyAttributes as attribute}
            <div
              class="border-2 border-solid border-[#f17f18] w-14 sm:w-20 2xl:w-28 h-14 sm:h-20 2xl:h-28 flex rounded-full justify-center items-center flex-col p-4 gap-2"
            >
              <img
                src={attribute.image ?? "/images/swift.png"}
                class="w-4 sm:w-10"
                alt=""
              />
              <p class="text-[8px] text-center dark:text-white">
                {attribute.title}
              </p>
            </div>
          {/each}
        </div>
      </TabItem>
    {/each}
  </Tabs>
</div>
{/if}


