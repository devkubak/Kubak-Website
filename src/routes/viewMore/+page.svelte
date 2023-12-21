<script>

  import { projectStore } from "$lib/Store/Project.Store";

</script>
<div
  class="container mx-auto flex flex-wrap h-auto justify-center items-center mt-3 gap-2 pt-44"
>

{#each $projectStore.data.slice(0, 3) as project}
<div
class="w-80 h-96 bg-white dark:bg-[#212121] rounded-2xl flex flex-col justify-end items-center gap-3 border-2 border-[#f17f18]"
>
<div class="w-full h-full p-3 relative flex justify-center">

  <img
    src={project.image}
    class="w-60 h-60 rounded-2xl object-cover"
    alt=""
  />
</div>

<p class="font-bold h-20 text-xl dark:text-white mt-4">{project.name}</p>
</div>
{/each}

</div>