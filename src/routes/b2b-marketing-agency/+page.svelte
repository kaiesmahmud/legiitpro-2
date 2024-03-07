<script>
	import DoubleTitleRightImgSection from './../../lib/components/home-page-components/DoubleTitleRightImgSection.svelte';
	import RightSideImgSection from './../../lib/components/home-page-components/RightSideImgSection.svelte';
	import ThriveTopicIntro2 from './../../lib/components/thrive-components/ThriveTopicIntro2.svelte';
	import TypesOfAgencies from './../../lib/components/services-page-components/TypesOfAgencies.svelte';
	import DyLeftImgSection from './../../lib/components/dynamic-components/DyLeftImgSection.svelte';
	import DyRightImgSection from './../../lib/components/dynamic-components/DyRightImgSection.svelte';
	import DyFAQ from './../../lib/components/dynamic-components/DyFAQ.svelte';
	import DyParagraphs from './../../lib/components/dynamic-components/DyParagraphs.svelte';
	import DyServiceHeroSection from './../../lib/components/services-page-components/DyServiceHeroSection.svelte';
	import { service_page_data } from './../../lib/constant/services_page_data.js';
	import DyPersonsSlide from '../../lib/components/services-page-components/DyPersonsSlide.svelte';
	import DyFaqProfile from '../../lib/components/dynamic-components/DyFaqProfile.svelte';
	import ThriveHeroSection from '../../lib/components/thrive-components/ThriveHeroSection.svelte';
	import ThriveTopicIntro from '../../lib/components/thrive-components/ThriveTopicIntro.svelte';
	import ThriveClientSuccess from '../../lib/components/thrive-components/ThriveClientSuccess.svelte';
	import ThriveServices from '../../lib/components/thrive-components/ThriveServices.svelte';
	import ThriveDoubleList from '../../lib/components/thrive-components/ThriveDoubleList.svelte';
	import ThriveBrandReviews from '../../lib/components/thrive-components/ThriveBrandReviews.svelte';
	import ThriveWhyChoose from '../../lib/components/thrive-components/ThriveWhyChoose.svelte';
    
    const {frontend,categories} = service_page_data

    import { generateMetaTags } from '$lib/functions/metaTags';
    
    // Define your page metadata
    const pageTitle = 'LegiitPro: Expert B2B Marketing Agency | Elevate Your Business Today';
    const pageDescription = 'Elevate your business with LegiitPro, a leading B2B marketing agency offering SEO, PPC, web design, and more. Contact us to boost your small business marketing efforts!';
    const pageUrl = 'https://www.legiitpro.com/b2b-marketing-agency';
    const pageImage = 'https://legiitpro-2.vercel.app/logo.webp';
    
    // Generate meta tags
    const metaTags = generateMetaTags({ title: pageTitle, description: pageDescription, url: pageUrl, image: pageImage });
    
    
    import { generateSnippetStructuredData } from '$lib/functions/snippetFunctions';



    // <div class="absolute shade-1 bg-teal-400/50 left-1 opacity-40 " />
    // <div class='absolute gradient-01 opacity-50 left-1 ' />
    // <div class='absolute gradient-02 opacity-50 bottom-4 left-1' />
</script>
<svelte:head>
	{@html metaTags}
    {@html generateSnippetStructuredData({
        title: 'How to Choose a B2B Marketing Agency: An in-depth Overview',
        description: ' LegiitPro offers comprehensive B2B marketing solutions, including SEO, PPC, and web design. Elevate your business with our expert services. Contact us now for a personalized consultation!',
        url: 'https://www.legiitpro.com/b2b-marketing-agency',
        image: 'https://www.example.com/article-image.jpg'
    })}
</svelte:head>

<main class="w-screen md:w-full overflow-hidden min-h-[100vh]">
    
    {#each frontend as section}
         {#if section.interface === "DyServiceHeroSection"}
        <DyServiceHeroSection {categories}/>
         {/if}
         {#if section.interface ==="TypesOfAgencies"}
        <TypesOfAgencies {section} />
         {/if}
         {#if section.interface === "DyParagraphs"}
             <DyParagraphs {section}/>
         {/if}
         {#if section.interface === "DyFAQ"}
             <DyFAQ {section}/>
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
         {#if section.interface === "DyFaqProfile"}
             <DyFaqProfile {section}/>
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
        {#if section.interface === "ThriveWhyChoose"}
            <ThriveWhyChoose {section}/>
        {/if}
        {#if section.interface === "ThriveTopicIntro2"}
            <ThriveTopicIntro2 {section}/>
        {/if}
        {#if section.interface === "RightSideImgSection"}
            <RightSideImgSection {section}/>
        {/if}
        {#if section.interface === "DoubleTitleRightImgSection"}
            <DoubleTitleRightImgSection {section}/>
        {/if}
    {/each}
</main>