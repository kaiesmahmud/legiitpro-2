import { redirect } from '@sveltejs/kit'
import { sub_category_page_data } from '../../../lib/constant/sub_category_page_data.js'

export const load= async(events)=>{
    // console.log(events)
    let  {url,params } = events
    // console.log(params.topic)
    // console.log(url.pathname)
    let backendData = sub_category_page_data.filter(i=> i.subCatURL === url.pathname)[0]
    // console.log(backendData)
    if(backendData){
        let {subCatName , subCatURL, frontend, } = backendData
        // console.log(frontend)
        // console.log(categories)
        return{
            subCatName:subCatName , 
            subCatURL:subCatURL,
            frontend:frontend, 
            }
    }else{
        console.log("Not Found Data")
        redirect(302, '/'); // Redirect to the parent page
    }
    return{ url : params.subcategory}
    // return{ url : url.pathname}
}