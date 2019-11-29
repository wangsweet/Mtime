import React from "react";
import { Main ,Section} from "./styled";
class Find extends React.Component {
    constructor() {
        super()
        this.state={

        }
    }
    render() {
        return (
            <Main>
                <nav className="newsnav">
                    <ul className="table_v_c">
                        <li className="td curr">
                            <a href="/new">
                                <span>新闻</span>
                            </a>
                        </li>
                        <li className="td">
                            <a href="/yugao">
                                <span>预告片</span>
                            </a>
                        </li>
                        <li className="td">
                            <a href="/sort">
                                <span>排行榜</span>
                            </a>
                        </li>
                        <li className="td">
                            <a href="/command">
                                <span>影评</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <article className="newspic">
                    <ul>
                        <li>
                            <img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F07%2F18%2F102211.29411290.jpg&amp;width=640&amp;height=360&amp;clipType=3" className="m_img " alt="《复仇者联盟4》重要彩蛋全解析" />
                            <h2><b>《复仇者联盟4》重要彩蛋全解析</b></h2>
                        </li>
                    </ul>
                </article>
                <Section>
                    <div className="m_bg_white todayhot">
                        <ul id="hotPoints">
                            <li isgallary="true">
                                <div className="table">
                                    <div className="todaytxt">
                                        <h2>王珞丹谭卓文淇 三人合体大片惊艳亮相</h2>
                                        <p></p>
                                        <div className="table piclist">
                                            <p className="td"><img className="m_img img_box" src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fsma%2F2019%2F11%2F27%2F152411.21777907.jpg&amp;width=190&amp;height=130&amp;clipType=4" alt=""/></p>
                                            <p className="td"><img className="m_img img_box" src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fsma%2F2019%2F11%2F27%2F152415.93882911.jpg&amp;width=190&amp;height=130&amp;clipType=4" alt=""/></p>
                                            <p className="td"><img className="m_img img_box" src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fsma%2F2019%2F11%2F27%2F152415.43161897.jpg&amp;width=190&amp;height=130&amp;clipType=4" alt=""/></p>
                                        </div>
                                        <p><time>9分钟前</time></p>
                                    </div>
                                </div>
                                <div className="table">
                                    <div className="todaypic">
                                        <img className="m_img img_box" src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fsma%2F2019%2F11%2F27%2F183605.58784611.jpg&amp;width=225&amp;height=156&amp;clipType=4" alt=""/>
                                    </div>
                                    <div className="todaytxt">
                                        <h2>专访《睡梦医生》伊万麦克格雷格</h2>
                                        <p><span></span></p>
                                        <p><time>25分钟前</time></p>
                                    </div>
                                </div>
                                <div>
                                    <div className="todaypic_bigimg">
                                        <img className="m_img img_box" src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fsma%2F2019%2F11%2F27%2F180000.91850596.jpg&amp;width=370&amp;height=180&amp;clipType=4" alt=""/>
                                        <i className="video_icon"></i>
                                    </div>
                                    <div className="todaytxt">
                                        <h2>"红女巫"：和喜欢的各路导演合作，感觉像约会一样</h2>
                                        <p><span></span></p>
                                        <p><time>1小时前</time></p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="btn_viewmore" id="btnMore" >查看更多</div>
                    </div>
                </Section>
            </Main>
        )
    }
}


export default Find;

