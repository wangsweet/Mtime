import React from "react";
import { Header, Searchs ,List,Sear,Hot} from "./styled"
class Search extends React.Component {
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
                    <Searchs>
                        <input type="text"  placeholder="影片/影院/影人，任你搜" />
                        <div className="iconfont">{"\ue623"}</div>
                    </Searchs>
                    <span>搜索</span>
                </Header>
                <List>
                    <p>42,560<span>部影视剧集</span>12,462<span>位影人</span></p>
                </List>
                <Sear>
                    热门搜索
                </Sear>
                <Hot>
                    <span>冰雪奇缘2</span>
                    <span>冰雪奇缘2</span>
                    <span>冰雪奇缘2</span>
                    <span>冰雪奇缘2</span>
                    <span>冰雪奇缘2</span>
                    <span>冰雪奇缘2</span>
                </Hot>
            </div>
        )
    }
}
export default Search