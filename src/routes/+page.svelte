<script>
    import { Tabs, TabItem } from 'flowbite-svelte';
    import Carousel from '$lib/components/Carousel.svelte';
    import Technologies from '$lib/components/technologies.svelte';
    import DevelopmentProcess from '$lib/components/developmentProcess.svelte';



</script>

<Carousel />


<div class="container mx-auto text-center dark:text-white text-xs md:text-xl bg-white dark:bg-[#212121] rounded-2xl p-3">
  <p>Kubak is a software development company that offers IT solutions to businesses all around the world. Kubak provides a variety of software development solutions, including e-business solutions, enterprise applications, professional websites, design, product engineering, CMS Software, Payment Gateway solutions, Time and Attendance Tracking Software, Debt Collection Software, Appointment Reminder Solutions, Medical Transcription Services, and more.
  
    We research, design, develop, enhance, customize, implement, support, and maintain many parts of information technology.We are a professionally acknowledged software development company with vast experience in producing custom software and application development to meet your specific demands and specifications.</p>

</div>

<div class="w-full flex justify-center items-center text-center mt-12">
  <p class="text-black dark:text-white font-bold py-3 mt-3 md:text-4xl">DEVELOPMENT PROCESS</p>
</div>

<DevelopmentProcess />
<!-- <Tabs style="pill" defaultClass="flex justify-center gap-5 " contentClass="dark:bg-[#363636] py-5 my-4">
    <TabItem open activeClasses="bg-[#f17f18] h-5 w-5 rounded-full text-white flex justify-center items-center duration-300 ease-in-out" inactiveClasses="bg-[#f1f1f1] h-5 w-5 rounded-full text-white flex justify-center items-center duration-300 ease-in-out">
      <div  slot="title" class="w-3 h-3 rounded-full text-4xl text-center bg-white"></div>
   
        <div class="md:w-1/2 h-auto flex flex-col md:flex-row justify-center items-center gap-2 bg-[#f1f1f1] dark:bg-[#212121] dark:text-white text-center border-[1px] border-[#f17f18] mx-auto container ">
            <img src="/images/cover1.jpg" class="w-full md:w-1/2 h-96 object-cover bg-center duration-300 ease-in-out" alt="">
            <p class="w-full h-96 text-sm md:text-md duration-300 ease-in-out text-center flex items-center justify-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, maiores?</p>
        </div>
    </TabItem>

    
    <TabItem open activeClasses="bg-[#f17f18] h-5 w-5 rounded-full text-white flex justify-center items-center duration-300 ease-in-out" inactiveClasses="bg-[#f1f1f1] h-5 w-5 rounded-full text-white flex justify-center items-center duration-300 ease-in-out">
      <div  slot="title" class="w-3 h-3 rounded-full text-4xl text-center bg-white"></div>
   
        <div class="md:w-1/2 h-auto flex flex-col md:flex-row justify-center items-center gap-2 bg-[#f1f1f1] dark:bg-[#212121] dark:text-white text-center border-[1px] border-[#f17f18] mx-auto container ">
            <img src="/images/cover1.jpg" class="w-full md:w-1/2 h-96 object-cover bg-center duration-300 ease-in-out" alt="">
            <p class="w-full h-96 text-sm md:text-md duration-300 ease-in-out text-center flex items-center justify-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>
    </TabItem>


    <TabItem open activeClasses="bg-[#f17f18] h-5 w-5 rounded-full text-white flex justify-center items-center duration-300 ease-in-out" inactiveClasses="bg-[#f1f1f1] h-5 w-5 rounded-full text-white flex justify-center items-center duration-300 ease-in-out">
      <div  slot="title" class="w-3 h-3 rounded-full text-4xl text-center bg-white"></div>
   
        <div class="md:w-1/2 h-auto flex flex-col md:flex-row justify-center items-center gap-2 bg-[#f1f1f1] dark:bg-[#212121] dark:text-white text-center border-[1px] border-[#f17f18] mx-auto container ">
            <img src="/images/cover1.jpg" class="w-full md:w-1/2 h-96 object-cover bg-center duration-300 ease-in-out" alt="">
            <p class="w-full h-96 text-sm md:text-md duration-300 ease-in-out text-center flex items-center justify-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, maiores? adipisicing elit. Aspernatur, maiores?adipisicing elit. Aspernatur, maiores?</p>
        </div>
    </TabItem>

   
   
  </Tabs> -->




<div class="w-full h-12 flex justify-center items-center text-center mt-12 mb-3">
  <p class="text-black dark:text-white font-bold py-3 mt-3 md:text-4xl">TECHNOLOGIES WE USE</p>
</div>

<Technologies />




<div class="w-full h-12 flex justify-center items-center text-center mt-12 mb-3">
  <p class="text-black dark:text-white font-bold py-3 mt-3 md:text-4xl">OUR PROJECTS</p>
</div>

<div class="container mx-auto flex flex-wrap h-auto justify-center items-center mt-3 gap-2">
  
  <div class="w-80 h-96 bg-white dark:bg-[#212121] rounded-2xl flex flex-col justify-end items-center gap-3 border-2 border-[#f17f18]">
    <div class="w-full h-full p-3 relative flex justify-center">
      <div class="w-60 rounded-b-3xl absolute flex justify-center bg-[#f17f18] py-2 z-[3] text-white font-bold border-2 border-white">SulyExpo</div>
      <div class="absolute w-[293px] h-[268px] rounded-2xl bg-[#ffffff71] z-[2]">

      </div>
        <img src="/images/cover1.jpg" class="w-full h-full rounded-2xl object-cover" alt="">
    </div>
   
      <p class="font-bold h-20 text-xl dark:text-white mt-4">SulyExpo</p>
      




  </div>


  <div class="w-80 h-96 bg-white dark:bg-[#212121] rounded-2xl flex flex-col justify-end items-center gap-3 border-2 border-[#f17f18]">
    <div class="w-full h-full p-3 relative flex justify-center">
      <div class="w-60 rounded-b-3xl absolute flex justify-center bg-[#f17f18] py-2 z-[3] text-white font-bold border-2 border-white">Kurdbun</div>
      <div class="absolute w-[293px] h-[268px] rounded-2xl bg-[#ffffff71] z-[2]">

      </div>
        <img src="/images/cover1.jpg" class="w-full h-full rounded-2xl object-cover" alt="">
    </div>

      <p class="font-bold h-20 text-xl dark:text-white mt-4">Kurdbun</p>
      
    
    



  </div>
  

  
</div>


