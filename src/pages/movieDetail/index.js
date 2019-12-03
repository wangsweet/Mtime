import React from "react";
import { Header, Introduce, Bg, Content, Plot, ActorTable, MoviePic} from "./styled"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { withRouter } from "react-router-dom"
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class MovieDetail extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        let { movieDetail } = this.props
        //console.log(movieDetail)
        return (
            <div className="movie-detail" >
                <Header>
                    <span className="iconfont" onClick={this.goback.bind(this)}>{"\ue600"}</span>
                    <span>
                        <span className="iconfont">{"\ue60a"}</span>
                        <span className="iconfont">{"\ue626"}</span>
                    </span>
                    <Bg>
                        <img src={movieDetail.img} alt="" />
                    </Bg>
                </Header>
                <Introduce>
                    <img src={movieDetail.img} alt="" />
                    <div>
                        <p>{movieDetail.nm}</p>
                        <p>{movieDetail.enm}</p>
                        <span>{movieDetail.sc}</span>
                        <p><span>导演：{movieDetail.dir}</span></p>
                        <p>{movieDetail.cat}</p>
                        <p>{movieDetail.pubDesc} </p>
                        <p><span>我想看</span><span>我要评分</span></p>
                    </div>
                </Introduce>
                <Content>
                    <p>{movieDetail.ver}</p>
                    <span>查影讯/购票</span>
                </Content>
                <div className="small-space"></div>

                <Plot>
                    <p>{movieDetail.dra}</p>
                </Plot>
                <div className="small-space"></div>
                <ActorTable>
                    <video src={movieDetail.videourl} controls="controls" poster={movieDetail.videoImg} ></video>
                </ActorTable>
                <div className="small-space"></div>
                <MoviePic>
                    <div><p>63张图片</p><span className="iconfont">{"\ue602"}</span></div>
                    <div>
                        {
                            movieDetail.photos?movieDetail.photos.slice(0,4).map((item, index) => (
                                <img src={item} alt="" key={index} />
                            )):""
                        }
                    </div>
                </MoviePic>
                <div className="small-space"></div>

            </div >
        )
    }
    componentDidMount() {
        this.props.handleDetailAsyncData(this.props.match.params.id)
    }
    goback(){
        this.props.history.goBack()
    }
}
export default MovieDetail