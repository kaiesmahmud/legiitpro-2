<script>
    // let section = {
    //     interface: "ThriveTitleParagraphs",
    //     title: "Enjoying the Benefits – Minus the Burden",
    //     paragraphs: [
    //         "While it’s crucial for business owners and marketers to understand the true effort and cost involved in social media marketing, they should also be aware of the incredible benefits a well-rounded strategy can bring. If you want these benefits at a fraction of the cost, consider how a social media management agency is uniquely positioned to support you.",
    //         "According to Rachel Czeszewski, Thrive’s senior social media manager (paid), when social media management is brought in-house, it rarely gets the attention it deserves and the strategic input it needs to be successful.",
    //         "Why waste your chance to raise brand awareness, generate leads and garner sales by trying to do it alone and falling short?",

    //     ]
    // }
    export let section
</script>
<div class="flex items-center justify-center flex-col ">
    <section class="w-full p-5 lg:w-[70%]">
        <h1 class="text-center font-bold text-3xl lg:text-4xl py-5 logo_gradient ">{section.title}</h1>
        <div class="flex flex-col gap-5  text-justify text-white/80">
            {#each section.paragraphs as para }
                <p>{@html para}</p>
            {/each}
        </div>
    </section>
</div>