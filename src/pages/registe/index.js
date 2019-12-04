import React, { Fragment } from "react";
import { Header, Main } from "./styled"
import { connect } from "react-redux"
import { registeApi } from "api/registe";
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { withRouter } from "react-router-dom"
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class Registe extends React.Component {
    render() {
        let { username, password } = this.props;
        return (
            <Fragment>
                <Header>
                    <span onClick={this. handleBack.bind(this)}><i className="iconfont">{"\ue600"}</i></span>
                    <img src="https://static1.mtime.cn/html5/20191122140130/images/2014/logo_mtime.png" alt="" />
                    <span>&nbsp;</span>
                </Header>
                <Main>
                    <div>账号密码注册</div>
                    <form>
                        <div><input type="text" id="username" autoComplete="username" placeholder="请输入账号" value={username} onChange={this.props.handleUpdate.bind(this, 1)} />
                        </div>
                        <div><input type="password" id="pwd" autoComplete="current-password" placeholder="请输入密码" value={password} onChange={this.props.handleUpdate.bind(this, 2)} />
                        </div>
                        <div><input type="button" onClick={this.handleRegisteAsync.bind(this, username, password)} value="注册" id="btn" /></div>
                        <div>已有账号，立即<span className="re" onClick={this.handleToLogin.bind(this)}>登录</span></div>
                    </form>

                </Main>
            </Fragment>
        )
    }
    async  handleRegisteAsync(username, password) {
        let data = await registeApi(username, password);
        if (data.data.status === 1) {
            alert(data.data.info)
            this.props.history.push("/login");
        } else if (data.data.status === 2) {
            alert(data.data.info)
        }
    }
    handleToLogin() {
        this.props.history.push("/login");
    }
    handleBack(){
        this.props.history.goBack();
    }
}


export default Registe;

