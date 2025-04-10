<script lang="ts">
  import { projectStore } from "$lib/Store/Project.Store";
  import { Popover } from "flowbite-svelte";
  import { Tooltip, Button } from "flowbite-svelte";
  import { onMount } from "svelte";
  import { blur, fade, slide } from "svelte/transition";
  let elemMovies: HTMLDivElement;
  let activeTooltip: boolean = false;

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
      console.log($projectStore.data.some((desc) => desc.description));
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
    class="snap-x snap-mandatory scroll-smooth flex gap-2 pb-2 justify-start sm:justify-start overflow-x-auto w-full no-scrollbar"
    data-aos="fade-up"
    data-aos-duration="2000"
    style="-webkit-overflow-scrolling: touch; -ms-overflow-style: none; scrollbar-width: none;"
  >
    <!-- svelte-ignore a11y-distracting-elements -->

    {#each $projectStore.data as project}
      <div
        id="card"
        class="rounded-lg dark:bg-[#171717] shrink-0 snap-start dark:text-white h-60 w-44 flex justify-around items-center flex-col before:bg-[#ffffff30] dark:before:bg-[#00000030]"
      >
        {#if project.link}
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
            <p
              class="text-black dark:text-white mt-12"
              style="font-family:Bahij_plain;"
            >
              {project.name}
            </p>
          </a>
        {:else}
          <a
            id="carousel-card"
            class="click-{project.id} shrink-0 snap-start bg-white dark:bg-[#212121] dark:text-white h-60 w-44 flex justify-around rounded-lg items-center flex-col"
          >
            <img
              class="rounded-container-token hover:brightness-125 size-24 object-contain"
              src={project.image}
              alt=""
              title=""
              loading="lazy"
            />
            <p
              class="text-black dark:text-white mt-12"
              style="font-family: Bahij_Plain;"
            >
              {project.name}
            </p>
          </a>
        {/if}
      </div>
      {#if project.description}
        <Tooltip
          arrow={false}
          type="custom"
          class="w-64 text-sm font-light tooltip-content
        bg-gradient-to-r from-[#f8f8f8] from-10% via-transparent via-30% to-[#f1f1f1]/50 to-90%
        dark:bg-gradient-to-r dark:from-[#141414] dark:from-10% dark:via-transparent dark:via-30% dark:to-[#212121]/50 dark:to-90% dark:text-white
        "
          title="Project Description"
          triggeredBy=".click-{project.id}"
          trigger="click"
        >
          {project.description || null}
        </Tooltip>
      {/if}
    {/each}
  </div>
</div>

<div
  class="container mx-auto w-full flex justify-center items-center gap-2 my-4"
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

    backdrop-filter: blur(50px);
  }
  .dark #card::after {
    position: absolute;
    content: " ";
    display: block;
    width: 190px;
    height: 254px;

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
