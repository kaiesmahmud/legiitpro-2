<script> 
    export let section;
    let {title,description,lists,imgAlt,imgURL,customURL} = section;
     
</script>
<section class=" relative flex items-center justify-center my-5 min-h-[60vh] lg:min-h-[60vh]">
    <div class="p-5 w-full lg:w-[80%]  grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
        <div class=" rounded overflow-hidden">
            <img class="" src={imgURL} alt={imgAlt}>
        </div>
        <div class=" flex flex-col  justify-center p-5 w-full">
            <h2 class="font-bold text-2xl md:text-4xl py-5 capitalize">{title}</h2>
            <p class=" text-justify text-lg md:w-[80%] text-black/95">{@html description}</p>
            <div class="py-5 flex flex-col gap-2 text-black/90">
                {#each lists as i}
                <div class="flex items-center gap-2">
                    <div class="text-2xl text-sky-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...$$props}>
                            <path fill="currentColor" d="M.41 13.41L6 19l1.41-1.42L1.83 12m20.41-6.42L11.66 16.17L7.5 12l-1.43 1.41L11.66 19l12-12M18 7l-1.41-1.42l-6.35 6.35l1.42 1.41z" />
                        </svg>
                    </div>
                    <p class="font-light  capitalize">{@html i}</p>
                </div>
                {/each}
            </div>
            {#if customURL}
                 <div class="mt-3">
                     <a href={customURL} class="text-green-500 font-light px-5 py-2 rounded-full border border-green-500 hover:bg-green-500 hover:text-slate-900 transition-all ease-in">Full Details</a>
                 </div>
            {/if}
        </div>
    </div>
    <div class=' absolute gradient-02 opacity-20 bottom-4 right-1 md:top-4 md:right-1' />

</section>