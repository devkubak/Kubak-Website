<script>
  import "../app.pcss";
  import "../input.css";
  import Navbar from "$lib/Components/Navbar.Component.svelte";
  import Footer from "$lib/Components/Footer.Component.svelte";
  import { carouselStore } from "$lib/Store/Carousel.Store";
  import { aboutUsStore } from "$lib/Store/AboutUs.Store";
  import { developmentStore } from "$lib/Store/Development.Store";
  import { footerStore } from "$lib/Store/Footer.Store";
  import { onMount } from "svelte";
  import {languageStore} from "$lib/Store/Language.Store";
  import Splash from "$lib/Components/splash.Component.svelte";
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import { locale } from "svelte-i18n";
  
  let loading = true;

onMount(async () => {
  setTimeout(() => {
    loading = false;
  }, 2000); // Set timeout for 2 seconds

  try {
    await languageStore.getAll();
    console.log("Language",$languageStore.data);
    await carouselStore.getAll();
    await footerStore.get();
    AOS.init();
  } finally {
    // Ensure loading is set to false even if there's an error during data loading
    setTimeout(() => {
      loading = false;
    }, 4000); // Ensure loading screen stays for at least 2 seconds
  }

});
</script>

{#if loading}
<Splash />

{:else}


  <Navbar />
  <slot />


    <Footer />

{/if}


<style>






</style>