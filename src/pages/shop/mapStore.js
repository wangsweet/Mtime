import {sliperAsyncAction,categoryAsyncAction,shoplistAsyncAction} from "actions/shop/shopCreators"

export const mapStateToProps = (state)=>({
    sliper:state.shop.sliper,
    category:state.shop.category,
    shoplist:state.shop.shoplist,
})

export const mapDispatchToProps = (dispatch)=>({
    handlesliperAsyncData(){
        dispatch(sliperAsyncAction())
    },
    handlecategoryAsyncData(){
        dispatch(categoryAsyncAction())
    },
    handleshoplistAsyncData(){
        dispatch(shoplistAsyncAction())
    }
})
