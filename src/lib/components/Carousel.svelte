<script lang="ts">
  import { scale } from 'svelte/transition';
import { quintOut, sineOut } from 'svelte/easing';
//@ts-ignore
import Carousel from 'svelte-carousel';
  import { browser } from '$app/environment';
  import { Img } from 'flowbite-svelte';
  import { Video } from 'flowbite-svelte';
  

export const videos = [
{
  alt: 'Cosmic timetraveler',
  src: '/videos/vid1.mp4',
  duration: 50000,
  url: 'www.youtube.com',
  title: 'Kubak is a Best way to taking a Taxi'
},
{
  alt: 'Cosmic timetraveler',
  src: '/videos/vid2.mp4',
  duration:45000,
  url: 'www.google.com',
  title: 'Kubak An Easier Life'
}]



let currentSlide = 0;
 




</script>

<div class="w-full flex flex-col justify-end gap-5">

  <div class="w-full mt-14 md:mt-0 rounded-none ">

    
    {#if browser}
    <Carousel autoplay autoplayDuration={50000} autoplayProgressVisible>
      {#each videos as video}
        <!-- svelte-ignore a11y-missing-attribute -->
        <a  title={video.title} class="block relative">
          <!-- svelte-ignore a11y-media-has-caption -->
          <video class="cursor-pointer w-full h-[400px] md:h-[900px] object-cover" autoplay loop muted>
            <source src={video.src} type="video/mp4">
          </video>
          
          <div  class="absolute bottom-0 left-0 w-full h-full flex justify-center flex-col-reverse pl-24 md:pl-44 md:text-2xl items-start p-2 bg-black bg-opacity-50 text-white gap-4 text-sm sm:text-lg lg:text-2xl xl:text-4xl 2xl:text-6xl">
            <div class="flex items-center gap-2 ">
              <a class="text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl text-[#d1d1d1]" href={video.src} >View More</a>
              <div class="w-4 h-4  sm:w-6 sm:h-6 xl:w-9 xl:h-9 2xl:w-12 2xl:h-12 rounded-full bg-[#f17f18]  flex justify-center items-center">
                <img src="/images/arrow.png" class="w-[4px] sm:w-[6px] md:w-2 xl:w-3 2xl:w-4" alt="">
              </div>
            </div>
            {video.title} 
          </div>
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