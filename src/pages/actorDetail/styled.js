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
        font-size:.16rem;
        margin-top:.1rem;
    }
    >div p:nth-of-type(2){
        color:#fff;
        font-size:.12rem;
    }
    >div p:nth-of-type(3){
        color:#777;
        margin-top:.25rem;
        font-size:.12rem;
        font-weight:bold;
    }
    
    >div p:nth-of-type(4){
        color:#777;
        margin-top:.05rem;
        font-size:.12rem;
        font-weight:bold;
    }
    
    >div p:nth-of-type(5) span{
        margin-top:.15rem;
        font-size:.14rem;
        border: 1px solid #999;
        color: #777;
        display:inline-block;
        padding:.06rem .15rem;
        border-radius:.3rem;
        margin-right:.1rem;
    }
    >div >span{
        position:absolute;
        color:#fff;
        right:.2rem;
        font-size:.12rem;
        width: .38rem;
        height: .33rem;
        overflow: hidden;
        display: inline-block;
        background: url("https://static1.mtime.cn/html5/20191122140130/images/2014/i_peo_01.png") no-repeat center center;
        background-size: cover;
        text-align: center;
        line-height: .33rem;
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

export const Synopsis=styled.div`
    margin:.15rem;
    font-size:.14rem;
    line-height:.2rem;
    height:.6rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-indent:.28rem;
`

export const Product=styled.div`
    padding:.1rem .15rem;
    >p{
        display:flex;
        justify-content:space-between;
        margin-bottom:.1rem;
        >span{
            font-size:.16rem;
            font-weight:bold
        }
    }
    >div{
        display:flex;
        flex-direction:row;
        margin-bottom:.1rem;
    }
    >div p{
        text-align:center;
        font-size:.12rem;
    }
    img{
        width:.78rem;
        height:1.16rem;
        margin-bottom:.05rem;
        margin-right:.1rem;
    }
`
export const Success=styled.div`
    padding:.1rem .15rem;
    >p{
        display:flex;
        justify-content:space-between;
        margin-bottom:.1rem;
        >span{
            font-size:.16rem;
            font-weight:bold
        }
    }
    >div{
        display:flex;
        >div{
            padding:0 .2rem;
            border-right:1px solid #ddd;
        }
        >div p:first-of-type{
            font-size:.36rem;
            font-weight:bold;
            color: #568cb0;
            text-align:center;
        }
        >div p:last-of-type{
            font-size:.12rem;
            text-align:center;
        }
        >p{
            font-size:.12rem;
            line-height:.6rem;
            margin-left:.15rem;
        }
    }
`

export const ActorPic=styled.div`
    padding:.1rem .15rem;
    >p{
        display:flex;
        justify-content:space-between;
        margin-bottom:.1rem;
        >span{
            font-size:.16rem;
            font-weight:bold
        }
    }
    >div{
        display:flex;
    }
    img{
        width:.66rem;
        height:.66rem;
        margin-right:.06rem;
    }
`
export const Message=styled.div`
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