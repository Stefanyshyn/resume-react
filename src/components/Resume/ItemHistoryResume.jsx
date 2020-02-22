import React from 'react';
import moment from 'moment';
import  {Media} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import style from './ItemHistoryResume.module.css';
import _ from 'lodash';


const Setting = (isSetting)=>{
    return (
        <div className={style.containerSetting}>
            <div className={style.Setting}>
                <div>Delete</div>
                <div>
                    {isSetting?
                        'Collapse'
                        :
                        'Expand'
                    }
                </div>
                <div>Cancel</div>
            </div>
        </div>
    );
}

class ItemHistoryResume extends React.Component{
    constructor(props){
        super(props);
        const {isEdit, itemHistory} = this.props;
        
        this.employment = itemHistory;
        this.state={
            job:this.employment.job,
            employer:this.employment.employer,
            startDate: this.employment.startDate,
            endDate: this.employment.endDate,
            city: this.employment.city,
            description: this.employment.description,

            isEdit: isEdit,
            isSetting: false,
        }
    }

    handleOpenEdit = ()=>{
        const {handleClickEdit, id} = this.props;
        const {
            job,
            employer,
            startDate,
            endDate,
            city,
            description
        } = this.state;
        let employment = {
            id: this.props.itemHistory.id,
            job,
            employer,
            startDate,
            endDate,
            city,
            description
        }
        handleClickEdit(this.state.isEdit?-1:id, employment);
    }

    handleOpenSetting = (e)=>{
        this.setState({isSetting:!(this.state.isSetting)})
    }

    handleChange = (e)=>{
        let {value, name} = e.target;
        this.setState({[name]:value});
    }

    render=()=>{
        const {EditComponet, addHistory} = this.props;
        
        const {isEdit, isSetting} = this.state;
        const {handleOpenSetting, handleOpenEdit, handleChange} = this;
    
        const {
            job, 
            employer,
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
                                    _.isEmpty(job) && _.isEmpty(employer)?
                                    `(Not specsfied)`
                                    :
                                    !_.isEmpty(job) && !_.isEmpty(employer)?
                                    `${job} at ${employer}`
                                    :
                                    _.isEmpty(job)?
                                    employer:job
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
                                <Setting isEdit={isEdit}/>
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
                    <EditComponet data={ this.employment } addHistory={addHistory} handleChange={handleChange}/>
                    :""
                }
            </div>
        );
    }
}
export default ItemHistoryResume;