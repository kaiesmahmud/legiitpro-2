<script>
    import TypingWords from "./TypingWords.svelte";  
</script>
<div class="herosection-bg relative z-0">
    <div class="p-10  w-full min-h-[100vh] md:min-h-[95vh] flex items-center justify-center flex-col text-white z-[10] ">
        <div class="flex flex-col gap-5 text-center rounded-lg p-5 z-[10] ">
            <h1 class=" text-6xl font-bold  p-1">Legiit<span class="text-green-300">pro</span></h1>
            <TypingWords/>
            <h2 class="text-xl lg:text-2xl  font-extralight">Free IT Consulting 2024</h2>
        </div>        
    </div>
    <video class="hidden lg:block   w-[100vw] h-[100%] absolute top-0 left-0 z-[-0] object-cover" autoplay muted loop >
        <source src="hero-bg/legiitpro-homepage-video-1.webm" type="video/webm">
        <source src="hero-bg/legiitpro-homepage-video-1.mp4" type="video/mp4">
    </video>
    <div class=" absolute top-0 left-0 w-[100vw] h-[100%] bg-slate-900/50 ">

    </div>
</div>
