const axios = require('axios');

const axiosPlugin = {

    get: async(url)=>{
        const { data } = await axios.get( url );
        return data;
    },
    post: async(url, body)=>{},
    put: async(url, body)=>{},
    delete: async(url, body)=>{},



}

module.exports = {
    axiosPlugin
}