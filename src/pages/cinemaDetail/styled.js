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
    span:nth-of-type(2){
        font-size:.14rem;
        width:50%;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        text-align:center;
    }
`
export const Name = styled.div`
    padding:.15rem .15rem;
    display:flex;
    flex-direction:row;
    h4{
        width:90%;
        margin-bottom:.02rem;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }
    p{
        font-size:.14rem;
        color:#999;
        width:90%;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        margin-top:.08rem;
    }
    img{
        width:.18rem;
        margin-right:.05rem;
    }
    >div:first-of-type{
        width:80%;
    }
    >div:last-of-type{
        display:flex;
        align-items:center;
    }
    >div:last-of-type img{
        margin-right:.1rem;
    }
`

export const Movie = styled.div`
    overflow:scroll;
    height:1.5rem;
    position:relative;
    background: #828282;
    >div{
        height:1.5rem;
        padding:0 .15rem;
        align-items:center;
        display:flex;
        position:absolute;
        left:1rem;
        transition:all .3s;
    }
    img{
        width:.75rem;
        height:1rem;
        margin-right:.15rem;
        float:left;
    }
    .active{
        border:1px solid #fff;
        height:1.1rem;
        width:.8rem;
    }
`
export const MovieMess = styled.div`
    padding:.15rem;
    text-align:center;
    border-bottom:1px solid #ddd;
    p:first-of-type{
        margin-top:.05rem;
        font-size:.13rem;
        color:#999;
    }
    h3{
        span{
            color: #ffb400;
            font-weight:normal;
            margin-left:.1rem;
        }
    }
`

export const Ticket=styled.div`
    ul{
        display:flex;
        padding:.1rem .15rem;
        justify-content:space-around;
    }
    li{
        height:.3rem
    }
    .acc{
        border-bottom:2px solid #c33;
        color:#c33;
    }
`

export const Cinema=styled.div`
    padding:0 .15rem;
    >div{
        display:flex;
        padding: .1rem 0;
        height:.42rem;
        border-bottom:1px solid #ddd;
        >div:nth-of-type(1){
            margin-right:.1rem;
            p{
                font-size:.2rem;
                height:100%;
                line-height:.42rem;
            }
        }
        >div:nth-of-type(2){
            margin-right:.1rem;
            p:nth-of-type(1){
                font-size:.14rem;
                margin-bottom:.03rem;
            }
            p:nth-of-type(2){
                font-size:.12rem;
                color:#999;
                overflow:hidden;
                text-overflow:ellipsis;
                white-space:nowrap;
                width:.6rem;
            }
        }
        >div:nth-of-type(3){
            margin-right:.2rem;
            p:nth-of-type(1){
                font-size:.16rem;
                margin-bottom:.03rem;
                color: #f03d37;
                span:first-of-type{
                    color: #fff;
                    background-color: #f90; 
                    font-size:.1rem;
                    padding:.01rem .03rem;
                    border-radius:3px;
                    margin-left:.02rem;
                }
            }
            p:nth-of-type(2){
                font-size:.12rem;
                color:#999;
            }
        }
        >span{
            height: .27rem;
            line-height: .27rem;
            font-size: .12rem;
            width:.5rem;
            background-color: #f03d37;
            color: #fff;
            border-radius: 4px;
            text-align: center;
            margin-top:.1rem;
        }
    }
`