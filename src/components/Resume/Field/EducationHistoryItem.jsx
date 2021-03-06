import React from 'react';
import moment from 'moment';
import  {Media} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import style from './ItemResume.module.css';
import _ from 'lodash';
import init from '../../../models/initialization';

const Setting = ({isEdit, handleRemoveItemHistory,handleOpenSetting,handleOpenEdit})=>{

    return (
        <div className={style.containerSetting}>
            <div className={style.Setting}>
                <div onClick={handleRemoveItemHistory}>Delete</div>
                <div onClick={handleOpenEdit}>
                    {isEdit?
                        'Collapse'
                        :
                        'Expand'
                    }
                </div>
                <div onClick={handleOpenSetting}>Cancel</div>
            </div>
        </div>
    );
}

class EducationHistoryItem extends React.Component{
    constructor(props){
        super(props);
        const {isEdit, itemHistory} = this.props;

        this.education = itemHistory;
        this.state={
            id: this.education.id,
            establishment:this.education.establishment,
            degree:this.education.degree,
            startDate: this.education.startDate,
            endDate: this.education.endDate,
            city: this.education.city,
            description: this.education.description,

            isEdit: isEdit,
            isSetting: false,
        }

    }

    handleOpenEdit = ()=>{
        const {handleClickEdit} = this.props;
        const {
            id,
            establishment,
            degree,
            startDate,
            endDate,
            city,
            description
        } = this.state;

        let education = {
            id,
            establishment,
            degree,
            startDate,
            endDate,
            city,
            description
        }
        handleClickEdit(this.state.isEdit?-1:this.props.id, education);
    }

    handleOpenSetting = (e)=>{
        this.setState({isSetting:!(this.state.isSetting)})
    }

    handleChange = (e)=>{
        let {value, name} = e.target;
        this.setState({[name]:value});
    }

    render=()=>{
        const {EditComponet, handleRemoveItemHistory} = this.props;
        
        const {isEdit, isSetting} = this.state;
        const {handleOpenSetting, handleOpenEdit, handleChange} = this;
    
        const {
            establishment,
            degree,
            startDate,
            endDate,
        } = this.state;

        return (
            <div className={style.divBorder}>
                <div className={style.displayInfo}>
                    <div className={style.divBody}>
                        <div>
                            <div className={style.Title}>
                                <span>
                                {
                                    _.isEmpty(establishment) && _.isEmpty(degree)?
                                    `(Not specsfied)`
                                    :
                                    !_.isEmpty(establishment) && !_.isEmpty(degree)?
                                    `${establishment} at ${degree}`
                                    :
                                    _.isEmpty(establishment)?
                                    degree:establishment
                                }
                                </span>
                            </div>
                            <div className={style.StartAndEndDate}>
                            {
                                    _.isEmpty(startDate) && _.isEmpty(endDate)?
                                    ''
                                    :
                                    !_.isEmpty(startDate) && !_.isEmpty(endDate)?
                                    `${moment(startDate).format('MMM, YYYY')} - ${moment(endDate).format('MMM, YYYY')}`
                                    :
                                    _.isEmpty(startDate)?
                                    moment(endDate).format('MMM, YYYY'):moment(startDate).format('MMM, YYYY')
                                }
                            </div>
                        </div>
                        <div className={style.itemSetting} onClick={handleOpenSetting}>
                            <Media width="24" height="24" viewBox="0 0 24 24" src='https://image.flaticon.com/icons/svg/18/18613.svg' alt=" o o o "/>
                            {
                                isSetting?
                                <Setting isEdit={isEdit} handleOpenEdit={handleOpenEdit} handleOpenSetting={handleOpenSetting} handleRemoveItemHistory={handleRemoveItemHistory}/>
                                :""
                            }
                        </div>
                    </div>
                    <div className={style.EditItem}>
                        {
                            isEdit?
                            <Media width="24" height="24" viewBox="0 0 24 24" onClick={handleOpenEdit} src='https://image.flaticon.com/icons/svg/748/748063.svg' alt=" > "/>                            
                            :
                            <Media width="24" height="24" viewBox="0 0 24 24" onClick={handleOpenEdit} src='https://image.flaticon.com/icons/svg/748/748073.svg' alt=" > "/>
                        }
                    </div>
                </div>
                {
                    isEdit?
                    <EditComponet data={ this.education } addHistory={ handleOpenEdit } handleChange={handleChange}/>
                    :""
                }
            </div>
        );
    }
}
export default EducationHistoryItem;