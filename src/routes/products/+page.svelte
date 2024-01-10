<script lang="ts">
  import { productStore } from "$lib/Store/Product.Store";
  import { DeviceMockup } from "flowbite-svelte";
  import { onMount } from "svelte";
  import { ImagePosition } from "$lib/Models/Enums/Image-Position.Enum.Model";
  import type { Language } from "$lib/Models/Common/Language.Common.Model";
  import { locale } from "svelte-i18n";

  onMount(async () => {
    try {
      await productStore.get();
    } catch (e) {
      console.log(e);
    }
  });

  function checkLanguage(
    text: Language,
    lang?: string | null,
  ): string {
    console.log(text);
    if (Object.keys(text).includes(lang as string)) {
      console.log(text);
      return text[
        lang as keyof typeof text
      ] as string;
    } else {
      return text.en;
    }
    
  }

  $:{
    console.log($locale);
  }
</script>

{#if $productStore}
<div
  class="w-full bg-white dark:bg-[#212121] dark:text-white pb-12 pt-32 flex justify-center items-center text-center"
>
  <p class="md:text-4xl container mx-auto">
    {checkLanguage($productStore.title,$locale)}
  </p>
</div>

{#each $productStore.productAttribute as productAttribute}
<div
  class="container mx-auto flex justify-center items-center mt-5 gap-5   {productAttribute.image_position == ImagePosition.LEFT ? "md:flex-row-reverse" : "md:flex-row" } flex-col-reverse flex-wrap md:flex-nowrap px-4 mb-24"
>
<div class="w-full h-auto flex flex-col gap-3" dir="{$locale == "en" ? "ltr" : "rtl"}">

  <p class="md:text-2xl text-[#f17f18] text-lg font-bold " style="font-family: kurdish;">
    {checkLanguage( productAttribute.title,$locale)}
  </p>
  <p class="md:text-xl dark:text-white">
    {checkLanguage( productAttribute.description,$locale)}
  </p>
</div>
  <DeviceMockup device="ios">
    <img
      src={productAttribute.image || "/images/phone1.jpg"}
      class="object-cover w-[272px] h-[572px]"
      alt="default example 1"
    />
   
  </DeviceMockup>
</div>
{/each}
{/if}

<!-- <div
  class="w-full bg-white dark:bg-[#212121] dark:text-white pb-12 pt-32 flex justify-center items-center text-center"
>
  <p class="md:text-4xl container mx-auto">
    Introducing Our Revolutionary Online Taxi App: A Safe, Reliable, and
    Affordable Solution for All Your Transportation Needs
  </p>
</div>

<div
  class="container mx-auto flex justify-center items-center mt-5 gap-5 md:flex-row flex-col-reverse flex-wrap md:flex-nowrap px-4 mb-24"
>
  <p class="md:text-xl dark:text-white">
    Are you tired of waiting for taxis on the street, only to be charged
    exorbitant fees and worry about your safety during the ride? Look no further
    than our innovative online taxi app, which connects both passengers and
    drivers quickly and seamlessly for a safe, reliable, and affordable trip
    every time. With our app, both passengers and drivers can easily connect to
    each other using only their smart devices, without any delay, and at the
    most reasonable price possible. The process is simple: the passenger sends a
    request, the driver accepts the request, and they head to the passenger’s
    pickup location. After picking up the passenger, they head to the desired
    destination and end the trip there. This benefits both parties because the
    driver doesn’t have to search around town for a passenger, and the passenger
    doesn’t have to worry about their safety. But that’s not all – our online
    taxi app offers several additional services that make your trip even more
    convenient and enjoyable. For example, our Wallet feature allows both
    drivers and passengers to make their trips without the need for any physical
    currency. This is just one of many uses in the app.
  </p>
  
  <DeviceMockup device="ios">
    <img
      src="/images/phone1.jpg"
      class="dark:hidden w-[272px] h-[572px]"
      alt="default example 1"
    />
    <img
      src="/images/phone1.jpg"
      class="hidden dark:block w-[272px] h-[572px]"
      alt="default example 2"
    />
  </DeviceMockup>
</div>

<div
  class="container mx-auto flex justify-center items-center mt-5 gap-5 md:flex-row flex-col flex-wrap md:flex-nowrap px-4 mb-24"
> -->
  <!-- <div>
    <DeviceMockup device="ios">
      <img
        src="/images/phone2.jpg"
        class="dark:hidden w-[272px] h-[572px]"
        alt="default example 1"
      />
      <img
        src="/images/phone2.jpg"
        class="hidden dark:block w-[272px] h-[572px]"
        alt="default example 2"
      />
    </DeviceMockup>
  </div>

  <p class="md:text-xl dark:text-white">
    Our Chat feature also helps users connect with each other, working as a
    messenger app to help parties converse without the need of an external
    medium. This is especially useful for those times when you need to
    communicate with each other. Finally, our app offers Prizes that include
    both discount codes and gifts provided to the passenger by the company. This
    is just one of many ways we’re showing our commitment to providing an
    exceptional experience for our customers. At our company, safety and
    reliability are our top priorities. We understand how important it is for
    you to have peace of mind during your trips, and we’re dedicated to making
    that happen. With kubak, you can rest assured that you’re in good hands. Our
    team of developers has worked tirelessly to ensure that our app is
    user-friendly and easy to navigate. You can easily search for rides, view
    your ride history, and make payments seamlessly. We understand that your
    time is valuable, which is why we’ve designed our app to be as efficient and
    streamlined as possible.
  </p>
</div> -->

<!-- <div
  class="container mx-auto flex justify-center items-center mt-5 gap-5 md:flex-row flex-col-reverse flex-wrap md:flex-nowrap px-4 mb-5"
>
  <p class="md:text-xl dark:text-white">
    But our commitment to our customers doesn’t stop there. We also understand
    the importance of sustainability, which is why we’re working to make our
    fleet of vehicles more environmentally friendly. Our drivers are carefully
    vetted to ensure that they meet our strict safety and quality standards, and
    we are continuously working to improve our app and services to meet the
    evolving needs of our customers. With kubak, you can say goodbye to the
    frustration of hailing taxis on the street, worrying about your safety
    during the ride, and being charged unreasonable fees. We offer a safe,
    reliable, and affordable transportation solution that you can trust. Whether
    you need to get to the airport, run errands around town, or attend a
    business meeting, our app has got you covered. In conclusion, we are excited
    to offer our revolutionary online taxi app that provides a safe, reliable,
    and affordable solution for all your transportation needs. Our app allows
    both passengers and drivers to connect easily and quickly using their smart
    devices, with no delays and at the most reasonable price possible. With
    additional features like our Wallet, Chat, and Prizes, we’re committed to
    providing an exceptional experience for our customers. Download our app
    today and experience the future of transportation.
  </p> -->
  <!-- <DeviceMockup device="ios">
    <img
      src="/images/phone3.jpg"
      class="dark:hidden w-[272px] h-[572px]"
      alt="default example 1"
    />
    <img
      src="/images/phone3.jpg"
      class="hidden dark:block w-[272px] h-[572px]"
      alt="default example 2"
    />
  </DeviceMockup> -->
<!-- </div> -->

<div class="w-full container mx-auto flex items-center px-4">
  <a
    href="https://play.google.com/store/search?q=kubak+taxi&c=apps&hl=en&gl=US"
    class="w-full flex justify-end"
  >
    <img src="/images/playLight.png" class="w-52" alt="" />
  </a>
  <a
    href="https://apps.apple.com/us/app/kubak/id1460687618"
    class="w-full flex justify-start"
  >
    <img src="/images/appLight.png" class="w-52" alt="" />
  </a>
</div>
