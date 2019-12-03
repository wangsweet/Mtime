import http from "utils/request";

export const homeApi =()=>http({
    method:"get",
    url: "/ajax/movieOnInfoList",
    data: {
        token:""
    }
})
