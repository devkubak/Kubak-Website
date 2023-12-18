<script>
    import { Tabs, TabItem } from 'flowbite-svelte';
  </script>

  <div class="container mx-auto w-full md:w-1/2  flex flex-col   md:flex-row justify-center items-center h-auto bg-[#e3e3e3] dark:bg-[#212121] rounded-3xl p-5">

      <Tabs style="pill" class="flex" defaultClass="flex flex-row md:flex-col gap-3 mb-4 md:mb-0 flex-wrap justify-center" contentClass=" w-full h-[410px] bg-white dark:bg-[#363636] rounded-2xl flex items-center justify-center">

        <TabItem open activeClasses="bg-white dark:bg-[#363636] w-full rounded-lg md:rounded-l-xl py-5 w-full px-4 text-[#f17f18] font-bold duration-300 ease-in-out" inactiveClasses="hover:bg-[#f1f1f1] dark:hover:bg-[#404040] w-full rounded-lg md:rounded-l-xl py-5 w-full px-4 text-black dark:text-white font-bold duration-300 ease-in-out">
          <span slot="title" class="text-sm">App Development</span>
          <div class="flex flex-wrap w-full h-auto justify-center items-center p-4 gap-3">

            <div class="border-2 border-solid border-[#f17f18] w-14 sm:w-20 2xl:w-28  h-14 sm:h-20 2xl:h-28  flex rounded-full justify-center items-center flex-col p-4 gap-2">
                <img src="/images/swift.png" class="w-4 sm:w-10" alt="">
                <p class="text-[8px] text-center  dark:text-white">Swift</p>
            </div>

            <div class="border-2 border-solid border-[#f17f18] w-14 sm:w-20 2xl:w-28 h-14 sm:h-20 flex 2xl:h-28 rounded-full justify-center items-center flex-col p-4 gap-2">
                <img src="/images/flutter.png" class="w-8" alt="">
                <p class="text-[8px] text-center dark:text-white">Flutter</p>
            </div>

            <div class="border-2 border-solid border-[#f17f18] w-14 sm:w-20 2xl:w-28 h-14 sm:h-20 flex 2xl:h-28 rounded-full justify-center items-center flex-col p-4 gap-2">
                <img src="/images/ionic.png" class="w-4 sm:w-10" alt="">
                <p class="text-[8px] text-center dark:text-white">Ionic</p>
            </div>

            <div class="border-2 border-solid border-[#f17f18] w-14 sm:w-20 2xl:w-28 h-14 sm:h-20 flex 2xl:h-28 rounded-full justify-center items-center flex-col p-4 gap-2">
                <img src="/images/java.png" class="w-4 sm:w-10" alt="">
                <p class="text-[8px] text-center dark:text-white">Java</p>
            </div>

            <div class="border-2 border-solid border-[#f17f18] w-14 sm:w-20 2xl:w-28 h-14 sm:h-20 flex 2xl:h-28 rounded-full justify-center items-center flex-col p-4 gap-2">
                <img src="/images/kotlin.png" class="w-4 sm:w-10" alt="">
                <p class="text-[8px] text-center dark:text-white">Kotlin</p>
            </div>

            <div class="border-2 border-solid border-[#f17f18] w-14 sm:w-20 2xl:w-28 h-14 sm:h-20 flex 2xl:h-28 rounded-full justify-center items-center flex-col p-4 gap-2">
                <img src="/images/xamarin.png" class="w-4 sm:w-10" alt="">
                <p class="text-[8px] text-center dark:text-white">Xamarin</p>
            </div>

            <div class="border-2 border-solid border-[#f17f18] w-14 sm:w-20 2xl:w-28 h-14 sm:h-20 flex 2xl:h-28 rounded-full justify-center items-center flex-col p-4 gap-2">
                <img src="/images/native.png" class="w-4 sm:w-10" alt="">
                <p class="text-[8px] text-center dark:text-white">React Native</p>
            </div>

          </div>
        </TabItem>






        <TabItem open activeClasses="bg-white w-full dark:bg-[#363636]  rounded-lg md:rounded-l-xl py-5 w-full px-4 text-[#f17f18] font-bold duration-300 ease-in-out" inactiveClasses="hover:bg-[#f1f1f1] dark:hover:bg-[#404040] w-full rounded-lg md:rounded-l-xl py-5 w-full px-4 text-black dark:text-white font-bold duration-300 ease-in-out">
            <span slot="title" class="text-sm">Front-End</span>
            <div class="flex flex-wrap w-full h-auto justify-center items-center p-4 gap-3">
  
              <div class="border-2 border-solid border-[#f17f18] w-14 sm:w-20 2xl:w-28 h-14 sm:h-20 flex 2xl:h-28 rounded-full justify-center items-center flex-col p-4 gap-2">
                  <img src="/images/js.png" class="w-4 sm:w-10" alt="">
                  <p class="text-[8px] text-center dark:text-white">JavaScript</p>
              </div>
  
              <div class="border-2 border-solid border-[#f17f18] w-14 sm:w-20 2xl:w-28 h-14 sm:h-20 flex 2xl:h-28 rounded-full justify-center items-center flex-col p-4 gap-2">
                  <img src="/images/typescript.png" class="w-8" alt="">
                  <p class="text-[8px] text-center dark:text-white">Typescript</p>
              </div>
  
              <div class="border-2 border-solid border-[#f17f18] w-14 sm:w-20 2xl:w-28 h-14 sm:h-20 flex 2xl:h-28 rounded-full justify-center items-center flex-col p-4 gap-2">
                  <img src="/images/vue.png" class="w-4 sm:w-10" alt="">
                  <p class="text-[8px] text-center dark:text-white">Vue JS</p>
              </div>
  
  
              <div class="border-2 border-solid border-[#f17f18] w-14 sm:w-20 2xl:w-28 h-14 sm:h-20 flex 2xl:h-28 rounded-full justify-center items-center flex-col p-4 gap-2">
                  <img src="/images/react.png" class="w-4 sm:w-10" alt="">
                  <p class="text-[8px] text-center dark:text-white">React JS</p>
              </div>
  
              <div class="border-2 border-solid border-[#f17f18] w-14 sm:w-20 2xl:w-28 h-14 sm:h-20 flex 2xl:h-28 rounded-full justify-center items-center flex-col p-4 gap-2">
                  <img src="/images/angular.png" class="w-4 sm:w-10" alt="">
                  <p class="text-[8px] text-center dark:text-white">Angular JS</p>
              </div>
  
              <div class="border-2 border-solid border-[#f17f18] w-14 sm:w-20 2xl:w-28 h-14 sm:h-20 flex 2xl:h-28 rounded-full justify-center items-center flex-col p-4 gap-2">
                  <img src="/images/svelte.png" class="w-4 sm:w-10" alt="">
                  <p class="text-[8px] text-center dark:text-white">Svelte</p>
              </div>
  
            </div>
          </TabItem>


          <TabItem open activeClasses="bg-white dark:bg-[#363636]  w-full rounded-lg md:rounded-l-xl py-5 w-full px-4 text-[#f17f18] font-bold duration-300 ease-in-out" inactiveClasses="hover:bg-[#f1f1f1] dark:hover:bg-[#404040] w-full rounded-lg md:rounded-l-xl py-5 w-full px-4 text-black dark:text-white font-bold duration-300 ease-in-out">
            <span slot="title" class="text-sm">Back-End</span>
            <div class="flex flex-wrap w-full h-auto justify-center items-center p-4 gap-3">
  
              <div class="border-2 border-solid border-[#f17f18] w-14 sm:w-20 2xl:w-28 h-14 sm:h-20 flex 2xl:h-28 rounded-full justify-center items-center flex-col p-4 gap-2">
                  <img src="/images/asp.webp" class="w-4 sm:w-10" alt="">
                  <p class="text-[8px] text-center dark:text-white">ASP.Net Core</p>
              </div>
  
              <div class=" border-2 border-solid border-[#f17f18] w-14 sm:w-20 2xl:w-28 h-14 sm:h-20 flex 2xl:h-28 rounded-full justify-center items-center flex-col p-4 gap-2">
                  <img src="/images/next.png" class="w-8" alt="">
                  <p class="text-[8px] text-center dark:text-white">Next JS</p>
              </div>
  
              <div class="border-2 border-solid border-[#f17f18] w-14 sm:w-20 2xl:w-28 h-14 sm:h-20 flex 2xl:h-28 rounded-full justify-center items-center flex-col p-4 gap-2">
                  <img src="/images/Expressjs.png" class="w-4 sm:w-10" alt="">
                  <p class="text-[8px] text-center dark:text-white">Express JS</p>
              </div>
  
  
            
  
              <div class="border-2 border-solid border-[#f17f18] w-14 sm:w-20 2xl:w-28 h-14 sm:h-20 flex 2xl:h-28 rounded-full justify-center items-center flex-col p-4 gap-2">
                  <img src="/images/symfony.png" class="w-4 sm:w-10" alt="">
                  <p class="text-[8px] text-center dark:text-white">Symfony</p>
              </div>
  
              <div class="border-2 border-solid border-[#f17f18] w-14 sm:w-20 2xl:w-28 h-14 sm:h-20 flex 2xl:h-28 rounded-full justify-center items-center flex-col p-4 gap-2">
                  <img src="/images/flask.png" class="w-4 sm:w-10" alt="">
                  <p class="text-[8px] text-center dark:text-white">Flask</p>
              </div>
  
            </div>
          </TabItem>



          <TabItem open activeClasses="bg-white dark:bg-[#363636]  w-full rounded-lg md:rounded-l-xl py-5 w-full px-4 text-[#f17f18] font-bold duration-300 ease-in-out" inactiveClasses="hover:bg-[#f1f1f1] dark:hover:bg-[#404040] w-full rounded-lg md:rounded-l-xl py-5 w-full px-4 text-black font-bold dark:text-white duration-300 ease-in-out">
            <span slot="title" class="text-sm">Database</span>
            <div class="flex flex-wrap w-full h-auto justify-center items-center p-4 gap-3">
  
              <div class="border-2 border-solid border-[#f17f18] w-14 sm:w-20 2xl:w-28 h-14 sm:h-20 flex 2xl:h-28 rounded-full justify-center items-center flex-col p-4 gap-2">
                  <img src="/images/mysql.png" class="w-4 sm:w-10" alt="">
                  <p class="text-[8px] text-center dark:text-white">MySQL</p>
              </div>
  
              <div class="border-2 border-solid border-[#f17f18] w-14 sm:w-20 2xl:w-28 h-14 sm:h-20 flex 2xl:h-28 rounded-full justify-center items-center flex-col p-4 gap-2">
                  <img src="/images/postgresql.png" class="w-8" alt="">
                  <p class="text-[8px] text-center dark:text-white">PostrgreSQL</p>
              </div>
  
              <div class="border-2 border-solid border-[#f17f18] w-14 sm:w-20 2xl:w-28 h-14 sm:h-20 flex 2xl:h-28 rounded-full justify-center items-center flex-col p-4 gap-2">
                  <img src="/images/mongodb.png" class="w-4 sm:w-10" alt="">
                  <p class="text-[8px] text-center dark:text-white">MongoDB</p>
              </div>
  
  
              <div class="border-2 border-solid border-[#f17f18] w-14 sm:w-20 2xl:w-28 h-14 sm:h-20 flex 2xl:h-28 rounded-full justify-center items-center flex-col p-4 gap-2">
                  <img src="/images/redis.png" class="w-4 sm:w-10" alt="">
                  <p class="text-[8px] text-center dark:text-white">Redis</p>
              </div>

  
            </div>
          </TabItem>





          <TabItem open activeClasses="bg-white dark:bg-[#363636]  w-full rounded-lg md:rounded-l-xl py-5 w-full px-4 text-[#f17f18] font-bold duration-300 ease-in-out" inactiveClasses="hover:bg-[#f1f1f1] dark:hover:bg-[#404040] w-full rounded-lg md:rounded-l-xl py-5 w-full px-4 text-black dark:text-white font-bold duration-300 ease-in-out">
            <span slot="title" class="text-sm">Cloud and DevOps</span>
            <div class="flex flex-wrap w-full h-auto justify-center items-center p-4 gap-3">
  
              <div class="border-2 border-solid border-[#f17f18] w-14 sm:w-20 2xl:w-28 h-14 sm:h-20 flex 2xl:h-28 rounded-full justify-center items-center flex-col p-4 gap-2">
                  <img src="/images/google.png" class="w-4 sm:w-10" alt="">
                  <p class="text-[8px] text-center dark:text-white">Google Cloud</p>
              </div>
  
              <div class="border-2 border-solid border-[#f17f18] w-14 sm:w-20 2xl:w-28 h-14 sm:h-20 flex 2xl:h-28 rounded-full justify-center items-center flex-col p-4 gap-2">
                  <img src="/images/azure.png" class="w-8" alt="">
                  <p class="text-[8px] text-center dark:text-white">Microsoft Azure</p>
              </div>
  
              <div class="border-2 border-solid border-[#f17f18] w-14 sm:w-20 2xl:w-28 h-14 sm:h-20 flex 2xl:h-28 rounded-full justify-center items-center flex-col p-4 gap-2">
                  <img src="/images/docker.png" class="w-4 sm:w-10" alt="">
                  <p class="text-[8px] text-center dark:text-white">Docker</p>
              </div>
  
  
              <div class="border-2 border-solid border-[#f17f18] w-14 sm:w-20 2xl:w-28 h-14 sm:h-20 flex 2xl:h-28 rounded-full justify-center items-center flex-col p-4 gap-2">
                  <img src="/images/terraform.svg" class="w-4 sm:w-10" alt="">
                  <p class="text-[8px] text-center dark:text-white">Terraform</p>
              </div>


              <div class="border-2 border-solid border-[#f17f18] w-14 sm:w-20 2xl:w-28 h-14 sm:h-20 flex 2xl:h-28 rounded-full justify-center items-center flex-col p-4 gap-2">
                  <img src="/images/kubernetes.png" class="w-4 sm:w-10" alt="">
                  <p class="text-[8px] text-center dark:text-white">Kubernetes</p>
              </div>


              <div class="border-2 border-solid border-[#f17f18] w-14 sm:w-20 2xl:w-28 h-14 sm:h-20 flex 2xl:h-28 rounded-full justify-center items-center flex-col p-4 gap-2">
                  <img src="/images/aws.png" class="w-4 sm:w-10" alt="">
                  <p class="text-[8px] text-center dark:text-white">Amazon AWS</p>
              </div>


              <div class="border-2 border-solid border-[#f17f18] w-14 sm:w-20 2xl:w-28 h-14 sm:h-20 flex 2xl:h-28 rounded-full justify-center items-center flex-col p-4 gap-2">
                  <img src="/images/ocean.png" class="w-4 sm:w-10" alt="">
                  <p class="text-[8px] text-center dark:text-white">Digital Ocean</p>
              </div>

  
            </div>
          </TabItem>

       
       
      </Tabs>
  </div>