import http from "utils/request";

export const homeApi =()=>http({
    method:"get",
    url: "/ajax/movieOnInfoList",
    data: {
        token:""
    }
})
export const newsApi =()=>http({
    method:"get",
    url: "http://localhost:3000/data",
    data: {
       
    }
})
