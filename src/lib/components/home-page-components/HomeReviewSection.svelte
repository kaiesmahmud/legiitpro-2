<script>
    import Icon from '@iconify/svelte';
    let reviews = [
        {
            name: "John", 
            position: "Small Business Owner", 
            quote:"Working with Legiitpro was a game-changer for us! Their marketing strategies brought a significant boost in our online presence, and our sales have never been better",
            journey:"John, a small business owner, implemented the suggested marketing strategies and witnessed a 30% increase in revenue within three months"
        },
        {
            name: "Sarah", 
            position: "Marketing Manager", 
            quote:"The influencer marketing platform suggested by Legiitpro exceeded our expectations. It was a pleasure collaborating with them, and we saw a remarkable increase in brand awareness",
            journey:"Sarah, a marketing manager, utilised influencer marketing tips and observed a 50% growth in social media engagement for her small business"
        },
    ]

    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    // Default theme
    import '@splidejs/svelte-splide/css';
</script>
 
        <Splide options={ {
            // rewind: true,
            gap   : '1rem',
            perPage: 1,
            autoplay:true,
            arrows:false,
            interval: 2000, // Set the duration to 1000ms (1 second)
    
            type   : 'loop',
            perMove: 1,
            pagination:false,
            // drag   : 'free',
            // focus  : 'center',
            autoScroll: {
              speed: 1,
            },
            
    
          } }
           aria-label="Brands We worked together"
           class="w-full lg:w-2/3 cursor-grab"
           >
        {#each reviews as {name,position,quote,journey}}
        <SplideSlide>
            <div class="p-5 flex flex-col  backdrop-blur-sm  rounded-lg">
                <div class="pb-3 flex justify-between">
                    <div>
                        <p class="text-xl font-bold">{name}</p>
                        <p class="text-sm font-bold text-white/50">{position}</p>
                    </div>
                    <div class="flex items-center text-xl text-yellow-300">
                        <Icon icon="material-symbols:star" />
                        <Icon icon="material-symbols:star" />
                        <Icon icon="material-symbols:star" />
                        <Icon icon="material-symbols:star" />
                        <Icon icon="material-symbols:star" />
                    </div>
                </div>
                <div class=" bg-white/10 p-5 rounded-lg text-xl text-justify font-light text-white/80">
                    <div class="text-4xl">
                        <Icon icon="fa6-solid:quote-left" />
                    </div>
                    <p class="px-5">{quote}</p>
                    <div class="w-full flex justify-end text-4xl">
                        <Icon icon="fa6-solid:quote-right" />
                    </div>
                </div>
                <!-- <p>{journey}</p> -->
            </div>
        </SplideSlide>
        {/each}
        </Splide> 