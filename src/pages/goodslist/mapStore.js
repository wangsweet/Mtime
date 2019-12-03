import {goodslistAsyncAction} from "actions/goodslist/goodslistCreators"

export const mapStateToProps = (state)=>({
    goodslist:state.goodslist.goodslist,
})

export const mapDispatchToProps = (dispatch)=>({
    handlegoodslistAsyncData(cid){
        dispatch(goodslistAsyncAction(cid))
    }
})
