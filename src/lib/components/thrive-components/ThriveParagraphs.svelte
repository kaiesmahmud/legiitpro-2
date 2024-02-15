<script>
    // let section = {
    //     interface: "ThriveParagraph",
    //     paragraphs: [
    //         "Are your social media efforts falling short of expectations? Now more than ever, social media is a “pay-to-play” environment requiring all the resources you have: a cohesive game plan, 100 percent commitment and a well-defined budget. On top of organic outreach, getting content in front of your target audience can be challenging without shelling out advertising money, whether for an ongoing campaign or a once-off sponsored post.",
    //         "To maximize your online presence, Thrive Internet Marketing Agency weaves social media management services into your overall marketing strategy. The right Facebook or Instagram management service can attract, nurture and convert followers into loyal customers. The social media management campaigns our team has implemented and overseen for our small business, enterprise or franchise clients are a testament to that."
    //     ]
    // }
    export let section 
</script>
<div class="flex items-center justify-center flex-col  ">
    <section class="w-full md:w-3/4 lg:w-1/2 flex flex-col gap-5 p-5 text-justify">
        {#each section.paragraphs as para}
            <p>{@html para}</p>
        {/each}
    </section>
</div>