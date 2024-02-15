<script>
    import Icon from '@iconify/svelte';
    export let section;
    let {title,description} = section;

</script>
<div class="flex items-center justify-center min-h-[50vh]">
    <div class="w-[80%] lg:w-2/3 flex flex-col gap-3 items-center text-center py-10">
        <div class="text-7xl text-cyan-500">
            <Icon icon="fluent:point-scan-20-filled" />
        </div>
        <h2 class="text-2xl md:text-4xl font-bold logo_gradient">{@html title}</h2>
             <p class=" font-light text-white/90 w-full lg:w-3/4 text-center">{@html description}</p>
    </div>
</div>