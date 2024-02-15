<script>
    import Icon from '@iconify/svelte';
    export let section,categories;
    let {title,description,bgImgCss} = section;

    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    // Default theme
    import '@splidejs/svelte-splide/css';
</script>
<div class={bgImgCss}>
    <div class="w-full flex flex-col md:items-center justify-center gap-3  backdrop-blur md:bg-slate-900/80 min-h-screen lg:min-h-[95vh] ">
        <div class="flex flex-col md:items-center justify-center  rounded-lg w-full lg:w-[80%] p-5 ">
            <div class="bg-slate-900/80 md:bg-transparent p-5 flex flex-col md:items-center justify-center rounded">
                {#if title}
                     <h1 class="logo_gradient text-2xl md:text-4xl lg:text-6xl py-5 capitalize  text-center">{title}</h1>
                {/if}
                {#if description}
                     <p class="w-full lg:w-2/3 text-start md:text-center text-white/80 text-xs lg:text-sm">{description}</p>
                {/if}
            </div>
            {#if categories.length}
            <div class="hidden md:flex items-center justify-center p-2 ">
                <Splide options={ {
                    rewind: true,
                    gap   : '1rem',
                    perPage: 3,
                    autoplay:true,
                    arrows:false,
                    type   : 'loop',
                    perMove: 1,
                    pagination:false,
                    interval:3000
            
                  } }
                   aria-label={title} 
                   class="w-screen p-5 md:w-1/3 cursor-grab text-white/80 lg:my-5"
                   >
                       {#each categories as {catName,catDesc, catURL,subCategories}}
                       <SplideSlide>
                           <div class="p-2 lg:p-5 py-5 h-full rounded md:border md:border-cyan-500 bg-slate-900/80 md:bg-transparent">
                               <a href={catURL} class="font-bold  capitalize   text-center  hover:text-cyan-500">
                                  <div class="text-3xl lg:text-5xl flex items-center justify-center p-2 lg:p-5">
                                      <Icon icon="material-symbols-light:linked-services-outline" />
                                  </div>
                                  <h2 class="logo_gradient text-2xl lg:text-3xl px-3 lg:px-1  "> {catName} </h2>
                              </a>
                              {#if subCategories?.length}
                              <div class="mt-5 flex flex-col gap-3 p-3 capitalize font-semibold text-white/80">
                                  {#each subCategories as {subCatName,subCatURL}}
                                      <a href={subCatURL} class=" text-white/80 hover:text-cyan-500 flex justify-between items-center gap-5">
                                          <h3 class="flex gap-2 items-center">
                                              <div>
                                                  <Icon icon="arcticons:ov-plus" />
                                              </div>
                                              {subCatName}
                                          </h3>
                                          <div class="text-lg">
                                              <Icon icon="quill:link-out" />
                                          </div>
                                      </a>
                                  {/each}
                              </div>
                              {/if}
                           </div>
                       </SplideSlide>
                       {/each}
                </Splide>
            </div>
            <div class="flex md:hidden items-center justify-center p-2 ">
                <Splide options={ {
                    rewind: true,
                    gap   : '1rem',
                    perPage: 1,
                    autoplay:true,
                    arrows:false,
                    type   : 'loop',
                    perMove: 1,
                    pagination:false,
                    interval:3000
            
                  } }
                   aria-label={title} 
                   class="w-screen p-5 md:w-1/3 cursor-grab text-white/80 lg:my-5 "
                   >
                       {#each categories as {catName,catDesc, catURL,subCategories}}
                       <SplideSlide>
                           <div class="p-2 lg:p-5 py-5 h-full rounded md:border md:border-cyan-500 bg-slate-900/80 md:bg-transparent">
                               <a href={catURL} class="font-bold  capitalize   text-center  hover:text-cyan-500">
                                  <div class="text-3xl lg:text-5xl flex items-center justify-center p-2 lg:p-5">
                                      <Icon icon="material-symbols-light:linked-services-outline" />
                                  </div>
                                  <h2 class="logo_gradient text-2xl lg:text-3xl px-3 lg:px-1  "> {catName} </h2>
                              </a>
                              <div class="mt-5 flex flex-col gap-3 p-3 capitalize font-semibold text-white/80">
                                  {#each subCategories as {subCatName,subCatURL}}
                                      <a href={subCatURL} class=" text-white/80 hover:text-cyan-500 flex justify-between items-center gap-5">
                                          <h3 class="flex gap-2 items-center">
                                              <div>
                                                  <Icon icon="arcticons:ov-plus" />
                                              </div>
                                              {subCatName}
                                          </h3>
                                          <div class="text-lg">
                                              <Icon icon="quill:link-out" />
                                          </div>
                                      </a>
                                  {/each}
                              </div>
                           </div>
                       </SplideSlide>
                       {/each}
                </Splide>
            </div>
            {/if}
        </div>
    </div>
</div>