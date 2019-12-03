import { Home, Shop, Find, Mine, Cart, Goodslist, Goodsdetail, Registe, Login, ActorDetail, ActorList, CinemaDetail, City, MovieDetail, MovieShow, Search, Ticket, MovieShowing, MovieComing } from "../pages"

//用来配置带head的路由
export const HeadRoutes = [
    {
        path: "/home",
        component: Home,
        meta: {
            flag: true
        },
        text: "首页"
    },
    {
        path: "/ticket",
        component: Ticket,
        meta: {
            flag: true,
            requiredAuth: false,
        },
        text: "购票"
    },
    {
        path: "/shop",
        component: Shop,
        meta: {
            flag: true
        },
        text: "商城"
    },
    {
        path: "/find",
        component: Find,
        meta: {
            flag: true
        },
        text: "发现"
    },

]

//用来配置不带head的路由

export const NoHeadRoutes = [
    {
        path: "/mine",
        component: Mine,
        meta: {
            flag: false,
            requiredAuth: true,
        }
    },
    {
        path: "/login",
        component: Login,
        meta: {
            flag: false
        }
    },
    {
        path: "/registe",
        component: Registe,
        meta: {
            flag: false,
            requiredAuth: false
        }
    },
    {
        path: "/cart",
        component: Cart,
        meta: {
            flag: false,
            requiredAuth: false
        }

    },
    {
        path: "/goodslist/:cid",
        component: Goodslist,
        meta: {
            flag: false,
            requiredAuth: false
        }
    },
    {
        path: "/goodsdetail/:id/:goodsid/:cid/:index",
        component: Goodsdetail,
        meta: {
            flag: false,
            requiredAuth: false
        }
    },
    {
        path: "/actorDetail",
        component: ActorDetail,
        meta: {
            flag: false,
            requiredAuth: false
        }
    },
    {
        path: "/actorList",
        component: ActorList,
        meta: {
            flag: false,
            requiredAuth: false
        }
    },
    {
        path: "/cinemaDetail/:id",
        component: CinemaDetail,
        meta: {
            flag: false,
            requiredAuth: false
        }
    },
    {
        path: "/city",
        component: City,
        meta: {
            flag: false,
            requiredAuth: false
        }
    },
    {
        path: "/movieDetail/:id",
        component: MovieDetail,
        meta: {
            flag: false,
            requiredAuth: false
        }
    },
    {
        path: "/movieShow",
        component: MovieShow,
        meta: {
            flag: false,
            requiredAuth: false
        },
        children: [
            {
                path: "/movieShow/movieShowing",
                component: MovieShowing,
                meta: {
                    flag: false,
                    requiredAuth: false
                }
            },
            {
                path: "/movieShow/movieComing",
                component: MovieComing,
                meta: {
                    flag: false,
                    requiredAuth: false
                }
            }
        ]
    },
    {
        path: "/search",
        component: Search,
        meta: {
            flag: false,
            requiredAuth: false
        }
    },
]

export const RouteConfig = HeadRoutes.concat(NoHeadRoutes);