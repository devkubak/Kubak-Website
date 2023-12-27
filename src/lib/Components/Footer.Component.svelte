<script>
  import {
    Footer,
    FooterCopyright,
    FooterLinkGroup,
    FooterBrand,
  } from "flowbite-svelte";
  import { onMount } from "svelte";
  import { footerStore } from "$lib/Store/Footer.Store";

  onMount(async () => {
    try {
      await footerStore.get();
    } catch (e) {
      console.log(e);
    }
  });
</script>

{#if $footerStore}
<Footer
  footerType="logo"
  class="mt-5 px-0 md:px-0  pb-0 md:pb-0 bg-white dark:bg-[#212121]"
>
  <div
    class="container mx-auto flex items-center flex-col justify-center gap-12"
  >
    <FooterBrand
      src={$footerStore.image}
      imgClass="w-16"
    />
    <FooterLinkGroup
      ulClass="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"
    >
      <p class="text-center px-4">
       {$footerStore.description}
      </p>

      <div
        class="w-full flex justify-between items-center mt-12 text-center text-gray-800 dark:text-white text-[8px] md:text-[12px] px-4 gap-3"
      >
        <p>{$footerStore.address1}</p>
        <p>{$footerStore.address2}</p>
      </div>
    </FooterLinkGroup>
  </div>

  <div
    class=" w-full h-12 mt-4 bg-[#f17f18] flex justify-center items-center text-white"
  >
    <FooterCopyright href="/" by="Kubak" spanClass="text-white" />
  </div>
</Footer>
{/if}
