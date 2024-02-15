<script>
    // let section = {
    //     interface: "ThriveTitleLists",
    //     title: "How the Best Social Media Marketers Achieve Their Clients’ Goals:",
    //     lists : [
    //         "Your content is tailored to the needs and preferences of your target audience.",
    //         "You never miss an opportunity to respond to questions or continue conversations initiated by customers or fans.",
    //         "Your social media management budget is well-appropriated and prudently managed.",
    //         "Your social media management service package can be divided into organic and paid social, depending on your priorities.",
    //         "Nuances can be applied while keeping multi-channel efforts unified.",
    //     ]
    // }
    export let section 
</script>
<div class="flex items-center justify-center flex-col ">
    <section class="w-full p-5 lg:w-[70%] flex items-center flex-col gap-2">
        <h2 class="text-center logo_gradient font-bold text-3xl lg:text-4xl py-10">{section.title}</h2>
        <div class="flex flex-col gap-5 px-10 p-3 text-white/80">
            {#each section.lists as i,index}
                <div class=" flex gap-4 items-center">
                    <div class="py-3 px-5 aspect-square text-center  bg-white/10 rounded-full">{index+1}</div>
                    <p>{i}</p>
                </div>
            {/each}
        </div>
    </section>
</div>