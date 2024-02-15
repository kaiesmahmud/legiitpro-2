<script>
    import Icon from '@iconify/svelte';
    export let categories
</script>
<div class="allservices-bg relative ">
    <div class=" backdrop-blur flex flex-col items-center justify-center min-h-[90vh] py-5">
        <div class="py-10 flex flex-col items-center justify-center">
            <h1 class=" uppercase logo_gradient text-4xl lg:text-6xl  text-center ">Our Services</h1>
            <h2 class="w-[90%] md:w-[80%] text-center">A B2B marketing agency is an entity that specialises in crafting and implementing marketing strategies explicitly tailored for business-to-business interactions. These agencies cater to various industries, providing services from digital marketing to market research</h2>
        </div>
        {#if categories?.length}
             <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 w-[90%] md:w-[80%] lg:w-[85%]">
                 {#each categories as {name, url, cat, icon}}
                     <div class="bg-slate-900 text-white rounded z-[100] py-10 shadow ">
                         <div class="flex items-start justify-center text-5xl p-5">
                             <div class="p-5 rounded-full bg-gradient-to-tr from-green-300 to-blue-600 text-center text-slate-900">
                                 <Icon icon={icon} />
                             </div>
                         </div>
                         <a href={url}>
                             <h2 class=" uppercase logo_gradient text-xl  lg:text-2xl text-center px-5 ">{name}</h2>
                         </a>
                         <div class="p-5 flex flex-col gap-2 items-center text-center">
                             {#if cat}
                                 {#each cat as {catName,catURL}}
                                 <a href={catURL} class="text-lg capitalize font-light  p-3 hover:text-cyan-400 flex items-center justify-between w-full border-b border-black/50 hover:border-cyan-300 transition-all ease-in">
                                     <p>{catName}</p>
                                     <div>
                                         <Icon icon="quill:link-out" />
                                     </div>
                                 </a>
                                 {/each}
                             {/if}
                         </div>
                     </div>
                 {/each}
             </div>
        {/if}
    </div>
    <div class='md:hidden absolute gradient-01 opacity-50 left-1 z-[-50]' />
    <div class='md:hidden absolute gradient-02 opacity-50 bottom-4 left-1 z-[-50]' />
</div>