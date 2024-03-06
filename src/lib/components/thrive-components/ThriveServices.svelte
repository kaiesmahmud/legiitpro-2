<script> 
    //ThriveServices
    export let section 
    const {title , subTitle ,descriptions, services} = section 

</script>
<div class="flex flex-col items-center justify-center">
    <section class="w-full md:w-[80%] py-10">
        <div class="flex items-center flex-col justify-center text-center gap-2 md:gap-5 py-3">
            <h3 class="text-3xl md:text-4xl lg:text-5xl font-extrabold ">{title}</h3>
            {#if subTitle}
            <p class="p-3 md:p-5 text-black/70 ">{subTitle}</p>
            {/if}
            {#each descriptions as desc}
                 <p class="p-3 md:p-5 text-black/70 md:w-2/3">{@html desc}</p>
            {/each}
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:p-5">
            {#each services as {service_description,service_title}}
                 <div class="flex flex-col   gap-3 p-5 rounded-xl bg-indigo-500/10">
                    <h5 class="text-2xl font-bold  text-slate-900">{service_title}</h5>
                    <p class="text-slate-900/70 p-3 ">{@html service_description}</p>
                 </div>
            {/each}
        </div>
    </section>
</div>