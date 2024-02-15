<script>
// ThriveClientSuccess
export let section 
const {title,subTitle, firstPara,clientProjects, lastPara,}=section 
</script>
<div class="flex flex-col items-center justify-center ">
    <section class="w-full p-5 lg:w-[70%] py-10 text-white/70">
        <div class="flex flex-col items-center text-center gap-2 lg:p-5 ">
            <h2 class="text-3xl lg:text-4xl lg:p-3 font-semibold text-white ">{title}</h2>
            <h5 class="text-cyan-400">{subTitle}</h5>
            <p>{firstPara}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 py-5">
            {#each clientProjects as {imgUrl, leads, organic, quote , url , title}}
                <div class="flex flex-col gap-5 bg-slate-900 rounded overflow-hidden shadow">
                    <div>
                        <img src={imgUrl} alt={title}>
                    </div>
                    <div class="p-2 text-center font-bold text-xl underline hover:text-white">
                        <a href={url}><h4>{title}</h4></a>
                    </div>
                    <div class="grid grid-cols-2 text-center">
                        <div>
                            <p class="font-bold text-cyan-400 text-xl">{leads} </p>
                            <p class="text-xs font-semibold">Online Leads </p>
                        </div>
                        <div>
                            <p class="font-bold text-cyan-400 text-xl"> {organic} </p>
                            <p class="text-xs font-semibold">Organic Search Traffic</p>
                        </div>
                    </div>
                    <div class="p-5">
                        <p class=" text-xl font-semibold">From the Client:</p>
                        <div class=" italic font-light text-base lg:text-xl">
                            {quote}
                        </div>
                    </div>
                </div>
            {/each}
        </div>
        <div class="p-5 text-justify">
            <p>{lastPara}</p>
        </div>

    </section>
    <div class="w-full bg-slate-900 py-10 flex flex-col items-center gap-5 p-5 text-center">
        <h3 class="text-4xl font-bold logo_gradient">You've Finally Found the Right SEO Agency With Answers</h3>
        <p class="p-5 text-white/70">Thrive has the SEO solutions you've been searching for. Don't let another day go by where your competitors are looking down on you! It's time to be discovered!</p>
        <a href="/" 
            class="px-5 py-3 lg:px-10 lg:py-5 text-xl lg:text-2xl rounded-full border border-cyan-400
             bg-gradient-to-tr from-cyan-400 to-teal-500 font-semibold text-black hover:text-white hover:bg-none 
             transition-all ease-in">Increase My Leads Now !</a>
         
    </div>
</div>