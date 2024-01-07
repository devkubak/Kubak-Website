<script lang="ts">
  //@ts-ignore
  import Carousel from "svelte-carousel";
  import { browser } from "$app/environment";
  import { onMount } from "svelte";
  import { carouselStore } from "$lib/Store/Carousel.Store";
  import type { Language } from "$lib/Models/Common/Language.Common.Model";
  import { locale } from "svelte-i18n";

  onMount(async () => {
    try {
      await carouselStore.getAll();
      console.log($carouselStore.data);
    } catch (e) {
      console.log(e);
    }
  });

  function checkLanguage(text: Language, lang?: string | null): string {
    console.log(text);
    if (Object.keys(text).includes(lang as string)) {
      console.log(text);
      return text[lang as keyof typeof text] as string;
    } else {
      return text.en;
    }
  }
</script>

<div class="w-full flex flex-col justify-end gap-5">
  <div class="w-full mt-14 md:mt-0 rounded-none">
    {#if browser && $carouselStore.data.length > 0}
      <Carousel autoplay autoplayDuration={50000} autoplayProgressVisible>
        {#each $carouselStore.data as carousel}
          <!-- svelte-ignore a11y-missing-attribute -->
          <a title={carousel.title.en} class="block relative">
            <!-- svelte-ignore a11y-media-has-caption -->
            <video
              class="cursor-pointer w-full h-[400px] md:h-[900px] object-cover"
              autoplay
              loop
              muted
            >
              <source src={carousel.video} type="video/mp4" />
            </video>

            {#if $locale == "en"}
              <div
                class="absolute bottom-0 left-0 w-full h-full flex justify-center flex-col-reverse text-center md:pl-44 md:text-2xl items-center md:items-start p-2 bg-black bg-opacity-50 text-white gap-4 text-lg lg:text-2xl xl:text-4xl 2xl:text-6xl"
              >
                {checkLanguage(carousel.title, $locale)}
              </div>
            {:else}
              <div
                class="absolute bottom-0 left-0 w-full h-full flex justify-center flex-col-reverse text-center md:pr-44 md:text-2xl items-center md:items-end p-2 bg-black bg-opacity-50 text-white gap-4 text-lg lg:text-2xl xl:text-4xl 2xl:text-6xl"
              >
                {checkLanguage(carousel.title, $locale)}
              </div>
            {/if}
          </a>
        {/each}
      </Carousel>
    {/if}
  </div>
</div>

<style>
  .see_more {
    display: none;
  }
  .see_more_cont:hover .see_more {
    display: block;
    transition: all 0.3s ease-in-out;
  }

  .see_more_cont:hover {
    transition: all 0.3s ease-in-out;
  }

  .see_more_cont:hover .seemore_txt {
    color: #f17f18;
    font-weight: bold;
  }

  .seemore_txt {
    font-weight: bold;
  }
</style>
