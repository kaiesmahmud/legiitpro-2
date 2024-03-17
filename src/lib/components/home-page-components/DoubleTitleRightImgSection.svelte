<script> 
    export let section;
    let {article,bgCss, imgAlt,imgURL,headline} = section; 
</script>
<section class=" relative flex items-center justify-center my-5 lg:my-10 p-3  ">
    <div class={`p-5 w-full  
    ${bgCss? bgCss : " bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-cyan-200 via-blue-600 to-cyan-200  "}
     rounded-lg flex flex-col justify-center gap-3 items-center shadow-lg`}>
        {#if headline}
             <h2 class="pt-7 font-bold text-2xl md:text-3xl lg:text-5xl">{headline} </h2>
        {/if}
        <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-10 p-5 md:p-10  ">
            {#each article as {title,description}}
            <div>
                <div class="flex flex-col lg:flex-row gap-3 lg:items-center">
                    <div class="text-5xl text-slate-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" {...$$props}>
                            <path fill="currentColor" d="M22.357 3.863L16.19 15h12.336zm0 4.127L25.131 13h-5.547zM9 16c-3.309 0-6 2.691-6 6s2.691 6 6 6s6-2.691 6-6s-2.691-6-6-6m8 1v11h11V17zm-8 1c2.206 0 4 1.794 4 4s-1.794 4-4 4s-4-1.794-4-4s1.794-4 4-4m10 1h7v7h-7z" />
                        </svg>
                    </div>
                    <h3 class="font-bold text-2xl text-slate-900  md:text-3xl py-5 capitalize">{@html title}</h3>
                </div>
                <p class=" text-justify lg:w-[80%] text-black/70 leading-5 ">{@html description}</p>
            </div>
            {/each}
        </div>
    </div>
    <div class=' absolute gradient-02 opacity-20 bottom-4 right-1 md:top-4 md:left-1' />
</section>