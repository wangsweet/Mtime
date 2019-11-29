import React from "react";
import { Header, Name ,Movie} from "./styled"
class CinemaDetail extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Header>
                    <span className="iconfont">{"\ue600"}</span>
                    <span className="iconfont">{"\ue626"}</span>

                </Header>
                <Name>
                    <div>
                        <h4>华夏星光国际影城（新桥文化艺术中心）</h4>
                        <img src="https://static1.mtime.cn/html5/20191122140130/images/2014/i_cine_01.png" alt=""/>
                        <img src="https://static1.mtime.cn/html5/20191122140130/images/2014/i_cine_01.png" alt=""/>
                        <img src="https://static1.mtime.cn/html5/20191122140130/images/2014/i_cine_01.png" alt=""/>
                        <img src="https://static1.mtime.cn/html5/20191122140130/images/2014/i_cine_01.png" alt=""/>
                    </div>
                    <div>
                        <img src="https://static1.mtime.cn/html5/20191122140130/images/2014/i_tel_01.png" alt=""/>
                        <img src="https://static1.mtime.cn/html5/20191122140130/images/2014/i_address_01.png" alt=""/>
                    </div>
                </Name>
                <Movie>
                    <img src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmt%2F2019%2F10%2F30%2F153733.15223146_328X490X4.jpg&width=115&height=160&clipType=4" alt=""/>
                    <img src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmt%2F2019%2F10%2F30%2F153733.15223146_328X490X4.jpg&width=115&height=160&clipType=4" alt=""/>
                    <img src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmt%2F2019%2F10%2F30%2F153733.15223146_328X490X4.jpg&width=115&height=160&clipType=4" alt=""/>
                    <img src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmt%2F2019%2F10%2F30%2F153733.15223146_328X490X4.jpg&width=115&height=160&clipType=4" alt=""/>
                </Movie>
            </div>
        )
    }
}
export default CinemaDetail