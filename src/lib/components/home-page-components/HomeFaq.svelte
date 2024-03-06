<script>
    import Icon from '@iconify/svelte'; 
	import HomeReviewSection from './HomeReviewSection.svelte';
    export let section;
    let {title,subTitle,faq} = section;

    $:show = "1" ;
    const handleChangeShow = (newNum)=>{
        if(show === newNum){
            show = null ;
        }else{
            show = newNum
        }
    }
    import {generateFaqSchema} from "$lib/functions/schemaGenerator"
</script>

<svelte:head>
    {@html generateFaqSchema(faq)}
</svelte:head>
<div class="flex flex-col gap-5 items-center justify-center p-5 lg:p-10  ">
    <div class=" rounded-lg p-3  lg:p-5 flex flex-col  pt-10">
        <div class="flex flex-col w-full items-center">
            <h3 class=" text-2xl lg:text-4xl logo_gradient px-2 lg:px-5 py-5">{title}</h3>
            <p class="w-2/3 text-sm font-light text-black/80 text-center">{subTitle}</p>
        </div>
    </div>
    <div class="flex flex-col md:flex-row justify-center gap-2 w-full lg:w-[80%]">
        <div class="w-full md:w-1/2">
            <h3 class=" text-start text-2xl lg:text-4xl logo_gradient px-2 lg:px-5 py-5">Our Clients Review</h3>
            <HomeReviewSection/>
        </div>
        <div class="flex flex-col  gap-5 bg-slate-300 p-2 lg:p-5 rounded-lg w-full ">
            {#each faq as {id,question,answer}}
                 <div class="border-b border-black/20 pb-3">
                    <button on:click={()=>{handleChangeShow(id)}} class="  p-2 lg:p-5 text-start flex lg:items-center justify-between gap-3 w-full">
                        <div class="flex lg:items-center gap-3">
                            <div class="text-xl lg:text-4xl text-green-700">
                                <Icon icon="ph:question" />
                            </div>
                            <p class={`${show === id?"text-black" : "text-black/70 "} lg:text-xl hover:text-black`}>
                                {question}
                            </p>
    
                        </div>
                        <div class={`text-2xl ${show === id?"text-black" : "text-black/70 "}`}>
                            {#if show === id}
                                <Icon icon="mingcute:up-fill" />
                            {:else}
                                <Icon icon="mingcute:down-fill" />
                            {/if}
                        </div>
                    </button>
                    <p 
                    class={`${show === id? " block ":" hidden "}  ml-5 md:ml-10 p-5 bg-slate-400 rounded-md text-sm lg:text-base font-light text-black/90`}
                    >{answer}</p>
                 </div>
            {/each}
        </div>
    </div>
</div>
