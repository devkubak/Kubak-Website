<script lang="ts">
 import type { Language } from "$lib/Models/Common/Language.Common.Model";
  import { footerStore } from "$lib/Store/Footer.Store";
  import { onMount } from "svelte";
  import { locale, _ } from "svelte-i18n";
  import { Toast } from 'flowbite-svelte';
  import { blur } from 'svelte/transition';
  import { BellOutline, CheckCircleSolid } from 'flowbite-svelte-icons';

  let name = '';
  let email = '';
  let message = '';
  let showToast = false;

  const handleSubmit = async () => {
    await fetch('/api/sendMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, emailUser: email, message })
    });

    
    name = '';
    email = '';
    message = '';

 
    showToast = true;
    setTimeout(() => {
      showToast = false;
    }, 5000);
  };

  onMount(async () => {
    try {
      await footerStore.get();
    } catch (e) {
      console.log(e);
    }
  });

  function checkLanguage(
    text: Language,
    lang?: string | null
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

{#if showToast}
<div class="absolute z-10 flex justify-center w-full h-auto top-24">
  <Toast transition={blur} color="green" params={{ amount: 50, delay: 1000 }} 
  class="" 
  divClass="w-full max-w-xs p-4   shadow dark:text-white bg-gradient-to-b  from-[#00e47f5e] via-[#00e47f5e] to-[#00e47f5e] gap-3 " style="backdrop-filter: blur(10px); font-family:Bahij;"
  >
    <svelte:fragment slot="icon">
    <CheckCircleSolid class="w-5 h-5" />
    <span class="sr-only">Check icon</span>
  </svelte:fragment>
    {$_("sentSuccessfully")}
  </Toast>
</div>
{/if}

<div class="container mx-auto w-full h-auto pt-24 flex md:grid md:grid-cols-2 flex-col-reverse md:flex-row flex-wrap md:flex-nowrap justify-center items-center gap-3">

  <div class="w-auto px-8 h-[400px] flex justify-center items-center dark:bg-gradient-to-b shadow-inner shadow-[#f17d1868] dark:from-[#2f2f2f] dark:via-[#1c1c1c] dark:o-[#2f2f2f]   bg-gradient-to-b from-[#f6f6f6] via-[#dddddd] to-[#f6f6f6] py-[16.6rem] rounded-2xl" data-aos="fade-down" data-aos-duration="2000">
    <!-- svelte-ignore a11y-missing-attribute -->
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d993.30004546094!2d45.45882525468816!3d35.54655937596223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40002d2bcdf3f049%3A0x6a7b2c0fe21fd3f0!2sKubak!5e0!3m2!1sen!2siq!4v1710654094576!5m2!1sen!2siq" width="800" height="450" style="border:0;" id="map" class="rounded-2xl" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>

  <div class="w-[690px] md:w-full h-auto flex justify-center items-center dark:bg-gradient-to-b shadow-inner shadow-[#f17d1868] dark:from-[#2f2f2f] dark:via-[#1c1c1c] dark:o-[#2f2f2f]   bg-gradient-to-b from-[#f6f6f6] via-[#dddddd] to-[#f6f6f6] py-[3rem] rounded-2xl" data-aos="fade-up" data-aos-duration="2000" id="formDiv">
    <form on:submit|preventDefault={handleSubmit} class="w-full h-auto px-12 flex flex-col justify-center items-center gap-5">
      <div class="w-full h-auto flex flex-col justify-center items-start " dir={$locale == "en" ? "ltr" : "rtl"}>
        <label for="name" class="flex dark:text-white {$locale == "en" ? "pl-5" : "pr-5"} mb-2 " style="font-family:Bahij;" >{$_("name")}</label>
        <input type="text" bind:value={name} id="name" class="w-full h-12 rounded-full dark:text-white bg-[#f1f1f1] dark:bg-[#191919] border-0 {$locale == "en" ? "Bahij_Plain" : "kurdish"}" placeholder={$_("name")} required>
      </div>
      <div class="w-full h-auto flex flex-col justify-center items-start" dir={$locale == "en" ? "ltr" : "rtl"}>
        <label for="email" class="flex dark:text-white {$locale == "en" ? "pl-5" : "pr-5"} mb-2 " style="font-family:Bahij;" >{$_("email")}</label>
        <input type="email" bind:value={email} id="email" class="input w-full  h-12 dark:text-white rounded-full bg-[#f1f1f1] dark:bg-[#191919] border-0 {$locale == "en" ? "Bahij_Plain" : "kurdish"}" placeholder={$_("email")} required>
      </div>
      <div class="w-full h-auto" dir={$locale == "en" ? "ltr" : "rtl"}>
        <label for="message" class="flex w-full h-auto  flex-col justify-center items-start dark:text-white {$locale == "en" ? "pl-5" : "pr-5"} mb-2 " style="font-family:Bahij;" >{$_("message")}</label>
        <textarea bind:value={message} id="message" class="textarea w-full h-32 dark:text-white rounded-2xl bg-[#f1f1f1] dark:bg-[#191919] border-0 {$locale == "en" ? "Bahij_Plain" : "kurdish"}" placeholder={$_("message")} required></textarea>
      </div>
      <button type="submit" class="btn w-full h-12 bg-[#f17f18] hover:bg-[#e68c50] duration-300 ease-in-out  text-white rounded-full " style="font-family:Bahij;" >{$_("send")}</button>
    </form>
  </div>

</div>

<div class="container mx-auto w-full h-auto flex-justify-center items-center mt-12">
  <p class="dark:text-white text-2xl text-center " style="font-family:Bahij;"  data-aos="fade-up" data-aos-duration="1000">{$_("whereToFindUs")}</p>
</div>

<div class="container mx-auto w-full h-auto pb-12 pt-2 flex justiy-center items-center gap-3">

  <div class="w-full h-[14rem] md:h-[10rem] p-2  rounded-2xl flex justify-start items-center dark:bg-gradient-to-b shadow-inner shadow-[#f17d1868] dark:from-[#2f2f2f] dark:via-[#1c1c1c] dark:o-[#2f2f2f]   bg-gradient-to-b from-[#f6f6f6] via-[#dddddd] to-[#f6f6f6] flex-col" data-aos="fade-up" data-aos-duration="2000">
    <div class="w-full h-auto flex justify-center md:justify-start items-start p-0 {$locale == "en" ? "md:pl-3" : "md:pr-3"} mt-5 gap-2" dir={$locale == "en" ? "ltr" : "rtl"}>
      <img src="/images/marker.png" class="size-4 md:size-8" alt="">
      <p class="text-md md:text-2xl dark:text-white " style="font-family:Bahij;">{$_("Sulaymaniyah")}</p>
    </div>

    <div class="w-full h-full flex justify-center items-center md:items-end mb-12" dir={$locale == "en" ? "ltr" : "rtl"}>

      <p class="dark:text-white px-2 w-full text-justify md:ml-5 {$locale == "en" ? "Bahij_Plain" : "kurdish"}">{checkLanguage($footerStore.address2,$locale)}</p>
    </div>
  </div>

  <div class="w-full h-[14rem] md:h-[10rem] p-2 rounded-2xl flex justify-start items-center dark:bg-gradient-to-b shadow-inner shadow-[#f17d1868] dark:from-[#2f2f2f] dark:via-[#1c1c1c] dark:o-[#2f2f2f]   bg-gradient-to-b from-[#f6f6f6] via-[#dddddd] to-[#f6f6f6] flex-col" data-aos="fade-up" data-aos-duration="2000">
    <div class="w-full h-auto flex justify-center md:justify-start items-start p-0 md:pl-3 mt-5 gap-2" dir={$locale == "en" ? "ltr" : "rtl"}>
      <img src="/images/marker.png" class="size-4 md:size-8" alt="">
      <p class="text-md md:text-2xl dark:text-white " style="font-family:Bahij;">{$_("erbil")}</p>
    </div>

    <div class="w-full h-full flex justify-center items-center md:items-end mb-12" dir={$locale == "en" ? "ltr" : "rtl"}>

      <p class="dark:text-white px-2 w-full md:ml-5 text-justify {$locale == "en" ? "Bahij_Plain" : "kurdish"}" >{checkLanguage($footerStore.address1,$locale)}</p>
    </div>
  </div>

</div>

<style>

  .dark #map {
    filter: invert(95%) grayscale(100%);
  }

  .dark div #map {
    filter: invert(95%) grayscale(20%);
  }

  @media (max-width: 1290px) {
    #map {
      width: 440px;
      height: 450px;
    }
  }

  @media (max-width: 1004px) {
    #map {
      width: 310px;
      height: 450px;
    }
  }

  @media (max-width: 768px) {
    #map {
      width: 520px;
      height: 450px;
    }
    #formDiv {
      width: 590px;
    }
  }

  @media (max-width: 650px) {
    #map {
      width: 450px;
      height: 450px;
    }
    #formDiv {
      width: 520px;
    }
  }

  @media (max-width: 520px) {
    #map {
      width: 350px;
      height: 450px;
    }
    #formDiv {
      width: 420px;
    }
  }

  @media (max-width: 425px) {
    #map {
      width: 300px;
      height: 450px;
    }
    #formDiv {
      width: 370px;
    }
  }

  @media (max-width: 375px) {
    #map {
      width: 270px;
      height: 450px;
    }
    #formDiv {
      width: 340px;
    }
  }

  @media (max-width: 345px) {
    #map {
      width: 250px;
      height: 450px;
    }
    #formDiv {
      width: 320px;
    }
  }
</style>
