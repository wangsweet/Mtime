import http from "utils/request";

export const goodslistApi =(cid)=>http({
    method:"get",
    url: "/index.php",
    data: {
        r: "class/cyajaxsub",
        page: 1,
        cid: cid,
        px:"t",
        cac_id:""
    }
})