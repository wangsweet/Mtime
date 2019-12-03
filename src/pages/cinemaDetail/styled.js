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
export const Name =styled.div`
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

export const Movie =styled.div`
    background: #828282;
    height:1.5rem;
    display:flex;
    padding:0 .15rem;
    align-items:center;
    overflow:auto;
    img{
        width:.75rem;
        height:1rem;
        margin-right:.15rem;
    }
`
export const MovieMess=styled.div`
    padding:.15rem;
    p:first-of-type{
        
    }
`