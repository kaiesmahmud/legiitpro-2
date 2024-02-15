<script>
    export let section 
    const {title,description,bgImgCss,imgURL} =section
</script>
<section class={bgImgCss}>
    <div class=" w-full bg-slate-900/80 relative flex  items-center justify-center min-h-[100vh] lg:min-h-[95vh]">
        <div class=" w-full grid grid-cols-1 lg:grid-cols-2   lg:w-[80%]">
            <div class="lg:pl-10 flex flex-col items-center lg:items-start justify-center   py-5">
                <h1 class=" uppercase logo_gradient  text-4xl lg:text-6xl py-10 text-center lg:text-start ">{title}</h1>
                <p class="text-sm  md:text-base text-white/90 w-[90%]">{description}</p>
            </div>
            <div class="flex items-center justify-center">
                <img src={imgURL} alt="">
            </div>
    
        </div>
        <div class='md:hidden absolute gradient-01 opacity-50 left-1 z-[-50]' />
        <div class='md:hidden absolute gradient-02 opacity-50 bottom-4 left-1 z-[-50]' />
    </div>

</section>