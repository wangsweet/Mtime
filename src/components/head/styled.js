import styled from "styled-components";
export const Header = styled.div`
    width:100%;
    height:0.5rem;
    background:#1c2635;
    color:#bbb;
    font-size:0.16rem;
    >ul{
        height:100%;
        .active{
            color:#fff;
            border-bottom:2px solid #fff;
               }
        li:nth-child(1){
            height:100%;
            width:27%;
            padding-left:3%;
            img{
                width:100%;
            }
        }
        li{
        float:left;
        width:14%;
        display:flex;
        justify-content:center;
        align-items:center;
        height:0.478rem;
    }
    } 
`