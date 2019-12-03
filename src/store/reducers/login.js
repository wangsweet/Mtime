import { handleActions } from "redux-actions"
import { loginUpdateType } from "actions/login/loginTypes"
const defaultState = {
    username:"",
    password:"",
    data:[]
}

export default handleActions({
    [loginUpdateType]: (state, action) => {
        let loginUpdateState = JSON.parse(JSON.stringify(state));
        switch (action.info) {
            case 1:
                loginUpdateState.username = action.value;
                break;
           default:
                loginUpdateState.password= action.value;
                break;
        }
        return loginUpdateState;
    }
}, defaultState)
