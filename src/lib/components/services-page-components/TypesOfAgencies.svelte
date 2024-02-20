<script>
    import Icon from '@iconify/svelte';
    export let section ;
    const { firstPart,secondPart, thirdPart} = section
    const {firstTitle,firstDescription,firstTypes} = firstPart
    const {secondTitle, secondDescription , secondTypes} = secondPart
    const {thirdTitle, thirdDescription, thirdTypes} = thirdPart
</script>
<div class=" min-h-screen overflow-hidden overflow-y-scroll serviceContent-bg">
    <section class="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 py-10">
        <div class="flex flex-col items-center gap-3 py-5 md:py-10">
            <div class="text-7xl">
                <Icon icon="fluent:point-scan-20-filled" />
            </div>
            <h2 class="  text-center font-extrabold text-3xl md:text-4xl">{firstTitle}</h2>
            <h3 class="w-[90%] md:w-[60%] text-sm text-black/80 text-center">{firstDescription}</h3>
        </div>
        <div class="flex items-center justify-center ">
            <div class="w-full lg:w-[80%] flex flex-col md:flex-row justify-between gap-5">
                {#each firstTypes as {title,description,icon}}
                    <div class="bg-white/20 p-3 lg:p-5 rounded-xl text-center">
                        <div class="text-7xl text-slate-900 flex items-center justify-center p-5 ">
                            <Icon icon={icon} />
                        </div>
                        <div class="text-xl lg:text-2xl font-semibold font_Poppins">{title}</div>
                        <div class="text-black/80 pt-3">{description}</div>
                    </div>
                {/each}
            </div>
        </div>
    </section>
    <!-- ===============Second Part============== -->
    <section class="backdrop-blur-lg py-10">
        <div class="flex flex-col items-center gap-3 py-5 md:py-10 ">
            <div class="text-7xl text-cyan-500">
                <Icon icon="fluent:point-scan-20-filled" />
            </div>
            <h2 class="text-slate-900  text-center font-extrabold text-3xl md:text-4xl">{secondTitle}</h2>
            <h3 class="w-[90%] md:w-[60%] text-slate-900/90 text-center">{secondDescription}</h3>
        </div>
        <div class="flex items-center justify-center ">
            <div class="w-full lg:w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {#each secondTypes as {title,description}}
                    <div class="hover:bg-black/90 backdrop-blur 
                    bg-gradient-to-r from-sky-300 via-sky-300 to-sky-400 
                    p-3 lg:p-5 rounded-xl text-center">
                         
                        <div class="text-xl lg:text-2xl font-semibold font_Poppins  ">{title}</div>
                        <div class="text-black/80 text-sm pt-3">{description}</div>
                    </div>
                {/each}
            </div>
        </div>
    </section>
    <!-- =================Third Part ================== -->
    <section class="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 py-10">
        <div class="flex flex-col items-center gap-3 py-5 md:py-10">
            <div class="text-7xl text-slate-900">
                <Icon icon="fluent:point-scan-20-filled" />
            </div>
            <h2 class=" text-center font-extrabold text-3xl md:text-4xl">{thirdTitle}</h2>
            <h3 class="w-[90%] md:w-[60%] text-black/90 text-center">{thirdDescription}</h3>
        </div>
        <div class="flex items-center justify-center ">
            <div class="w-full lg:w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {#each thirdTypes as {title,description}}
                    <div class="bg-white/20  p-3 lg:p-5 rounded-xl text-center">
                        <!-- <div class="text-7xl text-cyan-500 flex items-center justify-center p-5 ">
                            <Icon icon={icon} />
                        </div> -->
                        <div class="text-xl lg:text-2xl font-semibold font_Poppins ">{title}</div>
                        <div class="text-black/80 text-sm pt-3">{description}</div>
                    </div>
                {/each}
            </div>
        </div>
    </section>
</div>