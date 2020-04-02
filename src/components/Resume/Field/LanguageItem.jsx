import React from 'react';
import  {Media} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import style from './ItemResume.module.css';
import _ from 'lodash';


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

class EmploymentHistoryItem extends React.Component{
    constructor(props){
        super(props);
        const {isEdit, itemHistory} = this.props;
        
        this.language = itemHistory;
        this.state={
            language:this.language.language,
            level:this.language.level,

            isEdit: isEdit,
            isSetting: false,
        }
    }

    handleOpenEdit = ()=>{
        const {handleClickEdit, id} = this.props;
        const {
            language,
            level
        } = this.state;

        let _language = {
            id: this.props.itemHistory.id,
            language,
            level
        }
        handleClickEdit(this.state.isEdit?-1:id, _language);
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
            language,
            level
        } = this.state;

        return (
            <div className={style.divBorder}>
                <div className={style.displayInfo}>
                    <div className={style.divBody}>
                        <div>
                            <div className={style.Title}>
                                <span>
                                {
                                    _.isEmpty(language) && _.isEmpty(level)?
                                    `(Not specsfied)`
                                    :
                                    !_.isEmpty(language) && !_.isEmpty(level)?
                                    `${language} at ${level}`
                                    :
                                    _.isEmpty(language)?
                                    level:language
                                }
                                </span>
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
                    <EditComponet data={ this.employment } addHistory={ handleOpenEdit } handleChange={handleChange}/>
                    :""
                }
            </div>
        );
    }
}
export default EmploymentHistoryItem;