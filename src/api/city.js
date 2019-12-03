import http from "../utils/request"

export const cityAll=()=>http({
    method:"get",
    url: "/api/cityList",
   
})