<script> 
    export let section 
</script>
<div class="flex items-center justify-center flex-col bg-gradient-to-tr from-indigo-900 to-sky-900 p-5  my-5">
    <section class="w-full p-5 lg:w-[70%] flex items-center flex-col gap-2">
        <h2 class="text-center text-white font-bold text-3xl lg:text-4xl py-10">{section.title}</h2>
        <div class="flex flex-col gap-5 md:px-10 p-3 text-white/80">
            {#each section.lists as i,index}
                <div class=" flex gap-4 items-center ">
                    <div class="py-3 px-5 aspect-square text-center  bg-white/10 rounded-full">{index+1}</div>
                    <p >{ @html i}</p>
                </div>
            {/each}
        </div>
    </section>
</div>