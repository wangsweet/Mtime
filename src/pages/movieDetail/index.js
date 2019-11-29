import React from "react";
import { Header, Introduce, Bg, Content, Plot, ActorTable, MoviePic, Comment } from "./styled"
class MovieDetail extends React.Component {
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
                    <img src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmt%2F2019%2F10%2F30%2F153733.15223146_1280X720X2.jpg&width=210&height=316&clipType=4" alt="" />
                    </Bg>
                </Header>
                <Introduce>
                    <img src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmt%2F2019%2F10%2F30%2F153733.15223146_1280X720X2.jpg&width=210&height=316&clipType=4" alt="" />
                    <div>
                        <p>冰雪奇缘2</p>
                        <p>Frozen II</p>
                        <span>7.5</span>
                        <p><span>有彩蛋</span> - 103分钟</p>
                        <p>动画 / 冒险 / 喜剧</p>
                        <p>2019年11月22日中国上映 </p>
                        <p><span>我想看</span><span>我要评分</span></p>
                    </div>
                </Introduce>
                <Content>
                    <p>艾莎升级蜕变踏上宏大冒险</p>
                    <span>查影讯/购票</span>
                </Content>
                <div className="small-space"></div>
                
                <Plot>
                    <p>为什么艾莎(Elsa)天生就拥有神奇魔法？谜题的答案一直呼唤着她，也威胁着王国的安全。她将和安娜(Anna)、克斯托夫(Kristoff)、雪宝(Olaf)和驯鹿斯特 (Sven)共同开启一场非凡的冒险旅程。艾莎曾担心世界不能接受自己的冰雪魔法，但在《冰雪奇缘2》中她却必须祈祷自己的魔法足够强大，能够拯救世界。</p>
                </Plot>
                <div className="small-space"></div>
                <ActorTable>
                    <div><p>65位演职员</p><span className="iconfont">{"\ue602"}</span></div>
                    <div>
                        <div>
                            <p>导演</p>
                            <img src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg31.mtime.cn%2Fph%2F2014%2F03%2F14%2F152350.10780439_1280X720X2.jpg&width=172&height=260&clipType=" alt="" />
                            <p>珍妮弗·李</p>
                            <p>Jennifer Lee</p>
                        </div>
                        <div>
                            <p>主要演员</p>
                            <div className="main-actor">
                                <div>
                                    <img src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fph%2F2017%2F05%2F09%2F154844.51253673_1280X720X2.jpg&width=170&height=170&clipType=" alt="" />
                                    <p>克里斯汀·贝尔</p>
                                    <p>Kristen Bell</p>
                                    <img src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fph%2F2017%2F05%2F09%2F154844.51253673_1280X720X2.jpg&width=170&height=170&clipType=" alt="" />
                                    <p>饰:安娜</p>
                                </div>
                                <div>
                                    <img src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fph%2F2017%2F05%2F09%2F154844.51253673_1280X720X2.jpg&width=170&height=170&clipType=" alt="" />
                                    <p>克里斯汀·贝尔</p>
                                    <p>Kristen Bell</p>
                                    <img src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fph%2F2017%2F05%2F09%2F154844.51253673_1280X720X2.jpg&width=170&height=170&clipType=" alt="" />
                                    <p>饰:安娜</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ActorTable>
                <div className="small-space"></div>
                <MoviePic>
                    <div><p>63张图片</p><span className="iconfont">{"\ue602"}</span></div>
                    <div>
                        <img src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fpi%2F2019%2F11%2F15%2F113047.36208722_1280X720X2.jpg&width=132&height=132&clipType=" alt="" />
                        <img src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fpi%2F2019%2F11%2F15%2F113047.36208722_1280X720X2.jpg&width=132&height=132&clipType=" alt="" />
                        <img src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fpi%2F2019%2F11%2F15%2F113047.36208722_1280X720X2.jpg&width=132&height=132&clipType=" alt="" />
                        <img src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fpi%2F2019%2F11%2F15%2F113047.36208722_1280X720X2.jpg&width=132&height=132&clipType=" alt="" />
                    </div>
                </MoviePic>
                <div className="small-space"></div>
                <Comment>
                    <p>网友短评(455)</p>
                    <ul>
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
                </Comment>
            </div >
        )
    }
}
export default MovieDetail