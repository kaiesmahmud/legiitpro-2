<script>
	import ThriveServices from './../lib/components/thrive-components/ThriveServices.svelte';
	import ThriveTopicIntro2 from './../lib/components/thrive-components/ThriveTopicIntro2.svelte';
	import { home_page_data } from './../lib/constant/home_page_data.js';
	import { slider_logo_imgs } from './../lib/constant/logo-slider.js';
	import BrandsWeWork from "../lib/components/BrandsWeWork.svelte";
	import HeroSection from "../lib/components/HeroSection.svelte";
	import ServiceSection from "../lib/components/ServiceSection.svelte";
	import ProjectsShowCase from '../lib/components/ProjectsShowCase.svelte';
	import BlogsShowCase from '../lib/components/BlogsShowCase.svelte';
	import ContactSection from '../lib/components/ContactSection.svelte';
	import DyParagraphs from '../lib/components/dynamic-components/DyParagraphs.svelte';
	import RightSideImgSection from '../lib/components/home-page-components/RightSideImgSection.svelte';
	import LeftSideImgSection from '../lib/components/home-page-components/LeftSideImgSection.svelte';
	import DoubleTitleRightImgSection from '../lib/components/home-page-components/DoubleTitleRightImgSection.svelte';
	import ContentSliderSection from '../lib/components/home-page-components/ContentSliderSection.svelte';
	import HomeFaq from '../lib/components/home-page-components/HomeFaq.svelte';
	
	import {generateHomeSchema} from "$lib/functions/schemaGenerator"
	
	import { generateMetaTags } from '$lib/functions/metaTags';

    // Define your page metadata
    const pageTitle = 'LegiitPro: Trusted Digital Marketing Agency for Small Businesses';
    const pageDescription = 'Elevate your small business with LegiitPro, a trusted digital marketing agency since 2023. We specialize in SEO, PPC, web design, and more. Contact us to boost your online presence today!';
    const pageUrl = 'https://www.legiitpro.com/';
    const pageImage = 'https://www.legiitpro.com/logo.webp';

    // Generate meta tags
    const metaTags = generateMetaTags({ title: pageTitle, description: pageDescription, url: pageUrl, image: pageImage });
</script>
<svelte:head>
    {@html generateHomeSchema('Legiitpro', 'https://www.legiitpro.com/', 'https://www.legiitpro.com/logo.webp', '+8801516563343')}
	{@html metaTags}
</svelte:head>
<main class="w-screen md:w-full overflow-hidden">
	<HeroSection/>
	<BrandsWeWork imgURL={slider_logo_imgs}/>
	<ServiceSection/>
	{#each home_page_data as section}
          
         {#if section.interface && (section.interface === "DoubleTitleRightImgSection")}
              <DoubleTitleRightImgSection {section} />
         {/if}
         {#if section.interface && (section.interface === "RightSideImgSection")}
              <RightSideImgSection {section} />
         {/if}
         {#if section.interface && (section.interface === "LeftSideImgSection")}
              <LeftSideImgSection {section} />
         {/if}
          
         {#if section.interface && (section.interface === "ContentSliderSection")}
              <ContentSliderSection {section} />
         {/if}
          
         {#if section.interface && (section.interface === "HomeFaq")}
              <HomeFaq {section} />
         {/if}
		 {#if section.interface && (section.interface === "DyParagraphs")}
              <DyParagraphs {section} />
         {/if}
		 {#if section.interface && (section.interface === "ThriveTopicIntro2")}
              <ThriveTopicIntro2 {section} />
         {/if}
		 {#if section.interface && (section.interface === "ThriveServices")}
              <ThriveServices {section} />
         {/if}
		  
     
     {/each} 
	  
	<!-- <ProjectsShowCase/>
	<BlogsShowCase/> -->
	<ContactSection/>
</main>