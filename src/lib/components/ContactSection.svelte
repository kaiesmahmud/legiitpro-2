<script>
	import Icon from '@iconify/svelte';
	import ContactForm from './ContactForm.svelte';
    const contactInfo = [
        {title: "info.legiitpro@gmail.com", url: "/", icon:"skill-icons:gmail-light"},
        {title: "+08801867074943", url: "/", icon:"material-symbols:call"},
        {title: "Schedule a Meeting", url: "/schedule-meeting", icon:"logos:google-meet"},
    ]
</script>
<section class=" relative flex items-start justify-center min-h-[100vh] pt-10 lg:pt-20
 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black text-white">
    
    <div class='absolute w-[100px] h-[100px] md:w-[400px] md:h-[100px] gradient-02 opacity-50 md:opacity-30 top-0 right-0 ' />

    <div class="w-full pl-5 lg:w-[90%] flex flex-col lg:flex-row ">
        <div class="w-full md:w-3/4 lg:w-1/2">
            <p class=" uppercase font-light text-gray-500">contact us</p>
            <h3  class="capitalize text-2xl md:text-4xl lg:text-5xl font-extrabold logo_gradient py-5">Get Your Free Consultation. It's easier together</h3>
            <p class="text-xs w-full pr-3 lg:w-3/4 text-justify">Dive into a adventure wherein your picks shape the outcome. This journey is complete of learning and increase opportunities. Set your desires, include the adventure, and let’s deliver this vision to life. Are you in?
            </p>
            <div class="flex flex-col justify-center items-start gap-3 py-10">
                {#each contactInfo as {title,url,icon}}
                     <a href={url} class=" flex items-center group  p-2 gap-5  hover:bg-slate-800 rounded-full pr-10">
                        <div class="text-3xl rounded-full p-5 bg-slate-800 group-hover:bg-slate-900 ">
                            <Icon icon={icon} />
                        </div>
                        <p>{title}</p>
                    </a>
                {/each}
            </div>
        </div>
        <div class="w-full lg:w-1/2 lg:border-l-2 lg:border-gray-700">
            <ContactForm/>
        </div>
    </div>
</section>