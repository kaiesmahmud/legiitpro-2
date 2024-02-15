<script>
// ThriveDoubleList 
export let section 
const {title , description , firstList , secondList } = section 
</script>
<div class="flex flex-col items-center justify-center bg-gradient-to-tr from-teal-900 to-cyan-900">
    <section class="w-full lg:w-[80%] py-10 flex flex-col items-center gap-5 p-5">
        <div class="flex items-center justify-center flex-col gap-5  text-center">
            <h3 class="text-3xl lg:text-4xl font-bold">{title}</h3>
            <p class="text-white/80">{description}</p>
        </div>
        <div class="flex flex-col lg:flex-row justify-center gap-5 w-3/4 text-white/80">
            <ul class=" list-disc">
                {#each firstList as item}
                     <li>{item}</li>
                {/each}
            </ul>
            <ul  class=" list-disc">
                {#each secondList as item}
                     <li>{item}</li>
                {/each}
            </ul>
        </div>
        <a href="/" 
        class="px-5 py-3 lg:px-10 lg:py-5 text-xl lg:text-2xl rounded-full border border-cyan-400
             bg-gradient-to-tr from-cyan-400 to-teal-500 font-semibold text-black hover:text-white hover:bg-none 
             transition-all ease-in shadow">
             Get Started Now 
        </a>
    </section>
</div>