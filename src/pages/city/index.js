import React from "react";
import {Header,Search,FirstName,CityName} from "./styled"
class City extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <div>
                <Header>
                    <span className="iconfont">{"\ue600"}</span>
                    <span>选择城市</span>
                    <span></span>
                </Header>
                <Search>
                    <input type="text"  placeholder="请输入搜索关键词"/>
                    <div className="iconfont">{"\ue623"}</div>
                </Search>
                <ul>
                    <li>
                        <FirstName></FirstName>
                        <CityName>
                            <span>北京</span>
                            <span>北京</span>
                            <span>北京</span>
                            <span>北京</span>
                            <span>北京</span>
                            <span>北京</span>
                            <span>北京</span>
                        </CityName>
                    </li>
                </ul>
            </div>
        )
    }
}

export default City