<script> 
    //ThriveServices
    export let section 
    const {title , subTitle , services} = section 

</script>
<div class="flex flex-col items-center justify-center">
    <section class="w-full md:w-[80%] py-10">
        <div class="flex items-center flex-col justify-center text-center gap-2 md:gap-5 py-3">
            <h3 class="text-3xl lg:text-4xl font-bold logo_gradient">{title}</h3>
            <p class="p-3 md:p-5 text-white/70">{subTitle}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:p-5">
            {#each services as {icon,service_description,service_title,service_url}}
                 <div class="flex flex-col lg:flex-row gap-3 p-5">
                    <div class="text-3xl lg:text-5xl text-cyan-400">
                        {@html icon}
                    </div>
                    <div>
                        <h5 class="text-2xl font-bold text-cyan-500">{service_title}</h5>
                        <p class="text-white/70">{@html service_description}</p>
                    </div>
                 </div>
            {/each}
        </div>
    </section>
</div>