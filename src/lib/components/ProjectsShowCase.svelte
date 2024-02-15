<script>
	import { onMount } from 'svelte';
	import { project_catagory, project_showcase } from './../constant/project_showcase.js';
    $: showProject = "SEO"
    $: projectData = project_showcase.filter(item=> item.catName === showProject)
    const handleShowProject = ( show )=>{
        if(showProject !== show){
            showProject = show
            projectData = project_showcase.filter(item=> item.catName === showProject)
            // console.log(projectData)
        }
    }
</script>
<section class=" relative flex  justify-center min-h-[100vh] p-5">
    <div class='absolute gradient-03 opacity-50 right-1 top-[20%] lg:top-[50%] ' />

    <div class="w-full lg:w-[90%] flex flex-col ">
        <h2 class="p-3 mt-16 text-4xl lg:text-6xl text-center  font-extrabold mb-10 logo_gradient capitalize ">Our Clients Project</h2>
        <div class="text-center flex items-center justify-center gap-5 p-5">
            {#each project_catagory as {catName}}
            <button 
                on:click={()=>{handleShowProject(catName)}}
                class={` hover:bg-slate-900 rounded-full py-2 px-4 text font-bold font_Poppins  hover:text-white transition-all ease-in shadow-lg hover:shadow-blue-500 
                  ${catName === showProject ? "bg-slate-900 text-white  shadow-blue-500":"bg-slate-400 text-slate-900"}
                  ` }
                >
                {catName}
            </button>
            {/each}
        </div>
        <div class=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5 mt-10">
            {#each projectData as {name,imgUrl,description}}
                 <div class="  overflow-hidden group transition-all ease-in">
                    <div class="overflow-hidden rounded relative">
                        <img src={imgUrl} alt="" class="rounded ">
                        <div class="hidden group-hover:absolute top-0 left-0 z-[10] w-full h-full backdrop-blur-sm p-2 md:p-5 lg:p-10 text-black group-hover:flex flex-col items-center justify-center cursor-pointer transition-all ease-in">
                            <p class="font-bold font-Poppins text-sm lg:text-xl md:py-3 translate-x-10 group-hover:translate-x-0 transition-all ease-in duration-500 delay-300">{name}</p>
                            <p class="hidden lg:block font-Poppins text-xs text-justify">{description}</p>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>