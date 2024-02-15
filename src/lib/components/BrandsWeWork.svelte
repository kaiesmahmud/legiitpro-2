<script>
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    export let imgURL 
    // Default theme
    import '@splidejs/svelte-splide/css';

</script>
<div class="flex items-center justify-center bg-white p-10">
    <Splide options={ {
        // rewind: true,
        gap   : '1rem',
        perPage: 5,
        autoplay:true,
        arrows:false,
        interval: 1000, // Set the duration to 1000ms (1 second)

        type   : 'loop',
        perMove: 1,
        pagination:false,
        drag   : 'free',
        focus  : 'center',
        autoScroll: {
          speed: 1,
        },
        

      } }
       aria-label="Brands We worked together"
       class="w-full lg:w-2/3 cursor-grab"
       >
        {#each imgURL as url}
             <SplideSlide>
                <img src={url} alt="">
             </SplideSlide>
        {/each}
      </Splide>
</div>