import React from "react";
import { Mains } from "./styled"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class MovieComing extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        let { movieComeList } = this.props
        //console.log(movieComeList)
        return (
            <Mains>
                <h2>即将上映<span>({movieComeList.length}部)</span></h2>
                <div className="month">12月</div>
                <ul>
                    {
                        movieComeList.map((item, index) => (
                            <li key={index} onClick={this.detailId.bind(this,item.id)}>
                                <span>{item.rt.split("-")[2][1]}日</span>
                                <div className="movie-big">
                                    <div><img src={item.img} alt="" />
                                    </div>
                                    <div>
                                        <h3>{item.nm}</h3>
                                        <h4><span>{item.wish}</span>人想看</h4>
                                        <p>演员：{item.star}</p>
                                        <div className="notice">详情</div>
                                    </div>
                                </div>
                            </li>
                        ))
                    }

                </ul>
            </Mains>
        )
    }
    componentDidMount() {
        this.props.handleComeAsyncData(this.props.cityId)
    }
    detailId(id){
        this.props.history.push("/movieDetail/"+id)
    }   
}
export default MovieComing