import styled from "styled-components"

export const Header = styled.div`
height:0.5rem;
background: #1c2635;
display:flex;
justify-content:space-between;
align-items:center;
color:#fff;
font-size:.14rem;
span{
    i{
        color:#fff;
        font-size:.24rem;
        margin:0 .1rem; 
    }
}
span:last-child{
    display:flex;
    align-items:center;
    i:first-child{
        font-size:.3rem;
    }
    i:nth-child(2){
        font-size:.42rem;
    }
}
`
export const Main = styled.div`
.slide{
    position: relative;
}
.mui-slider-item {
    padding-bottom: 0.084rem;
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
    font-size: 14px;
    vertical-align: top;
    text-align: center;
    overflow: hidden;
    a {
    width:3.3rem;
    height:3.12rem;
    display: block;
    overflow: hidden;
    margin: auto;
    color:#333;
    }
    img {
        width: auto;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
    }
}
.posterbox {
    position: relative;
}
.mui-slider-indicator {
    z-index: 10;
    bottom: 0.16rem;
    position: absolute;
    width: 100%;
    text-align: center;
    background: 0;
    .mui-active {
        background: #ff8400;
        box-shadow: none;
    }
    .mui-indicator {
        display: inline-block;
        vertical-align: middle;
        cursor: pointer;
        overflow: hidden;
        margin: 0 .048rem;
        width: 0.078rem;
        height: 0.078rem;
        border-radius: .2rem;
        background: #d8d8d8;
        opacity: 1;
    }
}
.m_list li {
    padding-right: .12rem;
    margin-left: .12rem;
    position: relative;
}
.mainbox{
    dl {
    position: relative;
     dt {
            font-size: .18rem;
            font-weight: bold;
            line-height: 1.3;
            padding-right: .18rem;
            a {
                font-size: .136rem;
                margin-top: .06rem;
                color:#333;
                em.zy {
                    font-size: .12rem;
                    color: #ff8600;
                    border: 1px solid #ff8600;
                    border-radius: .02rem;
                    display: inline-block;
                    vertical-align: middle;
                    padding: .012rem;
                    line-height: .11rem;
                    margin-right: .048rem;
                    margin-top: -0.04rem;
                    font-style:normal;
                }
            }
            .i-c-normal {
                color: #fff;
                font-size: .1rem;
                padding: .012rem .02rem;
                vertical-align: middle;
                margin-left: .12rem;
                font-weight: normal;
            }
        }
        dd{
            .mallprice {
                padding: 0.072rem 0 0.144rem 0;
                b {
                    font-size: .2rem;
                    color: #ff8600;
                    padding: 0rem .096rem 0 0;
                    margin-left: -.048rem;
                    font-weight: normal;
                    i {
                        font-size: .15rem;
                        vertical-align: baseline;
                        font-weight: normal;
                    }
                }
                p {
                    padding-top: .096rem;
                    i {
                        background: url(//static1.mtime.cn/html5/20191122140130/images/2014/freeshiping.png) no-repeat;
                        background-size: contain;
                        width: .168rem;
                        height: .168rem;
                        display: inline-block;
                        position: relative;
                        vertical-align: middle;
                        margin-right: .06rem;
                        top: .012rem;
                    }
                    span {
                        font-size: .11rem;
                        line-height: 1.4;
                        color: #f97a3e!important;
                    }
                }
            }
        }
    }

} 
.cin_line{
    background-color: #f6f6f6;
    height:0.15rem;
}
.appraise-box {
    border-bottom: 1px solid #e5e4e4;
    background:#fff;
    box-shadow: 0 0.2rem 0.2rem rgba(51,51,51,0.01);
    .appraise-title {
        padding: 0.156rem 0.12rem 0.156rem 0;
        margin-left: .12rem;
        font-size: .13rem;
        position: relative;
        height:.20rem;
        .table_v_c {
           color:#333;
           height:100%;
           display:flex;
           justify-content:space-between;
           align-items:center;
        }
         b {
                font-weight: 400;
        }
        .eval {
            padding-right: .18rem;
            span {
                color: #fc7b38;
            }
        }
    }
}
.malletails {
    padding-top: .144rem;
    overflow-x: auto;
    border-bottom: 0;
    background-color: #f6f6f6;
    .tailstab {
        background: #fff;
        border-bottom: 1px solid #e9e9e9;
        li {
            text-align: center;
            font-size: .13rem;
            float:left;
            width:33%;
           p {
                color: #333;
                display: block;
                position: relative;
                span {
                    position: relative;
                    display: inline-block;
                    line-height: .42rem;
                    width: 100%;
                    padding: .024rem 0;
                }
                span:after {
                    content: '';
                    display: none;
                    height: 2px;
                    background: #fff;
                    overflow: hidden;
                    width: 100%;
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: -1px;
                }
            }
        }
        li.curr p {
            color: #ff8600;
            span:after{
                background: #ff8600;
                content: '';
                display: block;
                height: 2px;
                overflow: hidden;
                width: 100%;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -1px;
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
.pictails {
    background-color: #fff;
    dl {
        font-size: .13rem;
        padding: .18rem .12rem .144rem;
        overflow: hidden;
        dt {
            padding-bottom: .084rem;
            b {
                display: inline-block;
                vertical-align: middle;
                height: .24rem;
                line-height: .24rem;
                padding: 0 .06rem;
                background: #333;
                color: #fff;
            }
        }
        dd {
            color: #777;
            font-size: .12rem;
            padding-left: .048rem;
            word-wrap: break-word;
            line-height: 1.5;
        }
    }
}
.m_img {
    width: 100%;
    height: auto;
    display: block;
}
`
export const Section = styled.div`
/* margin-bottom:.5rem; */
.reco_tit {
    text-align: center;
    position: relative;
    padding: 0.096rem 0;
    background-color: #f6f6f6;
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
    a{color:#333;}
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
export const Footer = styled.div`
width:100%;
height:0.5rem;
position:fixed;
bottom:0;
z-index:100;
background:#fff;
.goshare{
    width:30%;
    height:100%;
    float:left;
    p{
        width:50%;
        height:100%;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        font-size:.14rem;
        float:left;
    }
}
.gocart{
    width:70%;
    height:100%;
    float:left;
    line-height:.5rem;
    text-align:center;
    .gocarts{
        width:50%;
        height:100%;
        float:left;
        background-color: #ff8600;
        color:#fff;
    }
    .gobuy{
        width:50%;
        height:100%;
        float:left;
        background-color: #f23030;
        color:#fff;
    }
}
`