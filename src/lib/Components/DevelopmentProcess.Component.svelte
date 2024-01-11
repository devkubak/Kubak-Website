<script lang="ts">
  import type { Language } from "$lib/Models/Common/Language.Common.Model";
  import { developmentStore } from "$lib/Store/Development.Store";
  import { Tabs, TabItem } from "flowbite-svelte";
  import { onMount } from "svelte";
  import { _, locale } from "svelte-i18n";

  onMount(async () => {
    try {
      await developmentStore.getAll();
      console.log($developmentStore);
    } catch (e) {
      console.log(e);
    }
  });
  export let selectedLanguage: string;
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

{#if $locale == "en"}
<div
  class="container mx-auto w-full md:w-1/2 flex flex-col md:flex-row justify-center items-center h-auto bg-[#e3e3e3] dark:bg-[#212121] rounded-3xl p-5"
>

  <Tabs
    style="pill"
    class="flex"
    defaultClass="flex flex-row md:flex-col-reverse gap-3 flex-wrap justify-center mr-4 mb-4 md:mb-0"
    contentClass=" w-full h-auto min-h-[610px] bg-white dark:bg-[#363636] rounded-2xl flex items-start justify-center"
  >
    {#each $developmentStore.data as development}
      <TabItem
        open
        activeClasses="bg-white dark:bg-[#363636] w-full rounded-lg md:rounded-xl py-5 w-full px-4 text-[#f17f18] font-bold duration-300 ease-in-out"
        inactiveClasses="hover:bg-[#f1f1f1] dark:hover:bg-[#404040] w-full rounded-lg md:rounded-xl py-5 w-full px-4  text-black dark:text-white font-bold duration-300 ease-in-out"
      >
        <span slot="title" class="text-sm">{checkLanguage(selectedLanguage, development.title)}</span>
        <div
          class="flex flex-col w-full h-1/2 justify-center items-center p-4 gap-3"
        >
          <img
            src={development.image}
            class="rounded-2xl h-[350px] object-cover w-full"
            alt=""
          />
          <p class="dark:text-white text-sm md:text-lg h-1/2 w-full">
            {checkLanguage(selectedLanguage, development.description)}
          </p>
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
    defaultClass="flex flex-row md:flex-col-reverse gap-3 flex-wrap justify-center ml-4 mb-4 md:mb-0"
    contentClass=" w-full h-auto min-h-[610px] bg-white dark:bg-[#363636] rounded-2xl flex items-start justify-center"
  >
    {#each $developmentStore.data as development}
      <TabItem
        open
        activeClasses="bg-white dark:bg-[#363636] w-full rounded-lg md:rounded-xl py-5 w-full px-4 text-[#f17f18] font-bold duration-300 ease-in-out"
        inactiveClasses="hover:bg-[#f1f1f1] dark:hover:bg-[#404040] w-full rounded-lg md:rounded-xl py-5 w-full px-4  text-black dark:text-white font-bold duration-300 ease-in-out"
      >
        <span slot="title" class="text-sm">{checkLanguage(selectedLanguage, development.title)}</span>
        <div
          class="flex flex-col w-full h-1/2 justify-center items-center p-4 gap-3"
        >
          <img
            src={development.image}
            class="rounded-2xl h-[350px] object-cover w-full"
            alt=""
          />
          <p class="dark:text-white text-sm md:text-lg h-1/2 w-full" dir="rtl">
            {checkLanguage(selectedLanguage, development.description)}
          </p>
        </div>
      </TabItem>
    {/each}
  </Tabs>
</div>
{/if}