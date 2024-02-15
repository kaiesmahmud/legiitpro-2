<script>
// Thrive Hero section 
export let section 
const {title,subTitle,bgImgCss} = section
</script>
<div class={`${bgImgCss} `}>
    <section class="min-h-[50vh] backdrop-blur bg-slate-900/70 flex flex-col items-center justify-center gap-10 lg:gap-16 pt-10">
        <div class="flex flex-col items-center gap-5 text-center p-3">
            <h1 class="text-4xl md:text-5xl  font-bold logo_gradient md:p-5">{title}</h1>
            <h3>{subTitle}</h3>
    
        </div>
        <div>
            <a href="/" 
            class="px-7 py-3 lg:px-10 lg:py-5 text-xl  md:text-3xl rounded-full border border-cyan-400
             bg-gradient-to-tr from-cyan-400 to-teal-500 font-semibold text-black hover:text-white hover:bg-none 
             transition-all ease-in">Get My Free Proposal</a>
        </div>
    </section>
</div>