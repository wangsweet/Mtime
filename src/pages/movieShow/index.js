import React from "react";
import { Header, Table, Search, } from "./styled"
//import Show from "../../components/movie/movieShowing"
import Come from "../../components/movie/movieComing"
class Movies extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Header>
                    <span className="iconfont">{"\ue600"}</span>
                    <Table>
                        <li>正在热映</li>
                        <li>即将上映</li>
                    </Table>
                    <span></span>
                </Header>
                <Search>
                    <span>北京</span>
                    <p><span></span>影片/影院/影人，任你搜</p>
                </Search>
                {/* <Show></Show> */}
                <Come></Come>
            </div>
        )
    }
}
export default Movies