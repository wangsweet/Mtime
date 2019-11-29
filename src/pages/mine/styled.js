import styled from "styled-components"

export const Main = styled.div`
height:100%;
width:100%;
.set_endlogin {
    position: relative;
    height: 1.74rem;
    z-index: 2;
    background: url(//static1.mtime.cn/html5/20191122140130/images/2014/set_endlogin.jpg) no-repeat;
    background-size: cover;
    padding: 0 0.18rem 0 0.3rem;
    .table_v_c {
        height: 0.6rem;
        width:100%;
        padding-top:0.432rem;
        display:flex;
        justify-content:center;
        .i_set_face {
            border-radius: 0.12rem;
            width: 0.6719rem;
            height: 0.6719rem;
            background: url(//static1.mtime.cn/html5/20191122140130/images/2014/set_face.png) no-repeat;
            float: left;
            background-size: cover;
            img {
                float: left;
                width:100%;
                border-radius:0.6rem;
                border: 1px solid rgba(255,255,255,0.5);
            }   
        }
        dl {
            color: #fff;
            margin-left: 0.15rem;
            float: left;
            dt{
                margin:0.072rem 0 0.12rem;
                .i_grade {
                    display: inline-block;
                    vertical-align: middle;
                    overflow: hidden;
                    font-size: .12rem;
                    color: #fff;
                    width: .25rem;
                    height: .16rem;
                    line-height: .15rem;
                    text-align: center;
                    background: url(//static1.mtime.cn/html5/20191122140130/images/2014/vip_grade.png) no-repeat 0 0;
                    background-size: auto .15rem;
                }
                b{
                    font-weight:normal;
                    font-size:0.14rem;
                }
            }
            dd b {
                font-size: 0.12rem;
                font-weight:normal;
            }
        }
    }
}
.my_shoptool {
    padding: 0 0.18rem 0;
    background: white;
    position: relative;
    margin-bottom: -0.06rem;
    height:1.2rem;
    .table_vh_c {
        width: 100%;
        height:100%;
        display:flex;
        justify-content:space-around;
        align-items:center;
        li{
            display:flex;
            float: left;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            span{
                display:inline-block;
                width:0.54rem;
                height:0.54rem;
                border-radius:50%;
                text-align:center;
                line-height:.54rem;
                background: #78bdfd;
                i{
                    font-size:0.30rem;
                    color:#fff;
                }
            }
            p{
                font-size: .12rem;
                color: #777;
                padding: .108rem 0;
            }
        }
        li:first-child span{
            background: #ffb059;
        }
        li:last-child span{
            background: #ff815a;
        }
    }
}
.cin_line p:first-child {
    height: 0.06rem;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 0.3rem 0.3rem rgba(51,51,51,0.05);
    position: relative;
    z-index: 1;
}
.cin_line p:last-child {
    height: 0.1439rem;
    background: #f6f6f6;
    position: relative;
    z-index: 0;
}
`
export const Section = styled.div`
.set_menu {
    padding: 0 0 0.264rem;
    ul {
        background: #fff;
        padding: 0 0 0 0.18rem;
        box-shadow: 1px 1px 0.3rem rgba(51,51,51,0.1);
    }
    li {
        border-bottom: 1px solid #d8d8d8;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:0.12rem 0.144rem 0.12rem 0;
        p{
            font-size:0.16rem;
            i{
                font-size:0.2rem;
                margin-right:.05rem;
            }
            span{
                color:#999;
            }
        }
    }
    li:last-child{
        border-bottom:0;
    }
    .exit {
        padding: 0 0.18rem 0;
        span{
            display:inline-block;
            background: #f13900;
            color: #fff;
            width: 100%;
            font-size: .18rem;
            height: 0.48rem;
            line-height: 0.48rem;
            text-align:center;
            border-radius: .4rem;
        }
    }
}
`