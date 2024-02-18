<script>
    import Icon from '@iconify/svelte'; 
    export let cat 
    $:title = ""
    //$:title = cat[0].catURL
    const handleShowDetail = (newTitle)=>{
        //console.log("clicked")
        if(title !== newTitle){
            title = newTitle
        }else{
            title = ""
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...$$props}>
                                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9.5 10h5M12 12.5v-5m-7 7.716c-.647-1.654-1-3.415-1-5.073C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C9.265 21.08 8.138 20.144 7.194 19" />
                                </svg>
                            </div>
                            <h3 class="font-semibold lg:font-bold  text-md capitalize ">
                                {catName}
                            </h3>
                        </div>
                        <div class="text-cyan-600 text-xl">
                            {#if title===catURL}
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...$$props}>
                                    <g fill="none" fill-rule="evenodd">
                                        <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                        <path fill="currentColor" d="M10.94 7.94a1.5 1.5 0 0 1 2.12 0l5.658 5.656a1.5 1.5 0 1 1-2.122 2.121L12 11.122l-4.596 4.596a1.5 1.5 0 1 1-2.122-2.12z" />
                                    </g>
                                </svg>
                            {:else}
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...$$props}>
                                    <g fill="none" fill-rule="evenodd">
                                        <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                        <path fill="currentColor" d="M13.06 16.06a1.5 1.5 0 0 1-2.12 0l-5.658-5.656a1.5 1.5 0 1 1 2.122-2.121L12 12.879l4.596-4.596a1.5 1.5 0 0 1 2.122 2.12l-5.657 5.658Z" />
                                    </g>
                                </svg>
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
