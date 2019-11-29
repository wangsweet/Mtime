import {Home,Shop,Find,Mine,Cart,Goodslist,Goodsdetail,Registe,Login} from "../pages"

//用来配置带head的路由
export const HeadRoutes=[
    {
        path:"/home",
        component:Home,
        meta:{
            flag:true
        },
        text:"首页"
    },
    {
        path:"/shop",
        component:Shop,
        meta:{
            flag:true
        },
        text:"商城"
    },
    {
        path:"/find",
        component:Find,
        meta:{
            flag:true
        },
        text:"发现"
    },
    {
        path:"/mine",
        component:Mine,
        meta:{
            flag:false,
            requiredAuth:false,
        },
        text:"我的"
    },
]

//用来配置不带head的路由

export const NoHeadRoutes=[
    {
        path:"/login",
        component:Login,
        meta:{
            flag:false
        }
    },
    {
        path:"/registe",
        component:Registe,
        meta:{
            flag:false,
            requiredAuth:false
        }
    },
    {
        path:"/cart",
        component:Cart,
        meta:{
            flag:false,
            requiredAuth:false
        }

    },
    {
        path:"/goodslist",
        component:Goodslist,
        meta:{
            flag:false,
            requiredAuth:false
        }
    },
    {
        path:"/goodsdetail",
        component:Goodsdetail,
        meta:{
            flag:false,
            requiredAuth:false
        }
    }
]

export const RouteConfig= HeadRoutes.concat(NoHeadRoutes);