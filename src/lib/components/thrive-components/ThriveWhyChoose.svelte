<script>
    //ThriveWhyChoose
    export let section 
    const {title , subTitle ,descriptions, services} = section 
    
    </script>
    <div class="flex flex-col items-center justify-center">
        <section class="w-full md:w-[80%] py-10">
            <div class="flex items-center flex-col justify-center text-center gap-2 md:gap-5 py-3">
                <h3 class="text-3xl lg:text-4xl font-bold logo_gradient">{title}</h3>
                <p class="p-3 md:p-5 text-white/70">{subTitle}</p>
            </div>
            <div class="flex flex-col gap-3 p-3 text-white/70">
                {#each descriptions as i }
                    <p>{i }</p>
                {/each}
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:p-5">
                {#each services as {icon,service_description,service_title,service_url}}
                     <div class="flex flex-col lg:flex-row gap-3 p-5">
                        <div class="text-3xl lg:text-5xl text-cyan-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...$$props}>
                                <path fill="currentColor" d="M12.5 10H11V6h1.5A2.5 2.5 0 1 0 10 3.5V5H6V3.5A2.5 2.5 0 1 0 3.5 6H5v4H3.5A2.5 2.5 0 1 0 6 12.5V11h4v1.5a2.5 2.5 0 1 0 2.5-2.5M11 3.5A1.5 1.5 0 1 1 12.5 5H11zm-6 9A1.5 1.5 0 1 1 3.5 11H5zM5 5H3.5A1.5 1.5 0 1 1 5 3.5zm5 5H6V6h4zm2.5 4a1.5 1.5 0 0 1-1.5-1.5V11h1.5a1.5 1.5 0 0 1 0 3" />
                            </svg>
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