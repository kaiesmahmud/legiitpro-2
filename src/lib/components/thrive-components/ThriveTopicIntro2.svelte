<script>
    // ThriveTopicIntro-2 title-subtitle,paragraph, oneside paragraph ,oneside img , last paragraph 
    // let section = {
    //     interface: "ThriveTopicIntro2",
    //     title: "What Is Social Media Management?",
    //     subTitle: "Custom Strategies That Promote Stellar Customer Engagement",
    //     firstPara: "As social media evolves, market players maintain each channel’s core purpose: the trifecta of connection, communication and community. Sprout Social data showed that 57 percent of consumers will follow a brand's social page to learn about new products or services. It’s why brands should make sure they’re posting content that satisfies connection and engages in communication while building community – instead of posting promotions for users without any thought.",
    //     sidePara: [
    //         "Enter social media management. Sometimes called social media marketing management, it is a branch of social media marketing (SMM) that covers planning, crafting and publishing content on social platforms. It involves regular social profile audits and audience research, which are essential to rolling out relevant content.",
    //         "At Thrive, we take a holistic approach to managing our clients’ social media accounts successfully. Our social media management company combines organic and paid solutions to deliver the most efficient and profitable results.",
    //     ],
    //     imgUrl: "https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-fadafbc/thriveagency.com/files/media-management.webp",

    // }
    export let section
</script>

<div class="flex items-center justify-center flex-col min-h-[60vh] ">
    <section class="p-5 lg:w-[70%] flex flex-col gap-5">
        <div class="flex flex-col gap-3 items-center text-center pt-10">
            <h1 class="text-3xl lg:text-4xl font-bold logo_gradient">{section.title}</h1>
            <h6 class="font-light text-cyan-400">{section.subTitle}</h6>
        </div>
        <p class="text-justify text-white/80">
            {section.firstPara}
        </p>
        <div class="flex flex-col md:flex-row gap-5 text-white/80">
            <div class="w-full lg:w-1/2 flex flex-col gap-5 text-justify">
                {#each section.sidePara as para}
                    <p>{@html para}</p>
                {/each}
            </div>
            <div class="w-full lg:w-1/2">
                <img src={section.imgUrl} alt={section.title}>
            </div>
        </div>
    </section>
</div>
