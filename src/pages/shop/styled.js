import styled from "styled-components"

export const Main = styled.div`
background: #f6f6f6;
.mallsearch {
    padding: 0 .06rem 0 .18rem;
    height:0.538rem;
    line-height:0.538rem;
    .table_v_c{
    display:flex;
    align-items:center;
    flex-direction:row;
        .input {
            font-size: .14rem;
            height: .3359rem;
            padding: 0 .6rem 0 0;
            border-radius: .05rem;
            line-height:.3359rem;
            background: #fff;
            float: left;
            i{
                font-size:.20rem;
                margin:.05rem;
            }
            span{
                color: #777;
                font-size:.14rem;
            }
        }
        .cart{
            margin-left:.2rem;
            i{ 
                color:#1781c9;
                font-size:0.6rem;
                font-weight:400;
            }
           
        }
    }
}
.articleSlide{
    height:1.7373rem;
    padding-bottom:.2rem;
    position: relative;
    .mui-slider-item{
        height:1.5rem;
        overflow:hidden;
        .posterbox{
            img{
                width:100%;
            }
        }
    }
    .mui-slider-indicator {
        position: absolute;
        bottom:.1rem;
        width: 100%;
        text-align: center;
        background: 0;
        .mui-indicator {
            display: inline-block;
            width: 0.06rem;
            height: 0.06rem;
            margin: 1px 0.06rem;
            cursor: pointer;
            background: #aaa;
            border-radius: 50%;
        }
    }
}

.mallshop {
    background: #fff;
    position: relative;
    height: 3.4439rem;
    margin-bottom: 0.144rem;
    .shop01,.shop02, .shop03,.shop04 {
        position: absolute;
    }
    .shop01 {
        width: 50%;
        height: 2.3039rem;
        left: 0;
        top: 0;
        z-index: 2;
        box-sizing:border-box;
        border-top:1px solid #ccc;
        border-right:1px solid #ccc;
        img {
            max-height: 1.92rem;
            max-width: 100%;
            width: 1.6rem;
        }
    }
    .shopmid {
        position: relative;
    }
    .countdown {
        padding-left: 0rem;
        padding-right: 0;
        position: absolute;
        left: .21rem;
        bottom: .1rem;
    }
    .shop02 {
        width: 50%;
        height: 1.1519rem;
        right: 0;
        z-index: 2;
        img{
            box-sizing:border-box;
            border-top:1px solid #ccc;
            border-bottom:1px solid #ccc;
        }
    }
    .shop02 img,.shop03 img {
        max-height: 1.1519rem;
        max-width: 100%;
        width: 1.6rem;
    }
    .shop03 {
        width: 50%;
        height: 1.1519rem;
        top: 1.1519rem;
        right: 0;
    }
    .shop04 {
        width: 100%;
        height:0.94rem;
        bottom: 0;
        left: 0;
        z-index: 3;
        img {
            max-width: 100%;
            max-height: 1.14rem;
            width: 3.2rem;
            box-sizing:border-box;
            border-top:1px solid #ccc;
            border-bottom:1px solid #ccc;
        }
    }
    .shop04:after {
        background-color: #d8d8d8;
        height: 1px;
        width: 100%;
        content: '';
        transform: scaley(.5);
        position: absolute;
        right: 0;
        top: 0;
        left: 0;
    }
}
.mall_act {
    position: relative;
    zoom: 1;
    margin-bottom:0.144rem;
    dl.bg {
        height: 1.5239rem;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        dd {
            background: url() no-repeat center 0;
            background-size: 100% auto;
            height: 1.5239rem;
            width: 100%;
            position: absolute;
            left: 0;
            top: 0;
        }
    }
    .actlist {
        height: 1.5239rem;
        position: relative;
        z-index: 2;
        width: 100%;
        overflow: hidden;
        dl {
            height: 1.5239rem;
            position: absolute;
            top: 0;
            left: 0px;
        }
                dd {
            width: 0.7919rem;
            height: 1.5239rem;
            margin: 0.0768rem;
            position: relative;
            float:left;
                        .layer {
                position: absolute;
                bottom: 0.06rem;
                left: 0;
                width: 100%;
                .inner {
                    position: relative;
                    img {
                        border-radius: 50%;
                    }
                }
            }
        }
    }
}
.m_img {
    width: 100%;
    height: auto;
    display: block;
}
.m_bg_whiteb {
    border-bottom: 1px solid #e5e4e4;
    box-shadow: 0 0.2rem 0.2rem rgba(51,51,51,0.01);
    background: white;
    z-index: 2;
}
.mall_actul {
    width: 100%;
    overflow: hidden;
    position: relative;
    ul {
        position: relative;
        width: 100%;
        li{
            width: 100%;
        }
    }
    .acttitle {
        text-align: center;
        h4 {
            font-size: .1rem;
            font-weight: normal;
            margin-top: .036rem;
        }
        h3 {
            font-size: .18rem;
            font-weight: normal;
        }
    }
    .actdd {
        margin: 0.1536rem 0.0768rem 0;
        dd {
            width: 33.3%;
            height: 1.5359rem;
            float: left;
            text-align: center;
            overflow: hidden;
            img {
                width: 1.02rem;
                height: 1.02rem;
                margin: 0 auto;
            }
            h3 {
                padding: 0.0768rem 0;
                font-size: .11rem;
                line-height: .12rem;
                font-weight: normal;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
            p{
                font-size: .12rem;
                color: #f15353;
                strong {
                    font-size: .15rem;
                }
            }
        }
    }
    .actmore {
        text-align: center;
        padding: 0.204rem 0 0.252rem;
        a {
            background: #f26262;
            width: 1.1759rem;
            height: 0.3359rem;
            line-height: 0.3359rem;
            display: inline-block;
            position: relative;
            zoom: 1;
            text-align: center;
            border-radius: .18rem;
            font-size: .13rem;
            color: #fff;
        }
    }
}
`
export const Nav=styled.div`
.mallnav {
    margin-bottom: .144rem;
     ul {
        font-size: .13rem;
        color: #777;
        overflow: hidden;
        li {
            float: left;
            width: 25%;
            text-align:center;
            padding:0.144rem 0 0.132rem;
            display:flex;
            justify-content:center;
            flex-direction:column;
            align-items:center;
            a{
                color:#333;
              img{
                width:0.48rem;
                height:0.48rem;
            }  
            }
            
        }
    }
}
.m_bg_whiteb {
    border-bottom: 1px solid #e5e4e4;
    box-shadow: 0 0.2rem 0.2rem rgba(51,51,51,0.01);
    background: white;
    position: relative;
    z-index: 2;
}
`
export const Article=styled.div`
.mall_type {
    margin-bottom: 0.144rem;
    padding-bottom: 0.1536rem;
    height:3.51rem;
    .typetit {
        padding-top: .204rem;
        width:100%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        h2 {
            font-size: .15rem;
            line-height: .1rem;
            position: relative;
            font-weight: normal;
            i {
                width: 0.0719rem;
                height: 0.2159rem;
                display: inline-block;
                position: relative;
                margin-right: .06rem;
                vertical-align: middle;
                overflow: hidden;
            }
        }
        div {
            font-size: .13rem;
            color: #666;
            margin-right: .15rem;
            padding-right: .15rem;
            line-height: .1rem;
            margin-top: .02rem;
            i{
                font-size:.13rem;
            }
        }
    }
    dl {
        margin: 0 0.1536rem;
        dt {
            border-bottom: 1px solid #d8d8d8;
            padding: .06rem 0;
            margin-bottom: .0768rem;
            img {
                width: 100%;
                height: 100%;
                max-height: 1.4219rem;
            }
        }
        .table{
            width:100%;
            li {
                width: 33.33%;
                text-align: center;
                float:left;
                img {
                    width: 1.02rem;
                    height: 1.02rem;
                    margin: 0 auto;
                }
                h3 {
                padding: 0.0768rem 0;
                font-size: .11rem;
                line-height: .12rem;
                font-weight: normal;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                }
                p{
                    font-size: .12rem;
                    color: #f15353;
                    strong {
                        font-size: .15rem;
                    }
                }
            }
        }
    }
}
.m_bg_whiteb {
    border-bottom: 1px solid #e5e4e4;
    box-shadow: 0 0.2rem 0.2rem rgba(51,51,51,0.01);
    background: white;
    position: relative;
    z-index: 2;
}
`
export const Section=styled.div`
.reco_tit {
    text-align: center;
    position: relative;
    padding: 0.096rem 0;
    background-color: #f6f6f6;
    a{
        color:#333;
    }
    h2 {
        padding: .06rem 0;
        .i_reco:first-child {
            right: -.1rem;
        }
        .i_reco {
            position: relative;
            z-index: 1;
            display: inline-block;
            vertical-align: middle;
            background: #f6f6f6 url(//static1.mtime.cn/html5/20191122140130/images/vip/rhombus.png) no-repeat right center;
            width: .06rem;
            height: .06rem;
            background-size: .06rem auto;
            background-color: #f6f6f6;
            z-index: 2;
        }
        b {
            padding: 0 .18rem 0 .18rem;
            font-size: .12rem;
            color: #999;
            font-weight: normal;
            background: #f6f6f6;
            position: relative;
            z-index: 1;
        }
    }
}
.reco_tit:after {
    content: "";
    display: block;
    height: 1px;
    background: #e9e9e9;
    overflow: hidden;
    position: absolute;
    left: 20%;
    right: 20%;
    top: 50%;
    width: 60%;
    z-index: 0;
}
.mallother {
    padding-bottom: .12rem;
}
.othershop ul {
    overflow: hidden;
    zoom: 1;
    position: relative;
        li:nth-child(odd) {
        margin-right: .75%;
    }
    a{
        color:#333;
    }
    li {
        width: 49.25%;
        min-height: 2.64rem;
        float: left;
        position: relative;
        background-color: #fff;
        margin-bottom: .06rem;
        .goodsbox {
            background: #fff;
            position: relative;
        }
        .mtips {
            top: .048rem;
            position: absolute;
            left: 0rem;
            z-index: 3;
            i {
                padding: .024rem .036rem;
                display: inline-block;
                color: #fff;
                font-size:.12rem;
            }
        }
        .picbox {
            height: auto;
            margin-bottom: .12rem;
            position: relative;
        }
        .m_img {
            width: 100%;
            height: auto;
            display: block;
        }
        .txtbox {
            padding: 0 .12rem;
            dt {
                font-size: .11rem;
                line-height: .15rem;
                min-height: .3rem;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-bottom: .02rem;
            }
            .zy {
                font-size: .10rem;
                color: #ff8600;
                border: 1px solid #ff8600;
                border-radius: .03rem;
                display: inline-block;
                vertical-align: middle;
                padding: .02rem;
                line-height: .12rem;
                margin-right: .05rem;
                margin-top: -1px;
                font-style:normal;
            }
            dd {
                padding: 0rem 0 .06rem;
                b {
                    color: #ff8600;
                    font-size: .13rem;
                    font-weight: normal;
                }
            }
        }
    }
}
.morelink {
    margin: 0rem .12rem 0;
    font-size: .15rem;
    color: #777;
    padding: .18rem 0;
    text-align: center;
    display: block;
}
`