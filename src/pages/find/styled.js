import styled from "styled-components"

export const Main = styled.div`
 min-height:3rem;
 .newsnav{
     width:100%;
     height:0.48rem;
     .table_v_c {
        height: 100%;
        display:flex;
        justify-content:space-around;
        align-items:center;
        li{
            text-align:center;
            a span {
                font-size: 0.14rem;
                color:#333;
            }
        }
        li.curr a span{
            color: #1e7dd7;
            font-weight: bold;
        }
    }
 }
 .newspic{
    li {
        position: relative;
        height: 2.16rem;
        overflow: hidden;
        .m_img {
            width: 100%;
            height: auto;
            display: block;
        }
        h2 {
            background: rgba(0,0,0,0.5);
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 0.144rem 0;
            text-align: center;
            height:0.16rem;
            line-height:0.16rem;
            b {
                color: #fff;
                font-size: 0.16rem;
                display: block;
            }
        }
    }
}
`
export const Section = styled.div`
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