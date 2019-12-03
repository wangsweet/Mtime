import React, { Fragment } from "react";
import { Header, Nav, Main } from "./styled";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom"
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Goodslist extends React.Component {
    componentDidMount() {
        this.props.handlegoodslistAsyncData(this.props.match.params.cid);
    }
    render() {
        let { goodslist } = this.props;
        return (
            <Fragment>
                <Header>
                    <div className="back" onClick={this.handleBack.bind(this)}><i className="iconfont">{"\ue600"}</i></div>
                    <div className="input">
                        <i className="iconfont">{"\ue623"}</i><span>搜索正版电影周边</span>
                    </div>
                    <div className="drawer">
                        <i className="iconfont">{"\ue6ea"}</i>
                    </div>
                </Header>
                <Nav>
                    <nav className="tablist">
                        <ul className="table_v_c">
                            <li id="sortLi" className="td">
                                <a href="/abc">
                                    <span>综合排序</span>
                                    <i className="iconfont">{"\ue633"}</i>
                                </a>
                            </li>
                            <li id="topicLi" className="td">
                                <a href="/abc">
                                    <span>主题角色</span>
                                    <i className="iconfont">{"\ue633"}</i>
                                </a>
                            </li>
                            <li id="categoryLi" className="td">
                                <a href="/abc">
                                    <span>全部分类</span>
                                    <i className="iconfont">{"\ue633"}</i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="h5">&nbsp;</div>
                </Nav>
                <Main>
                <aside id="recommendRegion" className="othershop mallother">
                        <ul>
                        {goodslist.map((item,index)=>(<li key={item.id}>
                            <Link to={'/goodsdetail/' + item.id+'/'+item.goodsid+'/'+this.props.match.params.cid+'/'+index}>
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
                </Main>
            </Fragment>
        )
    }
    handleBack(){
        this.props.history.goBack()
    }
}


export default Goodslist;

