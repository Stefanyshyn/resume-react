export const RegistrationActions = {
    CHANGE_USERNAME: 'CHANGE_USERNAME',
    CHANGE_PASSWORD: 'CHANGE_PASSWORD',
    CHANGE_CONFIRM_PASSWORD: 'CHANGE_CONFIRM_PASSWORD',
    SHOW_MESSAGE: 'SHOW_MESSAGE',
    CLOSE_MESSAGE: 'CLOSE_MESSAGE',
}

export  const changeUsername = (username)=>{
    return {
        type: RegistrationActions.CHANGE_USERNAME,
        username
    }
}
export  const changePassword = (password)=>{
    return {
        type: RegistrationActions.CHANGE_PASSWORD,
        password
    }
}
export  const changeConfirmPassword = (confirmPassword)=>{
    return {
        type: RegistrationActions.CHANGE_CONFIRM_PASSWORD,
        confirmPassword
    }
}
export const showMessage = (message, typeAlert)=>{
    return {
        type: RegistrationActions.SHOW_MESSAGE,
        message,
        typeAlert,
    };
}
export const closeMessage = ()=>{
    return {
        type: RegistrationActions.CLOSE_MESSAGE,
    };
}