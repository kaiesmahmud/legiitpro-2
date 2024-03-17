<script>
    //ThriveTopicIntro
    export let section ;
    const {title,description,listTitle,list, imgUrl,lastDescription}= section
</script>
<div class="flex items-center justify-center flex-col min-h-[60vh] ">
    <section class="p-5 lg:w-[70%] ">
        <div class="flex flex-col lg:flex-row  justify-center gap-5 pt-5 lg:pt-10">
            <div class="order-2 lg:order-1 flex flex-col justify-center gap-3  w-full lg:w-1/2">
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold">{title}</h2>
                <p class="text-black/80">{@html description}</p>
                <p class=" text-black/80">{@html listTitle}</p>
                <ul class=" text-black/80   list-disc px-5">
                    {#each list as list}
                        <li>{@html list}</li>
                    {/each}
                </ul>
            </div>
            <div class="order-1 lg:order-2 w-full lg:w-1/2">
                <img class="rounded-lg" src={imgUrl} alt={title}>
            </div>
        </div>
        <p class=" text-black/80 py-3" >{@html lastDescription}</p>
    </section>
</div>
