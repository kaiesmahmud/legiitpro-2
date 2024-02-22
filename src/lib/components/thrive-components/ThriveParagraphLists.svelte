<script> 
 export let section
</script>
<div class="flex items-center justify-center flex-col ">
    <section class="w-full p-5 lg:w-[70%]">
        <div class=" text-center py-10 text-3xl lg:text-4xl  font-bold">
            <h2 class=" logo_gradient ">{section.title}</h2>
        </div>
        <div class="flex flex-col gap-5 text-black/80">
            {#each section.paragraphs as para }
                <p>{@html para}</p>
            {/each}
        </div>
        <div class="p-5 flex flex-col gap-3 text-black/80">
            {#each section.lists as {listTitle,listDescription}}
                 <div class="w-3/4">
                    <p class="font-bold  text-cyan-500 text-xl py-2 border-b border-cyan-400">{listTitle}: </p>
                    {#each listDescription as desc }
                        <p class="p-2 text-justify ">{@html desc}</p>
                    {/each}
                 </div>
            {/each}
        </div>
    </section>
</div>