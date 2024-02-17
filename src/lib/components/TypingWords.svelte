<script>
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    // Default theme
    import '@splidejs/svelte-splide/css';

    let slideData = [
        {
            name:"Website Development", color: "green_gradient"
        },
        {
            name:"Website SEO",color: "red_gradient"
        },
        {
            name:"Social Media Marketing",color: "yellow_gradient"
        },
        {
            name:"Online Advertising",color: "blue_gradient"
        },
    ]
</script>
<Splide options={ {
    direction: 'ttb', 
    perPage: 1,
    autoplay:true,
    arrows:false,
    type   : 'loop',
    gap:'2rem',
    pagination:false,
    interval:3000,
    height:"60px"
  } }
   aria-label="Legiitpro Services List"
   class=" "
   >
    {#each slideData as {name,color}}
    <SplideSlide>
        <p class={`text-3xl md:text-4xl lg:text-5xl font-extrabold pb-3 ${color} flex items-center justify-center   z-[1000] `}>
            {name}
        </p>
    </SplideSlide>
    {/each}
  </Splide>