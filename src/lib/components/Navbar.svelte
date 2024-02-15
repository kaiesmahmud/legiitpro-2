 <script>
	import { navList } from './../constant/navlist.js';
    import Icon from '@iconify/svelte';
    $:viewNavOptions = false;
    const handleViewNavOptions = ()=> viewNavOptions = !viewNavOptions
    const handleLogoClick = ()=> viewNavOptions = false
 </script>
<header class={`p-3 ${viewNavOptions? " h-screen ": "h-auto"}lg:h-auto flex  flex-col lg:flex-row gap-5  lg:items-center lg:justify-between bg-white lg:px-10 `}>
    <div class="flex justify-between w-full lg:w-auto">
        <a  on:click={handleLogoClick} href="/" class="flex items-center gap-2 ">
            <img class="w-8 md:w-10 " src="/logo.webp" alt="" srcset="">
            <p class=" font_Inter text-xl md:text-2xl lg:text-3xl">Legiit<span class="text-cyan-500">pro</span></p>
        </a>
        
        <button on:click={handleViewNavOptions} class=" inline-block lg:hidden text-3xl">
            {#if viewNavOptions}
                <Icon icon="akar-icons:cross" />
            {:else}
                 <Icon icon="gg:menu-right" />
            {/if}
        </button>
    </div>
    <nav  class={`${viewNavOptions? "flex ": "hidden lg:flex "} lg:flex  flex-col lg:flex-row lg:items-center gap-3 text-base  text-black uppercase font_Poppins`}>
        {#each navList as {link,name}}
        <div class="flex rounded overflow-hidden hover:text-cyan-500" >
            <a on:click={handleViewNavOptions} href={link} class="rounded transition-all ease-in duration-300 w-full lg:w-auto">
                <p class="p-3 rounded ">{name}</p>
            </a>
        </div>
        {/each}
        <div class="float_animation flex rounded overflow-hidden   " >
            <a on:click={handleViewNavOptions}  href='/schedule-meeting' class="rounded transition-all ease-in shadow shadow-cyan-300 hover:shadow-md hover:shadow-cyan-400 border border-cyan-500 text-cyan-500  ">
                <p class="p-3 rounded ">Schedule Meeting</p>
            </a>
        </div>
    </nav>
</header>