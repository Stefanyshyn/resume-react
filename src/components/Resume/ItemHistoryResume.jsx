import React from 'react';
import moment from 'moment';
import  {Media, Form,Button, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import style from './ItemHistoryResume.module.css';
const ItemHistoryResume = (props)=>{
    const {handleSubmit, handleChange} = props;
    return (
        <div className={style.divBorder}>
            <div className={style.divBody}>
                <div>
                    <div className={style.Title}>
                        <span>Job</span>
                        <span>{' at '}</span> 
                        <span>Employer</span>                
                    </div>
                    <div className={style.StartAndEndDate}>
                        <span>{moment(new Date()).format('MMM, YYYY') + " "}</span>
                        <span>{' - '}</span> 
                        <span>{moment(Date.now()-(1000*60*60*24*32*5)).format('MMM, YYYY') + " "}</span>
                    </div>
                </div>
                <div className={style.itemSetting}>
                    <Media width="24" height="24" viewBox="0 0 24 24" src='https://image.flaticon.com/icons/svg/18/18613.svg' alt=" o o o "/>
                </div>
            </div>
            <div className={style.EditItem}>
                <Media width="24" height="24" viewBox="0 0 24 24" src='https://image.flaticon.com/icons/svg/748/748073.svg' alt=" > "/>
            </div>
        </div>
    );
}
export default ItemHistoryResume;