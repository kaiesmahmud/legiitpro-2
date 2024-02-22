<script> 
    export let section 
</script>
<div class="flex items-center justify-center flex-col  p-5">
    <section class="w-full md:w-3/4 lg:w-1/2 flex flex-col gap-5 p-5 text-justify  
    bg-gradient-to-tr from-sky-200 to-indigo-500/50 rounded-xl text-black/90">
        {#each section.paragraphs as para}
            <p>{@html para}</p>
        {/each}
    </section>
</div>