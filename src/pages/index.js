//路由懒加载

import Loadable from "react-loadable";
import Loading from "../common/loading";

export const Home=Loadable({
    loader:()=>import("./home"),
    loading:Loading
})
export const Find=Loadable({
    loader:()=>import("./find"),
    loading:Loading
})
export const Mine=Loadable({
    loader:()=>import("./mine"),
    loading:Loading
})
export const Shop=Loadable({
    loader:()=>import("./shop"),
    loading:Loading
})
export const Goodslist=Loadable({
    loader:()=>import("./goodslist"),
    loading:Loading
})
export const Goodsdetail=Loadable({
    loader:()=>import("./goodsdetail"),
    loading:Loading
})
export const Cart=Loadable({
    loader:()=>import("./cart"),
    loading:Loading
})
export const Login=Loadable({
    loader:()=>import("./login"),
    loading:Loading
})
export const Registe=Loadable({
    loader:()=>import("./registe"),
    loading:Loading
})
export const ActorDetail=Loadable({
    loader:()=>import("./actorDetail"),
    loading:Loading
})
export const ActorList=Loadable({
    loader:()=>import("./actorList"),
    loading:Loading
})
export const CinemaDetail=Loadable({
    loader:()=>import("./cinemaDetail"),
    loading:Loading
})
export const City=Loadable({
    loader:()=>import("./city"),
    loading:Loading
})
export const MovieDetail=Loadable({
    loader:()=>import("./movieDetail"),
    loading:Loading
})
export const MovieShow=Loadable({
    loader:()=>import("./movieShow"),
    loading:Loading
})
export const Search=Loadable({
    loader:()=>import("./search"),
    loading:Loading
})
export const Ticket=Loadable({
    loader:()=>import("./ticket"),
    loading:Loading
})
export const MovieShowing=Loadable({
    loader:()=>import("../components/movie/movieShowing"),
    loading:Loading
})
export const MovieComing=Loadable({
    loader:()=>import("../components/movie/movieComing"),
    loading:Loading
})