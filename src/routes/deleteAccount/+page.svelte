<script lang="ts">
    import { PrivaciesDto } from "$lib/Models/DTO/Privacies.DTO.Model";
    // import { privaciesStore } from "$lib/Store/Privacies.Store";
    // import { page } from "$app/stores";
    // import { onMount } from "svelte";
    // import moment from "moment";
    // import { goto } from "$app/navigation";
    // let privacy: PrivaciesDto = new PrivaciesDto();
  
    // onMount(async () => {
    //   await privaciesStore.getAll({
    //     limit: 100,
    //     search: $page.params.name,
    //   });
    //   if ($privaciesStore.data.length == 0) {
    //     goto("/error");
    //   }
    //   privacy = $privaciesStore.data[0];
    // });
  </script>
  
  <div
    class="container mx-auto min-h-screen flex justify-center items-start px-4 py-8 md:py-16 lg:py-24 w-full"
    data-aos="fade-up"
    data-aos-duration="2000"
  >
    <div
      class="w-full max-w-4xl dark:bg-gradient-to-b shadow-inner shadow-[#f17d1868] from-[#2f2f2f] via-[#1c1c1c] to-[#2f2f2f] text-white rounded-3xl p-6 md:p-8 lg:p-12 flex flex-col gap-6"
    >
      <div class="w-full flex flex-col">
        <h1
          class="text-2xl md:text-3xl lg:text-4xl text-[#f17f18] mb-6"
          style="font-family:Bahij_Plain;"
        >
          How to Delete your Account
        </h1>
      </div>
      <div class="w-full flex flex-col space-y-4 text-base md:text-lg">
        <p class="text-justify leading-relaxed">
          At Kubak, we provide you with the option to delete your account using our mobile application.
        </p>
        
        <p class="font-medium mt-4">To delete your account using our mobile application, please follow these steps:</p>
        <ul class="list-inside space-y-2 ml-4">
          <li>• Open the Kubak mobile app on your device</li>
          <li>• Navigate to the 'Profile Picture' menu, typically found within your user profile section</li>
          <li>• Click on the 'Edit Profile Icon'</li>
          <li>• Click on the deleting account option in the bottom of the page</li>
          <li>• Follow the on-screen instructions to confirm and complete the deletion process</li>
          <li>• Click here to go directly to the Account Info screen</li>
        </ul>

        <p class="text-justify leading-relaxed mt-4">
          We may need to keep some of your information if we process it as part of our legal obligations or in pursuit of our own (or a third party's) legitimate interests, such as asserting or defending against legal claims, preventing fraud, or safeguarding ourselves or others from abusive behavior.
        </p>

        <p class="text-justify leading-relaxed">
          Please be aware that deleting your account will also delete your personal data. Your data will be permanently erased from our computers and unrecoverable once it has been deleted from the mobile app.
        </p>

        <p class="mt-4">
          Alternatively, you can request the removal of your account by sending an email to our customer support: 
          <span class="text-[#f17f18] hover:underline">info@kubakgroup.com</span>
        </p>
      </div>
    </div>
  </div>
  

  <style>
    * ,body{
        background-color: #212121;
    }
  </style>