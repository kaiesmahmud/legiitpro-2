<script>
// ThriveDoubleList 
export let section 
const {title , description , firstList , secondList,css } = section 
</script>
<div class={`flex flex-col items-center justify-center ${css}`}>
    <section class="w-full lg:w-[80%] py-10 flex flex-col items-center gap-5 p-5">
        <div class="flex items-center justify-center flex-col gap-5  text-center">
            <h3 class="text-3xl lg:text-4xl pt-5 font-extrabold">{title}</h3>
            <p class="text-black/80 font-semibold w-[60%] lg:text-lg">{description}</p>
        </div>
        <div class="flex flex-col lg:flex-row justify-center gap-5 w-3/4 text-black/80 font-medium">
            <ul class=" list-disc">
                {#each firstList as item}
                     <li class="w-[90%] py-2">{item}</li>
                     {/each}
                </ul>
            <ul  class=" list-disc">
                    {#each secondList as item}
                        <li class="w-[90%] py-2">{item}</li>
                {/each}
            </ul>
        </div>
        
    </section>
</div>