<script lang="ts">
  import { developmentStore } from "$lib/Store/Development.Store";
  import { Tabs, TabItem } from "flowbite-svelte";
  import { onMount } from "svelte";

  onMount(async () => {
    try {
      await developmentStore.getAll();
      console.log($developmentStore);
    } catch (e) {
      console.log(e);
    }
  });
</script>

<div
  class="container mx-auto w-full md:w-1/2 flex flex-col md:flex-row justify-center items-center h-auto bg-[#e3e3e3] dark:bg-[#212121] rounded-3xl p-5"
>
  <Tabs
    style="pill"
    class="flex"
    defaultClass="flex flex-row md:flex-col gap-3 flex-wrap justify-center mb-4 md:mb-0"
    contentClass=" w-full h-auto min-h-[610px] bg-white dark:bg-[#363636] rounded-2xl flex items-start justify-center"
  >
    {#each $developmentStore.data as development}
      <TabItem
        open
        activeClasses="bg-white dark:bg-[#363636] w-full rounded-lg md:rounded-l-xl py-5 w-full px-4 text-[#f17f18] font-bold duration-300 ease-in-out"
        inactiveClasses="hover:bg-[#f1f1f1] dark:hover:bg-[#404040] w-full rounded-lg md:rounded-l-xl py-5 w-full px-4 text-black dark:text-white font-bold duration-300 ease-in-out"
      >
        <span slot="title" class="text-sm">{development.title}</span>
        <div
          class="flex flex-col w-full h-1/2 justify-center items-center p-4 gap-3"
        >
          <img
            src={development.image}
            class="rounded-2xl h-[350px] object-cover w-full"
            alt=""
          />
          <p class="dark:text-white text-sm md:text-lg h-1/2 w-full">
            {development.description}
          </p>
        </div>
      </TabItem>
    {/each}
  </Tabs>
</div>
