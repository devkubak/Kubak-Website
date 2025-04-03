<script lang="ts">
    import { PrivaciesDto } from "$lib/Models/DTO/Privacies.DTO.Model";
    // import { privaciesStore } from "$lib/Store/Privacies.Store";
    // import { page } from "$app/stores";
    // import { onMount } from "svelte";
    import moment from "moment";
    // import { goto } from "$app/navigation";
    let privacy: PrivaciesDto = new PrivaciesDto();
  
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
    class="container mx-auto h-screen flex justify-center items-start md:flex-row flex-col-reverse flex-wrap md:flex-nowrap px-4 p-32 w-full bg-[#212121] dark:bg-[#212121]"
    data-aos="fade-up"
    data-aos-duration="2000"
  >
    <div
      class="w-full h-auto dark:bg-gradient-to-b shadow-inner shadow-[#f17d1868] from-[#2f2f2f] via-[#1c1c1c] to-[#2f2f2f] text-white rounded-3xl p-12 flex flex-col gap-4"
    >
      <div class="w-full flex flex-col font-bold">
        <!-- <p class="text-xl">
          last update {privacy.lastUpdatedAt
            ? moment(privacy.lastUpdatedAt).format("DD/MM/YYYY")
            : ""}
        </p> -->
  
        <p
          class="text-lg md:text-4xl text-[#f17f18]"
          style="font-family:Bahij_Plain;"
        >
        How to Delete your Account
        </p>
      </div>
        <div class="w-full flex flex-col">
          <!-- <p class="text-justify">
            How to Delete your Account
          </p>
   -->
          At Kubak, we provide you with the option to delete your account using our mobile application. Please note that if you have any pending transactions or outstanding amounts due, you will not be able to delete your account. Please complete all pending transactions and/or payments to delete your account. To delete your your account using our mobile application, please follow these steps: <br>
- Open the Kubak mobile app on your device. <br>
- Navigate to the 'Profile Picture' menu, typically found within your user profile section. <br>
- Click on the 'Edit Profile Icon' <br>
- Click on the deleting account option in the bottom of the page <br>
- Follow the on-screen instructions to confirm and complete the deletion process. <br>
- Click here to go directly to the Account Info screen. <br>
We may need to keep some of your information if we process it as part of our legal obligations or in pursuit of our own (or a third party's) legitimate interests, such as asserting or defending against legal claims, preventing fraud, or safeguarding ourselves or others from abusive behavior. Please be aware that deleting your account will also delete your personal data. Your data will be permanently erased from our computers and unrecoverable once it has been deleted from the mobile app.
Alternatively, you can request the removal of your account by sending an email to our customer support: <span class="text-[#f17f18]">info@kubakgroup.com</span>







        </div>
    </div>
  </div>
  