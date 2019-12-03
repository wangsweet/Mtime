import React from "react";
import { Main, Section } from "./styled"
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { withRouter } from "react-router-dom"
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Home extends React.Component {
    constructor() {
        super()
        this.state={

        }
    }
    render() {
        let { movie } = this.props;
        // console.log(movie);
        return (
            <Main>
                <div className="hea_search">
                    <div className="cityshow">
                        <a href="#/city"><b>北京</b><i className="iconfont">{"\ue633"}</i></a>
                    </div>
                    <p className="input_search"><i className="iconfont">{"\ue623"}</i><span>影片/影院/影人，任你搜</span></p>
                </div>
                <article className="indexmovie">
                    <h2 onClick={this.handleMovienow.bind(this)}><b>正在热映（56部）</b><i className="iconfont">{"\ue602"}</i></h2>
                    <ul>
                       {movie.map((item)=>(<li key={item.id} onClick={this.handleDetail.bind(this,item.id)}> 
                            <div className="mpic">
                                <img src={item.img.replace(/w\.h/,71.116)} className="img_box" alt=""/><em className="m_score"><i>{item.sc.toFixed(1)}</i></em>
                            </div>
                            <p><span>{item.nm}</span></p>
                        </li>))}
                    </ul>
                </article>
                <article className="indexmovie indexclick"><h2><b>即将上映（67部）</b><i className="iconfont">{"\ue602"}</i></h2></article>
                <aside className="cin_line"><p></p><p></p></aside>
                <Section>
                    <div className="shopmid">
                        <img id="firstH5UrlImg" src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F07%2F31%2F143906.61810640.jpg&amp;width=640&amp;height=320&amp;clipType=4" className="m_img" alt=""/>
                    </div>
                    <div className="m_bg_white todayhot">
                        <h2>
                            <b>今日热点</b>
                        </h2>
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
    componentDidMount() {
        this.props.handlemovieAsyncData();
    }
    handleDetail(id){
        this.props.history.push("/movieDetail/"+id)
    }
    handleMovienow(){
        this.props.history.push("/movieShow");
    }
}


export default Home;

