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
}
`