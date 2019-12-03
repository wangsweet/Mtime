import React, { Fragment } from "react";
import { Header, Main, Section, Footer } from "./styled"
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom"
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Goodsdetail extends React.Component {
    constructor() {
        super()
        this.state = {
            list: ["图文详情", "规格参数", "购买须知"],
            activeIndex: 0,
        }
    }
    componentDidMount() {
        this.props.handlegoodsdetailAsyncData(this.props.match.params.cid, this.props.match.params.index);
        this.props.handledetailImgAsyncData(this.props.match.params.goodsid);
    }
    render() {
        let { goodsdetail, detailImg, similar } = this.props;
        return (
            <Fragment>
                <Header>
                    <span onClick={this.handleBack.bind(this)}><i className="iconfont">{"\ue600"}</i></span>
                    <span>
                        <i className="iconfont" onClick={this.handleGoHome.bind(this)}>{"\ue65f"}</i>
                        <i className="iconfont" onClick={this.handleGoCart.bind(this)}>{"\ue622"}</i>
                        <i className="iconfont">{"\ue626"}</i>
                    </span>
                </Header>
                <Main>
                    {goodsdetail.map((item) => (<div key={item.id}>
                        <div className="slide">
                            <div className="mui-slider-item mui-active">
                                <div className="posterbox">
                                    <a href="/abc"><img src={item.pic} alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="mallinfo">
                            <ul className="m_list">
                                <li className="tit">
                                    <div className="table_v_c mid">
                                        <div className="mainbox td">
                                            <dl>
                                                <dt>
                                                    <a href="/abc">
                                                        <em className="zy">自营</em>{item.title}
                                                    </a>
                                                    <span className="i-c-normal" style={{ backgroundColor: "#25ACBD" }}>新品</span>
                                                </dt>
                                                <dd>
                                                    <div className="mallprice ">
                                                        <b id="salePriceRegion" >
                                                            <i>￥</i>
                                                            {item.jiage}</b>
                                                        <em id="priceTip"></em>
                                                        <p className="freeshipping"><i></i><span>普通会员，满99元免运费</span></p></div></dd>
                                            </dl>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>))}
                    <aside className="cin_line" id="topAdsContainer"></aside>
                    <article className="appraise-box">
                        <div className="appraise-title">
                            <a className="table_v_c mid" href="/abc">
                                <p className="txt td"><b>评价晒单</b><span>(1人评论)</span></p>
                                <p><b className="eval"><span>100%</span>好评</b>
                                    <i className="iconfont">{"\ue602"}</i></p>
                            </a>
                        </div>
                    </article>
                    <article id="contentRegion" className="m_bg_whiteb malletails">
                        <ul className="table tailstab">
                            {this.state.list.map((item, index) => (<li className={this.state.activeIndex === index ? 'curr' : ""} key={index} onClick={this.handleToggle.bind(this, index)}>
                                <p> <span>{item}</span></p>
                            </li>))}
                        </ul>
                        <div id="goodsRelatedBlock" className="tailsmid">
                            {this.state.activeIndex === 0 ? <div className="pictails">
                                <dl>
                                    <dt></dt>
                                    <dd>一盒12个：9个常规+3个常规或者9个常规+2个常规+1个隐藏款。无法辨别哪套有隐藏款。</dd>
                                </dl>
                                <dl>
                                    <dt><b>随机发 拆盒不退不换</b></dt></dl>
                                {/* {detailImg.map((item)=>(<div key={item.img}>
                                    <img src={item.img} className="m_img" alt="" />
                                </div>))} */}
                            </div> : this.state.activeIndex === 1 ?
                                    <div className="tailspara" >
                                        <ul className="m_list"></ul>
                                    </div> :
                                    <div className="tailsnotes">
                                        <dl className="infotext">
                                            <dt>退货政策</dt>
                                            <dd>自实际收到商品之日起7日内可以退货</dd>
                                            <dd>玩具类商品：退货商品要求具备商品收到时完整的外包装、配件、吊牌等；不影响二次销售。购买物品被洗过、人为破坏或标牌拆卸的不提供退换；所有预定特殊尺码恕不退换。拼装过的玩具不予退换。</dd>
                                            <dt>配送速度查询</dt>
                                            <dd className="dnum"><span>1.</span>下单成功之后，订单会随时更新您的订单状态。</dd>
                                            <dd className="dnum"><span>2.</span>您可以登录到您的时光网账户中，实时查看您订单的生产及配送情况。</dd>
                                            <dd className="dnum"><span>3.</span>订单显示已发货状态，即可看到物流信息更新显示。</dd>
                                            <dd className="dnum"><span>4.</span>当您的包裹发货时，我们将会以短信的方式附上运单号码告知您，您可以到时光网账户跟踪物流信息或者根据快递单号直接进行查询。</dd>
                                            <dt>服务承诺</dt>
                                            <dd className="dnum"><span>1.</span>时光网所售的产品都是官方授权，100%正品保证，您可以放心购买。</dd>
                                            <dd className="dnum"><span>2.</span>如您的商品自签收之日起7天内出现质量问题、商品破损等问题可申请退货(特殊商品除外)。</dd>
                                            <dd className="dnum"><span>3.</span>订单取消成功后，退款大约3-7个工作日内退至原支付账户。</dd>
                                            <dt>权利声明</dt>
                                            <dd>时光网上的所有商品信息、客户评价、商品咨询、网友讨论等内容，是时光网重要的经营资源，未经许可，禁止非法转载使用。</dd>
                                            <dd>注：因部分品牌会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与网站图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若本网站没有及时更新，请大家谅解！</dd>
                                        </dl>
                                    </div>}
                        </div>
                    </article>
                </Main>
                <Section>
                    <div id="recommendTitle" className="reco_tit">
                        <h2><i className="i_reco"></i><b>你可能感兴趣的</b></h2>
                    </div>
                    <aside id="recommendRegion" className="othershop mallother">
                        <ul>
                            {similar.map((item, index) => (<li key={item.id}>
                                <Link to={'/goodsdetail/' + item.id + '/' + item.goodsId + '/' + this.props.match.params.cid + '/' + index}>
                                    <div className="goodsbox">
                                        <div className="mtips">
                                            <i className="i_purchase" style={{ backgroundColor: "#25ACBD" }}>新品</i>
                                        </div>
                                        <div className="picbox">
                                            <img className="m_img img_original_1574910690049" src={item.pic} alt="" />
                                        </div>
                                        <dl className="txtbox">
                                            <dt>
                                                <em className="zy">自营</em>{item.title}
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
                <Footer>
                    <div className="goshare">
                        <p>
                            <i className="iconfont">{"\ue621"}</i>
                            <span>咨询</span>
                        </p>
                        <p>
                            <i className="iconfont">{"\ue60a"}</i>
                            <span>收藏</span>
                        </p>
                    </div>
                    <div className="gocart">
                        <p className="gocarts" onClick={this.handleAddCart.bind(this)}>加入购物车</p>
                        <p className="gobuy">立即购买</p>
                    </div>
                </Footer>
            </Fragment>
        )
    }
    handleBack() {
        this.props.history.goBack();
    }
    handleGoHome() {
        this.props.history.push("/home")
    }
    handleGoCart() {
        this.props.history.push("/cart")
    }
    handleToggle(index) {
        this.setState({
            activeIndex: index
        })
    }
    handleAddCart() {
        var obj = {};
        var data = []
        var mark = 0;
        for (var i = 0; i < this.props.goodsdetail.length; i++) {
            obj.id = this.props.goodsdetail[i].id;
            obj.pic = this.props.goodsdetail[i].pic;
            obj.title = this.props.goodsdetail[i].title;
            obj.price = this.props.goodsdetail[i].jiage;
            obj.num = this.props.goodsdetail.length;
        }
        if (JSON.parse(sessionStorage.getItem("data"))) {
            let list =JSON.parse(sessionStorage.getItem("data"))
            data = list
            for (var n = 0; n < data.length; n++) { 
                if (obj.id === data[n].id) {
                    data[n].num = data[n].num + 1;
                    mark = 1;
                    break;
                }
            }
            if (mark === 0) {
                data.push(obj)
            }
        } else {
            data.push(obj)
        }
        sessionStorage.setItem("data", JSON.stringify(data));
    }
}


export default Goodsdetail;

