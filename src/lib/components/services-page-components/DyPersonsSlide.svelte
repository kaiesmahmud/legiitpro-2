<script>
	// import { persons_details } from './../constant/persons_details.js';
    import Icon from '@iconify/svelte'; 
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    // Default theme
    import '@splidejs/svelte-splide/css';
    export let section ;
    const { title, description , personsDetails} =section
</script>
<section class="flex flex-col items-center justify-center w-full overflow-hidden">
    <div class=" rounded-lg p-3  lg:p-5 flex flex-col  pt-10">
        <div class="flex flex-col w-full items-center">
            <h3 class=" text-2xl lg:text-4xl logo_gradient px-2 lg:px-5 py-5">{title}</h3>
            <p class="w-2/3 text-sm font-light text-white/80 text-center">{description}</p>
        </div>
    </div>
    <Splide options={ {
        rewind: true,
        gap   : '1rem',
        perPage: 1,
        autoplay:true,
        arrows:false,
        type   : 'loop',
        perMove: 1,
        pagination:false,
        interval:3000

      } }
       aria-label="Brands We worked together"
       class="w-full lg:w-1/2 cursor-grab p-5"
       >
       {#each personsDetails as {name,imgURL,description,links}}
       <SplideSlide>
 
           <div class="bg-white/10 rounded-lg p-3  lg:p-5 flex flex-col  pt-10 pb-0">
               <div class="flex items-center justify-center h-full " >
                   <img class="w-32 lg:w-52 rounded-full" src={imgURL} alt={name}>
               </div>
               <div class="flex flex-col w-full items-center mt-5">
                   <h3 class=" text-xl lg:text-3xl logo_gradient px-2 lg:px-5">{name}</h3>
                   <p class="w-[80%] lg:w-2/3 text-sm font-light text-white/80 text-center">{description}</p>
                   <div class="py-5 lg:pt-5 flex items-center gap-2 lg:gap-5">
                       {#each links as {linkColor,linkIcon,linkName,linkURL}}
                           <a href={linkURL} class={`flex items-center gap-1 lg:gap-3  py-2 px-2 lg:py-2 lg:px-4 border-b  ${linkColor} hover:text-slate-900 transition-all ease-in`}>
                               <div class="text-xl lg:text-4xl">
                                   <Icon icon={linkIcon} />
                               </div>
                               <p class=" text-xs md:text-sm font-semibold">{linkName}</p>
                           </a>
                       {/each}
                   </div>
               </div>
           </div>
       </SplideSlide>
       {/each}
      </Splide>
</section>