<script>
    import { page } from '$app/stores';
     ($page.status, $page.error?.message);
  </script>
  
  <div class=" h-screen w-full absolute  -z-10 opacity-15">
    <video class="w-full h-screen  object-cover" autoplay loop muted>
  <source src="/videos/back.mp4">
  </video>
</div>
  <div class="w-full h-screen flex justify-center items-center">
      
      <img src="/images/pageNotFound.gif" class="w-72 h-72 object-contain" alt="">
</div>

