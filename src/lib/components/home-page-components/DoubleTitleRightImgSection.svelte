<script>
    import Icon from '@iconify/svelte';
    export let section;
    let {article,imgAlt,imgURL} = section;
 
</script>
<section class=" relative flex items-center justify-center my-5 ">
    <div class="p-5 w-full lg:w-[80%]  grid grid-cols-1  gap-3 items-center">
 
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 p-5 md:p-10 w-full   rounded-lg backdrop-blur ">
            {#each article as {title,description}}
            <div>
                <div class="flex flex-col md:flex-row gap-3 md:items-center">
                    <div class="text-5xl text-teal-400">
                        <Icon icon="la:shapes" />
                    </div>
                    <h3 class="font-bold text-2xl  md:text-3xl py-5 capitalize">{@html title}</h3>
                </div>
                <p class=" text-justify w-[80%] text-white/80 ">{description}</p>
            </div>
            {/each}
        </div>
    </div>
    <div class=' absolute gradient-02 opacity-20 bottom-4 right-1 md:top-4 md:left-1' />
</section>