import React, { Fragment } from "react";
import { Header, Main } from "./styled";
class Cart extends React.Component {
    constructor() {
        super()
        this.state={

        }
    }
    render() {
        return (
            <Fragment>
                <Header>
                    <span><i className="iconfont">{"\ue600"}</i></span>
                    <span>购物车</span>
                    <span>&nbsp;</span>
                </Header>
                <Main>
                    <div className="emptycate">
                        <i className="i_emptycate"></i>
                        <p>购物车还是空的，快去挑几件中意的商品吧</p>
                        <div className="bigbtn">
                            <a className="btn_hui" href="/shop">去购物</a>
                        </div>
                    </div>
                </Main>
            </Fragment>
        )
    }
}


export default Cart;

