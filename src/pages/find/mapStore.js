import {newsAsyncAction} from "actions/find/findCreators"

export const mapStateToProps = (state)=>({
    news:state.home.news
})

export const mapDispatchToProps = (dispatch)=>({
    handlenewsAsyncData(){
        dispatch(newsAsyncAction())
    },
})