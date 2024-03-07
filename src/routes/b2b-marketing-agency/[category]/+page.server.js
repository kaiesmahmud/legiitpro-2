import { redirect } from '@sveltejs/kit';
import { category_page_data } from '../../../lib/constant/category_page_data.js';

export const load= async(events)=>{
    // console.log(events)
    let  {url} = events
    // console.log(params.topic)
    // console.log(url.pathname)
    let backendData = category_page_data.filter(i=> i.url === url.pathname)[0]
    // console.log(backendData)
    if(backendData){
        let {pageName , url, frontend,subCategories,metaTags,snippet} = backendData
        // console.log(frontend)
        // console.log(categories)
        return{
            pageName:pageName , 
            url:url,
            frontend:frontend,
            subCategories:subCategories,
            metaTags:metaTags,
            snippet:snippet,
            }
    }else{
        console.log("Not Found Data")
        redirect(302, '/b2b-marketing-agency/'); // Redirect to the parent page
    }
    return{ url : url.pathname}
}