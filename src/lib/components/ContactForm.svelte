<script>
    let lookingFor = [
        {name:"ISW Development", value: "iswdevelopment"},
        {name:"ISW SEO", value: "iswseo"},
        {name:"CMS SEO", value: "cmsseo"},
        {name:"eCommerce SEO", value: "ecommerceseo"},
        {name:"Digital Advertising", value: "digitaladvertising"},
        {name:"Social Media Management", value: "smm"},
        {name:"Lead Management", value: "leadmanagement"},
        {name:"Website Integration", value: "webintegration"},
        {name:"eCommerce Development", value: "ecommercedevelopment"},
        {name:"Website Update", value: "websiteupdate"},
        {name:"Others SEO", value: "othersseo"},
    ]
</script>
<form class="flex flex-col gap-8 py-10 lg:px-5 lg:pl-16">
    <div>
        <p class="text-xl">Hello, I am</p>
        <input 
        type="text" 
        name="clientName" 
        id="clientName" 
        required placeholder="Your Name" 
        class="w-[95%] p-5 border-b-2 border-cyan-400 text-white bg-transparent  ring-offset-background focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
        >
    </div>
    <div class=" flex flex-col gap-3">
        <p class="text-xl">I am looking for </p>
        <div class=" grid grid-cols-2 p-2 gap-2 text-sm">
            {#each lookingFor as {name,value}}
            <div class="w-full flex items-center gap-3 hover:bg-slate-800 p-3 rounded"  >
                <input type="checkbox" name={name} id={value} class=" w-10 border-4 border-white leading-9">
                <label class=" cursor-pointer w-full" for={value}>{name}</label>
            </div>
            {/each}
        </div>
    </div>
    <div>
        <p class="text-xl">Details about project</p>
        <textarea 
        name="projectDetails" 
        id="projectDetails" 
        cols="40" 
        rows="5"
        class="w-[95%] p-5 border-b-2 border-cyan-400 text-white bg-transparent  ring-offset-background focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Explain Your Project.."
        ></textarea>
    </div>
    <div>
        <p class="text-xl">Email me at,</p>
        <input 
        type="email" 
        name="clientEmail" 
        id="clientEmail" 
        required placeholder="Your Email" 
        class="w-[95%]  p-5 border-b-2 border-cyan-400 text-white bg-transparent  ring-offset-background focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
        >
    </div>
    <div>
        <button type="submit" class="px-10 py-4 rounded font-semibold hover:text-slate-900 hover:bg-cyan-500 border border-cyan-500 transition-all ease-in">Send Inquiry</button>
    </div>
</form>