import React from "react";
import { Main, Nav, Article, Section } from "./styled"
import { Carousel, WingBlank } from 'antd-mobile';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom"
@withRouter
@connect(mapStateToProps, mapDispatchToProps)

class Shop extends React.Component {
    constructor() {
        super()
        this.state = {
            data: ['1', '2', '3', '4', '5'],
            imgHeight: 176,

        }
    }
    componentDidMount() {
        this.props.handlesliperAsyncData();
        this.props.handlecategoryAsyncData();
        this.props.handleshoplistAsyncData();
    }
    render() {
        let { sliper, category,shoplist } = this.props;
        return (
            <Main>
                <article className="mallsearch">
                    <div className="table_v_c">
                        <div className="input">
                            <i className="iconfont">{"\ue623"}</i><span>搜索正版电影周边</span>
                        </div>
                        <div className="cart" onClick={this.handleGoCart.bind(this)}>
                            <i className="iconfont">{"\ue608"}</i>
                        </div>
                    </div>
                </article>
                <WingBlank>
                    <Carousel
                        autoplay={true}
                        infinite
                        autoplayInterval={3000}
                    >
                        {sliper.map(val => (
                            <a
                                key={val}
                                href="http://www.alipay.com"
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={val.pic}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
                <Nav>
                    <nav className="mallnav m_bg_whiteb">
                        <ul>
                            {category.map((item) => (<li key={item.api_id}>
                                <Link to={'/goodslist/' + item.api_cid}> <img className="m_img" src={item.img} alt="" /> <p>{item.name}</p></Link>
                            </li>))}
                        </ul>
                    </nav>
                </Nav>
                <article className="mallshop">
                    <div className="shop01">
                        <div className="shopmid">
                            <img className="m_img" src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F08%2F19%2F141732.33138431.jpg&amp;width=375&amp;height=450&amp;clipType=4" alt="" />
                            <div className="countdown">
                            </div>
                        </div>
                    </div>
                    <div className="shop02">
                        <div className="shopmid">
                            <img
                                className="m_img" src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F07%2F03%2F174427.96016382.jpg&amp;width=374&amp;height=225&amp;clipType=4" alt="" />
                        </div>
                    </div>
                    <div className="shop03">
                        <div className="shopmid">
                            <img
                                className="m_img" src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F09%2F19%2F104402.67521002.jpg&amp;width=374&amp;height=224&amp;clipType=4" alt="" />
                        </div>
                    </div>
                    <div className="shop04 m_bg_whiteb">
                        <div className="shopmid">
                            <img
                                className="m_img" src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F07%2F03%2F174012.80503273.jpg&amp;width=750&amp;height=223&amp;clipType=4" alt="" />
                            <div className="countdown">
                            </div>
                        </div>
                    </div>
                </article>
                <article className="m_bg_whiteb mall_act" >
                    <div id="divTopic">
                        <dl className="bg">
                            <dd style={{ backgroundImage: "url('http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F08%2F01%2F155611.53476727.jpg')", display: " block" }}></dd>
                        </dl>
                        <div className="actlist">
                            <dl className="table">
                                <dd>
                                    <div className="layer">
                                        <div className="inner">
                                            <img className="m_img select" src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F07%2F20%2F145740.56878791.jpg" alt="" />
                                            <div className="mark">
                                            </div>
                                        </div>
                                    </div>
                                </dd>
                                <dd>
                                    <div className="layer">
                                        <div className="inner">
                                            <img className="m_img select" src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F07%2F20%2F145740.56878791.jpg" alt="" />
                                            <div className="mark">
                                            </div>
                                        </div>
                                    </div>
                                </dd>
                                <dd>
                                    <div className="layer">
                                        <div className="inner">
                                            <img className="m_img select" src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F07%2F20%2F145740.56878791.jpg" alt="" />
                                            <div className="mark">
                                            </div>
                                        </div>
                                    </div>
                                </dd>
                            </dl>
                        </div>
                        <div className="mall_actul">
                            <ul className="table">
                                <li className="td" style={{ display: "list-item" }}>
                                    <div className="acttitle">
                                        <h4>Justice League</h4>
                                        <h3>正义联盟</h3>
                                    </div>
                                    <dl className="actdd fix">
                                        <dd>
                                            <img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2017%2F07%2F27%2F143439.62420403_600X600X1.jpg&amp;width=196&amp;height=196&amp;clipType=4" className="m_img" alt="" />
                                            <h3>正义联盟迷你人偶套装</h3>
                                            <p>￥<strong>598</strong></p>
                                        </dd>
                                        <dd>
                                            <img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2017%2F11%2F02%2F142140.22636262_600X600X1.jpg&amp;width=196&amp;height=196&amp;clipType=4" className="m_img" alt="" />
                                            <h3>蝙蝠侠战车充电宝</h3>
                                            <p>￥<strong>188</strong></p>
                                        </dd>
                                        <dd>
                                            <img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2017%2F10%2F09%2F153449.51761779_600X600X1.jpg&amp;width=196&amp;height=196&amp;clipType=4" className="m_img" alt="" />
                                            <h3>正义联盟超人马克杯</h3>
                                            <p>￥<strong>79</strong></p>
                                        </dd>
                                        <dd>
                                            <img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2017%2F10%2F24%2F172530.89551431_600X600X1.jpg&amp;width=196&amp;height=196&amp;clipType=4" className="m_img" alt="" />
                                            <h3>神奇女侠Q版硅胶手机壳</h3>
                                            <p>￥<strong>69</strong></p>
                                        </dd>
                                        <dd><img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2017%2F10%2F19%2F170556.50623734_600X600X1.jpg&amp;width=196&amp;height=196&amp;clipType=4" className="m_img" alt="" />
                                            <h3>正义联盟 Q萌钥匙扣</h3>
                                            <p>￥<strong>25</strong></p>
                                        </dd>
                                        <dd>
                                            <img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2017%2F11%2F06%2F175649.74984826_600X600X1.jpg&amp;width=196&amp;height=196&amp;clipType=4" className="m_img" alt="" />
                                            <h3>暗黑蝙蝠侠笔记本</h3>
                                            <p>￥<strong>49</strong></p>
                                        </dd>
                                    </dl>
                                    <div className="actmore"><a href="/abc">更多商品 &gt;</a></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>
                <Article>
                    <article className="m_bg_whiteb mall_type">
                        <div className="typetit table">
                            <h2 style={{ color: "#FFB90F" }}><i style={{ background: "#FFB90F" }}></i>玩具模型</h2>
                            <div className="td tr">
                                <a href="/abc">更多<i className="iconfont">{"\ue602"}</i></a>
                            </div>
                        </div>
                        <dl>
                            <dt>
                                <a href="/abc"><img className="m_img" src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F10%2F14%2F100954.66520415.jpg&amp;width=590&amp;height=290&amp;clipType=4" alt="" /></a>
                            </dt>
                            <dd>
                                <ul className="table">
                                    <li className="td">
                                        <img className="m_img" alt="变形金刚1:32合金小车" src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2018%2F11%2F09%2F165749.26122400_600X600X1.jpg&amp;width=210&amp;height=210&amp;clipType=4" />
                                        <h3>变形金刚1:32合金小车</h3>
                                        <p>￥<strong>79</strong></p>
                                    </li>
                                    <li className="td">
                                        <img className="m_img" alt="变形金刚1:24合金小车" src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2018%2F11%2F09%2F172351.82032772_600X600X1.jpg&amp;width=210&amp;height=210&amp;clipType=4" />
                                        <h3>变形金刚1:24合金小车</h3>
                                        <p>￥<strong>165</strong></p>
                                    </li>
                                    <li className="td">
                                        <img className="m_img" alt="孩之宝 变形金刚擎天柱/大黄蜂/路障快速变形系列儿童玩具" src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2017%2F05%2F24%2F184822.40485767_600X600X1.jpg&amp;width=210&amp;height=210&amp;clipType=4" />
                                        <h3>孩之宝 变形金刚擎天柱/大黄蜂/路障快速变形系列儿童玩具</h3>
                                        <p>￥<strong>129</strong></p>
                                    </li>
                                </ul>
                            </dd>
                        </dl>
                    </article>
                    <article className="m_bg_whiteb mall_type">
                        <div className="typetit table">
                            <h2 style={{ color: "#e16364" }}><i style={{ background: "#e16364" }}></i>数码配件</h2>
                            <div className="td tr">
                                <a href="/abc">更多<i className="iconfont">{"\ue602"}</i></a>
                            </div>
                        </div>
                        <dl>
                            <dt>
                                <a href="/abc"><img className="m_img" src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F10%2F14%2F100954.66520415.jpg&amp;width=590&amp;height=290&amp;clipType=4" alt="" /></a>
                            </dt>
                            <dd>
                                <ul className="table">
                                    <li className="td">
                                        <img className="m_img" alt="变形金刚1:32合金小车" src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2018%2F11%2F09%2F165749.26122400_600X600X1.jpg&amp;width=210&amp;height=210&amp;clipType=4" />
                                        <h3>变形金刚1:32合金小车</h3>
                                        <p>￥<strong>79</strong></p>
                                    </li>
                                    <li className="td">
                                        <img className="m_img" alt="变形金刚1:24合金小车" src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2018%2F11%2F09%2F172351.82032772_600X600X1.jpg&amp;width=210&amp;height=210&amp;clipType=4" />
                                        <h3>变形金刚1:24合金小车</h3>
                                        <p>￥<strong>165</strong></p>
                                    </li>
                                    <li className="td">
                                        <img className="m_img" alt="孩之宝 变形金刚擎天柱/大黄蜂/路障快速变形系列儿童玩具" src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2017%2F05%2F24%2F184822.40485767_600X600X1.jpg&amp;width=210&amp;height=210&amp;clipType=4" />
                                        <h3>孩之宝 变形金刚擎天柱/大黄蜂/路障快速变形系列儿童玩具</h3>
                                        <p>￥<strong>129</strong></p>
                                    </li>
                                </ul>
                            </dd>
                        </dl>
                    </article>
                    <article className="m_bg_whiteb mall_type">
                        <div className="typetit table">
                            <h2 style={{ color: "#e16364" }}><i style={{ background: "#e16364" }}></i>服饰配件</h2>
                            <div className="td tr">
                                <a href="/abc">更多<i className="iconfont">{"\ue602"}</i></a>
                            </div>
                        </div>
                        <dl>
                            <dt>
                                <a href="/abc"><img className="m_img" src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F10%2F14%2F100954.66520415.jpg&amp;width=590&amp;height=290&amp;clipType=4" alt="" /></a>
                            </dt>
                            <dd>
                                <ul className="table">
                                    <li className="td" style={{ width: "50%" }}>
                                        <img className="m_img" alt="变形金刚1:32合金小车" src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2018%2F11%2F09%2F165749.26122400_600X600X1.jpg&amp;width=210&amp;height=210&amp;clipType=4" />
                                        <h3>变形金刚1:32合金小车</h3>
                                        <p>￥<strong>79</strong></p>
                                    </li>
                                    <li className="td" style={{ width: "50%" }}>
                                        <img className="m_img" alt="变形金刚1:24合金小车" src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2018%2F11%2F09%2F172351.82032772_600X600X1.jpg&amp;width=210&amp;height=210&amp;clipType=4" />
                                        <h3>变形金刚1:24合金小车</h3>
                                        <p>￥<strong>165</strong></p>
                                    </li>
                                </ul>
                            </dd>
                        </dl>
                    </article>
                    <article className="m_bg_whiteb mall_type">
                        <div className="typetit table">
                            <h2 style={{ color: "#e16364" }}><i style={{ background: "#e16364" }}></i>家居生活</h2>
                            <div className="td tr">
                                <a href="/abc">更多<i className="iconfont">{"\ue602"}</i></a>
                            </div>
                        </div>
                        <dl>
                            <dt>
                                <a href="/abc"><img className="m_img" src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F10%2F14%2F100954.66520415.jpg&amp;width=590&amp;height=290&amp;clipType=4" alt="" /></a>
                            </dt>
                            <dd>
                                <ul className="table">
                                    <li className="td">
                                        <img className="m_img" alt="变形金刚1:32合金小车" src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2018%2F11%2F09%2F165749.26122400_600X600X1.jpg&amp;width=210&amp;height=210&amp;clipType=4" />
                                        <h3>变形金刚1:32合金小车</h3>
                                        <p>￥<strong>79</strong></p>
                                    </li>
                                    <li className="td">
                                        <img className="m_img" alt="变形金刚1:24合金小车" src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2018%2F11%2F09%2F172351.82032772_600X600X1.jpg&amp;width=210&amp;height=210&amp;clipType=4" />
                                        <h3>变形金刚1:24合金小车</h3>
                                        <p>￥<strong>165</strong></p>
                                    </li>
                                    <li className="td">
                                        <img className="m_img" alt="孩之宝 变形金刚擎天柱/大黄蜂/路障快速变形系列儿童玩具" src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2017%2F05%2F24%2F184822.40485767_600X600X1.jpg&amp;width=210&amp;height=210&amp;clipType=4" />
                                        <h3>孩之宝 变形金刚擎天柱/大黄蜂/路障快速变形系列儿童玩具</h3>
                                        <p>￥<strong>129</strong></p>
                                    </li>
                                </ul>
                            </dd>
                        </dl>
                    </article>
                </Article>
                <Section>
                    <div id="recommendTitle" className="reco_tit">
                        <h2><i className="i_reco"></i><b>你可能感兴趣的</b></h2>
                    </div>
                    <aside id="recommendRegion" className="othershop mallother">
                        <ul>
                        {shoplist.map((item,index)=>(<li key={item.id}>
                            <Link to={'/goodsdetail/' + item.id+'/'+item.goodsid+'/'+124+'/'+index}>
                                <div className="goodsbox">
                                    <div className="mtips">
                                        <i className="i_purchase" style={{ backgroundColor: "#25ACBD" }}>新品</i>
                                    </div>
                                    <div className="picbox">
                                        <img className="m_img img_original_1574910690049" src={item.pic} alt="" />
                                    </div>
                                    <dl className="txtbox">
                                        <dt>
                                            <em className="zy">自营</em>{item.d_title}
                                                    </dt>
                                        <dd>
                                            <b>￥{item.jiage}</b>
                                        </dd>
                                    </dl>
                                </div>
                                </Link>
                            </li>))}
                        </ul>
                        <a id="moreLoadingBtn" className="morelink" style={{ height: "0.5rem" }} href="/abc">奋力加载中...</a></aside>
                </Section>
            </Main>
        )
    }
    handleGoCart(){
        this.props.history.push("/cart");
    }
}


export default Shop;

