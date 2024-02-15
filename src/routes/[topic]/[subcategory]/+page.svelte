<script>
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

    const frontend = [
        {
            interface: "ThriveHeroSection",
            bgImgCss: "topicsPage-digital-bg",
            title:"Search Engine Optimization - SEO Company",
            subTitle: "Invest in Your Future with an SEO Company that Gets Results"
        },
        {
            interface: "ThriveTopicIntro",
            title:"An SEO Marketing Company That Gets It",
            description: "Let's face it. You know what you need but you just don't know how to get it. Our SEO specialists hear that over and over from SEO clients who contact Thrive Internet Marketing Agency.",
            listTitle: "You're likely here because of one or more of the following reasons:",
            list: [
                "Your website isn't being found online.",
                "Your website traffic has diminished recently and you don't know why",
                "Suddenly, your volume of incoming calls and leads has declined",
                "You're starting a new website and want to ramp up new business quickly"
            ],
            lastDescription: "If any of these four pain points ring a bell, rest assured, you've come to the right SEO company. There's a reason why Thrive is currently serving hundreds of SEO clients and providing optimization solutions to answer Google's ever-changing algorithm",
            imgUrl:"https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-fadafbc/thriveagency.com/files/SEO_2.jpg",
        },
        {
            interface: "ThriveBrandReviews",
            brands: [
            {
                company:"Google",
                imgUrl: "https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-fadafbc/thriveagency-fab2023.flywheelsites.com/files/services-google-01.png",
                reviews : "130+ Reviews"
            },
            {
                company:"Clutch",
                imgUrl: "https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-fadafbc/thriveagency-fab2023.flywheelsites.com/files/services-clutch-01.png",
                reviews : "10+ Reviews"
            },
            {
                company:"UpCity",
                imgUrl: "https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-fadafbc/thriveagency-fab2023.flywheelsites.com/files/services-upcity-01.png",
                reviews : "30+ Reviews"
            },
        ]
        },
        {
        interface: "ThriveClientSuccess",
        title: "Providing SEO Solutions to Solve Your Problems",
        subTitle: "Our Passion is Growing Your Online Business ",
        firstPara: "For more than 15 years, we've been providing SEO solutions for businesses wanting to expand their online presence, increase leads and grow their revenue. Our tried-and-true SEO techniques and practices have resulted in many success stories for clients. Here's a few recent examples:",
        lastPara: "Are you on the first page of the search engine results pages (SERPs) for keywords that match your business or brand? If not, you're missing out on valuable leads. Search engine optimization isn't a fad and it's no longer an option to simply not think about it if you want to grow your business. It's an indispensable part of any plan to market products or services and bring in more qualified leads and sales",
        clientProjects: [
            {
                imgUrl: "https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-fadafbc/thriveagency.com/files/construction-company-image-1.png",
                title:"CONSTRUCTION COMPANY",
                url:"/",
                leads:"+800%",
                organic: "+126.5%",
                quote:"Thrive has gone above and beyond and it's allowed me to focus on other aspects of business development. Thrive understands the intricate needs of what we want to accomplish."
            },
            {
                imgUrl: "https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-fadafbc/thriveagency.com/files/ecommerce-business-2.png",
                title:"CONSTRUCTION COMPANY",
                url:"/",
                leads:"+130%",
                organic: "+70%",
                quote:"Thrive has gone above and beyond and it's allowed me to focus on other aspects of business development. Thrive understands the intricate needs of what we want to accomplish."
            },
            {
                imgUrl: "https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-fadafbc/thriveagency.com/files/hvac-service-company-2.png",
                title:"CONSTRUCTION COMPANY",
                url:"/",
                leads:"+763%",
                organic: "+349%",
                quote:"Thrive has gone above and beyond and it's allowed me to focus on other aspects of business development. Thrive understands the intricate needs of what we want to accomplish."
            },
        ]
        },
        {
        interface: "ThriveServices",
        title:"Our SEO Services",
        subTitle:"Increase Your Search Rankings and Get Discovered More Online",
        services: [
            {
                icon : "",
                service_title: "Keyword Research & Strategy",
                service_url:"/",
                service_description: "Thrive is an SEO agency that understands your niche and can boost your ranking for specific search terms. Your dedicated SEO specialist will review the keywords your website is currently ranking for, take your keyword wishlist and conduct additional keyword research to build a list that makes the most sense for your website and the competitive landscape.",

            },
            {
                icon : "",
                service_title: "Link Building",
                service_url:"/",
                service_description: "Backlinks are a huge component of ranking higher in search results, but not just any link! That's why you should partner with a search engine optimization company like Thrive that has a dedicated link building team and has connections with many high-quality and relevant websites.",

            },
            {
                icon : "",
                service_title: "Technical SEO",
                service_url:"/",
                service_description: "Rankings can improve with optimizations on your website's back-end, such as improving page speed. By fixing these errors, it makes it easier on search engines when they crawl your website. And when you make search engines happy, your rankings can make you even happier!",

            },
            {
                icon : "",
                service_title: "Local SEO",
                service_url:"/",
                service_description: "Statistics show that 64 percent of customers search for local businesses online. Improve your company's local SEO rankings with Google Business Profile or Google My Business (GMB) optimization and attract high-intent customers. We optimize your GMB profile and manage your online reputation to grow your local following",

            },
            {
                icon : "",
                service_title: "On-Page SEO",
                service_url:"/",
                service_description: "Enhance your online visibility and earn high-quality traffic. At Thrive, we ensure our SEO services are aligned with search engines best practices to boost your website's trustworthiness. Our SEO experts publish unique, value-rich content, optimize your headlines and HTML tags and utilize high-resolution images",

            },
            {
                icon : "",
                service_title: "Off-Page SEO",
                service_url:"/",
                service_description: "Off-page optimization is crucial in establishing brand credibility and increasing online exposure. Partner with our SEO company and let us help you demonstrate your industry expertise. We leverage social media marketing, link building and influencer marketing to generate qualified links and positive ratings.",

            },
            {
                icon : "",
                service_title: "Franchise SEO",
                service_url:"/",
                service_description: "Supercharge your franchise marketing efforts with Thrive's SEO services for multiple-location businesses. We publish geo-specific content, leverage Nextdoor advertising and develop custom web designs. Thrive is the SEO firm that'll maximize your brand impact and increase your leads and sales",

            },
            {
                icon : "",
                service_title: "Shopify SEO",
                service_url:"/",
                service_description: "Strengthen your online store's digital presence and expand your market reach. Our SEO experts offer 24/7 customer support for your urgent needs and concerns. We provide a Shopify SEO audit, Shopify web design, paid advertising and review response publishing services to optimize your customer's Shopify experience",

            },
            {
                icon : "",
                service_title: "Amazon SEO",
                service_url:"/",
                service_description: "Differentiate your brand on Amazon and get found by millions of customers who are ready to convert. We optimize your Amazon product listings, maximize ad placements and implement goal-oriented Amazon marketing services (AMS) SEO solutions to promote your products to the right customers.",

            },
            {
                icon : "",
                service_title: "eCommerce SEO",
                service_url:"/",
                service_description: "Provide your customers with a 24/7 convenient shopping experience and increase your client retention rate. We launch targeted email marketing campaigns and optimize your site for mobile and voice search to create personalized brand experiences. We also offer Walmart Marketplace integrations to increase your sales volume",

            },
            {
                icon : "",
                service_title: "Content Writing",
                service_url:"/",
                service_description: "We have a team of writers that produce SEO-friendly content for your website, whether that’s creating share-worthy blog posts or optimizing pre-existing service and product pages with more content. Search engines love a website that adds new content on a regular basis. Choose our SEO firm to support your content needs and bolster your search marketing.",

            },
            {
                icon : "",
                service_title: "Conversion Rate Optimization (CRO)",
                service_url:"/",
                service_description: "Increase your customer's lifetime value and grow your online revenue with Thrive's CRO services. Our SEO marketing company integrates pay-per-click marketing with our SEO services to maximize your conversion opportunities. We perform website analyses, landing page optimization and A/B split testing.",

            } 
        ]
        },
        {
        interface:"ThriveDoubleList",
        title: "SEO Services You Can Expect From Thrive",
        description: "As a full-service digital marketing company, Thrive offers a comprehensive array of professional search engine optimization services to get your business more visibility in search using only trustworthy, future-proof, white hat SEO techniques, such as:",
        firstList : [
            "Custom SEO Strategy: We customize our SEO services to fit your needs. We use the tactics that make the most impact for your unique business",
            "Comprehensive Onsite SEO: Title tags, meta descriptions, alt tags, internal linking, etc",
            "Thorough keyword research and market analysis",
            "High-quality copywriting to keep your site content fresh and encourage return traffic",
        ],
        secondList: [
            "In-depth evaluation of the competition",
            "Careful Link Building: By hand, on diverse domains with high domain authority",
            "Organic SEO tactics for long-term results coupled with paid ads for quick boosts (if PPC is something you're interested in pursuing)",
            "Syndication of articles on social media, curated sites and news outlets",
            "Google Analytics and other data tracking software to learn from trends, traffic and more.",
        ]
        },
    ]
</script>
<div class="flex items-center justify-center p-10 h-screen">
    <div class="flex flex-col items-center justify-center gap-5">
        <div class="text-[20vh] text-cyan-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...$$props}>
                <path fill="currentColor" d="m18.958 20l-5.552-5.552l1.061-1.061l5.552 5.551zM5.062 20L4 18.938l6.958-6.957l-2.97-2.95l-.546.546l-.948-.967v1.8l-.546.546l-2.621-2.621l.546-.547h1.8l-.961-.942l2.165-2.165q.346-.346.758-.514Q8.046 4 8.512 4q.465 0 .876.167q.412.168.758.514L8.5 6.327l1.096 1.096l-.546.546l2.97 2.95l2.557-2.557q-.235-.333-.326-.681q-.091-.348-.091-.764q0-1.225.849-2.074q.849-.849 2.074-.849q.26 0 .5.037q.242.036.477.148L15.988 6.25l1.762 1.762l2.071-2.072q.117.235.151.476q.034.242.034.501q0 1.225-.85 2.074q-.848.85-2.073.85q-.416 0-.764-.09q-.348-.088-.68-.328z" />
            </svg>
        </div>
        <h1 class="text-4xl logo_gradient font-bold font_Poppins">Under Construction !!</h1>
    </div>
</div>
<!-- {#each frontend as section}
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
{/each} -->
 