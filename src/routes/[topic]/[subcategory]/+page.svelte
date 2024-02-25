<script>
    import DyFaqProfile from "../../../lib/components/dynamic-components/DyFaqProfile.svelte";
    import DyLeftImgSection from "../../../lib/components/dynamic-components/DyLeftImgSection.svelte";
    import DyMultiplePara from "../../../lib/components/dynamic-components/DyMultiplePara.svelte";
    import DyParagraphs from "../../../lib/components/dynamic-components/DyParagraphs.svelte";
    import DyRightImgSection from "../../../lib/components/dynamic-components/DyRightImgSection.svelte";
    import TopicHeroSection from "../../../lib/components/dynamic-components/TopicHeroSection.svelte";
    import DoubleTitleRightImgSection from "../../../lib/components/home-page-components/DoubleTitleRightImgSection.svelte";
	import ThriveBrandReviews from "../../../lib/components/thrive-components/ThriveBrandReviews.svelte";
	import ThriveClientSuccess from "../../../lib/components/thrive-components/ThriveClientSuccess.svelte";
	import ThriveDoubleList from "../../../lib/components/thrive-components/ThriveDoubleList.svelte";
	import ThriveHeroSection from "../../../lib/components/thrive-components/ThriveHeroSection.svelte";
	import ThriveParagraphLists from "../../../lib/components/thrive-components/ThriveParagraphLists.svelte";
	import ThriveParagraphs from "../../../lib/components/thrive-components/ThriveParagraphs.svelte";
	import ThriveServices from "../../../lib/components/thrive-components/ThriveServices.svelte";
	import ThriveTitleLists from "../../../lib/components/thrive-components/ThriveTitleLists.svelte";
	import ThriveTitleParagraphs from "../../../lib/components/thrive-components/ThriveTitleParagraphs.svelte";
	import ThriveTopicIntro from "../../../lib/components/thrive-components/ThriveTopicIntro.svelte";
	import ThriveTopicIntro2 from "../../../lib/components/thrive-components/ThriveTopicIntro2.svelte";
	import ThriveWhyChoose from "../../../lib/components/thrive-components/ThriveWhyChoose.svelte";

    export let data ; 
    const {frontend,subCatURL,subCatName} = data
     
</script>
<!-- <div class="flex items-center justify-center p-10 h-screen">
    <div class="flex flex-col items-center justify-center gap-5">
        <div class="text-[20vh] text-cyan-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...$$props}>
                <path fill="currentColor" d="m18.958 20l-5.552-5.552l1.061-1.061l5.552 5.551zM5.062 20L4 18.938l6.958-6.957l-2.97-2.95l-.546.546l-.948-.967v1.8l-.546.546l-2.621-2.621l.546-.547h1.8l-.961-.942l2.165-2.165q.346-.346.758-.514Q8.046 4 8.512 4q.465 0 .876.167q.412.168.758.514L8.5 6.327l1.096 1.096l-.546.546l2.97 2.95l2.557-2.557q-.235-.333-.326-.681q-.091-.348-.091-.764q0-1.225.849-2.074q.849-.849 2.074-.849q.26 0 .5.037q.242.036.477.148L15.988 6.25l1.762 1.762l2.071-2.072q.117.235.151.476q.034.242.034.501q0 1.225-.85 2.074q-.848.85-2.073.85q-.416 0-.764-.09q-.348-.088-.68-.328z" />
            </svg>
        </div>
        <h1 class="text-4xl logo_gradient font-bold font_Poppins">Under Construction !!</h1>
    </div>
</div> -->
{#if frontend}
    {#each frontend as section}
        {#if section.interface && (section.interface === "DyHeroSection")}
            <TopicHeroSection {section} categories={data.categories} />
        <!-- <DyHeroSection {section} categories={data.categories}/> -->
        {/if}
        {#if section.interface && (section.interface === "DyRightImgSection")}
        <DyRightImgSection {section} />
        {/if}
        {#if section.interface && (section.interface === "DyLeftImgSection")}
        <DyLeftImgSection {section} />
        {/if}
        {#if section.interface && (section.interface === "DyParagraphs")}
        <DyParagraphs {section} />
        {/if}
        {#if section.interface && (section.interface === "DyFaqProfile")}
        <DyFaqProfile {section} />
        {/if}

        {#if section.interface && (section.interface === "DoubleTitleRightImgSection")}
        <DoubleTitleRightImgSection {section} />
        {/if}
        {#if section.interface && (section.interface === "DyMultiplePara")}
        <DyMultiplePara {section}/>
        {/if}
        <!-- ================Latest Components =============== -->
        {#if section.interface === "ThriveHeroSection"}
            <ThriveHeroSection {section}/>
        {/if}
        {#if section.interface === "ThriveTopicIntro"}
            <ThriveTopicIntro {section}/>
        {/if}
        {#if section.interface === "ThriveBrandReviews"}
            <ThriveBrandReviews {section}/>
        {/if}
        {#if section.interface === "ThriveClientSuccess"}
            <ThriveClientSuccess {section}/>
        {/if}
        {#if section.interface === "ThriveServices"}
            <ThriveServices {section}/>
        {/if}
        {#if section.interface === "ThriveDoubleList"}
            <ThriveDoubleList {section}/>
        {/if}
        {#if section.interface === "ThriveParagraphs"}
            <ThriveParagraphs {section}/>
        {/if}
        {#if section.interface === "ThriveTopicIntro2"}
            <ThriveTopicIntro2 {section}/>
        {/if}
        {#if section.interface === "ThriveParagraphLists"}
            <ThriveParagraphLists {section}/>
        {/if}
        {#if section.interface === "ThriveTitleParagraphs"}
            <ThriveTitleParagraphs {section}/>
        {/if}
        {#if section.interface === "ThriveTitleLists"}
            <ThriveTitleLists {section}/>
        {/if}
        {#if section.interface === "ThriveWhyChoose"}
            <ThriveWhyChoose {section}/>
        {/if}
    {/each}
{/if}
 