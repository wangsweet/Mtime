import React from "react";
import { Header, Searchs, Tab, Cinema, Brand, Part } from "./styled"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { withRouter, Link } from 'react-router-dom'
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class Ticket extends React.Component {
    constructor() {
        super()
        this.state = {
            brand: 0,
            part: 0,
            brandName:"品牌",
            brandId:-1,
            partName:"全城",
            partId:-1
        }
    }
    render() {
        let { cinemaChange } = this.props
        let { brand,part,brandName,brandId,partName,partId } = this.state
        return (
            <div>
                <Header>
                    <span><Link to="/city" className="iconfont">{this.props.cityName}{"\ue616"}</Link></span>
                    <Searchs>
                        <input type="text" placeholder="筛选影院" onClick={this.gosearch.bind(this)}/>
                        <div className="iconfont">{"\ue623"}</div>
                    </Searchs>
                    <span>搜索</span>
                </Header>
                <Tab>
                    <ul>
                        <li onClick={this.brandAppear.bind(this)} style={{color:brand?"#c33":''}}>{brandName}</li>
                        <li onClick={this.partAppear.bind(this)} style={{color:part?"#c33":''}}>{partName}</li>
                        <li>影厅特效</li>
                    </ul>
                </Tab>
                <Brand style={{ display: brand ? 'block' : 'none' }}>
                    <ul>
                        {
                            cinemaChange.brand ? cinemaChange.brand.subItems.map((item, index) => (
                                <li key={index} onClick={this.cinemaListReset.bind(this, item)}>
                                    <span>{item.name}</span>
                                    <span>{item.count}</span>
                                </li>
                            )) : ''
                        }
                    </ul>
                </Brand>
                <Cinema>
                    <ul>
                        {
                            this.props.cinemaList.cinemas ? this.props.cinemaList.cinemas.map((item, index) => (
                                <li key={index} onClick={this.godetail.bind(this,item.id)}>
                                    <p>{item.nm}</p>
                                    <p>{item.addr}</p>
                                    <span>{item.promotion.cardPromotionTag}</span>
                                    <span>{item.distance}</span>
                                </li>
                            )) : ''
                        }
                    </ul>
                </Cinema>
                <Part style={{ display: part ? 'block' : 'none' }}>
                    <ul>
                        {
                            cinemaChange.district ? cinemaChange.district.subItems.map((item, index) => (
                                <div key={index}>
                                    <li onClick={this.cinemaListResets.bind(this, item)}>
                                        <span>{item.name}({item.count})</span>
                                    </li>
                                </div>
                            )) : ''
                        }
                    </ul>
                </Part>
            </div>
        )
    }
    componentDidMount() {
        this.props.handleCinemaAsyncData(this.props.cityId, -1,-1)
        this.props.handleCinemaChangeAsyncData(this.props.cityId)
    }
    brandAppear() {
        this.setState({
            brand: !this.state.brand,
        })
        if(this.state.part==1){
            this.setState({
                part: !this.state.part,
            })
        }
    }
    cinemaListReset(item) {
        this.setState({
            brand: !this.state.brand,
            brandName:item.name,
            brandId:item.id
        })
        this.props.handleCinemaAsyncData(this.props.cityId, item.id,this.state.partId)
    }
    partAppear() {
        this.setState({
            part: !this.state.part
        })
        if(this.state.brand==1){
            this.setState({
                brand: !this.state.brand,
            })
        }
    }
    cinemaListResets(item) {
        this.setState({
            part: !this.state.part,
            partName:item.name,
            partId:item.id
        })
        this.props.handleCinemaAsyncData(this.props.cityId, this.state.brandId,item.id)
    }
    gosearch(){
        this.props.history.push("/search")
    }
    godetail(id){
        this.props.history.push("/cinemaDetail/"+id)
    }
}
export default Ticket