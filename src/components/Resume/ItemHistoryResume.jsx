import React from 'react';
import moment from 'moment';
import  {Media} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import style from './ItemHistoryResume.module.css';

const Setting = (isEdit)=>{
    return (
        <div className={style.containerSetting}>
            <div className={style.Setting}>
                <div>Delete</div>
                <div>
                    {isEdit?
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
        this.state={
            isEdit: false,
            isSetting: false,
        }
    }

    handleOpenEdit = ()=>{
        this.setState({isEdit:!(this.state.isEdit)})
    }

    handleOpenSetting = (e)=>{
        this.setState({isSetting:!(this.state.isSetting)})
    }
    
    render=()=>{
        const {EditComponet} = this.props;
        
        const {isEdit, isSetting} = this.state;
        const {handleOpenSetting, handleOpenEdit} = this;

        return (
            <div className={style.divBorder}>
                <div className={style.displayInfo}>
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
                    <EditComponet/>
                    :""
                }
            </div>
        );
    }
}
export default ItemHistoryResume;