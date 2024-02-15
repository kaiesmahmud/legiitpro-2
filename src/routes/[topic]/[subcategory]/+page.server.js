export const load= async(events)=>{
    // console.log(events)
    let  {url,params } = events
    // console.log(params.topic)
    // console.log(url.pathname)
    //let backendData = category_page_data.filter(i=> i.url === url.pathname)[0]
    // console.log(backendData)
    // if(backendData){
    //     let {pageName , url, frontend,subCategories} = backendData
    //     // console.log(frontend)
    //     // console.log(categories)
    //     return{
    //         pageName:pageName , 
    //         url:url,
    //         frontend:frontend,
    //         subCategories:subCategories
    //         }
    // }else{
    //     console.log("Not Found Data")
    //     redirect(302, '/global-seo/'); // Redirect to the parent page
    // }
    return{ url : params.subcategory}
    // return{ url : url.pathname}
}