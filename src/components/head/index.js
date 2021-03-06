import React from "react";
import { HeadRoutes } from "../../router"
import { withRouter } from "react-router-dom"
import { Header } from "./styled.js";
@withRouter
class Head extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        let { path } = this.props;
        return (
            <Header>
                <ul>
                    <li><img src="https://static1.mtime.cn/html5/20191122140130/images/2014/logo_mtime.png" alt=""></img></li>
                    {
                        HeadRoutes.map((item, index) => (<li key={item.path} onClick={this.handleTo.bind(this, item.path)} className={path === item.path ? 'active' : ""}><span>{item.text}</span></li>))
                    }
                    <li><a className="iconfont" href="#/mine">{"\ue6ae"}</a></li>
                </ul>
            </Header>
        )
    }
    handleTo(path) {
        this.props.history.push(path);
    }
}


export default Head;

