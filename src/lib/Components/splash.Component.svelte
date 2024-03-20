<div class="w-full  flex flex-col gap-5 bg-white justify-center items-center animated-background">
  <div class="w-full h-auto flex justify-center items-center">
    <!-- svelte-ignore a11y-missing-attribute -->
    <img src="/images/kubakLogo.png" class="w-24 h-24 object-contain" data-aos="zoom-out" data-aos-duration="500"/>
  </div>
  <div class="flex items-center justify-center h-auto w-full flex-col gap-3">
    <!-- svelte-ignore a11y-missing-attribute -->
    <img src="/images/kubakText.png" class="w-24 h-auto object-contain" data-aos="fade-up" data-aos-duration="1000"/>
    <!-- svelte-ignore a11y-missing-attribute -->
    <img src="/images/kubakSubText.png" class="w-24 h-auto object-contain" data-aos="fade-up" data-aos-duration="1500"/>
  </div>
</div>



<style>

@keyframes moveBackground {
  0% {
    transform: scale(1) translate(-50%, -50%);
    opacity: 1;
  }

  25% {
    transform: scale(1.1) translate(-50%, -50%);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.1) translate(-50%, -50%);
    opacity: 0;
  }
  100% {
    transform: scale(1) translate(-50%, -50%);
    opacity: 0;
  }
}

.animated-background {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
}

.animated-background::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300vmin; /* Adjust size as needed */
  height: 300vmin; /* Adjust size as needed */
  background: rgba(255, 255, 255, 1); /* Adjust opacity as needed */
  border-radius: 50%;
  backdrop-filter: blur(30px);
  animation: moveBackground 1.5s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
}





</style>