<script lang="ts">
  import { onMount } from 'svelte';
  import { developmentStore } from '$lib/Store/Development.Store';
  import { _, locale } from 'svelte-i18n';

  let selectedCard = 0;

  onMount(async () => {
    try {
      await developmentStore.getAll();
      selectedCard = $developmentStore.total % 4;
    } catch (error) {
      console.error('Error fetching development data:', error);
    }
  });

  function handleCardClick(index: number) {
    if (selectedCard !== index) {
      selectedCard = index;
    }
  }

  export let selectedLanguage: string;

  function checkLanguage(lang: string, text: any): string {
    return text[lang] ?? text.en;
  }
</script>


<div
  class="w-full h-auto justify-center items-center container mx-auto"
  id="wrapper"
  data-aos="fade-up"
  data-aos-duration="2000"
  
>
  <div
    class="h-auto gap-3 md:gap-0 md:h-auto flex flex-nowrap flex-col md:flex-row justify-center items-center md:items-stretch"
    id="container"
    dir={$locale == "en" ? "ltr" : "rtl"}
  >
    {#each $developmentStore.data as development, index}
      <input
        type="radio"
        id={"c" + index}
        name="card-group"
        checked={index == $developmentStore.total % 4}
        on:change={() => handleCardClick(index)}
        
      />
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <label
     
        class="{selectedCard === index
          ? 'w-[80%] md:w-[80px] h-full'
          : 'w-[80%] md:w-[80px] h-16 md:h-[600px]'} overflow-hidden object-cover cursor-pointer rounded-[2rem] my-0 mx-2 flex items-end"
        for={"c" + index}
        id="card"
        style="background-image: url({development.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-filter: #212121;"
        class:grayscale-filter={selectedCard !== index}
        class:selected={selectedCard === index}
        on:click={() => handleCardClick(index)}
      >
      
        <div
          class={`${selectedCard === index
            ? 'bg-[#212121a9] h-auto w-full'
            : 'bg-[#212121a9] h-full w-full'} py-3 px-4 flex justify-center items-center backdrop-blur-lg ease-in-out duration`}
          id="row"
          style="width: 100%;"
        >
        <p class="absolute z-50 text-white text-center rounded-full font-bold text-lg w-full h-16 flex   justify-center items-center" id="title-text" style="font-family:Bahij;">{checkLanguage(selectedLanguage, development.title)}</p>
          <div
            class="content-container font-bold "
            id="description"
            class:selected={selectedCard === index}
          >
            <h4 class="text-[#f17f18] text-sm md:text-lg duration-300 ease-in-out " style="font-family: Bahij;">
              {checkLanguage(selectedLanguage, development.title)}
            </h4>
            <div class=" text-xs  pt-[5px] px-2 duration-300 ease-in-out ">
              {@html checkLanguage(selectedLanguage, development.description)}
          </div>
          </div>
        </div>
      </label>
    {/each}
  </div>
</div>

<style>
  #card {
    transition: 0.6s cubic-bezier(0.28, -0.03, 0, 0.99);
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.8);
  }

  #card > #row {
    color: white;
    display: flex;
    flex-wrap: nowrap;
  }

  #card > #row > #icon {
    color: white;
    border-radius: 50%;
    width: 50px;
    margin: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content-container {
    opacity: 0;
    transform: translateY(30px);
    transition-delay: 0.3s;
    transition: all 0.3s ease;
  }

  #title-text {
    opacity: 1;
    transition: all 5s ease-in-out;
    animation: rotateTitle 1s linear;
    -webkit-animation: rotateTitle 1s linear;
    -moz-animation: rotateTitle 1s linear;
    transform: rotate(-90deg)

  }

  input:checked + label #title-text {
    opacity: 100 !important;
    display: none !important;
    animation: opacityTitle .1s ;
    -webkit-animation: opacityTitle .1s ;
    -moz-animation: opacityTitle .1s ;
  }

  @keyframes rotateTitle {
    from { transform: rotate(0deg); }
    to { transform: rotate(-90deg); }
  }

  @keyframes opacityTitle {
    from { opacity:100 ; }
    to { opacity:100 ; }
   
   
  }
  input:checked + label .content-container {
    opacity: 1 !important;
    transform: translateY(0px) !important;
  }



  input:checked + label #description {
    opacity: 1 !important;
    transform: translateY(0px) !important;
  }

  #description > h4 {
    text-transform: uppercase;
    margin-top: 2px;
  }

  input {
    display: none;
  }

  label.selected {
    width: 600px;
  }
  .grayscale-filter {
    filter: opacity(70%);
  }

  input:checked + label#card {
    width: 80%;
    height: 600px;
    filter: opacity(100%);
  }

  @media (max-width: 768px) {
    label.selected {
      height: 400px;
      width: 80% !important;
    }

    #title-text{
    opacity: 1;
    transform: none;
    
    
  }

  input:checked + label #title-text{
    opacity: 100 !important;
    display: none !important;
    transform: none;
    animation: opacityTitle .1s ;
    -webkit-animation: opacityTitle .1s ;
    -moz-animation: opacityTitle .1s ;
  }


  @keyframes rotateTitle {
    from { scale: 2; }
    to { scale: 1; }
    
  }

  @keyframes opacityTitle {
    from { opacity:100 ; }
    to { opacity:100 ; }
  }

    input:checked + label#card {
    width: 80%;
    height: 350px;
    filter: opacity(100%);
  }
  }

</style>
