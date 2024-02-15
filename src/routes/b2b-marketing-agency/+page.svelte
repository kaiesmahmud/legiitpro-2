<script>
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
    
    // <div class="absolute shade-1 bg-teal-400/50 left-1 opacity-40 " />
    // <div class='absolute gradient-01 opacity-50 left-1 ' />
    // <div class='absolute gradient-02 opacity-50 bottom-4 left-1' />
    const {frontend,categories} = service_page_data
</script>

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
    {/each}
</main>