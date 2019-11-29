import React from "react";
import { Header, Introduce, Bg, Synopsis,Product, Success , ActorPic,Message} from "./styled"
class ActorDetail extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div className="movie-detail" >
                <Header>
                    <span className="iconfont">{"\ue600"}</span>
                    <span>
                        <span className="iconfont">{"\ue60a"}</span>
                        <span className="iconfont">{"\ue626"}</span>
                    </span>
                    <Bg>
                        <img src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fph%2F2017%2F05%2F09%2F154844.51253673_1280X720X2.jpg&width=210&height=316&clipType=4" alt="" />

                    </Bg>
                </Header>
                <Introduce>
                    <img src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fph%2F2017%2F05%2F09%2F154844.51253673_1280X720X2.jpg&width=210&height=316&clipType=4" alt="" />
                    <div>
                        <p>克里斯汀·贝尔</p>
                        <p>Kristen Bell</p>
                        <span>87%</span>
                        <p>1980-7-18 美国 底特律</p>
                        <p>职业：演员 | 制作人 </p>
                        <p><span className="iconfont">{"\ue694"}喜欢</span><span className="iconfont">{"\ue60e"}不喜欢</span></p>
                    </div>
                </Introduce>
                <Synopsis >
                    <p>
                        克里斯汀·贝尔随着《美眉校探》的声名鹊起而迅速窜红，她在其中甜美、叛逆的邻家女孩角色给广大观众留下了很深的印象，也给她带来了多个奖项。在《美眉校探》停播之后，她又加入了NBC主打的《英雄》扮演“放电女”，并为青春偶像剧《绯闻女孩》声音出演线索人物。这两部风靡全美的剧集使她的人气如日中天。红透荧屏的同时克里斯汀也没有荒废大银幕的工作，她在《惹鬼回路》、《忘掉莎拉·马歇尔》等影片中都有不错的表现，而她的新作《许愿池艳遇》也将在2009年与观众见面。
                    </p>
                </Synopsis>
                <div className="small-space"></div>
                <Product>
                    <p><span>主要作品</span><span className="iconfont">{"\ue602"}</span></p>
                    <div>
                        <div>
                            <img src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg31.mtime.cn%2Fmt%2F2014%2F03%2F24%2F100958.85493606_1280X720X2.jpg&width=210&height=316&clipType=4" alt=""/>
                            <p>冰雪奇缘</p>
                            <p>(2013)</p>
                        </div>
                        <div>
                            <img src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg31.mtime.cn%2Fmt%2F2014%2F03%2F24%2F100958.85493606_1280X720X2.jpg&width=210&height=316&clipType=4" alt=""/>
                            <p>冰雪奇缘</p>
                            <p>(2013)</p>
                        </div>
                        <div>
                            <img src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg31.mtime.cn%2Fmt%2F2014%2F03%2F24%2F100958.85493606_1280X720X2.jpg&width=210&height=316&clipType=4" alt=""/>
                            <p>冰雪奇缘</p>
                            <p>(2013)</p>
                        </div>
                    </div>
                </Product>
                <div className="small-space"></div>
                <Success>
                    <p><span>荣誉成就</span><span className="iconfont">{"\ue602"}</span></p>
                    <div>
                        <div>
                            <p>1</p>
                            <p>获奖</p>
                        </div>
                        <div>
                            <p>17</p>
                            <p>提名</p>
                        </div>
                        
                        <p>暂无其他荣誉成就</p>

                    </div>
                </Success>
                <div className="small-space"></div>
                < ActorPic>
                    <p><span>影人图集</span><span className="iconfont">{"\ue602"}</span></p>
                    <div>
                        <img src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg31.mtime.cn%2Fpi%2F2014%2F07%2F18%2F094415.11058904_1000X1000.jpg&width=132&height=132&clipType=4" alt=""/>
                        <img src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg31.mtime.cn%2Fpi%2F2014%2F07%2F18%2F094415.11058904_1000X1000.jpg&width=132&height=132&clipType=4" alt=""/>
                        <img src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg31.mtime.cn%2Fpi%2F2014%2F07%2F18%2F094415.11058904_1000X1000.jpg&width=132&height=132&clipType=4" alt=""/>
                        <img src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg31.mtime.cn%2Fpi%2F2014%2F07%2F18%2F094415.11058904_1000X1000.jpg&width=132&height=132&clipType=4" alt=""/>
                    </div>
                </ActorPic>
                <Message>
                <p>网友短评(455)</p>
                    <ul>
                        <li>
                            <img src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg32.mtime.cn%2Fup%2F2016%2F03%2F09%2F091926.42376995_48X48.jpg&width=80&height=80&clipType=" alt="" />
                            <div>
                                <p><span>我是一只柠檬</span><span>2019-11-23 04:28:44</span></p>
                                <p>给9.0我觉得已经很好了，迪士尼一如既往的不会让人失望，特效很棒，艾莎又双叒叕解锁了新的时装，很女王范儿。但是..</p>
                                <p>
                                    <span className="iconfont">{"\ueb77"}</span><b>回复</b>
                                    <span className="iconfont">{"\ue617"}</span><b>赞</b>   
                                </p>
                            </div>
                        </li>
                        <li>
                            <img src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg32.mtime.cn%2Fup%2F2016%2F03%2F09%2F091926.42376995_48X48.jpg&width=80&height=80&clipType=" alt="" />
                            <div>
                                <p><span>我是一只柠檬</span><span><b>1小时前</b><i>-评</i><span>10</span></span></p>
                                <p>给9.0我觉得已经很好了，迪士尼一如既往的不会让人失望，特效很棒，艾莎又双叒叕解锁了新的时装，很女王范儿。但是..</p>
                                <p>
                                    <span className="iconfont">{"\ueb77"}</span><b>回复</b>
                                    <span className="iconfont">{"\ue617"}</span><b>赞</b>   
                                </p>
                            </div>
                        </li>
                        <li>
                            <img src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg32.mtime.cn%2Fup%2F2016%2F03%2F09%2F091926.42376995_48X48.jpg&width=80&height=80&clipType=" alt="" />
                            <div>
                                <p><span>我是一只柠檬</span><span><b>1小时前</b><i>-评</i><span>10</span></span></p>
                                <p>给9.0我觉得已经很好了，迪士尼一如既往的不会让人失望，特效很棒，艾莎又双叒叕解锁了新的时装，很女王范儿。但是..</p>
                                <p>
                                    <span className="iconfont">{"\ueb77"}</span><b>回复</b>
                                    <span className="iconfont">{"\ue617"}</span><b>赞</b>   
                                </p>
                            </div>
                        </li>
                        <li>
                            <img src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg32.mtime.cn%2Fup%2F2016%2F03%2F09%2F091926.42376995_48X48.jpg&width=80&height=80&clipType=" alt="" />
                            <div>
                                <p><span>我是一只柠檬</span><span><b>1小时前</b><i>-评</i><span>10</span></span></p>
                                <p>给9.0我觉得已经很好了，</p>
                                <p>
                                    <span className="iconfont">{"\ueb77"}</span><b>回复</b>
                                    <span className="iconfont">{"\ue617"}</span><b>赞</b>   
                                </p>
                            </div>
                        </li>
                    </ul>
                </Message>
            </div >
        )
    }
}
export default ActorDetail