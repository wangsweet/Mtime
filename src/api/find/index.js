import http from "utils/request";

export const newsApi =()=>http({
    method:"get",
    url: "http://localhost:3000/data",
    data: {
       
    }
})
