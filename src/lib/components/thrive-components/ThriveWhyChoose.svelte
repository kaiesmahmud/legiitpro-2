<script>
    //ThriveWhyChoose
    export let section 
    const {title , subTitle ,descriptions, services , bottomDescriptions} = section 
    
    </script>
    <div class="flex flex-col items-center justify-center bg-gradient-to-tr from-indigo-900 to-sky-900  p-5 my-5">
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
                {#each services as {service_description,service_title}}
                     <div class="flex flex-col lg:flex-row gap-3 p-5 bg-black/30  rounded-xl shadow-lg">
                        <div class="text-3xl lg:text-5xl text-cyan-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" {...$$props}>
                                <path fill="currentColor" d="m30.976 24.975l-5.001 5.001a3.501 3.501 0 0 1-4.951-4.95l1.414 1.414a1.5 1.5 0 0 0 2.122 2.122l5.002-5.002a1.5 1.5 0 0 0-2.122-2.122l-1.415-1.414a3.501 3.501 0 0 1 4.952 4.95Z" />
                                <path fill="currentColor" d="m20.025 21.024l-5.001 5.001a3.501 3.501 0 0 0 4.95 4.951l-1.414-1.414a1.5 1.5 0 0 1-2.122-2.122l5.002-5.002a1.5 1.5 0 0 1 2.122 2.122l1.414 1.415a3.501 3.501 0 0 0-4.95-4.952Z" />
                                <circle cx="7" cy="20" r="2" fill="currentColor" />
                                <path fill="currentColor" d="M14 20a4 4 0 1 1 4-4a4.012 4.012 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2.006 2.006 0 0 0-2-2" />
                                <circle cx="21" cy="12" r="2" fill="currentColor" />
                                <path fill="currentColor" d="M11.308 27.273L3 22.426V9.574l11-6.416l11.496 6.706l1.008-1.728l-12-7a1 1 0 0 0-1.008 0l-12 7A1 1 0 0 0 1 9v14a1 1 0 0 0 .496.864L10.3 29Z" />
                            </svg>
                        </div>
                        <div>
                            <h5 class="text-2xl font-bold text-cyan-500">{service_title}</h5>
                            <p class="text-white/80 py-3 text-justify">{@html service_description}</p>
                        </div>
                     </div>
                {/each}
            </div>
            <div class="flex items-center justify-center ">
                {#if bottomDescriptions}
                     <div class="text-white w-full md:w-[80%]   text-center">
                        {#each bottomDescriptions as paragraph }
                            <p class="py-3">{@html paragraph}</p>
                        {/each}
                     </div>
                {/if}

            </div>
        </section>
    </div>