<script>
	import { blogShow_catagory, blogs_showcase } from './../constant/blogs_showcase.js';
    
    $: showProject = "trending"
    $: projectData = blogs_showcase.filter(item=> item.catName === showProject)
    const handleShowProject = ( show )=>{
        if(showProject !== show){
            showProject = show
            projectData = blogs_showcase.filter(item=> item.catName === showProject)
            // console.log(projectData)
        }
    }
</script>
<section class=" relative flex  justify-center min-h-[100vh] p-5">
    <!-- <div class="absolute shade-1 bg-teal-400/50 left-1 opacity-40 " /> -->
    <!-- <div class='absolute gradient-01 opacity-50 left-1 ' /> -->
    <!-- <div class='absolute gradient-02 opacity-50 bottom-4 left-1' /> -->
  <div class='absolute w-[200px] h-[200px] md:w-[400px] md:h-[400px] gradient-02 opacity-50 md:opacity-30 top-0 left-0 ' />
    
    <div class="w-full lg:w-[90%] flex flex-col ">
        <h2 class=" mt-16 text-4xl lg:text-6xl text-center  font-extrabold mb-10 logo_gradient py-5 capitalize">Read our Blogs</h2>
        <div class="text-center flex flex-wrap items-center justify-center gap-5 p-5">
            {#each blogShow_catagory as {catName}}
            <button 
                on:click={()=>{handleShowProject(catName)}}
                class={` hover:bg-slate-900 rounded-full py-2 px-4 text font-bold font_Poppins  hover:text-white transition-all ease-in shadow-lg hover:shadow-blue-500  uppercase
                  ${catName === showProject ? "bg-slate-900 text-white  shadow-blue-500":"bg-slate-400 text-slate-900"}
                  capitalize` }
                >
                {catName}
            </button>
            {/each}
            <a href="/blogs" 
                class={` hover:bg-slate-900 rounded-full py-2 px-4 text font-bold font_Poppins  hover:text-white transition-all ease-in shadow-lg hover:shadow-blue-500  uppercase bg-slate-400 text-slate-900
                  ` }>
                All
            </a>
        </div>
        <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {#each projectData as {name,imgUrl,description,blogURL}}
                 <a href={blogURL} class="  overflow-hidden group transition-all ease-in">
                    <div class="overflow-hidden rounded relative">
                        <img src={imgUrl} alt="" class="rounded ">
                        <div class=" bottom-0 absolute group-hover:top-0 left-0 z-[10] w-full group-hover:h-full bg-sky-100/50 p-2 px-3 md:p-5 text-black/90 group-hover:flex flex-col items-center justify-center cursor-pointer group-hover:transition-all group-hover:ease-in-out group-hover:duration-500">
                            <p class=" font-bold font-Poppins md:text-xl lg:py-3 text-center group-hover:text-start w-full">{name}</p>
                            <p class="hidden group-hover:block font-Poppins text-xs text-justify">{description}</p>
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</section>