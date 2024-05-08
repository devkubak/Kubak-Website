<script lang="ts">
  import type { Language } from "$lib/Models/Common/Language.Common.Model";
  import { aboutUsStore } from "$lib/Store/AboutUs.Store";
  import { Img } from "flowbite-svelte";
  import { onMount } from "svelte";
  import { _, locale } from "svelte-i18n";

  let loading: boolean = true;
  onMount(async () => {
    try {
      await aboutUsStore.getAll();
    } catch (e) {
      console.log(e);
    }finally{
      loading = false;
    }
  });


  function checkLanguage(
    text: Language,
    lang?:string | null
  ): string {
    if (Object.keys(text).includes($locale as string)) {
       (text);
       (text[$locale as keyof typeof text] as string);
      
      return text[$locale as keyof typeof text] as string;
    } else {
      return text.en;
    }
  }
</script>

{#if loading}
<div class="w-full h-screen flex flex-col gap-5 bg-white dark:bg-[#212121] justify-center items-center">

  <div class="w-full h-auto flex justify-center items-center">
    <Img src="/images/kubakLogo.png" class="w-24 h-24 object-contain"/>
  </div>
  <div class="flex items-center justify-center space-x-2 h-auto w-full">
    <div class="w-4 h-4 rounded-full animate-pulse bg-[#f17f18]"></div>
    <div class="w-4 h-4 rounded-full animate-pulse bg-[#f17f18]"></div>
    <div class="w-4 h-4 rounded-full animate-pulse bg-[#f17f18]"></div>
  </div>
</div>
{:else}
<div
data-aos="fade-up"
data-aos-duration="1000"
  class="container mx-auto flex justify-center text-center items-center flex-col dark:bg-gradient-to-t shadow-inner shadow-[#f17d1868] dark:from-[#2f2f2f] dark:via-[#181818] dark:to-[#2f2f2f]   bg-gradient-to-b from-[#f6f6f6] via-[#dddddd] to-[#f6f6f6] dark:text-white rounded-br-3xl rounded-bl-3xl p-4 gap-5"
>
  <img src="/images/kubak2.png" alt="" class="w-96 pt-28" />
  <p class="pb-4 md:text-xl	text-justify {$locale == "en" ? "english" : "kurdish"}" dir={$locale == "en" ? "ltr" : "rtl"}>
    {$_("aboutDescription")}
  </p>
</div>


{#if $aboutUsStore}
  {#each $aboutUsStore.data as aboutUs}
    <div
    data-aos="fade-up"
    data-aos-duration="2000"
      class="w-full container mx-auto h-auto p-5 flex justify-center items-center flex-col mt-24 dark:bg-gradient-to-b shadow-inner shadow-[#f17d1868] dark:from-[#2f2f2f] dark:via-[#1c1c1c] dark:o-[#2f2f2f]   bg-gradient-to-b from-[#f6f6f6] via-[#dddddd] to-[#f6f6f6] dark:text-white gap-12 rounded-3xl"
    >
      {#if aboutUs.image}
        <div
        data-aos="zoom-in"
        data-aos-duration="3000"
          class="bg-[#f17f18] h-24 w-24 rounded-full flex justify-center items-center"
        >
        <img src={aboutUs.image ?? ""} alt="" class="w-16 h-16" />
      </div>
      {/if}
      <div
      class="w-full h-auto flex flex-col justify-center items-center gap-3"
      >
      <p class="text-[#f17f18] text-2xl font-bold {$locale == "en" ? "text-Bahij_Plain" : "text-Bahij_Plain_Plain"}">
        { checkLanguage(aboutUs.title,$locale)??""}
      </p>

      <div class="w-full h-auto" dir={$locale == "en" ? "ltr" : "rtl"}>
        {@html checkLanguage(aboutUs.description,$locale)}
      </div>
    </div>
    <div
    class="w-full h-auto flex flex-col justify-center items-center gap-3"
    ></div>
  </div>
  {/each}
  {/if}
  {/if}