<script>
  import {
    Footer,
    FooterCopyright,
    FooterLinkGroup,
    FooterBrand,
  } from "flowbite-svelte";
</script>

<Footer
  footerType="logo"
  class="mt-5 px-0 md:px-0  pb-0 md:pb-0 bg-white dark:bg-[#212121]"
>
  <div
    class="container mx-auto flex items-center flex-col justify-center gap-12"
  >
    <FooterBrand
      href="https://flowbite.com"
      src="/images/kubakLogo.png"
      imgClass="w-16"
    />
    <FooterLinkGroup
      ulClass="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"
    >
      <p class="text-center px-4">
        At Kubak, we're more than just a software development and IT consulting
        company. Founded in 2019 and headquartered in Sulimaniyah, we're
        dedicated to delivering custom software solutions and products that
        transform businesses. Our comprehensive range of IT services, coupled
        with our expertise in software development, ensures that our clients
        receive the highest quality solutions tailored to their unique needs.
        Join hands with us to unlock your business's full potential.
      </p>

      <div
        class="w-full flex justify-between items-center mt-12 text-center text-gray-800 dark:text-white text-xs md:text-md px-4"
      >
        <p>Kori Building, 2nd Floor Erbil, Iraq +964 (750) 139 - 4042</p>
        <p>Mako Mall, 2nd Floor, Sulaymani, Iraq +964 (773) 079 - 7475</p>
      </div>
    </FooterLinkGroup>
  </div>

  <div
    class=" w-full h-12 mt-4 bg-[#f17f18] flex justify-center items-center text-white"
  >
    <FooterCopyright href="/" by="Kubak" spanClass="text-white" />
  </div>
</Footer>
