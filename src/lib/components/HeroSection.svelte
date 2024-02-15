<script>
    import Typewriter  from 'svelte-typewriter'

</script>
<section class="p-10 relative w-full min-h-[100vh] md:min-h-[95vh] flex items-center justify-center flex-col bg-slate-900/80 text-white ">
    <div class="flex flex-col gap-5 text-center rounded-lg p-5">
        <Typewriter interval=200 delay=100  >
            <h1 class=" text-6xl font-bold  p-1">Legiit<span class="text-green-300">pro</span></h1>
        </Typewriter>
        <Typewriter  interval=100 delay=100 mode="loop" >
            <h2 class="text-lg font-light text-sky-400">Free IT Consulting</h2>
        </Typewriter>
        <h1 class="text-2xl lg:text-4xl  font-extralight">Get your Website Audit Report Now</h1>
        <!-- <div class="flex flex-col lg:flex-row gap-3 lg:gap-1 flex-wrap lg:flex-nowrap">
            <input class="hero_input" type="text" placeholder="Your Name">
            <input class="hero_input" type="email" placeholder="Your Email">
            <input class="hero_input" type="text" placeholder="Your Website">
            <button class="w-full lg:w-[300px] border border-cyan-400 hover:border-transparent bg-cyan-900 hover:bg-gradient-to-tr hover:from-cyan-400 hover:to-purple-400 hover:text-slate-900 rounded px-5 py-3 font-bold uppercase transition-all ease-in duration-200">Free Audit</button>
        </div> -->
    </div>
    <video class="hidden lg:inline-block w-[100vw] h-[100%] absolute top-0 left-0 z-[-10] object-cover" autoplay muted loop >
        <source src="hero-bg/legiitpro-homepage-video-1.webm" type="video/webm">
        <source src="hero-bg/legiitpro-homepage-video-1.mp4" type="video/mp4">
    </video>
    <div class=" lg:hidden w-[100vw] h-[100%] absolute top-0 left-0 z-[-10] object-cover">
        <img  src="https://images.unsplash.com/photo-1521898284481-a5ec348cb555?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
    </div>
</section>
