import http from "../utils/request"

export const movieShowData=(cityId)=>http({
    method:"get",
    url: "/api/movieOnInfoList",
    data:{
        cityId
    }
})
export const movieComeData=(cityId)=>http({
    method:"get",
    url: "/api/movieComingList",
    data:{
        cityId
    }
})
export const movieDetailData=(movieId)=>http({
    method:"get",
    url: "/api/detailmovie",
    data:{
        movieId
    }
})

export const movieSearchData=(cityId,a)=>http({
    method:"get",
    url: "/api/searchList",
    data:{
        cityId,
        kw:a
    }
})