<script>
  import "../app.pcss";
  import "../input.css";
  import Navbar from "$lib/Components/Navbar.Component.svelte";
  import Footer from "$lib/Components/Footer.Component.svelte";
  import { carouselStore } from "$lib/Store/Carousel.Store";
  import { aboutUsStore } from "$lib/Store/AboutUs.Store";
  import { developmentStore } from "$lib/Store/Development.Store";
  import { footerStore } from "$lib/Store/Footer.Store";
  import { productStore } from "$lib/Store/Product.Store";
  import { projectStore } from "$lib/Store/Project.Store";
  import { technologyStore } from "$lib/Store/Technology.Store";
  import { technologyAttributeStore } from "$lib/Store/TechnologyAttibute.Store";
  import { onMount } from "svelte";
  import { Img } from "flowbite-svelte";

  let loading = true;
	onMount(async () => {
		try {
      await carouselStore.getAll();
			await footerStore.get();
		} finally {
			loading = false;
		}
	});

</script>

{#if loading}
<div class="w-full h-screen flex flex-col gap-5 bg-white justify-center items-center">

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


  <Navbar />
  <slot />
  <Footer />
{/if}
