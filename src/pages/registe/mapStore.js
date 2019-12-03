import {registeUpdateAction} from "../../actions/registe/registeCreators"

export const mapStateToProps = (state)=>({
    username:state.registe.username,
    password:state.registe.password,
})

export const mapDispatchToProps = (dispatch)=>({
    handleUpdate(type,e){
        let val = e.target.value;
        dispatch(registeUpdateAction(type,val))
    }
})