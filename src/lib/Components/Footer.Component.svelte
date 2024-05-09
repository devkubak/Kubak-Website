<script lang="ts">
	import { ID } from 'appwrite';
  import {
    Footer,
    FooterCopyright,
    FooterLinkGroup,
    FooterBrand,
  } from "flowbite-svelte";
  import { onMount } from "svelte";
  import { footerStore } from "$lib/Store/Footer.Store";
  import type { Language } from "$lib/Models/Common/Language.Common.Model";
  import { locale } from "svelte-i18n";
  import Social from "$lib/Components/SocialMedia.Component.svelte"

  onMount(async () => {
    try {
      await footerStore.get();
    } catch (e) {
      console.log(e);
    }
  });

  function checkLanguage(
    text: Language,
    lang?:string | null
  ): string {
    if (Object.keys(text).includes(lang as string)) {
      return text[
        lang as keyof typeof text
      ] as string;
    } else {
      return text.en;
    }  
  }
</script>

{#if $footerStore}

<Footer
  footerType="logo"
  class=" px-0 md:px-0 mt-5  pb-0 md:pb-0 bg-[#fff] dark:bg-[#33333326]"
 id="footerImg"
>
  <div class="footer-bg backdrop-blur-lg">
    <div class="container mx-auto flex  items-center flex-col justify-center gap-12">
      <FooterBrand
        src={$footerStore.image}
        imgClass="w-16 mt-5 "
        id="footer-brand"
      />
      <FooterLinkGroup
        ulClass="flex flex-wrap items-center mb-6 text-[12px] md:text-[18px] text-gray-500 sm:mb-0 dark:text-gray-400"
      >
      <div class="w-full h-12 mb-12 flex justify-center items-center ">

        <Social/>
      </div>
        <div class=" px-4" dir={$locale == "en" ? "ltr" : "rtl"}>
          {@html checkLanguage($footerStore.description,$locale)}
        </div>

        <div
          class="w-full flex justify-between items-center mt-12 text-center text-gray-800 dark:text-white text-[12px] pb-5 md:text-[15px] px-4 gap-3"
        >
          <p class="{$locale == "en" ? "Bahij_Plain" : "kurdish"}" style="font-family:Bahij_Plain;">{checkLanguage($footerStore.address1,$locale)}</p>
          <p class="{$locale == "en" ? "Bahij_Plain" : "kurdish"}" style="font-family:Bahij_Plain;">{checkLanguage($footerStore.address2,$locale)}</p>
        </div>
      </FooterLinkGroup>
    </div>
  </div>

  <div
    class=" w-full h-12  bg-[#f17f18] flex justify-center items-center text-white"
  >
    <FooterCopyright href="/" by="Kubak" spanClass="text-white" />
  </div>
</Footer>

{/if}

<style>
  .footer-bg {
  position: relative;
  width: 100%;
  height: 100%;
}

.footer-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/footerBack.jpg');
  background-size: cover;
  background-position: right;
  opacity: .1; /* Adjust opacity as needed */
  filter: blur(0px);

}

.container {
  position: relative; /* Ensure z-index works */
  z-index: 1; /* Ensure content is above the background */
}

</style>

