<script lang="ts">
  import { page } from "$app/stores";
  import type { Language } from "$lib/Models/common/Language.Common.Model";
  import {
    Navbar, NavBrand, NavLi, NavUl, NavHamburger, Img, Button, Dropdown, DropdownItem
  } from "flowbite-svelte";
  import { DarkMode } from "flowbite-svelte";
  import { ChevronDownSolid } from 'flowbite-svelte-icons';

  // Function to remove trailing slash
  const removeTrailingSlash = (url: string) => (url.length > 1 && url.endsWith('/')) ? url.slice(0, -1) : url;
  $: activeUrl = removeTrailingSlash($page.url.pathname);

  const activeClass = 'text-[#f17f18]  dark:text-[#f17f18] rounded-none  duration-300 ease-in-out';
  const nonActiveClass = 'text-white duration-300 ease-in-out';

  // Language options
  const langOptions = {
    en: { home: "Home", products: "Products", aboutUs: "About Us", privacy: "Privacy Policy", terms: "Terms of Use" },
    kr: { home: "سەرەتا", products: "بەرهەمەکان", aboutUs: "دەربارەی ئێمە", privacy: " تایبەت", terms: "مەرجەکانی بەکارهێنان" },
    ar: { home: "الصفحة الرئيسية", products: "المنتجات", aboutUs: "معلومات عنا", privacy: "سياسة الخصوصية", terms: "شروط الاستخدام" }
  };

  // Selected language state
  let selectedLanguage = 'en';
  $: currentLang = langOptions[selectedLanguage];

  const value = {
      en: "English",
      kr: "Kurdish",
      ar: "Arabic",
    };


  function checkLanguage(
    selectedLanguage: string,
    text: Language
  ): string {
    console.log(text);
    if (Object.keys(text).includes(selectedLanguage)) {
      console.log(text);
      return text[
        selectedLanguage as keyof typeof text
      ] as string;
    } else {
      return text.en;
    }
  }
    
</script>

<div class="w-full absolute z-10">
  <Navbar class="bg-[#0000009a] dark:bg-[#000000be] backdrop-blur-md text-center fixed">
    <NavBrand href="/">
      <img src="/images/kubak.png" class="me-3 h-8 lg:h-12" alt="Flowbite Logo" />
    </NavBrand>
    <NavHamburger menuClass="text-white" />
    <NavUl {activeUrl} ulClass="md:flex w-full items-center md:gap-3 bg-[#0000009a] dark:bg-[#000000be] md:bg-transparent md:dark:bg-transparent" {activeClass} {nonActiveClass} class="md:text-md lg:text-lg gap-2" style="font-family: 'Kurdish';">
      <div class="w-full md:flex md:justify-around">
        <div class="w-full md:gap-5 md:flex justify-center items-center font-kurdish">
          <NavLi href="/">{currentLang.home}</NavLi>
          <NavLi href="/products">{currentLang.products}</NavLi>
          <NavLi href="/aboutUs">{currentLang.aboutUs}</NavLi>
          <NavLi href="/privacy">{currentLang.privacy}</NavLi>
          <NavLi href="/terms">{currentLang.terms}</NavLi>
        </div>
        <div class="flex justify-center items-center text-center gap-2">
    
            <select bind:value={selectedLanguage} class="w-20 h-10 md:ml-5 lg:ml-36 xl:ml-64 2xl:ml-96 rounded-full bg-[#f17f18] flex justify-center items-center text-white">{selectedLanguage}<ChevronDownSolid class="ms-2 w-2 h-2 text-white dark:text-white" />
              {#each Object.keys(value) as lang}
    <option value={lang}>{value[lang]}</option>
  {/each}
            </select>
          </div>
          <DarkMode class="text-lg">
            <Img src="/images/lightMode.png" slot="lightIcon" class="w-8 h-8 md:w-14 md:h-8 object-contain" />
            <Img src="/images/darkMode.png" slot="darkIcon" class="w-8 h-8 md:w-14 md:h-8 object-contain" />
          </DarkMode>
        </div>
   
    </NavUl>
  </Navbar>
</div>
