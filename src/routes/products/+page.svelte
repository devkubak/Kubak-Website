<script lang="ts">
  import { productStore } from "$lib/Store/Product.Store";
  import { Img } from "flowbite-svelte";
  import { onMount } from "svelte";
  import { ImagePosition } from "$lib/Models/Enums/Image-Position.Enum.Model";
  import type { Language } from "$lib/Models/Common/Language.Common.Model";
  import { locale } from "svelte-i18n";
  import Appstore from "$lib/Components/Icons/Appstore.Component.svelte";
  import PlayStore from "$lib/Components/Icons/PlayStore.Component.svelte";

  let loading:boolean = true;
  onMount(async () => {
    try {
      await productStore.get();
    } catch (e) {
      console.log(e);
    }finally{
      loading = false;
    }
  });

  function checkLanguage(
    text: Language,
    lang?: string | null,
  ): string {
     (text);
    if (Object.keys(text).includes(lang as string)) {
       (text);
      return text[
        lang as keyof typeof text
      ] as string;
    } else {
      return text.en;
    }
    
  }

  $:{
     ($locale);
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
{#if $productStore}
<div
  class="w-full bg-[#f1f1f1] dark:bg-[#212121] dark:text-white pb-12 pt-32 flex justify-center items-center text-center" 
  data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300"
>
  <p class="md:text-4xl container mx-auto" >
    {@html checkLanguage($productStore.title,$locale)}
  </p>
</div>

{#each $productStore.productAttribute as productAttribute}
<div
  class="container mx-auto flex justify-center items-center mt-5 gap-5    {productAttribute.image_position == ImagePosition.LEFT ? "md:flex-row-reverse" : "md:flex-row" } flex-col-reverse flex-wrap md:flex-nowrap px-4 mb-24" 
  
  >
<div class="w-full h-auto flex flex-col gap-3" dir="{$locale == "en" ? "ltr" : "rtl"}" >

  <p class="md:text-2xl text-[#f17f18] text-lg font-bold " style="font-family:Bahij;" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
    {checkLanguage( productAttribute.title,$locale)}
  </p>
  <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
    {@html checkLanguage( productAttribute.description,$locale)}
  </div>
</div>
  
  <div class="relative mx-auto p-3 border-[#f17f18] dark:border-[#f17f18] bg-[#f17f18] border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
    <div class="w-[148px] h-[18px] bg-[#f17f18] top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
    <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-[#f17f18]" >
      <img src={productAttribute.image || "/images/phone1.jpg"} class="w-[272px] h-[572px] rounded-3xl" alt="ios example 1" />
    </div>
</div>
</div>
{/each}
{/if}

  <div class="w-full flex justify-center items-center gap-2 mb-4" data-aos="zoom-in" data-aos-duration="2000">
    <a
      href="https://play.google.com/store/apps/details?id=co.kubak.city&hl=en&gl=US"
      class="w-auto"
    >
      <PlayStore />
    </a>
    <a
      href="https://apps.apple.com/us/app/kubak/id1460687618"
      class="w-auto"
    >
      <Appstore />
    </a>
  </div>
{/if}