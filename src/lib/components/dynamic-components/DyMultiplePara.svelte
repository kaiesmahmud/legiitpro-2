<script>
    import Icon from '@iconify/svelte';
    export let section
    const { article,imgURL } = section
</script>
<div class="flex flex-col lg:flex-row items-center justify-center relative">
    <div class="order-2 lg:order-1 w-full lg:w-1/2 flex flex-col gap-5 ">
        {#each article as {title,description}}
            <div class="p-5">
                <div class="flex items-center gap-3 ">
                    <div class="text-3xl md:text-5xl text-teal-400">
                        <Icon icon="game-icons:scout-ship" />
                    </div>
                    <h2 class="text-3xl  font-semibold uppercase">{title}</h2>
                </div>
                <p class="p-3 w-3/4 text-white/80">{description}</p>
            </div>
        {/each}
    </div>
    <div class="w-full lg:w-auto flex items-center justify-center p-5 order-1 lg:order-2">
        <img src={imgURL} alt="">
    </div>
    <div class=' absolute gradient-02 opacity-20 bottom-4 right-1 md:bottom-4 ' />

</div>