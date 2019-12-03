import http from "utils/request";

export const goodsdetailApi = (cid) => http({
    method: "get",
    url: "/index.php",
    data: {
        r: "class/cyajaxsub",
        page: 1,
        cid: cid,
        px: "t",
        cac_id: ""
    }
})
export const detailImgApi = (goodsId) => http({
    method: "get",
    url: "/api/goods/get-goods-detail-img",
    data: {
        goodsId: goodsId
    }
})
export const similarApi = (id) => http({
    method: "get",
    url: "/api/goods/get-similar-goods",
    data: {
        id: id,
        categoryId: 50016845
    }
})