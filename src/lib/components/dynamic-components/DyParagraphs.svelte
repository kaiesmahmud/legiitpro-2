<script>
    import Icon from '@iconify/svelte';
    export let section;
    let {title,description} = section;

</script>
<div class="flex items-center justify-center min-h-[50vh]">
    <div class="w-[80%] lg:w-2/3 flex flex-col gap-3 items-center text-center py-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl text-slate-900 shadow-lg">
        <div class="text-7xl  ">
            <Icon icon="fluent:point-scan-20-filled" />
        </div>
        <h2 class="text-2xl md:text-4xl font-bold ">{@html title}</h2>
             <p class=" font-light text-black/90 w-full lg:w-3/4 text-center">{@html description}</p>
    </div>
</div>