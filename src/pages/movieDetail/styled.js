import styled from "styled-components";

export const Header = styled.div`
    height:.44rem;
    background:rgba(0,0,0,0);
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:.05rem;
    position: relative;
    .iconfont{
        color:#fff;
        margin:0 .15rem;
    }
    >span span{
        margin-left:.15rem
    }
`
export const Introduce = styled.div`
    display:flex;
    flex-direction:row;
    padding-left:.15rem;
    position:relative;
    >img{
        width:1.05rem;
        height:1.58rem;
        border:1px solid #fff;
        margin-right:.1rem;
    }
    >div p:nth-of-type(1){
        color:#fff;
        font-size:.18rem;
        font-weight:bold;
    }
    >div p:nth-of-type(2){
        color:#fff;
        font-size:.12rem;
    }
    >div p:nth-of-type(3){
        color:#000;
        margin-top:.28rem;
        font-size:.12rem;
        font-weight:bold;
    }
    >div p:nth-of-type(3) span{
        color:#659d0e;
        margin-top:.2rem;
        font-size:.12rem;
    }
    >div p:nth-of-type(4){
        color:#000;
        margin-top:.05rem;
        font-size:.12rem;
        font-weight:bold;
    }
    >div p:nth-of-type(5){
        color:#000;
        margin-top:.05rem;
        font-size:.12rem;
        font-weight:bold;
    }
    >div p:nth-of-type(6) span:nth-of-type(1){
        margin-top:.1rem;
        font-size:.14rem;
        border: 1px solid #999;
        color: #777;
        display:inline-block;
        padding:.06rem .15rem;
        border-radius:.3rem;
        margin-right:.1rem;
    }
    >div p:nth-of-type(6) span:nth-of-type(2){
        margin-top:.1rem;
        font-size:.14rem;
        border: 1px solid #659d0e;
        color: #659d0e;
        display:inline-block;
        padding:.06rem .15rem;
        border-radius:.3rem
    }
    >div >span{
        display:inline-block;
        position:absolute;
        right:.2rem;
        color:#fff;
        background:#659d0e;
        padding:0.02rem;
    }
`

export const Bg = styled.div`
    position:absolute;
    filter:blur(10px);
    width:100%;
    height:1rem;
    overflow:hidden;
    top:0;
    z-index:-1
    >img{
        width:100%;
    }
`

export const Content = styled.div`
    text-align:center;
    margin-top:.05rem;
    padding-bottom:.2rem;
    >p {
        font-size:.14rem;
        color:#fd8900;
        margin-bottom:.1rem;
    }
    >span{
        font-size:.15rem;
        font-weight:bold;
        width:90%;
        color:#fff;
        line-height:.4rem;
        display:inline-block;
        height:.4rem;
        background:#fd8900;
        border-radius:.3rem;
    }
`

export const Plot = styled.div`
    padding:.15rem;
    >p{
        height:auto;
        display:inline-block;
        font-size:.13rem;
        color:#666;
        text-indent:.24rem;
    }
`

export const ActorTable = styled.div`
    position:relative;
    video{
        padding:.15rem;
        width:90vw;
        object-fit:fill;
    }
    .videoDownload{
        display:none;
    }
`
export const MoviePic = styled.div`
    padding:.15rem .15rem;
    >div:first-of-type{
        display:flex;
        justify-content:space-between;
        font-weight:bold;
        margin-bottom:.15rem;
    }
    >div:last-of-type{
        display:flex;
        flex-direction:row;
        margin-bottom:.15rem;
    }
    >div:last-of-type img{
        width:.66rem;
        height:.66rem;
        margin-right:.05rem;
    }
`

export const Comment = styled.div`
    padding:.15rem;
    >p{
        font-weight:bold;
        font-size:.16rem;
    }
    >ul li{
        display:flex;
        flex-direction:row;
        margin-top:.15rem;
        padding-bottom:.15rem;
        border-bottom:1px solid #d8d8d8;
    }
    >ul li img{
        width:.4rem;
        height:.4rem;
        border-radius:50%;
        margin-right:.1rem;
    }
    >ul li div{
        width:80%;
    }
    >ul li div >p:first-of-type{
        font-size:.12rem;
        display:flex;
        justify-content:space-between;
    }
    p b,i{
        font-weight:normal;
        font-style:normal;
        display:inline-block;
        margin-right:0.03rem;
    }
    span span{
        background:#659d0e;
        color:#fff;
        padding:0.01rem;
    }
    >ul li div >p:nth-of-type(2){
        font-size:.14rem;
        margin-top:.08rem;
        margin-bottom:.08rem;
    }
    >ul li div >p:nth-of-type(3){
        display:flex;
        justify-content:right;
        padding-left:62%
    }
    >ul li div >p:nth-of-type(3) span{
        font-size:.16rem;
    }
    >ul li div >p:nth-of-type(3) b{
        font-weight:normal;
        font-size:.12rem;
        margin-left:.05rem;
    }
`