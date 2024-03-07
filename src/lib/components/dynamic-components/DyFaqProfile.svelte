<script>
	import { profileSection } from './../../constant/profileSlidingData.js';
    import Icon from '@iconify/svelte'; 
    export let section;
    const {faqSection}=section
    let {faqTitle,faqSubTitle,faq} = faqSection;

    $:showFaq = "1" ;
    const handleChangeShow = (newNum)=>{
        if(showFaq === newNum){
            showFaq = null ;
        }else{
            showFaq = newNum
        }
    }

// ========================== Person slide =================


    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    // Default theme
    import '@splidejs/svelte-splide/css';

    const {   personsDetails} = profileSection


    import {generateFaqSchema} from "$lib/functions/schemaGenerator"


</script>
<svelte:head>
    {@html generateFaqSchema(faq)}
</svelte:head>
<div class="flex flex-col items-center justify-center min-h-screen ">
    <div class=" rounded-lg p-3   flex flex-col  pt-10">
        <div class="flex flex-col w-full items-center">
            <h3 class=" text-2xl lg:text-4xl logo_gradient px-2 lg:px-5 py-5">{faqTitle}</h3>
            <p class="w-2/3 text-sm font-light text-black/80 text-center">{faqSubTitle}</p>
        </div>
    </div>
    <div class="w-full lg:w-[80%] flex flex-col lg:flex-row items-center justify-center">
        <section class="lg:w-1/2 flex flex-col items-center justify-center w-full overflow-hidden">
            <Splide options={ {
                rewind: true,
                gap   : '1rem',
                perPage: 1,
                autoplay:true,
                arrows:false,
                type   : 'loop',
                perMove: 1,
                pagination:false,
                interval:3000
        
              } }
               aria-label="Brands We worked together"
               class="w-full   cursor-grab p-5"
               >
               {#each personsDetails as {name,imgURL,description,links}}
               <SplideSlide>
         
                   <div class=" bg-gradient-to-tr from-sky-300 to-cyan-200 rounded-lg p-3  lg:p-5 flex flex-col  pt-10 pb-0">
                       <div class="flex items-center justify-center h-full " >
                           <img class="w-32 lg:w-52 rounded-full" src={`../${imgURL}`} alt={name}>
                       </div>
                       <div class="flex flex-col w-full items-center mt-5">
                           <h3 class=" text-xl lg:text-3xl  px-2 lg:px-5">{name}</h3>
                           <p class="w-[80%] lg:w-2/3 text-sm font-light text-black/80 text-center">{description}</p>
                           <div class="py-5 lg:pt-5 flex items-center gap-2 lg:gap-5">
                               {#each links as {linkColor,linkIcon,linkName,linkURL}}
                                   <a href={linkURL} class={`flex items-center gap-1 lg:gap-3  py-2 px-2 lg:py-2 lg:px-4 text-sm rounded-full hover:bg-slate-900/30 hover:text-black text-white bg-slate-900 transition-all ease-in`}>
                                       <p class=" text-xs md:text-sm ">{linkName}</p>
                                   </a>
                               {/each}
                           </div>
                       </div>
                   </div>
               </SplideSlide>
               {/each}
              </Splide>
        </section>
        <div class="w-full lg:w-1/2 flex flex-col gap-5 items-center justify-center p-5 ">
            <div class="flex flex-col  gap-5 bg-sky-500/10 p-2 lg:p-5 rounded-lg ">
                {#each faq as {id,question,answer}}
                     <div class="border-b border-black/20 pb-3">
                        <button on:click={()=>{handleChangeShow(id)}} class="  p-2 lg:p-5 text-start flex lg:items-center justify-between gap-3 w-full">
                            <div class="flex lg:items-center gap-3">
                                <div class="text-xl lg:text-4xl text-green-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...$$props}>
                                        <path fill="currentColor" d="M140 180a12 12 0 1 1-12-12a12 12 0 0 1 12 12M128 72c-22.06 0-40 16.15-40 36v4a8 8 0 0 0 16 0v-4c0-11 10.77-20 24-20s24 9 24 20s-10.77 20-24 20a8 8 0 0 0-8 8v8a8 8 0 0 0 16 0v-.72c18.24-3.35 32-17.9 32-35.28c0-19.85-17.94-36-40-36m104 56A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88" />
                                    </svg>
                                </div>
                                <p class={`${showFaq === id?"text-black" : "text-black/70 "} lg:text-xl hover:text-black`}>
                                    {question}
                                </p>
        
                            </div>
                            <div class={`text-2xl ${showFaq === id?"text-black" : "text-black/70 "}`}>
                                {#if showFaq === id}
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
                        </button>
                        <p 
                        class={`${showFaq === id? " block ":" hidden "}  ml-5 md:ml-10 p-5 bg-black/10 rounded-md text-sm lg:text-base font-light text-black/90`}
                        >{answer}</p>
                     </div>
                {/each}
            </div>
        </div>
    </div>
</div>
