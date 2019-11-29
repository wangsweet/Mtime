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
    {
        path: "/mine",
        component: Mine,
        meta: {
            flag: false,
            requiredAuth: false,
        },
        text: "我的"
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
]

//用来配置不带head的路由

export const NoHeadRoutes = [
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
        path: "/goodslist",
        component: Goodslist,
        meta: {
            flag: false,
            requiredAuth: false
        }
    },
    {
        path: "/goodsdetail",
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
        path: "/cinemaDetail",
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
        path: "/movieDetail",
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
                path: "/movieShowing",
                component: MovieShowing,
                meta: {
                    flag: false,
                    requiredAuth: false
                }
            },
            {
                path: "/movieComing",
                component: MovieComing,
                meta: {
                    flag: false,
                    requiredAuth: false
                },
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