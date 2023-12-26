<script lang="ts">
  import { page } from "$app/stores";
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    Img,
  } from "flowbite-svelte";
  import { DarkMode } from "flowbite-svelte";
  // Function to remove trailing slash
  const removeTrailingSlash = (url:string) => (url.length > 1 && url.endsWith('/')) ? url.slice(0, -1) : url;
  $: activeUrl = removeTrailingSlash($page.url.pathname);

  const activeClass = 'text-[#f17f18]  dark:text-[#f17f18] rounded-none  duration-300 ease-in-out';
  const nonActiveClass = 'text-white duration-300 ease-in-out';
</script>

<div class="w-full absolute z-10">
  <Navbar
    class="bg-[#0000009a] dark:bg-[#000000be] backdrop-blur-md text-center fixed"
  >
    <NavBrand href="/">
      <img
        src="/images/kubak.png"
        class="me-3 h-8 lg:h-12"
        alt="Flowbite Logo"
      />
    </NavBrand>

    <NavHamburger menuClass="text-white" />
    <NavUl
      {activeUrl}
      ulClass="md:flex w-full items-center md:gap-3 bg-[#0000009a] dark:bg-[#000000be] md:bg-transparent md:dark:bg-transparent"
      {activeClass}
      {nonActiveClass}
      class="md:text-md lg:text-lg gap-2"
    >
      <div class="w-full md:flex md:justify-around">
        <div class="w-full md:gap-5 md:flex justify-center items-center">
          <NavLi href="/">Home</NavLi>
          <NavLi href="/products">Products</NavLi>
          <NavLi href="/aboutUs">About Us</NavLi>
          <NavLi href="/privacy">Privacy Policy</NavLi>
          <NavLi href="/terms">Terms of Use</NavLi>
        </div>

        <div class="flex justify-center items-center text-center gap-2">
          <div
            class="w-24 h-8 md:ml-5 lg:ml-36 xl:ml-64 2xl:ml-96 rounded-full bg-[#f17f18] flex justify-center items-center text-white"
          >
            EN
          </div>
          <DarkMode class="text-lg">
            <Img
              src="/images/lightMode.png"
              slot="lightIcon"
              class="w-8 md:w-12 h-8"
            />
            <Img
              src="/images/darkMode.png"
              slot="darkIcon"
              class="w-8 md:w-12 h-8"
            />
          </DarkMode>
        </div>
      </div>
    </NavUl>
  </Navbar>
</div>
