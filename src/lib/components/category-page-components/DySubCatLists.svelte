<script>
     import { Splide, SplideSlide } from '@splidejs/svelte-splide';

    // Default theme
    import '@splidejs/svelte-splide/css';

    export let section , subCategories
    const {title,description} = section
</script>
    <div class="flex flex-col items-center justify-center py-10 w-screen overflow-hidden pt-20 ">
        <div class="w-full lg:w-[80%] flex flex-col items-center gap-5">
            <h2 class="text-xl md:text-2xl lg:text-4xl logo_gradient text-center font-bold ">{title}</h2>
            <p class="text-center w-2/3 text-xs md:text-sm">{description}</p>
        </div>
        <div class="w-screen flex md:hidden items-center justify-center p-5">
        <Splide options={ {
            // rewind: true,
            gap   : '1rem',
            perPage: 1,
            autoplay:true,
            arrows:false,
            type   : 'loop',
            perMove: 1,
            pagination:false,
            interval:2000
            } }
            aria-label="Brands We worked together"
            class="w-screen  cursor-grab p-5"
            >
            {#each subCategories as {subCatURL,subCatName}}
            <SplideSlide class="py-3 h-20 flex items-center justify-center text-center">
                <a href={subCatURL} class="w-full p-3 border border-cyan-500 rounded hover:bg-cyan-500 hover:text-black capitalize">{subCatName}</a>
            </SplideSlide>
            {/each}
        </Splide>
        </div>
        <div class="hidden md:flex lg:hidden items-center justify-center p-5">
        <Splide options={ {
            rewind: true,
            gap   : '1rem',
            perPage: 2,
            autoplay:true,
            arrows:false,
            type   : 'loop',
            perMove: 1,
            pagination:false,
            interval:2000
    
            } }
            aria-label="Brands We worked together"
            class="w-screen   cursor-grab p-5"
            >
            {#each subCategories as {subCatURL,subCatName}}
            <SplideSlide class="py-3 h-20 flex items-center justify-center text-center">
                <a href={subCatURL} class="w-full p-3 border border-cyan-500 rounded hover:bg-cyan-500 hover:text-black capitalize">{subCatName}</a>
            </SplideSlide>
            {/each}
        </Splide>
        </div>
        <div class="hidden lg:flex items-center justify-center p-5">
        <Splide options={ {
            // rewind: true,
            gap   : '1rem',
            perPage: 4,
            autoplay:true,
            arrows:false,
            type   : 'loop',
            perMove: 1,
            pagination:false,
            interval:2000
    
            } }
            aria-label="Brands We worked together"
            class="w-full lg:w-1/2 cursor-grab p-5"
            >
            {#each subCategories as {subCatURL,subCatName}}
            <SplideSlide class="py-3 h-20 flex items-center justify-center text-center">
                <a href={subCatURL} class="w-full p-3 border border-cyan-500 rounded hover:bg-cyan-500 hover:text-black capitalize">{subCatName}</a>
            </SplideSlide>
            {/each}
        </Splide>
        </div>
    </div>