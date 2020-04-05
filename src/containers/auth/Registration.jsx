import RegisterForm from '../../pages/LoginPage'

import { connect } from 'react-redux';
import {changeUsername, changePassword, changeConfirmPassword, showMessage, closeMessage} from '../../store/actions';

const putStateToProps = (state)=>{
    return {
        auth: state.auth
    }
}

const putDispatchToProps = {
    changeUsername,
    changePassword,
    changeConfirmPassword,
    showMessage,
    closeMessage,
}

export default connect(putStateToProps, putDispatchToProps)(RegisterForm)