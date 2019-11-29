import React, { Fragment } from "react";
import { Main, Section } from "./styled"
class Mine extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Main>
                <article className="set_login set_endlogin">
                    <div className="table_v_c">
                        <i className="i_block i_set_face">
                            <img className="m_img" src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg2.mtime.cn%2Fimages%2Fdefault%2Fhead.gif&amp;width=100&amp;height=100&amp;clipType=4" alt="183****7706_72804284" />
                        </i>
                        <dl>
                            <dt>
                                <i className="i_grade">M0</i><b>183****7706_72804284</b></dt>
                            <dd><b>余额：¥0</b></dd>
                        </dl>
                    </div>
                </article>
                <div className="my_shoptool">
                    <ul className="table_vh_c">
                        <li id="liShoppingCart">
                            <span><i className="iconfont">{"\ue604"}</i></span>
                            <p>购物车</p>
                        </li>
                        <li className="td" id="limovieticket">
                            <span><i className="iconfont">{"\ue612"}</i></span>
                            <p>电影票订单</p>
                        </li>
                        <li>
                            <span><i className="iconfont">{"\ue60c"}</i></span>
                            <p>商品订单</p>
                        </li>
                    </ul>
                </div>
                <aside className="cin_line"><p></p><p></p></aside>
                <Section>
                <article className="set_menu">
                        <ul>
                            <li><p className="td"><i className="iconfont">{"\ue614"}</i>电影票优惠券</p>
                            <p><span>0</span><i className="iconfont">{"\ue602"}</i></p>
                            </li>
                            <li>
                            <p className="td"><i className="iconfont">{"\ue614"}</i>商品优惠券</p>
                            <p><i className="iconfont">{"\ue602"}</i></p>
                            </li>
                            <li>
                            <p className="td"><i className="iconfont">{"\ue665"}</i>我的活动</p>
                            <p><i className="iconfont">{"\ue602"}</i></p>
                            </li>
                            <li id="limyMovie">
                            <p className="td"><i className="iconfont">{"\ue605"}</i>我的电影</p>
                            <p><i className="iconfont">{"\ue602"}</i></p>
                            </li>
                            <li>
                            <p className="td"><i className="iconfont">{"\ue60a"}</i>我的收藏</p>
                            <p><i className="iconfont">{"\ue602"}</i></p>
                            </li>
                        </ul>
                        <aside className="cin_line"><p></p><p></p></aside>
                        <ul className="othier">
                            <li>
                                <p className="td">意见反馈</p><i className="iconfont">{"\ue602"}</i>
                            </li>
                            <li>
                                <p className="td">商城使用帮助</p><i className="iconfont">{"\ue602"}</i>
                            </li>
                            <li>
                                <p className="td">购票使用帮助</p><i className="iconfont">{"\ue602"}</i>
                            </li>
                        </ul>
                        <aside className="cin_line"><p></p><p></p></aside>
                        <div className="exit" id="logout">
                            <span>退出登录</span>
                        </div></article>
                </Section>
            </Main>
        )
    }
}


export default Mine;

