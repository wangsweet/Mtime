import React from "react";
import { Main } from "./styled"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { withRouter } from 'react-router-dom'
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class MovieShowing extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        let { movieShowList } = this.props
        return (
            <Main>
                <ul>
                    {
                        movieShowList.map((item, index) => (
                            <li key={index} onClick={this.detailId.bind(this,item.id)}>
                                <div className="pic">
                                    <img src={item.img} alt="" />
                                </div>
                                <div>
                                    <h2>{item.nm}<span>{item.sc || 7.5}</span></h2>
                                    <p>{item.star}</p>
                                    <h3>
                                        <img src="https://static1.mtime.cn/html5/20191122140130/images/2014/ia_cine_05.png" alt="" />
                                        <img src="https://static1.mtime.cn/html5/20191122140130/images/2014/ia_cine_15.png" alt="" />
                                    </h3>
                                    <h4>{item.showInfo}</h4>
                                    <div className="buy">
                                        详情
                                </div>
                                </div>
                            </li>

                        ))
                    }
                </ul>
            </Main>
        )
    }
    componentDidMount() {
        //console.log(this.props)
        this.props.handleShowAsyncData(this.props.cityId)
    }
    detailId(id){
        this.props.history.push("/movieDetail/"+id)
    }   
}

export default MovieShowing