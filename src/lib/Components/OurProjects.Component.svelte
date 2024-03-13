<script lang="ts">
  import { projectStore } from "$lib/Store/Project.Store";
  import { onMount } from "svelte";
  let elemMovies: HTMLDivElement;

  function multiColumnLeft(): void {
    let x = elemMovies.scrollWidth;
    if (elemMovies.scrollLeft !== 0)
      x = elemMovies.scrollLeft - elemMovies.clientWidth;
    elemMovies.scroll(x, 0);
  }

  function multiColumnRight(): void {
    let x = 0;
    // -1 is used because different browsers use different methods to round scrollWidth pixels.
    if (
      elemMovies.scrollLeft <
      elemMovies.scrollWidth - elemMovies.clientWidth - 1
    )
      x = elemMovies.scrollLeft + elemMovies.clientWidth;
    elemMovies.scroll(x, 0);
  }

  onMount(async () => {
    try {
      await projectStore.getAll();
    } catch (e) {
      console.log(e);
    }
  });
</script>

<div class="w-full flex gap-4 items-center container mx-auto justify-center">
  <!-- Button: Left -->

  <!-- Carousel -->
  <div
    bind:this={elemMovies}
    class="snap-x snap-mandatory scroll-smooth flex gap-2 pb-2 justify-start sm:justify-center overflow-x-hidden w-full"
    data-aos="fade-up"
  data-aos-duration="2000"
  >
    <!-- svelte-ignore a11y-distracting-elements -->

    {#each $projectStore.data as project}
    <div id="card" class="rounded-lg dark:bg-[#171717]  shrink-0 snap-start  dark:text-white h-60 w-44 flex justify-around items-center flex-col">

      <a
        href={project.link}
        target="_blank"
        id="carousel-card"
        class="shrink-0 snap-start bg-white dark:bg-[#212121] dark:text-white h-60 w-44 flex justify-around rounded-lg items-center flex-col"
      >
        <img
          class="rounded-container-token hover:brightness-125 size-24 object-contain"
          src={project.image}
          alt=""
          title=""
          loading="lazy"
        />
        <p class="text-black dark:text-white mt-12">{project.name}</p>
      </a>
    </div>
    {/each}
  </div>
</div>

<div
  class="container mx-auto w-full flex justify-center items-center gap-2 mt-4"
>
  <button
    type="button"
    class="btn-icon variant-filled bg-[#f17f18] rounded-full p-3"
    on:click={multiColumnLeft}
  >
    <img src="images/leftArrow.png" alt="" class="w-4 h-4" />
  </button>

  <!-- Button-Right -->
  <button
    type="button"
    class="btn-icon variant-filled bg-[#f17f18] rounded-full p-3"
    on:click={multiColumnRight}
  >
    <img src="images/rightArrow.png" alt="" class="w-4 h-4" />
  </button>
</div>



<style>

#card {
  width: 190px;
  height: 254px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  position: relative;
}


.dark #card #carousel-card {
  border-radius: 8px;
  background: #212121;
  width: 183px;
  height: 245px;
  z-index: 1;
  padding: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
#card #carousel-card {
  border-radius: 8px;
  background: #ffffff;
  width: 183px;
  height: 245px;
  z-index: 1;
  padding: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
 
}

.content::before {
  opacity: 0;
  transition: opacity 300ms;
  content: " ";
  display: block;
  background: white;
  width: 50px;
  height: 50px;
  position: absolute;
  filter: blur(50px);
}

#card:hover #carousel-card::before {
  opacity: 1;
}

#card::before {
  opacity: 0;
  content: " ";
  position: absolute;
  display: block;
  width: 120px;
  height: 360px;
  background: linear-gradient(
    90deg,
    transparent,
    rgb(255, 119, 0),
    #ff7700,
    transparent
  );
  transition: opacity 300ms;
  animation: rotation_9018 3000ms infinite linear;
  animation-play-state: paused;
}

#card:hover::before {
  opacity: 1;
  animation-play-state: running;
}

#card::after {
  position: absolute;
  content: " ";
  display: block;
  width: 190px;
  height: 254px;
  background: #22222230;
  backdrop-filter: blur(50px);
}


@keyframes rotation_9018 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

</style>