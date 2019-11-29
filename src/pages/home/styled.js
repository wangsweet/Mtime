import styled from "styled-components"

export const Main = styled.div`
width:100%;
height:100%;
.hea_search {
    width:100%;
    background: #f6f6f6;
    padding: 0.096rem 0.18rem 0.09rem;
    border-bottom: 1px solid #d8d8d8;
    display:flex;
    align-items:center;
    .cityshow{
        a{
            b{
                font-weight:400;
                margin-right:.05rem;
                font-size:.14rem;
            }
            color:#333;
      }
    }
    .input_search{
        padding:0 0.252rem 0 0;
        font-size:.14rem;
        height:0.34rem;
        border:1px solid  #bbb;
        border-radius:.05rem;
        line-height:.34rem;
        display:flex;
        margin-left:.1rem;
        color:#777;
        align-items:center;
        i{
            font-size:.20rem;
            padding:.07rem;
        }
    }
}
.indexmovie{
    padding:0.06rem 0.18rem 0.18rem;
        h2{
            display:flex;
            justify-content:space-between;
            align-items:center;
            height:0.36rem;
            font-size:0.18rem;
            i{
                color:#ccc;
                font-size:.18rem;
            }
        }
        ul{  
            overflow:hidden;
            li {
                float: left;
                width: 25%;
                text-align: center;
               .mpic {
                    position: relative;
                    img {
                        width: 100%;
                        border: 1px solid #ddd;
                    }
                    .m_score {
                        position: absolute;
                        right: .03rem;
                        top: .03rem;
                        background: #659d0e;
                        width: .2rem;
                        height: .18rem;
                        color: #fff;
                        display: inline-block;
                        line-height: .18rem;
                        text-align: center;
                        font-size:.12rem;
                        i{
                            font-style:normal;
                        }
                    }
                }
                p {
                    padding:.06rem 0 0;
                    width: 0.75rem;
                    margin-bottom:0.12rem;
                    height: 0.38rem;
                    overflow: hidden;
                    text-align:center;
                    span{
                        font-size:0.14rem;
                    }
                }
            }
        }
}
.indexclick {
    margin-top: -0.12rem;
    border-top: 1px solid #d8d8d8;
    margin-left: 0.18rem;
}
.cin_line{
        p:first-child {
        height: .06rem;
        overflow: hidden;
        background: #fff;
        box-shadow: 0 .02rem .02rem rgba(51,51,51,0.05);
        position: relative;
        z-index: 1;
    }
    p:last-child {
        height: 0.1439rem;
        background: #f6f6f6;
        position: relative;
        z-index: 0;
    }
} 
`

export const Section = styled.div`
.shopmid{
    margin-bottom:.12rem;
    width:100%;
    img{
        width:100%;
    }
}
.todayhot {
    padding: 0.06rem 0.18rem 0;
    li:first-child {
        padding-top: 0;
    }
    li {
        border-bottom: 1px solid #d8d8d8;
        padding: 0.156rem 0;
        .todaytxt {
                h2 {
            padding: 0 0 0.048rem 0;
            font-size:0.16rem;
          }
          p{
              padding:0.048rem 0;
              width:100%;
              time{
                font-size:0.11rem;
                color: #999;
              }
          }
        }
        .piclist{
            width:100%;
            p{
                float:left;
                padding:0.048rem 0;
                width: 0.93rem;
                margin: auto;
                height: 0.78rem;
                overflow: hidden;
                
                img{
                    width:100%;
                    border: 1px solid #d8d8d8;
                }
            }
        }
        .todaypic{
            margin-right:0.1rem;
            float:left;
            width: 1.34rem;
                img{
                    width:100%;
                 }
        }
        .todaypic_bigimg {
            position: relative;
            margin-bottom: 0.15rem;
            .m_img {
                width: 100%;
                height: auto;
                display: block;
            }
            .video_icon {
                width: 0.3rem;
                height: 0.3rem;
                position: absolute;
                left: 50%;
                top: 50%;
                margin-left: -0.15rem;
                margin-top: -0.15rem;
                z-index: 2;
                background: url(http://static1.mtime.cn/html5/20191122140130/images/2014/viceoplay.png) no-repeat center center;
                background-size: cover;
            }
        }
    }
    .btn_viewmore {
        text-align: center;
        font-size: 0.14rem;
        color: #1e7dd7;
        cursor: pointer;
        padding: 0.08rem 0;
    }
}
.m_bg_white {
    background: #fff;
    height:100%;
    h2{
        b{
            font-size:0.18rem;
        }
    }
}
`