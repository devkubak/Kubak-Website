<script lang="ts">
  import { aboutUsStore } from "$lib/Store/AboutUs.Store";
  import { onMount } from "svelte";

onMount(async () => {
  try {
    await aboutUsStore.getAll();
    
  } catch (e) {
    console.log(e);
  }
});
</script>

<div
  class="container mx-auto flex justify-center text-center items-center flex-col bg-white dark:bg-[#212121] dark:text-white rounded-br-3xl rounded-bl-3xl p-4 gap-5"
>
  <img src="/images/kubak2.png" alt="" class="w-96 pt-28" />
  <p class="pb-4 md:text-2xl">
    Kubak is a software development company that offers IT solutions to
    businesses all around the world. Kubak provides a variety of software
    development solutions, including e-business solutions, enterprise
    applications, professional websites, design, product engineering, CMS
    Software, Payment Gateway solutions, Time and Attendance Tracking Software,
    Debt Collection Software, Appointment Reminder Solutions, Medical
    Transcription Services, and more. We research, design, develop, enhance,
    customize, implement, support, and maintain many parts of information
    technology.We are a professionally acknowledged software development company
    with vast experience in producing custom software and application
    development to meet your specific demands and specifications.
  </p>
</div>

<div class="container mx-auto flex justify-center text-center items-center flex-col bg-white dark:bg-[#212121] dark:text-white rounded-br-3xl  rounded-bl-3xl p-4 gap-5">
    <img src="/images/kubak2.png" alt="" class="w-96 pt-28">
    <p class="pb-4 md:text-2xl">Kubak is a software development company that offers IT solutions to businesses all around the world. Kubak provides a variety of software development solutions, including e-business solutions, enterprise applications, professional websites, design, product engineering, CMS Software, Payment Gateway solutions, Time and Attendance Tracking Software, Debt Collection Software, Appointment Reminder Solutions, Medical Transcription Services, and more.
        We research, design, develop, enhance, customize, implement, support, and maintain many parts of information technology.We are a professionally acknowledged software development company with vast experience in producing custom software and application development to meet your specific demands and specifications.</p>
</div> 

{#if $aboutUsStore}
{#each $aboutUsStore.data as aboutUs}
<div class="w-full container mx-auto h-auto p-5  flex justify-center items-center flex-col mt-24 bg-white dark:bg-[#212121] dark:text-white gap-12 rounded-3xl">

    <div class="bg-[#f17f18] h-24 w-24 rounded-full flex justify-center items-center">
        <img src="{aboutUs.image?? ""}" alt="" class="w-16 h-16">
    </div>
        <div class="w-full h-auto flex flex-col justify-center items-center gap-3">
    
      
            <p class="text-[#f17f18] text-2xl font-bold">{aboutUs.title?? ""}</p>
            <p class="text-lg">{aboutUs.description}</p>
        </div>
        
    </div>
    {/each}
    
{/if}

<!-- <div
  class="w-full container mx-auto h-auto p-5 flex justify-center items-center flex-col mt-24 bg-white dark:bg-[#212121] dark:text-white gap-12 rounded-3xl"
>
  <div
    class="bg-[#f17f18] h-24 w-24 rounded-full flex justify-center items-center"
  >
    <img src="/images/mettingRoom.png" alt="" class="w-16 h-16" />
  </div>
  <div
    class="w-full h-auto flex flex-col justify-center items-center gap-3 text-start"
  >
    <p class="text-[#f17f18] text-2xl font-bold">CORE VALUES</p>
    <p class="text-lg">
      Integrity: We do what we say, this is what you should expect when dealing
      with Kubak, immediate impact with sustained success is what we deliver to
      our clients
    </p>
    <p class="text-lg">
      Teamwork: Kubak is teamwork driven. We share knowledge and help each other
      out every step of the way.
    </p>
    <p class="text-lg">
      Innovation: We never give up on the entrepreneurial spirit that helped us
      kick off this journey of Kubak, we are constantly on the watch for new
      ways to upscale our performance, and to step up on quality. We have our
      eyes and ears wide open to new innovative ideas, and we embrace innovation
      and adventure.
    </p>
    <p class="text-lg">
      Flexible: We are agile, flexible and lean. We are always ready to embrace
      change every day.
    </p>
  </div>
</div>

    <!-- <div class="w-full container mx-auto h-auto p-5  flex justify-center items-center flex-col mt-24 bg-white dark:bg-[#212121] dark:text-white gap-12 rounded-3xl">

        <div class="bg-[#f17f18] h-24 w-24 rounded-full flex justify-center items-center">
            <img src="/images/mettingRoom.png" alt="" class="w-16 h-16">
        </div>
            <div class="w-full h-auto flex flex-col justify-center items-center gap-3 text-start ">
    
        
          
                <p class="text-[#f17f18] text-2xl font-bold">CORE VALUES</p>
                <p class="text-lg">Integrity: We do what we say, this is what you should expect when dealing with Kubak, immediate impact with sustained success is what we deliver to our clients</p>
                <p class="text-lg">Teamwork: Kubak is teamwork driven. We share knowledge and help each other out every step of the way.</p>
                <p class="text-lg">Innovation: We never give up on the entrepreneurial spirit that helped us kick off this journey of Kubak, we are constantly on the watch for new ways to upscale our performance, and to step up on quality. We have our eyes and ears wide open to new innovative ideas, and we embrace innovation and adventure.</p>
                <p class="text-lg">Flexible: We are agile, flexible and lean. We are always ready to embrace change every day.</p>
            </div>
    
        </div>



        <div class="w-full container mx-auto h-auto p-5  flex justify-center items-center flex-col my-24 bg-white dark:bg-[#212121] dark:text-white gap-12 rounded-3xl">


                <div class="w-full h-auto flex flex-col justify-center items-center gap-3 text-start">
                    <p class="text-lg">At Kubak, we understand that technology is constantly evolving, and businesses need to keep up with the pace to stay competitive in the market. This is why we strive to offer the latest and most innovative solutions to our clients. Our team of experts works tirelessly to keep up with the latest trends and technologies, ensuring that our clients are always ahead of the curve.We take pride in our ability to deliver high-quality solutions to our clients, and we are committed to exceeding their expectations. Our solutions are tailored to meet the specific needs of our clients, and we work closely with them to ensure that we understand their requirements and deliver solutions that meet those needs.We believe that our success is tied to the success of our clients, and we are committed to helping them achieve their goals. We understand that every business is unique, and we take a personalized approach to every project we undertake. Our goal is to provide cost-effective solutions that help our clients achieve their business objectives.In addition to our software development services, we also offer consulting and support services. Our team of experts is always available to provide guidance and support to our clients, ensuring that they get the most out of our solutions.At Kubak, we are passionate about technology, and we are committed to using our expertise to help businesses thrive in the digital age. Whether you need custom software development, website design, or IT consulting services, we have the skills and expertise to deliver the solutions you need. Contact us today to learn more about how we can help your business grow.</p>
                  
                </div>
        
            </div> -->
