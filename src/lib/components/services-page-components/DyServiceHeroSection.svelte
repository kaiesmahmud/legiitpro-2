<script> 
    export let categories

    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    // Default theme
    import '@splidejs/svelte-splide/css';
    
    let firstStyle = "  bg-white/20 hover:bg-white/30 transition-all ease-in rounded-xl shadow-xl flex items-center justify-center  px-3 py-2"
   
</script>
<div class="flex items-center justify-center p-5 ">
    <div class="min-h-[5vh] flex items-center justify-center flex-col p-5 lg:p-10 gap-5 shadow-lg rounded-lg w-full lg:w-[80%] 
    bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
        <h1 class="text-3xl md:text-4xl lg:text-6xl font-extrabold text-black/90 font_Poppins">Legiitpro Services</h1>
        <p class="text-center text-black/70 text-sm lg:text-base md:w-[80%]">A B2B marketing agency is an entity that specialises in crafting and implementing marketing strategies explicitly tailored for business-to-business interactions. These agencies cater to various industries, providing services from digital marketing to market research</p>
    </div>
</div>
<div class="flex flex-col items-center justify-center gap-5 p-5">
    <Splide options={ 
        {   
            type:'fade',
            rewind: true,
            gap   : '1rem', 
            autoplay:true,  
            pagination:false,  
            arrows:false,
            pauseOnHover:false,

      } 
    }
       aria-label="Brands We worked together"
       class="w-full lg:w-[80%]  "
       >
       {#each categories as {name,url,css,cat,desc,urlCss}}
         <SplideSlide> 
             <div class={`lg:min-h-[60vh] w-full   rounded-lg shadow-lg
             ${css}
             flex flex-col lg:flex-row p-5 py-10 gap-5`}>
                 <div class="w-full md:w-1/2 flex flex-col gap-5 justify-center px-5 md:px-7 lg:px-10">
                     <h2 class="text-2xl md:text-3xl lg:text-6xl font-extrabold font_Poppins">Legiitpro <br> {@html name}</h2>
                     <p class="text-sm lg:text-base font-light">{@html desc}</p>
                     
                     <div class="flex justify-center md:justify-start">
                         <a href={url} class={`flex gap-3 items-center px-5 py-3 font-semibold  shadow rounded-full transition-all ease-in ${urlCss} `}>
                             Visit Page 
                             <span>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...$$props}>
                                     <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 3.007c-2.946.032-4.59.219-5.682 1.311C3 5.636 3 7.758 3 12c0 4.243 0 6.364 1.318 7.682C5.636 21 7.758 21 12 21c4.243 0 6.364 0 7.682-1.318c1.061-1.061 1.268-2.643 1.308-5.434M21 3h-6.75M21 3v6.75M21 3l-8.25 8.25" />
                                 </svg>
                             </span>
                         </a>
                     </div>
                 </div>
                 <!-- ---------- Category Page Links --------- -->
                 <div class="w-full md:w-1/2 flex justify-center flex-col md:gap-5 text-sm text-center font-semibold font-Poppins uppercase">
                     <div class="w-full lg:w-2/3 flex flex-col   items-center justify-center gap-5 mr-5 lg:mr-10 min-h-[100px]">
                         {#each cat as {catName , catURL ,catDesc},index} 
                              <a href={catURL} class={firstStyle  + `${index%2 == 0 ? " md:ml-16 ": " "} `}>
                                  <p>{catName}</p> 
                                  <span class="text-3xl">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...$$props}>
                                          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                              <path stroke-dasharray="36" stroke-dashoffset="36" d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12">
                                                  <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="36;0" />
                                              </path>
                                              <path stroke-dasharray="12" stroke-dashoffset="12" d="M13 11L20 4">
                                                  <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.3s" values="12;0" />
                                              </path>
                                              <path stroke-dasharray="8" stroke-dashoffset="8" d="M21 3H15M21 3V9">
                                                  <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="8;0" />
                                              </path>
                                          </g>
                                      </svg>
                                  </span>
                              </a>
                         {/each}
                          
                     </div>
                 </div>
             </div>
         </SplideSlide>
       {/each}
         
    </Splide>
</div>
 