import React, { Fragment } from "react";
import { Header, Main } from "./styled"
import { connect } from "react-redux"
import {loginApi} from "api/login";
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { withRouter } from "react-router-dom"
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class Login extends React.Component {
    render() {
        let { username, password } = this.props;
        return (
            <Fragment>
                <Header>
                    <span onClick={this.handleBack.bind(this)}><i className="iconfont">{"\ue600"}</i></span>
                    <img src="https://static1.mtime.cn/html5/20191122140130/images/2014/logo_mtime.png" alt="" />
                    <span>&nbsp;</span>
                </Header>
                <Main>
                    <div>账号密码登录</div>
                    <form>
                        <div><input type="text" id="username" autoComplete="username" placeholder="请输入账号" value={username} onChange={this.props.handleUpdate.bind(this, 1)} />
                        </div>
                        <div><input type="password" id="pwd" autoComplete="current-password" placeholder="请输入密码" value={password} onChange={this.props.handleUpdate.bind(this, 2)} />
                        </div>
                        <div><input type="button" value="登录" id="btn" onClick={this.handleLoginAsync.bind(this, username, password)} /></div>
                        <div>还没有账号，立即<span className="re" onClick={this.handleToRegiste.bind(this)}>注册</span></div>
                        <div >登录成功代表您已同意<span className="agree">时光网用户协议</span>和<span className="agree">《隐私政策》</span></div>
                    </form>

                </Main>
            </Fragment>
        )
    }
    async  handleLoginAsync(username, password) {
        let data = await loginApi(username, password);
        if(data.data.status===1){
            alert(data.data.info)
            this.props.history.push("/mine");
            sessionStorage.setItem('name', data.data.data.name)
          }else if(data.data.status===2){
            alert(data.data.info)
          }
    }
    handleToRegiste(){
        this.props.history.push("/registe");
    }
    handleBack(){
        this.props.history.goBack();
    }
}


export default Login;

