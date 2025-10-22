<script lang="ts">
  import { page } from "$app/stores";
  import type { LanguageIndex } from "$lib/Models/Common/Language.Common.Model";
  import { languageStore } from "$lib/Store/Language.Store";
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    Img,
  } from "flowbite-svelte";
  import { DarkMode } from "flowbite-svelte";
  import { ChevronDownSolid } from "flowbite-svelte-icons";
  import { _, locale } from "svelte-i18n";

  // Function to remove trailing slash
  const removeTrailingSlash = (url: string) =>
    url.length > 1 && url.endsWith("/") ? url.slice(0, -1) : url;
  $: activeUrl = removeTrailingSlash($page.url.pathname);

  const activeClass =
    "text-[#f17f18]  dark:text-[#f17f18] rounded-none  duration-300 ease-in-out";
  const nonActiveClass = "text-white duration-300 ease-in-out";

  // Selected language state
  let selectedLanguage: string = "en";

  const value: LanguageIndex = {
    en: "EN",
    kr: "KU",
    ar: "AR",
  };

  $: {
    if (selectedLanguage) {
      locale.set(selectedLanguage);
    }
  }
</script>

<div class="w-full absolute z-20">
  <Navbar
    class="w-full text-center fixed"
    style="
    backdrop-filter: blur(20px) saturate(200%);
    -webkit-backdrop-filter: blur(20px) saturate(200%);
    background-color: rgba(0, 0, 0, 0.35);
    border: 1px solid rgba(255, 255, 255, 0.125);
    "
  >
    <div
      class="flex w-full xl:gap-24 md:order-2 justify-between flex-wrap md:justify-center"
    >
      <NavBrand href="/" >
        <img
          src="/images/kubak.png"
          class="me-3 h-8 lg:h-12"
          alt="Flowbite Logo"
        />
      </NavBrand>


      <div class="gap-2 justify-center items-center flex md:hidden">

        <div
        class="flex justify-center md:justify-around items-center text-center gap-2 "
      >
        <!-- Multi Language Display None for Now -->
        <select
          bind:value={selectedLanguage}
          style="Bahij_Plain"
          class="w-20 h-10 rounded-full bg-[#ffffff00] flex justify-center items-center text-white"
          >{selectedLanguage}<ChevronDownSolid
            class="ms-2 w-2 h-2 text-white dark:text-white"
          />
          {#if $languageStore}
            {#each $languageStore.data as lang}
              <option
                value={lang.abbreviation}
                disabled={!lang.active}
                class="text-black {!lang.active ? 'hidden' : 'flex'}"
                style="font-family:Bahij;"
                >{lang.abbreviation.toLocaleUpperCase()}</option
              >
            {/each}
          {/if}
        </select>
        <DarkMode class="text-lg ">
          <Img
            src="/images/lightMode.png"
            slot="lightIcon"
            class="w-8 h-8 md:w-20 md:h-8 object-contain cssanimation "
          />
          <Img
            src="/images/darkMode.png"
            slot="darkIcon"
            class="w-8 h-8 md:w-20 md:h-8 object-contain cssanimation "
          />
        </DarkMode>
      </div>
        <NavHamburger menuClass="text-white bg-transparent hover:bg-transparent" />

      
      </div>

      
      <NavUl
        {activeUrl}
        ulClass="md:flex w-full items-center md:gap-3 bg-[#00000000] border-0 dark:bg-[#00000000] md:bg-transparent md:dark:bg-transparent "
        {activeClass}
        {nonActiveClass}
        class="md:text-md lg:text-lg gap-2"
      >
        <div class="w-full md:flex md:justify-around gap-12">
          {#if $locale == "en"}
            <div
              class="w-full text-md md:gap-5 md:flex justify-center items-center cssanimation leBlurInBottom sequence"
            >
              <NavLi href="/" style="font-family:Bahij;">{$_("home")}</NavLi>
              <NavLi href="/products"  style="font-family:Bahij;"
                >{$_("products")}</NavLi
              >
              <NavLi href="/aboutUs"  style="font-family:Bahij;"
                >{$_("aboutUs")}</NavLi
              >
              <NavLi href="/privacy"  style="font-family:Bahij;"
                >{$_("privacyPolicy")}</NavLi
              >
              <NavLi href="/terms"  style="font-family:Bahij;"
                >{$_("termsofUse")}</NavLi
              >
              <NavLi href="/contactUs"  style="font-family:Bahij;"
                >{$_("contactUs")}</NavLi
              >
            </div>
          {:else}
            <div
              class="w-full text-xs xl:text-[1rem] md:gap-5 md:flex justify-center items-center cssanimation leBlurInBottom sequence"
              dir="rtl"
            >
              <NavLi href="/" style="font-family:Bahij_Plain;">{$_("home")}</NavLi>
              <NavLi href="/products" class="Bahij_Plain" style="font-family:Bahij_Plain;"
                >{$_("products")}</NavLi
              >
              <NavLi href="/aboutUs" class="Bahij_Plain" style="font-family:Bahij_Plain;"
                >{$_("aboutUs")}</NavLi
              >
              <NavLi href="/privacy" class="Bahij_Plain" style="font-family:Bahij_Plain;"
                >{$_("privacyPolicy")}</NavLi
              >
              <NavLi href="/terms" style="font-family:Bahij_Plain;"
                >{$_("termsofUse")}</NavLi
              >
              <NavLi href="/contactUs" class="Bahij_Plain" style="font-family:Bahij_Plain;"
                >{$_("contactUs")}</NavLi
              >
            </div>
          {/if}

          <div
            class="hidden md:flex justify-center md:justify-around items-center text-center gap-2"
          >
            <!-- Multi Language Display None for Now -->
            <select
              bind:value={selectedLanguage}
              style="Bahij_Plain"
              class="w-20 h-10 rounded-full bg-[#ffffff00] flex justify-center items-center text-white cssanimation leBlurInBottom sequence"
              >{selectedLanguage}<ChevronDownSolid
                class="ms-2 w-2 h-2 text-white dark:text-white"
              />
              {#if $languageStore}
                {#each $languageStore.data as lang}
                  <option
                    value={lang.abbreviation}
                    disabled={!lang.active}
                    class="text-black {!lang.active ? 'hidden' : 'flex'}"
                    style="font-family:Bahij;"
                    >{lang.abbreviation.toLocaleUpperCase()}</option
                  >
                {/each}
              {/if}
            </select>
            <DarkMode class="text-lg">
              <Img
                src="/images/lightMode.png"
                slot="lightIcon"
                class="w-8 h-8 md:w-20 md:h-8 object-contain cssanimation cssanimation flipX"
              />
              <Img
                src="/images/darkMode.png"
                slot="darkIcon"
                class="w-8 h-8 md:w-20 md:h-8 object-contain cssanimation cssanimation flipX"
              />
            </DarkMode>
          </div>
        </div>
      </NavUl>


      
    </div>

    
  </Navbar>
</div>


<style>
  .leBlurIn{ animation-name: leBlurIn }
@keyframes leBlurIn {
    from {
        transform: scaleX(0.2);
        filter: blur(20px);
        opacity: 0;
    }
}

.leBlurInBottom { animation-name: leBlurInBottom }
@keyframes leBlurInBottom {
    from {
        transform: scaleY(0.2) translateY(100px);
        filter: blur(20px);
        opacity: 0;
    }
}

.blurIn { animation-name: blurIn }
@keyframes blurIn {
    from {
        filter: blur(20px);
        opacity: 0;
    }
}

.flipX { animation-name: flipX }
@keyframes flipX {
    from {
        transform: perspective(600px) rotateX(-180deg);
        opacity: 0;
    }
    to { transform: perspective(600px) rotateX(-360deg) }
}
</style>