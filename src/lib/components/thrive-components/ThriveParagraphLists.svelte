<script>
    // let section = {
    //     interface: "ThriveParagraphLists",
    //     title: "Integrated Processes for Maximum Impact",
    //     paragraphs: [
    //         "Social media marketing entails more integrated processes to ensure an interconnectedness between your customer, your content and your company. Simply sharing links to your content or web pages on your social channels is not enough if you hope to achieve results for your social media activities.",
    //         "Aside from fully understanding and learning the social media management definition by heart, you should master its major processes, too. This will assist you in better understanding how to leverage social media marketing to gain a competitive advantage and effectively bolster your entire marketing strategy.",
    //         "Here’s what your social media management game plan must include:",
    //     ],
    //     lists : [
    //         {
    //             listTitle: "Strategy Creation",
    //             listDescription: [
    //                 "the map or plan containing your social media goals, steps to achieve them, a corresponding timeline and metrics to track progress",
    //                 " The social media management definition isn't complete without a mention of strategy. It's the master plan, and it helps you visualize what business social media management looks like for you. Some major factors to consider are which platforms to capitalize on, who your audience is, what types of content to produce, what key performance indicators (KPIs) to measure and which social media management software to use."
    //             ],
    //         },
    //         {
    //             listTitle: "Inbound Engagement Monitoring",
    //             listDescription: [
    //                 "the process of responding to comments, questions and interactions with all social media content and profiles and continuing conversation initiated by fans",
    //                 " Studies show that an average of two-thirds of consumers desire a connection with brands. It makes sense, then, to strive to facilitate two-way communication every chance you get. This is true for all of your social platforms, even when you're deploying Instagram management services or exploring TikTok management solutions using mostly video content."
    //             ],
    //         },
    //         {
    //             listTitle: "Analytics Monitoring",
    //             listDescription: [
    //                 "the gathering and checking of data against metrics to ensure the accomplishment of results",
    //                 "Let data drive your corporate, multi-location business or franchise social media management campaigns. You can monitor important metrics on your chosen platforms, such as engagement metrics (likes, shares and comments), impressions and click-through rates (for targeted social ads)"
    //             ],
    //         },
    //     ]
    // }
 export let section
</script>
<div class="flex items-center justify-center flex-col ">
    <section class="w-full p-5 lg:w-[70%]">
        <div class=" text-center py-10 text-3xl lg:text-4xl  font-bold">
            <h2 class=" logo_gradient ">{section.title}</h2>
        </div>
        <div class="flex flex-col gap-5 text-white/80">
            {#each section.paragraphs as para }
                <p>{@html para}</p>
            {/each}
        </div>
        <div class="p-5 flex flex-col gap-3 text-white/80">
            {#each section.lists as {listTitle,listDescription}}
                 <div class="w-3/4">
                    <p class="font-bold  text-cyan-500 text-xl py-2 border-b border-cyan-400">{listTitle}: </p>
                    {#each listDescription as desc }
                        <p class="p-2 text-justify ">{@html desc}</p>
                    {/each}
                 </div>
            {/each}
        </div>
    </section>
</div>