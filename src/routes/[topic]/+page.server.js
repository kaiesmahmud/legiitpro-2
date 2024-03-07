import { redirect } from '@sveltejs/kit';
import { topic_pages_data } from '../../lib/constant/topic_pages_data.js';

export const load= async(events)=>{
    // console.log(events)
    let  {url} = events
    // console.log(params.topic)
    // console.log(url.pathname)
    let backendData = topic_pages_data.filter(i=> i.url === url.pathname)[0]
    // console.log(backendData)
    if(backendData){
        let {frontend , categories,metaTags,snippet,url} = backendData
        // console.log(frontend)
        // console.log(categories)
        return{
             frontend:frontend , 
             categories:categories,
             metaTags:metaTags,
             snippet:snippet,
             url:url,
            }
    }else{
        console.log("Not Found Data")
        redirect(302, './'); // Redirect to the parent page
    }
}