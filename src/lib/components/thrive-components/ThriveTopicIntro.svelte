<script>
    //ThriveTopicIntro
    export let section ;
    const {title,description,listTitle,list, imgUrl,lastDescription}= section
</script>
<div class="flex items-center justify-center flex-col min-h-[60vh] ">
    <section class="p-5 lg:w-[70%] ">
        <div class="flex flex-col lg:flex-row  justify-center gap-5 pt-5 lg:pt-10">
            <div class="order-2 lg:order-1 flex flex-col gap-3  w-full md:w-1/2">
                <h2 class="text-3xl md:text-4xl font-semibold">{title}</h2>
                <p class="text-white/70">{description}</p>
                <p class="text-white/70">{listTitle}</p>
                <ul class="text-white/70 list-disc px-5">
                    {#each list as list}
                        <li>{list}</li>
                    {/each}
                </ul>
            </div>
            <div class="order-1 md:order-2 w-full md:w-1/2">
                <img src={imgUrl} alt={title}>
            </div>
        </div>
        <p class="text-white/70 py-3" >{lastDescription}</p>
    </section>
</div>
