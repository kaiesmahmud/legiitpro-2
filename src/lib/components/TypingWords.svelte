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
    // autoHeight:true
    height: "80px",
    drag: true,
    isNavigation: false ,

  } }
   aria-label="Legiitpro Services List"
   class="w-full lg:w-auto "
   >
    {#each slideData as {name,color}}
    <SplideSlide>
        <p class={`text-3xl md:text-4xl lg:text-5xl font-extrabold h-full lg:pb-3 ${color} flex items-center justify-center   z-[1000] `}>
            {name}
        </p>
    </SplideSlide>
    {/each}
  </Splide>