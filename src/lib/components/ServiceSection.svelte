<script>
	import { serviceSectionData } from './../constant/servicesData.js';
    import Icon from '@iconify/svelte';
	import ServiceAccordion from './ServiceAccordion.svelte';
	import Wave1 from './Wave/Wave1.svelte';
</script>
<div class="z-[2] bg-white relative w-full">
    <section class=" min-h-[100vh]  text-black py-10 z-[100] ">
        <h2 class="px-5 text-4xl lg:text-6xl text-center  font-extrabold mb-10 logo_gradient capitalize">Get Your Consultation</h2>
        <div class="flex items-center justify-center">
            <div class="w-full lg:w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-10 justify-center p-5">
                {#each serviceSectionData as {name,url,cat,icon}}
                <div class=" bg-slate-900 text-white p-5 rounded z-[100]">
                    <div class="flex items-center justify-center text-5xl my-3">
                        <div class="p-5 rounded-full bg-gradient-to-tr from-green-300 to-blue-600 text-center text-slate-900">
                            <Icon icon={icon} />
                        </div>
                    </div>
                    <h2 class=" uppercase logo_gradient text-2xl lg:text-3xl text-center mb-5">
                        <a href={url}>{name}</a></h2>
                    {#if cat}
                    <ServiceAccordion {cat}/>
                    {/if}
                </div>
                {/each}
            </div>
        </div>
    </section>
    <div class="hidden md:block absolute bottom-0  z-[-10] object-cover w-full">
        <Wave1/>
    </div>
</div>
