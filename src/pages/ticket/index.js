import React from "react";
import { Header, Searchs ,Tab, Cinema} from "./styled"
class Ticket extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Header>
                    <span>深圳</span>
                    <Searchs>
                        <input type="text"  placeholder="筛选影院"/>
                        <div className="iconfont">{"\ue623"}</div>
                    </Searchs>
                    <span>搜索</span>
                </Header>
                <Tab>
                    <ul>
                        <li>离我最近</li>
                        <li>全城</li>
                        <li>影厅特效</li>
                    </ul>
                </Tab>
                <Cinema>
                    <ul>
                        <li>
                            <p>华夏星光国际影城（新桥文化艺术中心）</p>
                            <p>深圳市宝安区新桥街道沙企社区中心路36号二层</p>
                            <span>3D</span>
                            <span>23元起</span>
                        </li>
                        <li>
                            <p>华夏星光国际影城（新桥文化艺术中心）</p>
                            <p>深圳市宝安区新桥街道沙企社区中心路36号二层</p>
                            <span>3D</span>
                            <span>23元起</span>
                        </li>
                        <li>
                            <p>华夏星光国际影城（新桥文化艺术中心）</p>
                            <p>深圳市宝安区新桥街道沙企社区中心路36号二层</p>
                            <span>3D</span>
                            <span>23元起</span>
                        </li>
                    </ul>
                </Cinema>
            </div>
        )
    }
}
export default Ticket