<script>
	import LeftSideImgSection from './../../../lib/components/home-page-components/LeftSideImgSection.svelte';
	import RightSideImgSection from './../../../lib/components/home-page-components/RightSideImgSection.svelte';
	import { generateSnippetStructuredData } from '$lib/functions/snippetFunctions';
	import { generateMetaTags } from '$lib/functions/metaTags';
	import DyFaqProfile from './../../../lib/components/dynamic-components/DyFaqProfile.svelte';
	import DyFAQ from './../../../lib/components/dynamic-components/DyFAQ.svelte';
	import DyCategoryHeroSection from '../../../lib/components/category-page-components/DyCategoryHeroSection.svelte';
	import DySubCatLists from '../../../lib/components/category-page-components/DySubCatLists.svelte';
	import DyParagraphs from '../../../lib/components/dynamic-components/DyParagraphs.svelte';
	import DyPersonsSlide from '../../../lib/components/services-page-components/DyPersonsSlide.svelte';
	import DyRightImgSection from '../../../lib/components/dynamic-components/DyRightImgSection.svelte';
	import DyLeftImgSection from '../../../lib/components/dynamic-components/DyLeftImgSection.svelte';
	import DyThreeSections from '../../../lib/components/category-page-components/DyThreeSections.svelte';
	import ThriveHeroSection from '../../../lib/components/thrive-components/ThriveHeroSection.svelte';
	import ThriveTopicIntro from '../../../lib/components/thrive-components/ThriveTopicIntro.svelte';
	import ThriveBrandReviews from '../../../lib/components/thrive-components/ThriveBrandReviews.svelte';
	import ThriveClientSuccess from '../../../lib/components/thrive-components/ThriveClientSuccess.svelte';
	import ThriveServices from '../../../lib/components/thrive-components/ThriveServices.svelte';
	import ThriveDoubleList from '../../../lib/components/thrive-components/ThriveDoubleList.svelte';
	import ThriveParagraphs from '../../../lib/components/thrive-components/ThriveParagraphs.svelte';
	import ThriveTopicIntro2 from '../../../lib/components/thrive-components/ThriveTopicIntro2.svelte';
	import ThriveParagraphLists from '../../../lib/components/thrive-components/ThriveParagraphLists.svelte';
	import ThriveTitleParagraphs from '../../../lib/components/thrive-components/ThriveTitleParagraphs.svelte';
	import ThriveTitleLists from '../../../lib/components/thrive-components/ThriveTitleLists.svelte';
	import ThriveWhyChoose from '../../../lib/components/thrive-components/ThriveWhyChoose.svelte';

    export let data 
    const {frontend, subCategories,metaTags,snippet,url } = data
</script>
<svelte:head>
     {#if metaTags}
	{@html generateMetaTags({title: metaTags?.title, description:metaTags.description, url:url, image:metaTags.image})}
     {/if}
     {#if snippet}
          {@html generateSnippetStructuredData({
               title: snippet?.title,
               description: snippet?.description,
               url: 'https://www.legiitpro.com'+url,
               image: snippet?.pageImgUrl
     })}
     {/if}
</svelte:head>
<main class="w-screen overflow-hidden lg:w-full">
    {#each frontend as section}
        {#if section.interface === "DyCategoryHeroSection"}
            <DyCategoryHeroSection {section}  />
        {/if}
        {#if section.interface === "DySubCatLists"}
            <DySubCatLists {section} {subCategories}  />
        {/if}
        {#if section.interface === "DyThreeSections"}
            <DyThreeSections {section} {subCategories}  />
        {/if}
        {#if section.interface === "DyParagraphs"}
            <DyParagraphs {section}/>
        {/if}
        {#if section.interface === "DyFaqProfile"}
            <DyFaqProfile {section}/>
        {/if}
        {#if section.interface === "DyPersonsSlide"}
            <DyPersonsSlide {section}/>
        {/if}
        {#if section.interface === "DyRightImgSection"}
            <DyRightImgSection {section}/>
        {/if}
        {#if section.interface === "DyLeftImgSection"}
            <DyLeftImgSection {section}/>
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

        {#if section.interface === "RightSideImgSection"}
            <RightSideImgSection {section}/>
        {/if}
        {#if section.interface === "LeftSideImgSection"}
            <LeftSideImgSection {section}/>
        {/if}
    {/each}

</main>