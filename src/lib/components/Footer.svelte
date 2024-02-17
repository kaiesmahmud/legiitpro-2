 <script>
	import { navList } from './../constant/navlist.js';
    import Icon from '@iconify/svelte';
    const socialMediaLinksData = [
        { platform: "Facebook", icon:"ic:baseline-facebook", platformURL: "/"},
        { platform: "Instagram", icon:"mdi:instagram", platformURL: "/"},
        { platform: "Linkedin", icon:"mdi:linkedin", platformURL: "/"},
        { platform: "X", icon:"pajamas:twitter", platformURL: "/"},
        { platform: "Reddit", icon:"ic:baseline-reddit", platformURL: "/"},
        { platform: "Youtube", icon:"mingcute:youtube-fill", platformURL: "/"},
        { platform: "WhatsApp", icon:"ic:baseline-whatsapp", platformURL: "/"},
        { platform: "Pinterest", icon:"mdi:pinterest", platformURL: "/"},
        { platform: "Tiktok", icon:"ic:baseline-tiktok", platformURL: "/"},
    ]
 </script>
 <div class=" relative pt-10 flex flex-col items-center text-center text-sm   text-black/90 font-light overflow-hidden bg-slate-100">
    <div class="p-1 w-full">
        <p class=" capitalize pb-5">It always easier together</p>
        <p class="  logo_gradient lowercase text-2xl md:text-4xl font-bold">info.legiitpro@gmail.com</p>
        <div class="flex gap-2 md:gap-5 flex-wrap items-center justify-center my-5 p-1">
            {#each navList as {link,name}}
            <div class="flex rounded overflow-hidden" >
                <a href={link} class="rounded transition-all ease-in duration-300">
                    <p class="p-3 rounded font-semibold hover:text-slate-900 hover:underline uppercase">{name}</p>
                </a>
            </div>
            {/each}
        </div>
        <div class="w-full flex flex-wrap items-center justify-center gap-5 my-5">
            {#each socialMediaLinksData as {platform,icon,platformURL}}
            <a 
            href={platformURL} 
            title={platform}
            class="p-2 text-3xl rounded-lg bg-black/20 hover:bg-gradient-to-br hover:from-[#0CD599] hover:to-[#4C37E1] hover:text-slate-900 transition-all ease-in  "
            >
                <Icon icon={icon} />
            </a>
            {/each}
        </div>
    </div>

    <hr class="border opacity-50 mt-5 w-2/3">
     <footer class="py-5 text-xs md:text-sm">© 2024 legiitpro . All Rights Reserved</footer>
</div>