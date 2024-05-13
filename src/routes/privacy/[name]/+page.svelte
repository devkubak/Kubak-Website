<script lang="ts">
  import { onMount } from "svelte";

    onMount(async () => {
        try {
            await aboutUsStore.getAll();
        } catch (e) {
            console.log(e);
        }finally{
            loading = false;
        }
    });
</script>

<div class="container mx-auto flex justify-center items-center  md:flex-row flex-col-reverse  flex-wrap md:flex-nowrap px-4  pt-32" data-aos="fade-up" data-aos-duration="2000">
    <div class="w-full h-auto dark:bg-gradient-to-b shadow-inner shadow-[#f17d1868] dark:from-[#2f2f2f] dark:via-[#1c1c1c] dark:o-[#2f2f2f]   bg-gradient-to-b from-[#f6f6f6] via-[#dddddd] to-[#f6f6f6] dark:text-white rounded-3xl p-12 flex flex-col gap-4">

        <div class="w-full flex flex-col font-bold">
            <p class="text-xl">
                last update 17 June 2023
            </p>
        
            <p class="text-lg md:text-4xl text-[#f17f18] " style="font-family:Bahij_Plain;">
                The Following Privacy
            </p>
        </div>

        <div class="w-full flex flex-col gap-24">
            <p class="text-justify">
                Policy describes how we, Kubak ( “we, “us” or “our”) collect, store, use, process, retain, transfer, disclose and protect your Personal Information. This Privacy Policy applies to all users of our applications, websites (www.kubakgroup.com), services, or products (“Applications”), unless covered by a separate privacy policy.
    Please read this Privacy Policy thoroughly to ensure that you understand our data processing practices. Unless otherwise defined, all capitalized terms used in this Privacy Policy shall have the same meaning ascribed to them in the Terms of Use.
            </p>

<div class="w-full flex flex-col">
    <p class="font-bold">This Privacy Policy includes the following matters:</p>
    <p>– Personal Information which we collect <br>
        – The use of Personal Information which we collect<br>
        – Sharing of Personal Information which we collect<br>
        – Retention of Personal Information Access and correction of Personal Information<br>
        – Where we store your Personal Information<br>
        – Security of your Personal Information<br>
        – Changes to this Privacy Policy<br>
        – Acknowledgment and consent<br>
        – Marketing and promotional material<br>
        – Anonymous Data<br>
        – Third party platforms<br>
        – How to contact us</p>
</div>
        </div>
    </div>



</div>


