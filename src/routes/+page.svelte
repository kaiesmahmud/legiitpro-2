<script>
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
	
</script>
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
     
     {/each} 
	  
	<!-- <ProjectsShowCase/>
	<BlogsShowCase/> -->
	<ContactSection/>
</main>