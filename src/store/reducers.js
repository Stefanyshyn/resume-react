import {RegistrationActions} from './actions';
import {combineReducers} from 'redux';
const initState = {
    username: '',
    password: '',
    confirmPassword: '',
    alterMessege:{
        active: false,
        message: '',
        typeAlert: 'success'
    }
}
const auth = (state=initState, action)=>{
    switch (action.type){
        case RegistrationActions.CHANGE_USERNAME:
            return {...state, username: action.username}
        case RegistrationActions.CHANGE_PASSWORD:
            return {...state, password: action.password}
        case RegistrationActions.CHANGE_CONFIRM_PASSWORD:
            return {...state, confirmPassword: action.confirmPassword}
        case RegistrationActions.SHOW_MESSAGE:
            return {...state, 
                alterMessege: {
                    ...(state.alterMessege),
                    active: true,
                    message: action.message,
                    typeAlert: action.typeAlert,
                }
            }
        case RegistrationActions.CLOSE_MESSAGE:
            return {...state, alterMessege: { active: false }}
        default:
            return state;
        }
}
const reducer = combineReducers({
    auth
})

export default reducer;