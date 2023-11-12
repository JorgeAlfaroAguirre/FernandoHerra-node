
export const httpClientPlugin = {

    get: async(url:string)=>{
        const response = await fetch( url );
        return await response.json();
    },
    post: async(url:string, body:any)=>{},
    put: async(url:string, body:any)=>{},
    delete: async(url:string, body:any)=>{},
}
