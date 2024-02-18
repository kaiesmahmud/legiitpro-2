<script>
    import Icon from '@iconify/svelte';
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
        <p class="text-center text-black/70 text-sm lg:text-base">A B2B marketing agency is an entity that specialises in crafting and implementing marketing strategies explicitly tailored for business-to-business interactions. These agencies cater to various industries, providing services from digital marketing to market research</p>
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
        <SplideSlide>
            <!-- -----Digital Marketing ------- -->
            <div class="lg:min-h-[60vh] w-full   rounded-lg shadow-lg
            bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500
            flex flex-col lg:flex-row p-5 gap-5">
                <div class="w-full md:w-1/2 flex flex-col gap-5 justify-center px-5 md:px-7 lg:px-10">
                    <h2 class="text-2xl md:text-3xl lg:text-6xl font-extrabold font_Poppins">Legiitpro <br> Digital Marketing Service</h2>
                    <p class="text-sm lg:text-base font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque veritatis amet et consectetur iure, quidem illum eius totam suscipit earum quo? Id quos quo ipsum.</p>
                    
                    <div class="flex ">
                        <a href="/" class="flex gap-3 items-center px-5 py-3 font-semibold bg-yellow-400 hover:bg-yellow-300 shadow rounded-full transition-all ease-in ">
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
                <div class="w-full md:w-1/2 flex items-center justify-center flex-col gap-5 text-sm text-center font-semibold font-Poppins uppercase">
                    <div class="w-full lg:w-2/3 flex items-center justify-center gap-5 mr-5 lg:mr-10 min-h-[100px]">
                        <a href="/" class={firstStyle}>
                            <p>Social Media Management</p>
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
                        <a href="/" class={firstStyle}>
                            <p>Digital Advertising</p>
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
                        
                    </div>
                    <div class="w-full lg:w-2/3 flex items-center justify-center gap-5 ml-5 lg:ml-10 min-h-[100px] text-sm ">
                        <a href="/" class={firstStyle}>
                            <p>Lead Management</p>
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
                    </div>
                </div>
            </div>
        </SplideSlide>
        <SplideSlide>
            <!-- -----website development ------- -->
            <div class="lg:min-h-[60vh] w-full   rounded-lg shadow-lg
            bg-gradient-to-r from-teal-100 via-teal-300 to-teal-500
            flex flex-col lg:flex-row p-5 gap-5">
                <div class="w-full md:w-1/2 flex flex-col gap-5 justify-center px-5 md:px-7 lg:px-10">
                    <h2 class="text-2xl md:text-3xl lg:text-6xl font-extrabold font_Poppins ">Legiitpro <br> Web Development Service</h2>
                    <p class="text-sm lg:text-base font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque veritatis amet et consectetur iure, quidem illum eius totam suscipit earum quo? Id quos quo ipsum.</p>
                    
                    <div class="flex ">
                        <a href="/" class="flex gap-3 items-center px-5 py-3 font-semibold bg-teal-400 hover:bg-teal-300 shadow rounded-full transition-all ease-in ">
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
                <div class="w-full md:w-1/2 flex items-center justify-center flex-col gap-5 text-sm text-center font-semibold font-Poppins uppercase">
                    <div class="w-full lg:w-2/3 flex items-center justify-center gap-5 mr-5 lg:mr-10 min-h-[100px]">
                        <a href="/"  class={firstStyle}>
                            <p>eCommerce Web Development</p>
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
                        <a href="/" class={firstStyle}>
                            <p>ISW Development</p>
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
                        
                    </div>
                    <div class="w-full lg:w-2/3 flex items-center justify-center gap-5 ml-5 lg:ml-10 min-h-[100px] text-sm ">
                        <a href="/" class={firstStyle}>
                            <p>Website CMS Integretion</p>
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
                    </div>
                </div>
            </div>
        </SplideSlide>
        <SplideSlide>
            <!-- -----SEO ------- -->
            <div class="lg:min-h-[60vh] w-full   rounded-lg shadow-lg
            bg-gradient-to-r from-indigo-100 via-indigo-300 to-indigo-500
            flex flex-col lg:flex-row p-5 gap-5">
                <div class="w-full md:w-1/2 flex flex-col gap-5 justify-center px-5 md:px-7 lg:px-10">
                    <h2 class="text-2xl md:text-3xl lg:text-6xl font-extrabold font_Poppins">Legiitpro <br> Search Engine Optimizing</h2>
                    <p class="text-sm lg:text-base font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque veritatis amet et consectetur iure, quidem illum eius totam suscipit earum quo? Id quos quo ipsum.</p>
                    
                    <div class="flex ">
                        <a href="/" class="flex gap-3 items-center px-5 py-3 font-semibold bg-indigo-400 hover:bg-indigo-300 shadow rounded-full transition-all ease-in ">
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
                <div class="w-full md:w-1/2 flex items-center justify-center flex-col gap-5 text-sm text-center font-semibold font-Poppins uppercase">
                    <div class="w-full lg:w-2/3 flex items-center justify-center gap-5 mr-5 lg:mr-10 min-h-[100px]">
                        <a href="/" class={firstStyle}>
                            <p>CMS SEO</p>
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
                        <a href="/" class={firstStyle}>
                            <p>ISW SEO</p>
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
                        
                    </div>
                    <div class="w-full lg:w-2/3 flex items-center justify-center gap-5 ml-5 lg:ml-10 min-h-[100px] text-sm ">
                        <a href="/" class={firstStyle}>
                            <p>ecommerce seo</p>
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
                        <a href="/" class={firstStyle}>
                            <p>Other seo</p>
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
                    </div>
                </div>
            </div>
        </SplideSlide>
    </Splide>
</div>
<div class="allservices-bg relative ">
    <div class=" backdrop-blur flex flex-col items-center justify-center min-h-[90vh] py-5">
        <div class="py-10 flex flex-col items-center justify-center">
            <h1 class=" uppercase logo_gradient text-4xl lg:text-6xl  text-center ">Our Services</h1>
            <h2 class="w-[90%] md:w-[80%] text-center">A B2B marketing agency is an entity that specialises in crafting and implementing marketing strategies explicitly tailored for business-to-business interactions. These agencies cater to various industries, providing services from digital marketing to market research</h2>
        </div>
        {#if categories?.length}
             <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 w-[90%] md:w-[80%] lg:w-[85%]">
                 {#each categories as {name, url, cat, icon}}
                     <div class="bg-slate-900 text-white rounded z-[100] py-10 shadow ">
                         <div class="flex items-start justify-center text-5xl p-5">
                             <div class="p-5 rounded-full bg-gradient-to-tr from-green-300 to-blue-600 text-center text-slate-900">
                                 <Icon icon={icon} />
                             </div>
                         </div>
                         <a href={url}>
                             <h2 class=" uppercase logo_gradient text-xl  lg:text-2xl text-center px-5 ">{name}</h2>
                         </a>
                         <div class="p-5 flex flex-col gap-2 items-center text-center">
                             {#if cat}
                                 {#each cat as {catName,catURL}}
                                 <a href={catURL} class="text-lg capitalize font-light  p-3 hover:text-cyan-400 flex items-center justify-between w-full border-b border-black/50 hover:border-cyan-300 transition-all ease-in">
                                     <p>{catName}</p>
                                     <div>
                                         <Icon icon="quill:link-out" />
                                     </div>
                                 </a>
                                 {/each}
                             {/if}
                         </div>
                     </div>
                 {/each}
             </div>
        {/if}
    </div>
    <div class='md:hidden absolute gradient-01 opacity-50 left-1 z-[-50]' />
    <div class='md:hidden absolute gradient-02 opacity-50 bottom-4 left-1 z-[-50]' />
</div>