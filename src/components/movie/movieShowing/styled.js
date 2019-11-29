import styled, { keyframes } from "styled-components";


export const Main = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin-top:.995rem;
    >ul li{
        display:flex;
        flex-direction: row;
        padding:.12rem 0 .12rem 0;
        margin-left:.12rem;
        border-bottom:1px solid #999;
        position:relative;
        > .pic img{
            width:.65rem;
            height:.98rem;
            margin-right:.12rem;
        }
        >div h2{
            font-weight: bold;
            font-size: .15rem;
            margin-bottom:.1rem;
            >span{
                margin-left:.1rem;
                padding:.01rem;
                background-color:#659d0e;
                color:#fff;
                font-size:.12rem;
            }
        }
        >div p{
            color:#659d0e;
            font-size:.12rem;
            margin-bottom:.1rem;
        }
        >div h3 img{
            height:.15rem;
            margin:.01rem;
        }
        >div h4{
            font-size:.12rem;
            color:#999;
            margin-top:.2rem;
        }
        .buy{
            width:.73rem;
            height:.3rem;
            text-align:center;
            line-height:.3rem;
            position:absolute;
            background:#ff8600;
            border-radius:.4rem;
            right:.1rem;
            top:.8rem;
            font-size:.16rem;
            color:#fff;
        } 
    }
`
