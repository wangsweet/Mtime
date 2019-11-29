import React, { Fragment } from "react";
import { Header, Main } from "./styled"
class Registe extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }
    }
    render() {
        let { username, password } = this.state;
        return (
            <Fragment>
                <Header>
                <span><i className="iconfont">{"\ue600"}</i></span>
                   <img src="https://static1.mtime.cn/html5/20191122140130/images/2014/logo_mtime.png" />
                    <span>&nbsp;</span>
                </Header>
                <Main>
                    <div>账号密码注册</div>
                    <form>
                        <div><input type="text" id="username" placeholder="请输入账号" value={username} onChange={this.handleUser.bind(this)}/>
                        </div>
                        <div><input type="password" id="pwd" placeholder="请输入密码" value={password} onChange={this.handlePwd.bind(this)}/>
                        </div>
                        <div><input type="button" value="注册" id="btn" /></div>
                        <div>已有账号，立即<span className="re">登录</span></div>
                    </form>

                </Main>
            </Fragment>
        )
    }
    handleUser(e){
        let value=e.target.value;
    }
    handlePwd(e){
        let value=e.target.value;
    }
}


export default Registe;

