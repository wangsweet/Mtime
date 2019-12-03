import styled from "styled-components";

export const Header = styled.div`
    height:.51rem;
    background-color:#f6f6f6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 .1rem;

    .iconfont{
        color:#999;
        font-size:.14rem;
    }
    span:last-of-type{
        border:1px solid #fff;
        padding:.08rem;
        border-radius:.1rem;
    }
    span:first-of-type{
        font-size:.12rem;
    }
`

export const Searchs = styled.div`
    position:relative;
    input{
        border: 1px solid #bbb;
        display:inline-block;
        width:1.2rem;
        height:.28rem;
        border-radius:.1rem;
        padding-left:.3rem;
        font-size:.14rem;
    }
    div{
        position:absolute;
        top:.04rem;
        left:.1rem;
        z-index:10;
        color:#000 !important;
    }
`

export const Tab = styled.div`
    padding:.1rem;
    border-top:1px solid #d8d8d8;
    border-bottom:1px solid #d8d8d8;
    ul{
        display:flex;
        justify-content:space-around;
        font-size:.12rem;
    }
    ul li{
        border-right:1px solid #d8d8d8;
        padding-right:.3rem;
    }
    ul li:last-of-type{
        padding-right:0;
        border-right:none;
    }
`

export const Cinema = styled.div`
    padding:0 .15rem;
    ul li{
        padding:.15rem 0;
        position: relative;
        border-bottom:1px solid #d8d8d8;
        >p:first-of-type{
            font-size:.14rem;
            width:60%;
            overflow:hidden;
            white-space:nowrap;
            text-overflow:ellipsis;
            margin-bottom:.1rem;
        }
        >p:nth-of-type(2){
            font-size:.12rem;
            color:#777;
            margin-bottom:.08rem;
        }
        >span:first-of-type{
            padding:0 .05rem;
            font-size:.1rem;
            color:#999;
        }
        >span:last-of-type{
            position:absolute;
            top:.14rem;
            right:.1rem;
            color: #ff8600;
        }
    }
`

export const Brand=styled.div`
    overflow:scroll;
    position:absolute;
    padding:0 .15rem;
    margin:1.4rem 0 1.8rem 0;
    top:0;
    bottom:0;
    left:0;
    right:0;
    width:90%;
    background:#f6f6f6;
    z-index:10;
    li{
        border-bottom:1px solid #ddd;
        padding:.1rem 0;
        display:flex;
        justify-content:space-between;
        font-size:.14rem;
        color:#999;
    }
`
export const Part=styled.div`
    overflow:scroll;
    position:absolute;
    padding:0 .15rem;
    margin:1.4rem 0 1.8rem 0;
    top:0;
    bottom:0;
    left:0;
    right:0;
    width:90%;
    background:#f6f6f6;
    z-index:10;
    li{
        border-bottom:1px solid #ddd;
        padding:.1rem 0;
        display:flex;
        justify-content:space-between;
        font-size:.14rem;
        color:#999;
    }
`