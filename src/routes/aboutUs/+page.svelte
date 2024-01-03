<script lang="ts">
  import type { Language } from "$lib/Models/Common/Language.Common.Model";
  import { aboutUsStore } from "$lib/Store/AboutUs.Store";
  import { onMount } from "svelte";
  import { _, locale } from "svelte-i18n";

  onMount(async () => {
    try {
      await aboutUsStore.getAll();
    } catch (e) {
      console.log(e);
    }
  });


  function checkLanguage(
    text: Language,
    lang?:string | null
  ): string {
    if (Object.keys(text).includes($locale as string)) {
      console.log(text);
      console.log("Hello There",text[$locale as keyof typeof text] as string);
      
      return text[$locale as keyof typeof text] as string;
    } else {
      return text.en;
    }
  }
</script>

<div
  class="container mx-auto flex justify-center text-center items-center flex-col bg-white dark:bg-[#212121] dark:text-white rounded-br-3xl rounded-bl-3xl p-4 gap-5"
>
  <img src="/images/kubak2.png" alt="" class="w-96 pt-28" />
  <p class="pb-4 md:text-2xl">
    {$_("aboutDescription")}
  </p>
</div>

{#if $aboutUsStore}
  {#each $aboutUsStore.data as aboutUs}
    <div
      class="w-full container mx-auto h-auto p-5 flex justify-center items-center flex-col mt-24 bg-white dark:bg-[#212121] dark:text-white gap-12 rounded-3xl"
    >
      {#if aboutUs.image}
        <div
          class="bg-[#f17f18] h-24 w-24 rounded-full flex justify-center items-center"
        >
          <img src={aboutUs.image ?? ""} alt="" class="w-16 h-16" />
        </div>
      {/if}
      <div
        class="w-full h-auto flex flex-col justify-center items-center gap-3"
      >
        <p class="text-[#f17f18] text-2xl font-bold">
          {checkLanguage(aboutUs.title,$locale)}
        </p>
        <p class="text-lg">{checkLanguage(aboutUs.description,$locale)}</p>
      </div>
      <div
        class="w-full h-auto flex flex-col justify-center items-center gap-3"
      ></div>
    </div>
  {/each}
{/if}
