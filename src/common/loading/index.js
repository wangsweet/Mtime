import React, { Component } from 'react'
import { LoadingContainer } from "./styled"
export default class Loading extends Component {
    render() {
        return (
            <LoadingContainer>
                <h2>mtime</h2>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </LoadingContainer>
        )
    }
}
