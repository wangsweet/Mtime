import styled, { keyframes } from "styled-components";

export const Header = styled.div`
    height:.44rem;
    background-color:#1c2635;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 .1rem;
    .iconfont{
        color:#fff;
    }
`

export const Table = styled.ul`
    height: .268rem;
    border-radius: .4rem;
    background: #0d121a;
    width: 2.18rem;
    margin: 0 auto;
    padding: 1px;
    position: relative;
    display:flex;
    flex-direction: row;
    >li{
        border-radius: .4rem;
        display: block;
        color: #999;
        text-align: center;
        width:1.08rem;
        height:.268rem;
        font-size:.14rem;
        line-height:.268rem;  
    }
`


export const Search = styled.div`
    height: .515rem;
    background: #f6f6f6;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size:.14rem;
    border-bottom:1px solid #999;
    >p{
        height:.336rem;
        width:2.1rem;
        background: #fff;
        font-size: .14rem;
        line-height:.336rem;
        border-radius:.1rem;
        color:#333;
        padding:0 .1rem;
        border:1px solid #333;
    }
`
