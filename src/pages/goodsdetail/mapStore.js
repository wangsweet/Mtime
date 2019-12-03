import {goodsdetailAsyncAction,detailImgAsyncAction} from "actions/goodsdetail/goodsdetailCreators"

export const mapStateToProps = (state)=>({
    goodsdetail:state.goodsdetail.goodsdetail,
    detailImg:state.goodsdetail.detailImg,
    similar:state.goodsdetail.similar,
})

export const mapDispatchToProps = (dispatch)=>({
    handlegoodsdetailAsyncData(cid,index){
        dispatch(goodsdetailAsyncAction(cid,index))
    },
    handledetailImgAsyncData(goodsid){
        dispatch(detailImgAsyncAction(goodsid))
    }
})
