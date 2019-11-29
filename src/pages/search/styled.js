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
    span:last-of-type{
        border:1px solid #fff;
        padding:.04rem;
        border-radius:.1rem;
    }
`

export const Searchs = styled.div`
    position:relative;
    input{
        border: 1px solid #bbb;
        display:inline-block;
        width:2rem;
        height:.318rem;
        border-radius:.1rem;
        padding-left:.3rem;
        font-size:.14rem;
    }
    div{
        position:absolute;
        top:.075rem;
        left:.1rem;
        z-index:10;
        color:#000 !important;
    }
`

export const List = styled.div`
    height:.45rem;
    border-bottom:1px solid #eee;
    >p{
        margin:.15rem .15rem;
        text-align:center;
        color:#e3e3e3;
        font-size:.24rem;
        font-weight:bold;
        span{
            font-size:.12rem;
            font-weight:normal;
        }
    }
`
export const Sear = styled.div`
    height:.3rem;
    padding:0 .15rem;
    background:#f6f6f6;
    font-size:.12rem;
    color:#999;
    line-height:.3rem;
`

export const Hot = styled.div`
    padding:.1rem;
    span{
        display: inline-block;
        vertical-align: middle;
        color: #1e7dd7;
        padding: .06rem .08rem;
        border: 1px solid #b6dcff;
        border-radius: .3rem;
        font-size:.14rem;
        margin:.05rem
    }
    border-bottom:1px solid #eee;
`