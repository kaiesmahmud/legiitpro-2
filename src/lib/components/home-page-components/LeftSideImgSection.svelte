<script>
    import Icon from '@iconify/svelte';
    export let section;
    let {title,description,lists,imgAlt,imgURL} = section;
    
    
</script>
<section class=" relative flex items-center justify-center my-5 ">
    <div class="p-5 w-full lg:w-[80%]  grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
        <div class="order-2 flex flex-col  justify-center p-5 w-full">
            <h2 class="font-bold text-2xl md:text-4xl py-5 capitalize">{ @html title}</h2>
            {#if description}
            <p class=" text-justify md:w-[80%]">{@html description}</p>
            {/if}
            {#if lists}
            <div class="py-5 flex flex-col gap-2 text-white/90">
                {#each lists as i}
                <div class="flex items-center gap-2">
                    <div class="text-2xl text-sky-400">
                        <Icon icon="mdi:tick-all" />
                    </div>
                    <p class="font-bold capitalize">{i}</p>
                </div>
                {/each}
            </div>
            {/if}
             
        </div>
        <div class=" order-1  rounded  p-3">
            <img class="rounded-lg  hover:scale-105 transition-all ease-in" src={imgURL} alt={imgAlt}>
        </div>
    </div>
    <!-- <div class=' absolute gradient-02 opacity-20 bottom-4 right-1 md:top-4 md:left-1' /> -->
    <div class=' absolute gradient-02 opacity-20 bottom-4 right-1 md:top-4 md:right-1' />

</section>