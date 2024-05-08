<script lang="ts">
  //@ts-ignore
  import Carousel from "svelte-carousel";
  import { browser } from "$app/environment";
  import { carouselStore } from "$lib/Store/Carousel.Store";
  import type { Language } from "$lib/Models/Common/Language.Common.Model";
  import { locale, _ } from "svelte-i18n";
  

  function checkLanguage(text: Language, lang?: string | null): string {
     (text);
    if (Object.keys(text).includes(lang as string)) {
       (text);
      return text[lang as keyof typeof text] as string;
    } else {
      return text.en;
    }
  }

  function redirectToStore() {
        var userAgent = navigator.userAgent || navigator.vendor;

        // Android
        if (/android/i.test(userAgent)) {
            window.location.href = 'https://play.google.com/store/apps/details?id=co.kubak.city&hl=en&gl=US';
        }
        // iOS
        else if (/iPad|iPhone|iPod/.test(userAgent)) {
            window.location.href = 'https://apps.apple.com/us/app/kubak/id1460687618';
        }
        // Other devices
        else {
            alert("Sorry, we currently support only Android and iOS devices for app download.");
        }
    }
</script>


<div class="w-full flex flex-col justify-end gap-5" >
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
              playsinline
            >
              <source src={carousel.video} type="video/mp4" />
              
            </video>

            {#if $locale == "en"}
              <div
                class="absolute bottom-0 left-0 w-full h-full flex justify-center flex-col-reverse text-center md:pl-32 md:text-2xl items-center md:items-start p-2 bg-black bg-opacity-50 text-white gap-4 text-lg lg:text-2xl xl:text-4xl 2xl:text-6xl"
              >
              <div class="w-full h-28 md:h-[32rem] absolute left-0 bottom-0 bg-gradient-to-t from-[#000000]"></div>
              <div class="absolute bottom-0 left-0 w-full h-full flex justify-start pb-24 md:pb-48 flex-col-reverse text-center  md:pl-12 md:text-4xl items-center md:items-start p-2  gap-4 text-xl lg:text-6xl xl:text-6xl 2xl:text-[4rem]"
              style="font-family:Bahij_Plain; filter:opacity(1); "
              data-aos="fade-up"
              data-aos-anchor-placement="center-center" data-aos-duration="3000">
              {@html checkLanguage(carousel.title, $locale)}
              </div>
              </div>

              <div class="w-11/12 h-16 ml-5 mb-4 absolute z-50 bottom-0  flex md:hidden justify-center items-center " data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="3000">
                <button>
                  
                  <!-- svelte-ignore a11y-click-events-have-key-events -->
                  <!-- svelte-ignore a11y-no-static-element-interactions -->
                  <span id="downloadButton"  on:click={redirectToStore} class="{$locale == "en" ? "Bahij_Plain" : "Bahij_Plain_Plain"}">{$_("downloadApp")}</span>
                </button>
              </div>

            {:else}
              <div
                class="absolute bottom-0 left-0 w-full h-full flex justify-center flex-col-reverse text-center md:pr-44 md:text-2xl items-center md:items-end p-2 bg-black bg-opacity-50 text-white gap-4 text-lg lg:text-2xl xl:text-4xl 2xl:text-6xl"
              >
              <div class="w-full h-28 md:h-[32rem] absolute left-0 bottom-0 bg-gradient-to-t from-[#000000]"></div>
              <div class="absolute bottom-0 left-0 w-full h-full flex justify-start pb-24 md:pb-48 flex-col-reverse text-center  md:pr-12 md:text-4xl items-center md:items-end p-2  gap-4 text-xl lg:text-6xl xl:text-6xl 2xl:text-[4rem]"
              style="filter:opacity(1); "
              data-aos="fade-up"
              data-aos-anchor-placement="center-center" data-aos-duration="3000">
              {@html checkLanguage(carousel.title, $locale)}
              </div>
            
              </div>

              <div class="w-11/12 h-16 ml-5 mb-4 absolute z-50 bottom-0  flex md:hidden justify-center items-center " data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="3000">
                <button>
                  
                  <!-- svelte-ignore a11y-click-events-have-key-events -->
                  <!-- svelte-ignore a11y-no-static-element-interactions -->
                  <span id="downloadButton" class="{$locale == "en" ? "Bahij_Plain" : "Bahij_Plain_Plain"}"  on:click={redirectToStore}>{$_("downloadApp")}</span>
                </button>
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

  video::-webkit-media-controls-container {
  opacity: 0 !important;
}

*::-webkit-media-controls-panel {
  display: none!important;
  -webkit-appearance: none;
}
    /* Old shadow dom for play button */
*::--webkit-media-controls-play-button {
    display: none!important;
    -webkit-appearance: none;
}
    /* New shadow dom for play button */
    /* This one works */
*::-webkit-media-controls-start-playback-button {
    display: none!important;
    -webkit-appearance: none;
}




button {
 align-items: center;
 background-image: linear-gradient(144deg,#f17f18, #ffc897 50%,#ffa657);
 border: 0;
 border-radius: 30px;
 box-shadow: #f17d185b 0 15px 30px -5px;
 box-sizing: border-box;
 color: #FFFFFF;
 display: flex;
 font-size: 18px;
 justify-content: center;
 line-height: 1em;
 max-width: 100%;
 min-width: 120px;
 padding: 3px;
 text-decoration: none;
 user-select: none;
 -webkit-user-select: none;
 touch-action: manipulation;
 white-space: nowrap;
 cursor: pointer;
 transition: all .3s;
}

button:active,
button:hover {
 outline: 0;
}

button span {
 background-color: #f17f18;
 padding: 8px 18px;
 border-radius: 30px;
 width: 100%;
 height: 100%;
 transition: 300ms;
}

button:hover span {
 background: none;
}

button:active {
 transform: scale(0.9);
}
</style>
