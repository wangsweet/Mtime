import { createAction } from "redux-actions"
import { movieShow, movieCome, movieDetail, showFlag, comeFlag, searchMovie } from "./movieType"
import { movieShowData, movieComeData, movieDetailData, movieSearchData } from "api/movie"

export const MovieShowAsyncAction = (id) => {
    let movieSAction = createAction(movieShow, (data) => data)

    return async (dispath) => {
        let data = await movieShowData(id)
        data.data.movieList.map((item) => {
            item.img = item.img.replace("w.h", "65.98")
        })
        dispath(movieSAction(data.data.movieList))
    }
}

export const MovieComeAsyncAction = (id) => {
    let movieCAction = createAction(movieCome, (data) => data)

    return async (dispath) => {
        let data = await movieComeData(id)
        data.data.comingList.map((item) => {
            item.img = item.img.replace("w.h", "65.98")
        })
        dispath(movieCAction(data.data.comingList))
    }
}

export const MovieDetailAsyncAction = (id) => {
    let moviedAction = createAction(movieDetail, (data) => data)
    return async (dispath) => {
        let data = await movieDetailData(id)
        data.data.detailMovie.img = data.data.detailMovie.img.replace("w.h", "107.160")
        // data.data.detailMovie.photos.map((item)=>{
        //     item=item.replace("w.h","66.66")
        // })
        for (let i = 0; i < data.data.detailMovie.photos.length; i++) {
            data.data.detailMovie.photos[i] = data.data.detailMovie.photos[i].replace("w.h", "66.66")
        }
        dispath(moviedAction(data))
    }
}

export const showFlagAction = (num) => {
    let showfaction = createAction(showFlag, (num) => num)
    return (dispath) => {
        dispath(showfaction(num))
    }
}
export const comeFlagAction = (num) => {
    let comefaction = createAction(comeFlag, (num) => num)
    return (dispath) => {
        dispath(comefaction(num))
    }
}

export const searchAction = (id, content) => {
    let searchmAction = createAction(searchMovie, (data) => data)
    return async (dispath) => {
        let data = await movieSearchData(id, content)
        if (data.data.movies) {
            data.data.movies.list.map((item) => {
                item.img = item.img.replace("w.h", "64.90")
            })
        }
        dispath(searchmAction(data))
    }
}