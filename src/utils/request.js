// import {fetch as fetchPro} from "whatwg-fetch"
// import qs from "qs"

// const get = (options) => {
//     let url = options.url;
//     let data = options.data;
   
//     if (data) {
//         var str = "";
//         for (var key in data) {
//             str += "&" + key + "=" + data[key];
//         }

//         url = url + "?" + str.slice(1);
//     }



//     var result = fetchPro(url, {
//         headers: {
//             "content-type": "application/json",
//             ...options.headers
//         }
//     }).then(res => res.json());


//     return result;
// }


// const post = (options) => {
//     var result = fetchPro(options.url, {
//         method: options.method,
//         body: qs.stringify(options.data),
//         headers: {
//             "content-type": "application/x-www-form-urlencoded"
//         }
//     }).then(res => res.json())

//     return result;
// }


// export default {
//     get,
//     post
// }

import axios from "axios";

const server =axios.create({
    timeout:5000,
    //baseUrl:"",
    widthCredentials:true
})

//请求的拦截 

server.interceptors.request.use((config)=>{
    if(config.method==="get"){
        config.params={...config.data};
    }
    return config;
    //config.header["content-type"]="application/json"
},(err)=>{
   return Promise.reject(err);
})

//响应拦截

server.interceptors.response.use((res)=>{
    if(res.status===200){
        return res.data;
    }
})

export default server;