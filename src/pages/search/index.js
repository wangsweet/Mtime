import React from "react";
import { Header, Searchs ,List,Sear,Movie,Cinema} from "./styled"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { withRouter } from 'react-router-dom'
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class Search extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        let {cityId}=this.props
        //console.log(this.props.searchMovieList)
        return (
            <div>
                <Header>
                    <span className="iconfont" onClick={this.goback.bind(this)}>{"\ue600"}</span>
                    <Searchs>
                        <input type="text"  placeholder="影片/影院/影人，任你搜" onInput={this.props.handleSearchAsyncData.bind(this,cityId)}/>
                        <div className="iconfont">{"\ue623"}</div>
                    </Searchs>
                    <span>搜索</span>
                </Header>
                <List>
                    <p>42,560<span>部影视剧集</span>12,462<span>位影人</span></p>
                </List>
                <Sear>
                    电影
                </Sear>
                {
                    this.props.searchMovieList.movies?this.props.searchMovieList.movies.list.map((item,index)=>(
                        <Movie key={index} onClick={this.godetail.bind(this,item.id)}>
                            <img src={item.img} alt=""/>
                            <div>
                                <p>{item.nm}<span>{item.sc}分</span></p>
                                <p>{item.enm}</p>
                                <p>{item.rt}</p>
                                <p>{item.cat}</p>
                            </div>
                        </Movie>
                    )):''
                }
                <Sear>
                    影院
                </Sear>
                {
                    this.props.searchMovieList.cinemas?this.props.searchMovieList.cinemas.list.map((item,index)=>(
                        <Cinema key={index}>
                            <p>{item.nm}<span>{item.sellPrice}元起</span></p>
                            <p><span>{item.addr}</span><span>{item.distance}</span></p>
                        </Cinema>
                    )):''
                }
            </div>
        )
    }
    godetail(id){
        this.props.history.push("/movieDetail/"+id)
    }
    goback(){
        this.props.history.goBack()
    }
}
export default Search