import http from "../utils/request"

export const cinemaListApi = (cityId,brand,part) => http({
    method: "get",
    url: "/ajax/cinemaList",
    data: {
        day: '2019-12-03',
        offset: 0,
        limit: 20,
        districtId: part,
        lineId: -1,
        hallType: -1,
        brandId: brand,
        serviceId: -1,
        areaId: -1,
        stationId: -1,
        item:'',
        updateShowDay: true,
        reqId: 1575354264668,
        cityId: cityId,
    }
})
export const cinemaChangeApi=(cityId)=>http({
    method:"get",
    url: "/ajax/filterCinemas",
    data:{
        ci:cityId
    }
})

export const cinemaDetailApi=(cinemaId)=>http({
    method:"get",
    url: "/ajax/cinemaDetail",
    data:{
        cinemaId
    }
})