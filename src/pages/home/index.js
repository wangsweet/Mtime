import React from "react";
import { Main, Section } from "./styled"
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { withRouter } from "react-router-dom"
import time from 'utils/time';   
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Home extends React.Component {
    render() {
        let { movie,news,cityName } = this.props;
        return (
            <Main>
                <div className="hea_search">
                    <div className="cityshow">
                        <a href="#/city"><b>{cityName}</b><i className="iconfont">{"\ue633"}</i></a>
                    </div>
                    <p className="input_search" onClick={this.handleGoSearch.bind(this)}><i className="iconfont">{"\ue623"}</i><span>影片/影院/影人，任你搜</span></p>
                </div>
                <article className="indexmovie">
                    <h2 onClick={this.handleMovienow.bind(this)}><b>正在热映（56部）</b><i className="iconfont">{"\ue602"}</i></h2>
                    <ul>
                       {(JSON.parse(sessionStorage.getItem("movie"))?JSON.parse(sessionStorage.getItem("movie")):movie).map((item)=>(<li key={item.id} onClick={this.handleDetail.bind(this,item.id)}> 
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
                        {(JSON.parse(sessionStorage.getItem("news"))?JSON.parse(sessionStorage.getItem("news")):news).map((item)=>( <li key={item.id}>
                               {item.type===1? <div className="table">
                                    <div className="todaytxt">
                                        <h2>{item.title}</h2>
                                        <p></p>
                                        <div className="table piclist">
                                           {item.images.map((child)=>( <p className="td" key={child.gId}><img className="m_img img_box" src={child.url1} alt=""/></p>))}
                                        </div>
                                        <p><time>{time(item.publishTime)}</time></p>
                                    </div>
                                </div>:item.type===2?
                                <div className="table">
                                    <div className="todaypic">
                                        <img className="m_img img_box" src={item.image} alt=""/>
                                    </div>
                                    <div className="todaytxt">
                                        <h2>{item.title}</h2>
                                        <p><span></span></p>
                                        <p><time>{time(item.publishTime)}</time></p>
                                    </div>
                                </div>:
                                <div>
                                    <div className="todaypic_bigimg">
                                        <img className="m_img img_box" src={item.image} alt=""/>
                                        <i className="video_icon"></i>
                                    </div>
                                    <div className="todaytxt">
                                        <h2>{item.title}</h2>
                                        <p><span></span></p>
                                        <p><time>{time(item.publishTime)}</time></p>
                                    </div>
                                </div>}
                            </li>)) }
                        </ul>
                        <div className="btn_viewmore" id="btnMore" >查看更多</div>
                    </div>
                </Section>
            </Main>
        )
    }
    componentDidMount() {
        if(!JSON.parse(sessionStorage.getItem("movie"))){
            this.props.handlemovieAsyncData();
        }
        if(!JSON.parse(sessionStorage.getItem("news"))){
        this.props.handlenewsAsyncData();
        }
    }
    handleDetail(id){
        this.props.history.push("/movieDetail/"+id)
    }
    handleMovienow(){
        this.props.history.push("/movieShow");
    }
    handleGoSearch(){
        this.props.history.push("/search");
    }
}


export default Home;

