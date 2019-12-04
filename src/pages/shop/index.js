import React from "react";
import { Main, Nav, Section } from "./styled"
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
        if (!JSON.parse(sessionStorage.getItem("sliper"))) {
            this.props.handlesliperAsyncData();
        }
        if (!JSON.parse(sessionStorage.getItem("category"))) {
            this.props.handlecategoryAsyncData();
        }
        if (!JSON.parse(sessionStorage.getItem("shoplist"))) {
            this.props.handleshoplistAsyncData();
        }
    }
    render() {
        let { sliper, category, shoplist } = this.props;
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
                        {(JSON.parse(sessionStorage.getItem("sliper")) ? JSON.parse(sessionStorage.getItem("sliper")) : sliper).map(val => (
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
                            {(JSON.parse(sessionStorage.getItem("category")) ? JSON.parse(sessionStorage.getItem("category")) : category).map((item) => (<li key={item.api_id}>
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
                        </div>
                    </div>
                </article>
                <Section>
                    <div id="recommendTitle" className="reco_tit">
                        <h2><i className="i_reco"></i><b>你可能感兴趣的</b></h2>
                    </div>
                    <aside id="recommendRegion" className="othershop mallother">
                        <ul>
                            {(JSON.parse(sessionStorage.getItem("shoplist")) ? JSON.parse(sessionStorage.getItem("shoplist")) : shoplist).map((item, index) => (<li key={item.id}>
                                <Link to={'/goodsdetail/' + item.id + '/' + item.goodsid + '/' + 124 + '/' + index}>
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
    handleGoCart() {
        this.props.history.push("/cart");
    }
}


export default Shop;

