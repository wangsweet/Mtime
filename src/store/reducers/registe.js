import { handleActions } from "redux-actions"
import { registeUpdateType } from "actions/registe/registeTypes"
const defaultState = {
    username:"",
    password:""
}

export default handleActions({
    [registeUpdateType]: (state, action) => {
        let registeUpdateState = JSON.parse(JSON.stringify(state));
        switch (action.info) {
            case 1:
                registeUpdateState.username = action.value;
                break;
           default:
                registeUpdateState.password= action.value;
                break;
        }
        return registeUpdateState;
    }
}, defaultState)
