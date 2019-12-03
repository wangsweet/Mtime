import styled from "styled-components"

export const Header = styled.div`
width:100%;
height:0.5rem;
background: #1c2635;
display:flex;
justify-content:space-between;
align-items:center;
padding:0 .1rem;
box-sizing:border-box;
color:#fff;
`
export const Main = styled.div`
.emptycate {
    padding: 0 0 0.18rem 0;
    .i_emptycate {
        width:1.56rem;
        height: 1.56rem;
        border-radius: .23rem;
        background:url(http://static1.mtime.cn/html5/20191122140130/images/2014/emptycate.png) no-repeat center center;
        background-size: cover;
        display: block;
        margin: 0.6rem auto 0.24rem;
    }
    p {
        font-size: .14rem;
        color: #777;
        line-height: 1.3;
        text-align: center;
        margin-bottom: .44rem;
    }
    .bigbtn {
        text-align: center;
        line-height: .5rem;
        font-size: .16rem;
        .btn_hui {
            width: 1.2rem;
            border: 1px solid #999;
            color: #999;
            display: inline-block;
            vertical-align: middle;
            overflow: hidden;
            text-align: center;
            border-radius: 1rem;
        }
    }
}
.first{
    width:100%;
    height:0.35rem;
}
.titlebox {
    font-size: .13rem;
    line-height: .18rem;
    margin: .028rem .12rem .12rem 0;
    float:left;
    width:2.2rem;
    overflow:hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.zy {
    font-size: .08rem;
    color: #ff8600;
    border: 1px solid #ff8600;
    border-radius: .02rem;
    display: inline-block;
    vertical-align: middle;
    padding: .012rem;
    line-height: .12rem;
    margin-right: .048rem;
    margin-top: -2px;
    font-style:normal;
}
.mid{
    padding:.2rem;
    height:1.1rem;
    border-bottom:1px solid #ccc;
}
.m_img{
    width:0.72rem;
    height:0.72rem;
    float: left;
    margin-right:.1rem;
}
.add,.reduce{
    width:0.3rem;
    height:0.3rem;
    float: left;
    margin-top:.2rem;
}
.num{
    width:.4rem;
    height:0.26rem;
    float: left;
    text-align:center;
    margin-top:.2rem;
}
.price{
    font-size:.12rem;
    margin-left:.1rem;
    margin-top:.3rem;
    font-weight:bold;
    float: left;
    i{
        font-weight:normal;  
    }
}
`
export const Footer = styled.div`
height:0.5rem;
width:100%;
background: rgba(246,246,246,1);
position:fixed;
bottom:0;
.allCheck{
    width:25%;
    float:left;
    height:100%;
    line-height:.5rem;
    text-align:center;
    font-size:.15rem;
}
.summary{
    width:45%;
    float:left;
    height:100%;
    font-size:.12rem;
    line-height:.5rem;
    text-align:center;
    span{
    font-size: .18rem;
    color: #ff8600;
    }
}
.jiesuan{
    width:30%;
    height:100%;
    line-height:.5rem;
    float:left;
    background-color: #f23030;
    text-align:center;
    color:#fff;
}
`