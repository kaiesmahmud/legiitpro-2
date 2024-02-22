<script> 
    export let section
</script>
<div class="flex items-center justify-center flex-col p-5 ">
    <section class="w-full  lg:w-[80%] bg-gradient-to-r from-indigo-200 via-sky-300 to-sky-500 rounded-xl shadow-xl p-5">
        <h1 class="text-center font-bold text-3xl lg:text-4xl py-5  ">{section.title}</h1>
        <div class="flex flex-col gap-5 items-center text-center text-black/80">
            {#each section.paragraphs as para }
                <p class="w-[90%] text-black/80">{@html para}</p>
            {/each}
        </div>
    </section>
</div>