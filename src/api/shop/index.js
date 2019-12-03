import http from "utils/request";

export const sliperApi = () => http({
    method: "get",
    url: "api/category/product/model-detail-by-model-id-new",
    data: {
        entityId: 4,
        modelId: -1,
        proModelId: 1,
        source: 3,
        version: "v1",
        tuserId: 529283,
        isWechat: 0
    }
})
export const categoryApi =()=>http({
    method:"get",
    url: "/index.php",
    data: {
        r: "class/category",
        type: 1
    }
})
export const shoplistApi =()=>http({
    method:"get",
    url: "/index.php",
    data: {
        r: "class/cyajaxsub",
        page: 1,
        cid: 124,
        px:"t",
        cac_id:""
    }
})
