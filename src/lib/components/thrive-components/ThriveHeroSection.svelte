<script>
// Thrive Hero section 
    export let section 
    const {title,subTitle,description,css,btnCss} = section

</script>
<div class={` flex flex-col items-center justify-center p-5`}>
    <section class={`min-h-[50vh] w-full lg:w-[80%] rounded-xl ${css? css : " bg-gradient-to-tr from-sky-200 to-indigo-500 "} 
    shadow-xl flex flex-col items-center justify-center gap-10   py-10`}>
        <div class="flex flex-col items-center gap-5 text-center p-5 ">
            <h1 class="text-4xl md:text-5xl  font-extrabold md:px-5">{@html title}</h1>
            <h3>{subTitle}</h3>
            {#if description}
            <p class="w-full lg:w-[80%] text-black/80 ">{@html description}</p>
            {/if}
        </div>
        <div>
            <a href="/schedule-meeting" 
            class={`px-7 py-3 lg:px-10 lg:py-5 text-xl  md:text-2xl rounded-full shadow-lg
            ${btnCss? btnCss : " bg-gradient-to-tr from-indigo-400 to-sky-500 hover:from-sky-500 hover:to-indigo-500 "}
            text-black/80 font-extrabold
             transition-all ease-in`}>Get My Free Proposal</a>
        </div>
    </section>
</div>