<script>
    import Icon from '@iconify/svelte';

    export let cat 
    $:title = cat[0].catURL
    const handleShowDetail = (newTitle)=>{
        console.log("clicked")
        if(title !== newTitle){
            title = newTitle
        }
    }
</script>
{#if cat}
    <div class="flex flex-col font_Poppins ">
        <ul>
            {#each cat as {catName,catURL,catDesc}}
            <li class=" capitalize  flex items-center text-white/80 hover:text-white w-full">
                <button on:click={()=>handleShowDetail(catURL)} class="z-[200] w-full transition-all ease-in duration-300"  >
                    <div class="flex items-center justify-between border-b-2 border-slate-800 hover:border-cyan-500 transition-all ease-in">
                        <div class="flex  items-center gap-3 py-3 ">
                            <div class="text-sky-300 text-3xl">
                                <Icon icon="solar:map-point-add-broken" />
                            </div>
                            <h3 class="font-semibold lg:font-bold  text-md capitalize ">
                                {catName}
                            </h3>
                        </div>
                        <div class="text-cyan-600 text-xl">
                            {#if title===catURL}
                                <Icon icon="mingcute:up-fill" />
                            {:else}
                                 <Icon icon="mingcute:down-fill" />
                            {/if}
                        </div>
                    </div>
                    <a href={catURL} class={`bg-slate-800 p-1 mt-1 rounded ${title===catURL?"flex flex-col ":"hidden"}`}>
                        <p class="text-sm text-justify p-3  transition-all ease-in duration-200">
                            {catDesc}
                        </p>
                        <p class="text-xs font-bold uppercase p-2 rounded w-full bg-sky-800 hover:bg-blue-800 transition-colors ease-out">visit page</p>
                    </a>
                </button>
            </li>
            {/each}
        </ul>
    </div>
{/if}
