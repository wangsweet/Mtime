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
