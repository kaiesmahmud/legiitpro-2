<script>
    import TypingWords from "./TypingWords.svelte"; 
     
</script>
<section class="p-10 relative w-full min-h-[100vh] md:min-h-[95vh] flex items-center justify-center flex-col bg-slate-900/80 text-white ">
    <div class="flex flex-col gap-5 text-center rounded-lg p-5">
        <h1 class=" text-6xl font-bold  p-1">Legiit<span class="text-green-300">pro</span></h1>
        <TypingWords/>
        <h2 class="text-2xl lg:text-4xl  font-extralight">Free IT Consulting 2024</h2>
         
    </div>
    <video class="hidden lg:inline-block w-[100vw] h-[100%] absolute top-0 left-0 z-[-10] object-cover" autoplay muted loop >
        <source src="hero-bg/legiitpro-homepage-video-1.webm" type="video/webm">
        <source src="hero-bg/legiitpro-homepage-video-1.mp4" type="video/mp4">
    </video>
    <div class=" lg:hidden w-[100vw] h-[100%] absolute top-0 left-0 z-[-10] object-cover">
        <img  src="https://images.unsplash.com/photo-1521898284481-a5ec348cb555?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
    </div>
</section>
