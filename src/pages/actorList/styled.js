import styled from "styled-components";
export const Header=styled.div`
    height:.44rem;
    background-color:#1c2635;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 .1rem;
    color:#fff;
    .iconfont{
        color:#fff;
    }

`
export const Type=styled.div`
    color:#999;
    font-size:.12rem;
    padding:.05rem .12rem;
    background: #f6f6f6;
    border-bottom: 1px solid #dfdfdf;
    border-top: 1px solid #dfdfdf;
`

export const Actors=styled.div`
    padding:.12rem;
    border-bottom:1px solid #dfdfdf;
    display:flex;
    flex-direction:row;
    >img{
        width:.6rem;
        height:.6rem;
        margin-right:.2rem;
    }
    >div p:first-of-type{
        font-size:.14rem;
        font-weight:bold;
        margin-top:.1rem;
    }
    >div p:last-of-type{
        font-size:.12rem;
        font-weight:bold;
        color:#999;
        font-weight:normal
    }
`