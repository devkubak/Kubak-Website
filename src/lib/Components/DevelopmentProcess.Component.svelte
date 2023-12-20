<script>
    import { Tabs, TabItem } from 'flowbite-svelte';
  </script>

  <div class="container mx-auto w-full md:w-1/2  flex flex-col   md:flex-row justify-center items-center h-auto bg-[#e3e3e3] dark:bg-[#212121] rounded-3xl p-5">

      <Tabs style="pill" class="flex" defaultClass="flex flex-row md:flex-col gap-3 flex-wrap justify-center mb-4 md:mb-0" contentClass=" w-full h-auto min-h-[610px] bg-white dark:bg-[#363636] rounded-2xl flex items-start justify-center">

        <TabItem open activeClasses="bg-white dark:bg-[#363636] w-full rounded-lg md:rounded-l-xl py-5 w-full px-4 text-[#f17f18] font-bold duration-300 ease-in-out" inactiveClasses="hover:bg-[#f1f1f1] dark:hover:bg-[#404040] w-full rounded-lg md:rounded-l-xl py-5 w-full px-4 text-black dark:text-white font-bold duration-300 ease-in-out">
          <span slot="title" class="text-sm">Discover</span>
          <div class="flex flex-col w-full h-1/2 justify-center items-center p-4 gap-3">
            <img src="/images/discover.gif" class="rounded-2xl h-[350px] object-cover w-full" alt="">
            <p class="dark:text-white text-sm md:text-lg h-1/2 w-full">Before starting the planning phase for any process, our project management team will understand the core of the project and perform an in-depth analysis. The project should be clear about the business objectives and goals of the project. well-planned strategy, sharp design, and clean user interface.</p>

          </div>
        </TabItem>






        <TabItem open activeClasses="bg-white dark:bg-[#363636] w-full rounded-lg md:rounded-l-xl py-5 w-full px-4 text-[#f17f18] font-bold duration-300 ease-in-out" inactiveClasses="hover:bg-[#f1f1f1] dark:hover:bg-[#404040] w-full rounded-lg md:rounded-l-xl py-5 w-full px-4 text-black dark:text-white font-bold duration-300 ease-in-out">
            <span slot="title" class="text-sm">Design</span>
            <div class="flex flex-col w-full h-full justify-center items-center p-4 gap-3">
              <img src="/images/design.gif" class="rounded-2xl h-[350px] object-cover w-full" alt="">
              <p class="dark:text-white text-sm md:text-lg">It’s now easier than ever to create gorgeous designs. It is now time to decide on the visual aesthetics of your project! Our UI team will create the design for your solutions based on the wireframe and the brand guidelines, and after going through iterations and modifications, we will finalize the flow of the app and achieve the best user experience possible.</p>
  
            </div>
          </TabItem>


          <TabItem open activeClasses="bg-white dark:bg-[#363636] w-full rounded-lg md:rounded-l-xl py-5 w-full px-4 text-[#f17f18] font-bold duration-300 ease-in-out" inactiveClasses="hover:bg-[#f1f1f1] dark:hover:bg-[#404040] w-full rounded-lg md:rounded-l-xl py-5 w-full px-4 text-black dark:text-white font-bold duration-300 ease-in-out">
            <span slot="title" class="text-sm">Develop</span>
            <div class="flex flex-col w-full h-full justify-center items-center p-4 gap-3">
              <img src="/images/develop.gif" class="rounded-2xl h-[350px] object-cover w-full" alt="">
              <p class="dark:text-white text-sm md:text-lg">Get it built. Get it tested. Get it launched. The development phase involves developing code and integrating it with third-party applications. We build your project to match the beautiful designs we have produced.</p>
  
            </div>
          </TabItem>



          <TabItem open activeClasses="bg-white dark:bg-[#363636] w-full rounded-lg md:rounded-l-xl py-5 w-full px-4 text-[#f17f18] font-bold duration-300 ease-in-out" inactiveClasses="hover:bg-[#f1f1f1] dark:hover:bg-[#404040] w-full rounded-lg md:rounded-l-xl py-5 w-full px-4 text-black dark:text-white font-bold duration-300 ease-in-out">
            <span slot="title" class="text-sm">Testing</span>
            <div class="flex flex-col w-full h-full justify-center items-center p-4 gap-3">
              <img src="/images/testing.gif" class="rounded-2xl h-[350px] object-cover w-full" alt="">
              <p class="dark:text-white text-sm md:text-lg">Upon testing and UAT (User Acceptance Test), we plan the deployment of the site. Once the site/application is deployed, we do thorough testing on the production stage. This stage being the last in the process of the development, we do check and test the sections of each page manually.</p>
  
            </div>
          </TabItem>





          <TabItem open activeClasses="bg-white dark:bg-[#363636] w-full rounded-lg md:rounded-l-xl py-5 w-full px-4 text-[#f17f18] font-bold duration-300 ease-in-out" inactiveClasses="hover:bg-[#f1f1f1] dark:hover:bg-[#404040] w-full rounded-lg md:rounded-l-xl py-5 w-full px-4 text-black dark:text-white font-bold duration-300 ease-in-out">
            <span slot="title" class="text-sm">Drive</span>
            <div class="flex flex-col w-full h-full justify-center items-center p-4 gap-3">
              <img src="/images/drive.gif" class="rounded-2xl h-[350px] object-cover w-[1100px]" alt="">
              <p class="dark:text-white text-sm md:text-lg">We deliver your solution to the user and, if needed, we maintain and develop your solutions towards the future.
            </p>
  
            </div>
          </TabItem>


          <TabItem open activeClasses="bg-white dark:bg-[#363636] w-full rounded-lg md:rounded-l-xl py-5 w-full px-4 text-[#f17f18] font-bold duration-300 ease-in-out" inactiveClasses="hover:bg-[#f1f1f1] dark:hover:bg-[#404040] w-full rounded-lg md:rounded-l-xl py-5 w-full px-4 text-black dark:text-white font-bold duration-300 ease-in-out">
            <span slot="title" class="text-sm">Document</span>
            <div class="flex flex-col w-full h-full justify-center items-center p-4 gap-3">
              <img src="/images/document.gif" class="rounded-2xl h-[350px] object-cover w-full" alt="">
              <p class="dark:text-white text-sm md:text-lg">We create a clear backlog to document the short and long term goals. We define the needs, translate them into requirements and design your solution.</p>
  
            </div>
          </TabItem>


          <TabItem open activeClasses="bg-white dark:bg-[#363636] w-full rounded-lg md:rounded-l-xl py-5 w-full px-4 text-[#f17f18] font-bold duration-300 ease-in-out" inactiveClasses="hover:bg-[#f1f1f1] dark:hover:bg-[#404040] w-full rounded-lg md:rounded-l-xl py-5 w-full px-4 text-black dark:text-white font-bold duration-300 ease-in-out">
            <span slot="title" class="text-sm">Deploy</span>
            <div class="flex flex-col w-full h-full justify-center items-center p-4 gap-3">
              <img src="/images/deploy.gif" class="rounded-2xl h-[350px] object-cover w-[1100px]" alt="">
              <p class="dark:text-white text-sm md:text-lg w-full">We will deploy your solution(s) following automated development pipelines and CI/CD based on your demands.
                
              </p>
  
            </div>
          </TabItem>


        

       
       
      </Tabs>
  </div>