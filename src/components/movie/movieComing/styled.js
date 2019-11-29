import styled from "styled-components";


export const Mains = styled.div`
    margin-top:.1rem;
    padding-left:.15rem;
    >h2{
        font-size:.18rem;
        font-weight:bold;
        color:#333;
        margin-bottom:.05rem;
    }  
    >h2 span{
        font-size:.18rem;
        color:#999;
        font-weight:bold;
    }
    .month{
        padding:.1rem 0;
        border-bottom:1px solid #999;
    } 
    >ul li{
        display:flex;
        flex-direction:row;
        padding:.15rem 0;
        border-bottom:1px solid #999;
    }
    >ul li span{
        font-size:.12rem;
        color:#999;
        margin-right:.1rem;
    }
    .movie-big{
        display:flex;
        flex-direction:row;
    }
    >ul li img{
        width:.65rem;
        height:.98rem;
        margin-right:.15rem;
    }
    >ul li h3{
        font-size:.16rem;
        margin-bottom:.1rem;
        font-weight:bold;
    }
    >ul li h4{
        margin-bottom:.1rem; 
        font-size:.12rem       
    }
    >ul li p{
        margin-bottom:.1rem; 
        font-size:.12rem       
    }
    .notice{
        margin-top:.1rem;
        border: 1px solid #659c0d;
        color: #659c0d;
        padding:.06rem .12rem;
        text-align:center;
        border-radius:.2rem;    
    }
`