import styled from "styled-components"

export const Header = styled.div`
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

export const Search = styled.div`
    height:.5rem;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#f6f6f6;
    position:relative;
    input{
        border: 1px solid #bbb;
        display:inline-block;
        width:70%;
        margin-left:5%;
        height:.336rem;
        border-radius:.1rem;
        padding-left:.3rem;
    }
    div{
        position:absolute;
        top:.125rem;
        left:.45rem;
        z-index:10;
        color:#000 !important;
    }
`

export const FirstName=styled.div`
    height:.3rem;
    color: #777;
    background: #ebebeb;
    font-size:.14rem;
    line-height:.3rem;
    padding:0 .15rem;
`

export const CityName=styled.div`
    padding:.05rem .15rem;
    >span{
        width:32%;
        display:inline-block;
        font-size:.14rem;
        line-height:.25rem;
        text-align:center;
        margin:.03rem 0;
    }
`