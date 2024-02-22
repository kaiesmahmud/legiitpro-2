<script>
    import Icon from '@iconify/svelte';
    export let section,categories;
    let {title,description,bgImgCss,css} = section;

    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    // Default theme
    import '@splidejs/svelte-splide/css';

    //class={bgImgCss}
</script>
<div class="bg-yellow-500/10">
    <div   class={` ${css} w-full flex flex-col md:items-center justify-center gap-3  min-h-screen lg:min-h-[95vh] p-5`}>
        <div class={`flex flex-col items-center  rounded-lg w-full   p-5  `}>
            <div class={`bg-white/30 w-full lg:w-[70%] p-5 flex flex-col md:items-center justify-center rounded-xl shadow-lg`}>
                {#if title}
                     <h1 class=" text-2xl md:text-4xl lg:text-6xl font-extrabold py-5 capitalize  text-center">{title}</h1>
                {/if}
                {#if description}
                     <p class="w-full lg:w-2/3 text-start md:text-center   text-xs md:text-sm lg:text-lg">{description}</p>
                {/if}
                
            </div>
            {#if categories.length}
             <div class={`w-full lg:w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5     rounded-xl`}> 
                {#each categories as {catName,catDesc, catURL,subCategories}}
                <div class={`p-2 lg:p-5 py-5 h-full rounded-xl bg-white/40 shadow-lg`}>
                    <a href={catURL} class="font-bold  capitalize   text-center  ">
                       <div class="text-3xl lg:text-5xl flex items-center justify-center p-2 lg:p-5">
                           <Icon icon="material-symbols-light:linked-services-outline" />
                       </div>
                       <h2 class=" text-2xl lg:text-3xl px-3 lg:px-1 hover:underline hover:text-slate-900 "> {catName} </h2>
                   </a>
                   <div class="mt-5 flex flex-col gap-3 p-3 capitalize font-semibold  ">
                       {#each subCategories as {subCatName,subCatURL}}
                           <a href={subCatURL} class="text-black hover:text-slate-900 flex justify-between items-center gap-5">
                               <h3 class="flex gap-2 items-center">
                                   <div>
                                       <Icon icon="arcticons:ov-plus" />
                                   </div>
                                   {subCatName}
                               </h3>
                               <div class="text-lg">
                                   <Icon icon="quill:link-out" />
                               </div>
                           </a>
                       {/each}
                   </div>
                </div>
                {/each}
             </div>
             
            {/if}
        </div>
    </div>
</div>