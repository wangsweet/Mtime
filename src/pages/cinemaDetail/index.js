import React from "react";
import { Header, Name, Movie, MovieMess, Ticket, Cinema } from "./styled"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { withRouter } from 'react-router-dom'
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class CinemaDetail extends React.Component {
    constructor() {
        super()
        this.state = {
            activeIndex: 0,
            showIndex: 0
        }
    }
    render() {
        let { cinemaDetail } = this.props
        console.log(cinemaDetail.showData)
        let { activeIndex, showIndex } = this.state
        return (
            <div>
                <Header>
                    <span className="iconfont" onClick={this.goback.bind(this)}>{"\ue600"}</span>
                    <span>{cinemaDetail.cinemaData ? cinemaDetail.cinemaData.nm : ''} </span>
                    <span className="iconfont">{"\ue626"}</span>

                </Header>
                <Name>
                    <div>
                        <h4>{cinemaDetail.cinemaData ? cinemaDetail.cinemaData.nm : ''}</h4>
                        <p>{cinemaDetail.cinemaData ? cinemaDetail.cinemaData.addr : ''}</p>
                    </div>
                    <div>
                        <img src="https://static1.mtime.cn/html5/20191122140130/images/2014/i_tel_01.png" alt="" />
                        <img src="https://static1.mtime.cn/html5/20191122140130/images/2014/i_address_01.png" alt="" />
                    </div>
                </Name>
                <Movie>
                    <div ref="pic">
                        {
                            cinemaDetail.showData ? cinemaDetail.showData.movies.map((item, index) => (
                                <img src={item.img.replace("w.h", "75.110")} alt="" key={index} onClick={this.picclick.bind(this, index)} className={activeIndex == index ? 'active' : ''} />
                            )) : ''
                        }
                    </div>
                </Movie>
                <MovieMess>
                    <h3>{cinemaDetail.showData ? cinemaDetail.showData.movies[activeIndex].nm : ''}<span>{cinemaDetail.showData ? cinemaDetail.showData.movies[activeIndex].sc : ''}分</span></h3>
                    <p>{cinemaDetail.showData ? cinemaDetail.showData.movies[activeIndex].desc : ''}</p>
                </MovieMess>
                <Ticket>
                    <ul>
                        {
                            cinemaDetail.showData ? cinemaDetail.showData.movies[activeIndex].shows.map((item, index) => (
                                <li key={index} onClick={this.showChange.bind(this, index)} className={showIndex == index ? 'acc' : ''}>
                                    {item.dateShow}
                                </li>
                            )) : ''
                        }
                    </ul>
                </Ticket>
                <Cinema>
                    {
                        cinemaDetail.showData ? cinemaDetail.showData.movies[activeIndex].shows[showIndex].plist.map((item, index) => (
                            <div key={index}>
                                <div><p>{item.tm}</p></div>
                                <div>
                                    <p>{item.lang}{item.tp}</p>
                                    <p>{item.th}</p>
                                </div>
                                <div>
                                    <p>￥{item.vipPrice}<span>{item.vipPriceName}</span></p>
                                    <p>{item.extraDesc}</p>
                                </div>
                                <span>
                                    购票
                                </span>
                            </div>
                        )) : ''
                    }
                </Cinema>
            </div>
        )
    }
    componentDidMount() {
        this.props.handlecinemaDetail(this.props.match.params.id)
    }
    picclick(index) {
        this.setState({
            activeIndex: index,
            showIndex:0
        })
        this.refs.pic.style.left = -90 * index + 100 + 'px'
    }
    showChange(index) {
        this.setState({
            showIndex: index
        })
    }
    goback(){
        this.props.history.goBack()
    }
}
export default CinemaDetail
