<script>
    import Icon from '@iconify/svelte';
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    // Default theme
    import '@splidejs/svelte-splide/css';
    export let section  
    const {title,description,article} = section
</script>
<div class="homeContent-bg ">
    <section class="flex flex-col items-center justify-center  backdrop-blur-md text-black  min-h-[50vh] w-full">
        <div class="flex flex-col items-center justify-center py-10">
            <h2 class="p-3 mt-16 text-4xl lg:text-6xl text-center  font-extrabold mb-10 logo_gradient capitalize ">{@html title}</h2>
            <p class="text-white/90 px-5">{description}</p>
        </div>
        <div class="hidden lg:flex items-center  justify-center p-5">
            <Splide options={ { 
                type   : 'loop',
                perPage: 2,
                perMove: 1,
                gap   : '1rem', 
                autoplay:true,  
              } }
               aria-label="Brands We worked together"
               class="w-full md:w-1/2 cursor-grab md:p-20"
               >
                {#each article as {title,description}}
                     <SplideSlide class="w-1/2 rounded bg-slate-900/80 text-white">
                        <div class="flex flex-col gap-5 w-full p-5">
                            <div class="text-5xl text-teal-400">
                                <Icon icon="la:shapes" />
                            </div>
                            <h3 class="font-bold text-2xl  md:text-3xl py-3 capitalize">{ title}</h3>
                            <p class=" text-justify w-[80%] text-white/80 ">{description}</p>
            
                        </div>
                     </SplideSlide>
                {/each}
              </Splide>
        </div>
        <div class="flex lg:hidden items-center  justify-center p-5 w-screen">
            <Splide options={ { 
                type   : 'loop',
                perPage: 1,
                perMove: 1,
                gap   : '1rem', 
                autoplay:true,  
              } }
               aria-label="Brands We worked together"
               class="w-full md:w-[80%] cursor-grab  p-14"
               >
                {#each article as {title,description}}
                     <SplideSlide class=" w-full rounded bg-slate-900/80 text-white">
                        <div class="flex flex-col gap-5 w-full p-5">
                            <div class="text-5xl text-teal-400">
                                <Icon icon="la:shapes" />
                            </div>
                            <h3 class="font-bold text-2xl  md:text-3xl py-3 capitalize">{ title}</h3>
                            <p class=" text-justify w-[80%] text-white/80 ">{description}</p>
            
                        </div>
                     </SplideSlide>
                {/each}
              </Splide>
        </div>
    </section>
</div> 