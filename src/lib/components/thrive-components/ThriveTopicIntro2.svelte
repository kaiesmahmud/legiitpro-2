<script> 
    export let section
</script>

<div class="flex items-center justify-center flex-col min-h-[60vh] ">
    <section class="p-5 lg:w-[70%] flex flex-col gap-5">
        <div class="flex flex-col gap-3 items-center text-center pt-10">
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold  ">{section.title}</h1>
            <h2 class="font-semibold text-teal-600">{@html section.subTitle}</h2>
        </div>
        <p class="text-justify text-black/80">
            {@html section.firstPara}
        </p>
        <div class="flex flex-col lg:flex-row gap-5 text-black/80">
            <div class=" order-2 lg:order-1 w-full lg:w-1/2 flex flex-col gap-5 text-justify">

                {#each section.sidePara as para}
                    <p>{@html para}</p>
                {/each}
            </div>
            <div class="order-1 lg:order-2 w-full lg:w-1/2">
                <img class="rounded-lg" src={section.imgUrl} alt={section.title}>
            </div>
        </div>
    </section>
</div>
