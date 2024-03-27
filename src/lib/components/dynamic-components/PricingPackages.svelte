<script>
    export let section ;
</script>
 
<div class="backdrop-blur-[3px]  w-full flex items-center justify-center flex-col p-5">
    <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold py-5">{section.title}</h2>
    <h3 class="text-2xl md:text-3xl lg:text-4xl font-bold pb-5" >{section.subTitle}</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
        {#each section.packages as {packageTitle,packageSubTitle,price,get,notGet},index}
                <div class={`flex flex-col p-1 md:p-3 gap-3  rounded-xl `}>
                    <div class={`bg-gradient-to-tl   shadow-lg rounded-xl py-10 font_Poppins  uppercase  text-center flex flex-col items-center justify-center p-3 ${index%2 != 0 ? "from-green-500 to-teal-200" : " from-blue-500   to-cyan-300 " }`}>
                        <h4 class=" text-xl md:text-3xl font-extrabold">{packageTitle}</h4>
                        <h5 class="font-light">{packageSubTitle}</h5>
                    </div>
                    <div class={`bg-gradient-to-l  rounded-xl shadow-lg font-bold  text-center flex flex-col items-center justify-center p-3 ${index%2 != 0 ? "from-green-300 to-teal-300" : " from-indigo-300 to-cyan-300" }`}>
                        
                        <h5>$ {price}</h5>
                    </div>
                    <div class={`flex flex-col gap-2 p-5 font-light shadow-lg bg-gradient-to-tl  rounded-xl ${index%2 != 0 ? "from-green-300 to-teal-100" : " from-indigo-100 to-cyan-100 " }`}>
                        {#each get as item}
                            <div class="flex gap-2">
                                <span class={` text-2xl ${index%2 != 0 ? "text-green-800 " : "text-sky-500" }`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...$$props}>
                                    <path fill="currentColor" d="M.41 13.41L6 19l1.41-1.42L1.83 12m20.41-6.42L11.66 16.17L7.5 12l-1.43 1.41L11.66 19l12-12M18 7l-1.41-1.42l-6.35 6.35l1.42 1.41z" />
                                </svg>
                                </span>
                                <p >{item} </p>
                            </div>
                        {/each}
                        {#each notGet as item}
                            <div class="flex gap-2">
                                <span class="text-red-500 text-2xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20" {...$$props}>
                                        <path fill="currentColor" d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15l-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152l2.758 3.15a1.2 1.2 0 0 1 0 1.698" />
                                    </svg>
                                </span>
                                <p class=" line-through">{item}</p>
                            </div>
                        {/each}
                    </div>
                    <div class="flex items-center justify-center">
                        <button class={`px-5 py-2 font-bold bg-gradient-to-tl  text-slate-900 rounded-lg ${index%2 != 0 ? "from-green-300 to-teal-300" : " from-indigo-400 to-cyan-500 " }`}>Buy Now</button>
                    </div>
                </div>
        {/each}
    </div>  
</div>
 