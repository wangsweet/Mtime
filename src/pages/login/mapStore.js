import {loginUpdateAction} from "../../actions/login/loginCreators"

export const mapStateToProps = (state)=>({
    username:state.login.username,
    password:state.login.password,
    data:state.login.data
})

export const mapDispatchToProps = (dispatch)=>({
    handleUpdate(type,e){
        let val = e.target.value;
        dispatch(loginUpdateAction(type,val))
    }
})