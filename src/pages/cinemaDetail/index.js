import React from "react";
import { Header, Name, Movie,MovieMess } from "./styled"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { withRouter } from 'react-router-dom'
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class CinemaDetail extends React.Component {
    constructor() {
        super()
        this.state = {
           
        }
    }
    render() {
        let { cinemaDetail } = this.props
        console.log(cinemaDetail.showData)

        return (
            <div>
                <Header>
                    <span className="iconfont">{"\ue600"}</span>
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
                    {
                        cinemaDetail.showData ? cinemaDetail.showData.movies.map((item, index) => (
                            <img src={item.img.replace("w.h", "75.110")} alt="" key={index} />
                        )) : ''
                    }
                </Movie>
                <MovieMess>
                    <p>{cinemaDetail.showData ?cinemaDetail.showData.movies.nm:''}</p>
                </MovieMess>
            </div>
        )
    }
    componentDidMount() {
        this.props.handlecinemaDetail(this.props.match.params.id)       
    }
}
export default CinemaDetail
