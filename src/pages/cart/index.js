import React, { Fragment } from "react";
import { Header, Main, Footer } from "./styled";
import { withRouter } from "react-router-dom"
@withRouter
class Cart extends React.Component {
    constructor() {
        super()
        this.state = {
            data: JSON.parse(sessionStorage.getItem("data")),
            Sprice: 0,
            Snum: 0,
            checked: true
        }
        if (this.state.data) {
            this.state.data.forEach(item => {
                item.flag = true;
            });
        }

    }

    render() {
        let { data, Sprice, Snum, checked } = this.state;
        return (
            <Fragment>
                {this.state.data ? <Fragment><Header>
                    <span onClick={this.hanleBack.bind(this)}><i className="iconfont">{"\ue600"}</i></span>
                    <span>购物车（<span>{this.state.data.length}</span>）</span>
                    <span>&nbsp;</span>
                </Header>
                    <Main>
                        <ul>
                            {data.map((item, index) => (<li className="mid" key={item.id}>
                                <div className="first">
                                    <input type="checkbox" style={{ float: "left", margin: " .028rem .12rem .12rem 0" }} checked={item.flag} onChange={this.handleOneCheck.bind(this, index)} />
                                    <h3 className="titlebox">
                                        <em className="zy">自营</em>{item.title}
                                    </h3>
                                </div>
                                <div className="two">
                                    <img src={item.pic} className="m_img" alt="" />
                                    <button className="add" onClick={this.handleAdd.bind(this, index)}>+</button><input type="text" value={item.num} className="num" onChange={this.handleChange.bind(this, index)} /> <button className="reduce" onClick={this.handleReduce.bind(this, index)}>-</button>
                                    <span className="price">￥{item.price}<i>x{item.num}</i></span><span style={{fontSize:".12rem",color:"#c33",position:"absolute",right:"0.1rem"}} onClick={this.handleDelete.bind(this,index)}>删除</span>
                                </div>
                            </li>))}
                        </ul>
                    </Main>
                    <Footer>
                        <div className="allCheck"><input type="checkbox" checked={checked} onChange={this.handleAllCheck.bind(this, checked)} /> 全选</div>
                        <div className="summary">合计：<span>￥<i>{Sprice}</i></span></div>
                        <div className="jiesuan">结算(<span>{Snum}</span>)</div>
                    </Footer>
                </Fragment> : <Fragment><Header>
                    <span onClick={this.hanleBack.bind(this)}><i className="iconfont">{"\ue600"}</i></span>
                    <span>购物车</span>
                    <span>&nbsp;</span>
                </Header>
                        <Main>
                            <div className="emptycate">
                                <i className="i_emptycate"></i>
                                <p>购物车还是空的，快去挑几件中意的商品吧</p>
                                <div className="bigbtn">
                                    <a className="btn_hui" href="#/shop">去购物</a>
                                </div>
                            </div>
                        </Main></Fragment>}
            </Fragment>
        )
    }
    hanleBack() {
        this.props.history.goBack();
        this.forceUpdate();
    }
    handleChange(e) {
        //   let val=e.target.value;
    }
    handleDelete(index){
        this.state.data.splice(index,1);
        sessionStorage.setItem("data", JSON.stringify(this.state.data));
        this.forceUpdate();
        this.handleSprice();
    }
    handleAdd(index) {
        this.state.data[index].num++;
        sessionStorage.setItem("data", JSON.stringify(this.state.data));
        this.forceUpdate();
        this.handleSprice();
    }
    handleReduce(index) {
        if (Number(this.state.data[index].num) > 1) {
            this.state.data[index].num--;
            sessionStorage.setItem("data", JSON.stringify(this.state.data));
            this.forceUpdate();
            this.handleSprice();
        }
    }
    handleOneCheck(index) {
        if (this.state.data) {
            this.state.data[index].flag = !this.state.data[index].flag;
            let mark = true;
            for (var i = 0; i < this.state.data.length; i++) {
                if (!this.state.data[i].flag) {
                    mark = false;
                }
            }
            this.state.checked = mark;
            this.forceUpdate();
            this.handleSprice();

        }

    }
    handleAllCheck(checked) {
        if (this.state.data) {
            this.setState({
                checked: !checked
            }, () => {
                this.state.data.forEach(item => {
                    item.flag = this.state.checked;
                });
                this.forceUpdate();
                this.handleSprice();
            })
        }

    }
    handleSprice() {
        if (this.state.data) {
            let sprice = 0;
            let snum = 0;
            for (var i = 0; i < this.state.data.length; i++) {
                if (this.state.data[i].flag) {
                    sprice += ((this.state.data[i].price*10) * this.state.data[i].num);
                    snum += this.state.data[i].num;
                }
            }
            this.setState({
                Sprice: sprice/10
            }, () => {

            })
            this.setState({
                Snum: snum
            })
            this.forceUpdate();
        }

    }
    componentDidMount() {
        this.handleSprice();
    }
}


export default Cart;

