import styled from "styled-components"

export const Header = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
height:0.5rem;
background: #1c2635;
color:#fff;
.input {
            font-size: .14rem;
            height: .3359rem;
            padding: 0 .6rem 0 0;
            border-radius: .05rem;
            line-height:.3359rem;
            background: #fff;
            float: left;
            i{
                font-size:.20rem;
                margin:.05rem;
                color:#c9c9c9;
            }
            span{
                color: #777;
                font-size:.14rem;
                padding-right:.2rem;
            }
        }
        .drawer{
            margin-left:.1rem;
            margin-right:.1rem;
            i{ 
                color:#eeeff0;
                font-size:0.34rem;
                font-weight:400;
            }
           
        }
        .back{
            color:#eeeff0;
            margin-right:.1rem;
            margin-left:.1rem;
            i{
              font-size:.2rem;  
            }
            
        }
`
export const Nav = styled.div`
.tablist {
    background: #fff;
    box-shadow: 0 1px 0.04rem #ccc;
    height:0.48rem;
}
.table_v_c {
    height: 100%;
    display:flex;
    align-items:center;
    li{
        padding: 0.056rem 0.1rem 0.144rem 0.1rem;
        float:left;
        a{
            text-align: left;
            position: relative;
            span {
                    font-size: .15rem;
                }
            i{
                font-size: .12rem;
                margin-right:.1rem;
                margin-left:.04rem;
            }  
        }
       
    }
        li a:after {
        width: 1px;
        height: .14rem;
        background: #d8d8d8;
        position: absolute;
        right: 0;
        top: 50%;
        margin-top: -.07rem;
        content: '';
        display: block;
    }
    li:last-child a:after {
        width: 1px;
        height: .14rem;
        background: #d8d8d8;
        position: absolute;
        right: 0;
        top: 50%;
        margin-top: -.07rem;
        content: '';
        display:none;
    }
}
.h5 {
    height: .12rem;
}
`
export const Main = styled.div`
.mallother {
    padding-bottom: .12rem;
}
.othershop ul {
    overflow: hidden;
    zoom: 1;
    position: relative;
        li:nth-child(odd) {
        margin-right: .75%;
    }
    li {
        width: 49.25%;
        min-height: 2.64rem;
        float: left;
        position: relative;
        background-color: #fff;
        margin-bottom: .06rem;
        .goodsbox {
            background: #fff;
            position: relative;
        }
        .mtips {
            top: .048rem;
            position: absolute;
            left: 0rem;
            z-index: 3;
            i {
                padding: .024rem .036rem;
                display: inline-block;
                color: #fff;
                font-size:.12rem;
            }
        }
        .picbox {
            height: auto;
            margin-bottom: .12rem;
            position: relative;
        }
        .m_img {
            width: 100%;
            height: auto;
            display: block;
        }
        .txtbox {
            padding: 0 .12rem;
            dt {
                font-size: .11rem;
                line-height: .15rem;
                min-height: .3rem;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-bottom: .02rem;
            }
            .zy {
                font-size: .10rem;
                color: #ff8600;
                border: 1px solid #ff8600;
                border-radius: .03rem;
                display: inline-block;
                vertical-align: middle;
                padding: .02rem;
                line-height: .12rem;
                margin-right: .05rem;
                margin-top: -1px;
                font-style:normal;
            }
            dd {
                padding: 0rem 0 .06rem;
                b {
                    color: #ff8600;
                    font-size: .13rem;
                    font-weight: normal;
                }
            }
        }
    }
}
.morelink {
    margin: 0rem .12rem 0;
    font-size: .15rem;
    color: #777;
    padding: .18rem 0;
    text-align: center;
    display: block;
}
`