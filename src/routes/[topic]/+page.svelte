<script>
	import DoubleTitleRightImgSection from './../../lib/components/home-page-components/DoubleTitleRightImgSection.svelte';
    export let data ;
    
	import DyHeroSection from "../../lib/components/dynamic-components/DyHeroSection.svelte";
	import DyLeftImgSection from "../../lib/components/dynamic-components/DyLeftImgSection.svelte";
	import DyParagraphs from "../../lib/components/dynamic-components/DyParagraphs.svelte";
	import DyRightImgSection from "../../lib/components/dynamic-components/DyRightImgSection.svelte";
	import DyMultiplePara from '../../lib/components/dynamic-components/DyMultiplePara.svelte';
	import DyFaqProfile from '../../lib/components/dynamic-components/DyFaqProfile.svelte';
	
     import ThriveHeroSection from '../../lib/components/thrive-components/ThriveHeroSection.svelte';
	import ThriveTopicIntro from '../../lib/components/thrive-components/ThriveTopicIntro.svelte';
	import ThriveBrandReviews from '../../lib/components/thrive-components/ThriveBrandReviews.svelte';
	import ThriveClientSuccess from '../../lib/components/thrive-components/ThriveClientSuccess.svelte';
	import ThriveServices from '../../lib/components/thrive-components/ThriveServices.svelte';
	import ThriveDoubleList from '../../lib/components/thrive-components/ThriveDoubleList.svelte';
	import ThriveParagraphs from '../../lib/components/thrive-components/ThriveParagraphs.svelte';
	import ThriveTopicIntro2 from '../../lib/components/thrive-components/ThriveTopicIntro2.svelte';
	import ThriveParagraphLists from '../../lib/components/thrive-components/ThriveParagraphLists.svelte';
	import ThriveTitleParagraphs from '../../lib/components/thrive-components/ThriveTitleParagraphs.svelte';
	import ThriveTitleLists from '../../lib/components/thrive-components/ThriveTitleLists.svelte';
	import ThriveWhyChoose from '../../lib/components/thrive-components/ThriveWhyChoose.svelte';
    import TopicHeroSection from '../../lib/components/dynamic-components/TopicHeroSection.svelte';

    
</script>

{#if data.categories}
     {#each data.frontend as section}
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
