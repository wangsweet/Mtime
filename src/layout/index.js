import React, { Component,Fragment} from 'react'
import Header from "components/head"
export default class Layout extends Component {
    render() {
        return (
            <Fragment>
                 <Header path={this.props.path}/>
                {this.props.children}
                {/* 内容区 */}
            </Fragment>
        )
    }
}
