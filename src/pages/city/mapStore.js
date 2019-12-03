import {cityAsyncAction,cityChangeAction} from "actions/city/cityListAction"

export const mapStateToProps = (state)=>({
    cityList:state.city.cityList
})

export const mapDispatchToProps = (dispatch)=>({
    handleCityAsyncData(){
        dispatch(cityAsyncAction())
    },
    cityChange(city){
        dispatch(cityChangeAction(city))
        this.props.history.goBack()
    }
})

