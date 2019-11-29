import React from "react";
import {Header,Type,Actors} from "./styled"
class ActorList extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <div>
                <Header>
                    <span className="iconfont">{"\ue600"}</span>
                    <span>演职员表</span>
                    <span></span>
                </Header>
                <Type>
                    导演
                </Type>
                <ul>
                    <Actors>
                        <img src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg31.mtime.cn%2Fph%2F2016%2F05%2F30%2F093418.51854590_1280X720X2.jpg&width=120&height=120&clipType=" alt=""/>
                        <div>
                            <p>珍妮弗·李</p>
                            <p>Jennifer Lee</p>
                        </div>
                    </Actors>
                    <Actors>
                        <img src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg31.mtime.cn%2Fph%2F2016%2F05%2F30%2F093418.51854590_1280X720X2.jpg&width=120&height=120&clipType=" alt=""/>
                        <div>
                            <p>珍妮弗·李</p>
                            <p>Jennifer Lee</p>
                        </div>
                    </Actors>
                </ul>
                <Type>
                    导演
                </Type>
                <ul>
                    <Actors>
                        <img src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg31.mtime.cn%2Fph%2F2016%2F05%2F30%2F093418.51854590_1280X720X2.jpg&width=120&height=120&clipType=" alt=""/>
                        <div>
                            <p>珍妮弗·李</p>
                            <p>Jennifer Lee</p>
                        </div>
                    </Actors>
                    <Actors>
                        <img src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg31.mtime.cn%2Fph%2F2016%2F05%2F30%2F093418.51854590_1280X720X2.jpg&width=120&height=120&clipType=" alt=""/>
                        <div>
                            <p>珍妮弗·李</p>
                            <p>Jennifer Lee</p>
                        </div>
                    </Actors>
                </ul>
                <Type>
                    导演
                </Type>
                <ul>
                    <Actors>
                        <img src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg31.mtime.cn%2Fph%2F2016%2F05%2F30%2F093418.51854590_1280X720X2.jpg&width=120&height=120&clipType=" alt=""/>
                        <div>
                            <p>珍妮弗·李</p>
                            <p>Jennifer Lee</p>
                        </div>
                    </Actors>
                    <Actors>
                        <img src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg31.mtime.cn%2Fph%2F2016%2F05%2F30%2F093418.51854590_1280X720X2.jpg&width=120&height=120&clipType=" alt=""/>
                        <div>
                            <p>珍妮弗·李</p>
                            <p>Jennifer Lee</p>
                        </div>
                    </Actors>
                </ul>
            </div>
        )
    }
}
export default ActorList