import React from "react";
import { Header, Table, Search, } from "./styled"
import { Link,withRouter } from "react-router-dom"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { connect } from "react-redux"
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class Movies extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }
    render() {
        let { flag } = this.props
        return (
            <div>
                <Header>
                    <span className="iconfont" onClick={this.goback.bind(this)}>{"\ue600"}</span>
                    <Table>
                        <li><Link to="/movieShow/movieShowing" className={flag ? 'active' : ''} onClick={this.props.handleShow.bind(this,1)}>正在热映</Link></li>
                        <li><Link to="/movieShow/movieComing" className={!flag ? 'active' : ''} onClick={this.props.handleCome.bind(this,0)}>即将上映</Link></li>
                    </Table>
                    <span></span>
                </Header>
                <Search>
                <span><Link to="/city" className="iconfont">{this.props.cityName}{"\ue616"}</Link></span>
                    <p onClick={this.gosearch.bind(this)}><span></span>影片/影院/影人，任你搜</p>
                </Search>

            </div>
        )
    }
    gosearch(){
        this.props.history.push("/search")
    }
    goback(){
        this.props.history.push("/home")
    }
}
export default Movies