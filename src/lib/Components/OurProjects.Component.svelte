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
      <a
        href={project.link}
        target="_blank"
        id="carousel-card"
        class="shrink-0 snap-start bg-white dark:bg-[#212121] dark:text-white h-60 w-44 flex justify-around rounded-lg items-center flex-col"
      >
        <img
          class="rounded-container-token hover:brightness-125 w-24"
          src={project.image}
          alt=""
          title=""
          loading="lazy"
        />
        <p>{project.name}</p>
      </a>
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
