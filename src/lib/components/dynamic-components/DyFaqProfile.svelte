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

</script>
<div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-sky-400 to-cyan-300">
    <div class=" rounded-lg p-3   flex flex-col  pt-10">
        <div class="flex flex-col w-full items-center">
            <h3 class=" text-2xl lg:text-4xl logo_gradient px-2 lg:px-5 py-5">{faqTitle}</h3>
            <p class="w-2/3 text-sm font-light text-white/80 text-center">{faqSubTitle}</p>
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
         
                   <div class="bg-white/10 rounded-lg p-3  lg:p-5 flex flex-col  pt-10 pb-0">
                       <div class="flex items-center justify-center h-full " >
                           <img class="w-32 lg:w-52 rounded-full" src={`../${imgURL}`} alt={name}>
                       </div>
                       <div class="flex flex-col w-full items-center mt-5">
                           <h3 class=" text-xl lg:text-3xl logo_gradient px-2 lg:px-5">{name}</h3>
                           <p class="w-[80%] lg:w-2/3 text-sm font-light text-white/80 text-center">{description}</p>
                           <div class="py-5 lg:pt-5 flex items-center gap-2 lg:gap-5">
                               {#each links as {linkColor,linkIcon,linkName,linkURL}}
                                   <a href={linkURL} class={`flex items-center gap-1 lg:gap-3  py-2 px-2 lg:py-2 lg:px-4 border-b  ${linkColor} hover:text-slate-900 transition-all ease-in`}>
                                       <div class="text-xl lg:text-4xl">
                                           <Icon icon={linkIcon} />
                                       </div>
                                       <p class=" text-xs md:text-sm font-semibold">{linkName}</p>
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
            <div class="flex flex-col  gap-5 bg-white/10 p-2 lg:p-5 rounded-lg ">
                {#each faq as {id,question,answer}}
                     <div class="border-b border-white/20 pb-3">
                        <button on:click={()=>{handleChangeShow(id)}} class="  p-2 lg:p-5 text-start flex lg:items-center justify-between gap-3 w-full">
                            <div class="flex lg:items-center gap-3">
                                <div class="text-xl lg:text-4xl text-green-500">
                                    <Icon icon="ph:question" />
                                </div>
                                <p class={`${showFaq === id?"text-white" : "text-white/70 "} lg:text-xl hover:text-white`}>
                                    {question}
                                </p>
        
                            </div>
                            <div class={`text-2xl ${showFaq === id?"text-white" : "text-white/70 "}`}>
                                {#if showFaq === id}
                                    <Icon icon="mingcute:up-fill" />
                                {:else}
                                    <Icon icon="mingcute:down-fill" />
                                {/if}
                            </div>
                        </button>
                        <p 
                        class={`${showFaq === id? " block ":" hidden "}  ml-5 md:ml-10 p-5 bg-black/30 rounded-md text-sm lg:text-base font-light text-white/90`}
                        >{answer}</p>
                     </div>
                {/each}
            </div>
        </div>
    </div>
</div>
