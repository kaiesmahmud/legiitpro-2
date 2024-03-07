<script>
	import ThriveDoubleList from './../../lib/components/thrive-components/ThriveDoubleList.svelte';
	import ThriveServices from './../../lib/components/thrive-components/ThriveServices.svelte';
	import ThriveClientSuccess from './../../lib/components/thrive-components/ThriveClientSuccess.svelte';
	import ThriveBrandReviews from './../../lib/components/thrive-components/ThriveBrandReviews.svelte';
	import ThriveTopicIntro from './../../lib/components/thrive-components/ThriveTopicIntro.svelte';
	import ThriveHeroSection from './../../lib/components/thrive-components/ThriveHeroSection.svelte';
	import ThriveParagraphs from '../../lib/components/thrive-components/ThriveParagraphs.svelte';
	import ThriveTopicIntro2 from '../../lib/components/thrive-components/ThriveTopicIntro2.svelte';
	import ThriveParagraphLists from '../../lib/components/thrive-components/ThriveParagraphLists.svelte';
	import ThriveTitleParagraphs from '../../lib/components/thrive-components/ThriveTitleParagraphs.svelte';
	import ThriveTitleLists from '../../lib/components/thrive-components/ThriveTitleLists.svelte';
	import ThriveWhyChoose from '../../lib/components/thrive-components/ThriveWhyChoose.svelte';
    const frontend = [
        //ThriveHeroSection
        {
            interface: "ThriveHeroSection",
            bgImgCss: "topicsPage-digital-bg",
            title:"Social Media Management",
            subTitle: "Drive Lucrative Results on the Right Channels"
        },
        //ThriveParagraphs
        {
            interface: "ThriveParagraphs",
            paragraphs: [
                "Are your social media efforts falling short of expectations? Now more than ever, social media is a “pay-to-play” environment requiring all the resources you have: a cohesive game plan, 100 percent commitment and a well-defined budget. On top of organic outreach, getting content in front of your target audience can be challenging without shelling out advertising money, whether for an ongoing campaign or a once-off sponsored post.",
                "To maximize your online presence, Thrive Internet Marketing Agency weaves social media management services into your overall marketing strategy. The right Facebook or Instagram management service can attract, nurture and convert followers into loyal customers. The social media management campaigns our team has implemented and overseen for our small business, enterprise or franchise clients are a testament to that."
            ]
        },
        //ThriveBrandReviews
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
        //ThriveTopicIntro2
        {
            interface: "ThriveTopicIntro2",
            title: "What Is Social Media Management?",
            subTitle: "Custom Strategies That Promote Stellar Customer Engagement",
            firstPara: "As social media evolves, market players maintain each channel’s core purpose: the trifecta of connection, communication and community. Sprout Social data showed that 57 percent of consumers will follow a brand's social page to learn about new products or services. It’s why brands should make sure they’re posting content that satisfies connection and engages in communication while building community – instead of posting promotions for users without any thought.",
            sidePara: [
                "Enter social media management. Sometimes called social media marketing management, it is a branch of social media marketing (SMM) that covers planning, crafting and publishing content on social platforms. It involves regular social profile audits and audience research, which are essential to rolling out relevant content.",
                "At Thrive, we take a holistic approach to managing our clients’ social media accounts successfully. Our social media management company combines organic and paid solutions to deliver the most efficient and profitable results.",
            ],
            imgUrl: "https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-fadafbc/thriveagency.com/files/media-management.webp",

        },
        //ThriveParagraphLists
        {
            interface: "ThriveParagraphLists",
            title: "Integrated Processes for Maximum Impact",
            paragraphs: [
                "Social media marketing entails more integrated processes to ensure an interconnectedness between your customer, your content and your company. Simply sharing links to your content or web pages on your social channels is not enough if you hope to achieve results for your social media activities.",
                "Aside from fully understanding and learning the social media management definition by heart, you should master its major processes, too. This will assist you in better understanding how to leverage social media marketing to gain a competitive advantage and effectively bolster your entire marketing strategy.",
                "Here’s what your social media management game plan must include:",
            ],
            lists : [
                {
                    listTitle: "Strategy Creation",
                    listDescription: [
                        "the map or plan containing your social media goals, steps to achieve them, a corresponding timeline and metrics to track progress",
                        " The social media management definition isn't complete without a mention of strategy. It's the master plan, and it helps you visualize what business social media management looks like for you. Some major factors to consider are which platforms to capitalize on, who your audience is, what types of content to produce, what key performance indicators (KPIs) to measure and which social media management software to use."
                    ],
                },
                {
                    listTitle: "Inbound Engagement Monitoring",
                    listDescription: [
                        "the process of responding to comments, questions and interactions with all social media content and profiles and continuing conversation initiated by fans",
                        " Studies show that an average of two-thirds of consumers desire a connection with brands. It makes sense, then, to strive to facilitate two-way communication every chance you get. This is true for all of your social platforms, even when you're deploying Instagram management services or exploring TikTok management solutions using mostly video content."
                    ],
                },
                {
                    listTitle: "Analytics Monitoring",
                    listDescription: [
                        "the gathering and checking of data against metrics to ensure the accomplishment of results",
                        "Let data drive your corporate, multi-location business or franchise social media management campaigns. You can monitor important metrics on your chosen platforms, such as engagement metrics (likes, shares and comments), impressions and click-through rates (for targeted social ads)"
                    ],
                },
            ]
        },
         //ThriveTopicIntro2
        {
            interface: "ThriveTopicIntro2",
            title: "Why Businesses Need Social Media Management",
            subTitle: "Online Solutions That Make Your Brand Stand Out",
            firstPara: "Business owners and marketers know that social media is an important part of any digital strategy. As such, social media is often tackled at the launch of a business or brand.",
            sidePara: [
                "But when you dive into social media marketing, it immediately becomes apparent there are several elements to navigate and implement if you hope to succeed across social platforms.",
                "Consider how social media management for small businesses alone requires you to create an overarching strategy, post and schedule high-quality content, respond to customer comments, engage with users and set up paid advertising campaigns.",
                "It begs for its own budget, tools and even a team of strategists and specialists!",
                "Balancing all these moving parts is what social media management is about.",
                "For many businesses, giving up the resources required to carry out fullscope Facebook or LinkedIn management services in-house is a tall ask. The additional costs of, for instance, YouTube management or Pinterest management services are likely not even a consideration. Social media management of each of these platforms requires bandwidth many businesses simply don’t have."
            ],
            imgUrl: "https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-fadafbc/thriveagency.com/files/business-media.webp",

        },
         //ThriveTitleParagraphs
        {
            interface: "ThriveTitleParagraphs",
            title: "Enjoying the Benefits – Minus the Burden",
            paragraphs: [
                "While it’s crucial for business owners and marketers to understand the true effort and cost involved in social media marketing, they should also be aware of the incredible benefits a well-rounded strategy can bring. If you want these benefits at a fraction of the cost, consider how a social media management agency is uniquely positioned to support you.",
                "According to Rachel Czeszewski, Thrive’s senior social media manager (paid), when social media management is brought in-house, it rarely gets the attention it deserves and the strategic input it needs to be successful.",
                "Why waste your chance to raise brand awareness, generate leads and garner sales by trying to do it alone and falling short?",

            ]
        },
        //ThriveTitleLists
        {
            interface: "ThriveTitleLists",
            title: "How the Best Social Media Marketers Achieve Their Clients’ Goals:",
            lists : [
                "Your content is tailored to the needs and preferences of your target audience.",
                "You never miss an opportunity to respond to questions or continue conversations initiated by customers or fans.",
                "Your social media management budget is well-appropriated and prudently managed.",
                "Your social media management service package can be divided into organic and paid social, depending on your priorities.",
                "Nuances can be applied while keeping multi-channel efforts unified.",
            ]
        },
         //ThriveTitleParagraphs
        {
            interface: "ThriveTitleParagraphs",
            title: "Your Search for the Best Social Media Management Company Ends Here",
            paragraphs: [
                "Thrive offers comprehensive Facebook and Instagram strategies as well as TikTok and YouTube management. In fact, Thrive provides a full suite of social media marketing and management services that company owners and marketers (no matter their niche) can believe in.",
                "Furthermore, we integrate our social media follower growth tactics into your email marketing campaigns for targeted reach and engagement. We also align your social strategy with your website optimization tactics to help increase site traffic and boost your conversion rate. In this way, your social media strategy is supported by your other marketing strategies and vice versa.",

            ]
        },
        //ThriveServices
        {
            interface: "ThriveServices",
            title:"Social Media Platforms Thrive Helps Manage",
            subTitle:"Reach Your Niche Market Audience With a Robust Social Presence",
            services: [
                {
                    icon : "",
                    service_title: "Facebook Management",
                    service_url:"/",
                    service_description: "Boasting over 1 billion daily active users, Facebook has sufficient reach to support social media management for everything from small business clients to large corporations. Its main appeal lies in its low-cost marketing, exact targeting and organic follower engagement. Maximize these benefits when you sign up for our Facebook management services. Our social media management company offers strategy recommendations, content development, comment monitoring for social content and paid advertising, among others.",

                },
                {
                    icon : "",
                    service_title: "Twitter Management",
                    service_url:"/",
                    service_description: "Hop into the conversations that matter to your target audience, advocate causes your company believes in and cultivate an online community on Twitter. This chatty app is conducive to expanding your outreach and establishing your brand personality. Whether it's large enterprise or small business social media management you require, our Twitter management experts aid you in devising a cohesive, channel-specific strategy.",

                },
                {
                    icon : "",
                    service_title: "Instagram Management",
                    service_url:"/",
                    service_description: "About one third of the 1 billion Instagram monthly active users have purchased a product on the visual storytelling app. Adapt social media marketing management on this platform to achieve your sales goals. You can leave the legwork to Thrive, an Instagram management agency with extensive experience in optimizing vanishing and user-generated content. We handle it all, from gallery posts and Instagram stories to interstitial ads.",

                },
                {
                    icon : "",
                    service_title: "LinkedIn Management",
                    service_url:"/",
                    service_description: "Our experts have found LinkedIn an optimal place for business-to-business (B2B) companies to compel executives and decision-makers to partner with them. At Thrive, we take advantage of its native social media management software solutions to employ lead-generating enterprise social media management. Our array of LinkedIn management services are designed to bolster your brand credibility, demonstrate your thought-leadership, edge out your rivals and gain market trust.",

                },
                {
                    icon : "",
                    service_title: "YouTube Management",
                    service_url:"/",
                    service_description: "YouTube’s commercial success is well-documented, but its emergence is tied to how it yields relevant videos to user searches. Your brand can take part in this cultural moment by embedding technical search engine optimization (SEO) best practices into your channel. Our YouTube management approach simplifies the steps for you, researching the most appropriate title tags and descriptions to go with your video uploads.",

                },
                {
                    icon : "",
                    service_title: "Pinterest Advertising",
                    service_url:"/",
                    service_description: "Improve your add-to-cart and checkout rates when you share your eCommerce catalog on Pinterest. No other social media management agencies are as committed as Thrive in strategically posting, optimizing and positioning your pins. Responding to inbound engagement like comments, questions and feedback is also a part of our social media management business strategists' day.",

                },
                {
                    icon : "",
                    service_title: "TikTok Management",
                    service_url:"/",
                    service_description: "Transitioning quickly as a rising star to a global platform, TikTok has taken social media by storm and helped level social media management for small businesses. Step up with TikTok for Business solutions that are well-designed for targeting, forging an authentic connection with and empowering the next generation. Entrust your social media content management to our specialists who understand how this massive platform works",

                }, 
            ]
        },
        //ThriveWhyChoose
        {
            interface: "ThriveWhyChoose",
            title:"Why Choose Thrive for Your Social Media Management",
            subTitle:"Invest in Flexible Social Packages Customized To Meet Your Growth Goals",
            descriptions : [
                "More and more small-business owners are choosing to collaborate with experts, as social media management is no easy feat. It requires meticulous attention and time to master. Here at Thrive, we cater to your specifications, no matter your industry, size of business or budget.",
                "We aim to pass on to clients the benefits of knowing the ins and outs of each process through our almost two decades' worth of social media marketing background. Your search for “social media management near me” is over. Let our data-driven professionals manage and steer your social media accounts toward your desired results.",
                "Below are some of the benefits you’ll enjoy:",
            ],
            services: [
                {
                    icon : "",
                    service_title: "Deliverable-Based Packages", 
                    service_description: "From content and engagement to strategy and analytics, Thrive manages small- and large-scale deliverables for clients each month. Say, for instance, you enlist our Instagram management services. You can expect us to deploy a customized list of items within the project deadline. Our social media management agency does not skimp on the best social media management tools and tactics to meet, if not exceed, your expectations.",

                },
                {
                    icon : "",
                    service_title: "Extensive Subject Matter Expertise", 
                    service_description: "Get matched with the best social media management strategists, depending on your most urgent needs. Both our paid and organic teams have precise skill sets to cover all bases, whether you want pay-per-click advertising out of our LinkedIn management services or prefer organic posting from our Pinterest management services. We tailor social media management for small businesses, Fortune 500 companies and even franchisees.",

                },
                {
                    icon : "",
                    service_title: "Dedicated Account Managers", 
                    service_description: "Consider Thrive’s social media management firm as an extended unit of your marketing team. As a direct or white label social media management client, an account manager will be working closely with you from start to finish. Think of your AM as your go-to person from the inside, providing you with an overview or the details of your progress.",

                },
                {
                    icon : "",
                    service_title: "Sharp Trendspotting", 
                    service_description: "Tired of how past social media management companies have brought the same underwhelming results? Resistance to shifts in social media management service packages is a no-no within our agency. We are keen to spot, predict and stay on top of the most bankable trends and the best social media management tools that go with them.",

                },
                {
                    icon : "",
                    service_title: "“Quality Over Quantity” Focus",
                    service_url:"/",
                    service_description: "As with any other digital marketing process, social media content management is dynamic and always advancing. The teams that manage social media accounts stay flexible to the changes, adapting strategies and techniques accordingly. One of the most vital pivots we’ve made is to move from increasing posting frequency to crafting valuable content instead, in all our Facebook, Instagram and Twitter management.",

                },
                {
                    icon : "",
                    service_title: "Semi-Monthly Reports",
                    service_url:"/",
                    service_description: "For the most accurate picture of your campaign status, you’re given mid-month and monthly reports. Your AM is also available to answer any questions you may have about our franchise social media management or enterprise social media management solutions. Plus, we offer you access to your real-time data through Thrive’s proprietary social media management software, also known as the online client portal.",

                },
            ]
        }, 
        //ThriveTopicIntro
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
        //ThriveClientSuccess
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
        //ThriveDoubleList
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
{#each frontend as section}
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
 