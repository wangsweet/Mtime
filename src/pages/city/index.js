import React from "react";
import { Header, Search, FirstName, CityName } from "./styled"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class City extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        let { cityList } = this.props
        //console.log(cityList)
        return (
            <div>
                <Header>
                    <span className="iconfont" onClick={this.goback.bind(this)}>{"\ue600"}</span>
                    <span>选择城市</span>
                    <span></span>
                </Header>
                <Search>
                    <input type="text" placeholder="请输入搜索关键词" />
                    <div className="iconfont">{"\ue623"}</div>
                </Search>
                <ul>
                    {
                        cityList.map((item, index) => (
                            <li key={index}>
                                <FirstName>{item.index}</FirstName>
                                <CityName>
                                    {
                                        item.list.map((child,idn) => (
                                            <span key={idn} onClick={this.props.cityChange.bind(this,child)}>{child.nm}</span>
                                        ))
                                    }
                                </CityName>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
    componentDidMount() {
        if(!sessionStorage.getItem("cityList")){
            this.props.handleCityAsyncData()
        }
    }
    goback(){
        this.props.history.goBack()
    }
}

export default City