import React from "react";
import { Main, Section } from "./styled";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { withRouter } from "react-router-dom"
import time from 'utils/time';    //这里请注意自己的路径

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Find extends React.Component {
    componentDidMount() {
        if (!JSON.parse(sessionStorage.getItem("news"))) {
            this.props.handlenewsAsyncData();
        }
    }
    render() {
        let { news } = this.props;
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
                            {(JSON.parse(sessionStorage.getItem("news"))?JSON.parse(sessionStorage.getItem("news")):news).map((item) => (<li key={item.id}>
                                {item.type === 1 ? <div className="table">
                                    <div className="todaytxt">
                                        <h2>{item.title}</h2>
                                        <p></p>
                                        <div className="table piclist">
                                            {item.images.map((child) => (<p className="td" key={child.gId}><img className="m_img img_box" src={child.url1} alt="" /></p>))}
                                        </div>
                                        <p><time>{time(item.publishTime)}</time></p>
                                    </div>
                                </div> : item.type === 2 ?
                                        <div className="table">
                                            <div className="todaypic">
                                                <img className="m_img img_box" src={item.image} alt="" />
                                            </div>
                                            <div className="todaytxt">
                                                <h2>{item.title}</h2>
                                                <p><span></span></p>
                                                <p><time>{time(item.publishTime)}</time></p>
                                            </div>
                                        </div> :
                                        <div>
                                            <div className="todaypic_bigimg">
                                                <img className="m_img img_box" src={item.image} alt="" />
                                                <i className="video_icon"></i>
                                            </div>
                                            <div className="todaytxt">
                                                <h2>{item.title}</h2>
                                                <p><span></span></p>
                                                <p><time>{time(item.publishTime)}</time></p>
                                            </div>
                                        </div>}
                            </li>))}
                        </ul>
                        <div className="btn_viewmore" id="btnMore" >查看更多</div>
                    </div>
                </Section>
            </Main>
        )
    }
}


export default Find;

