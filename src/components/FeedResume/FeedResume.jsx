import React, {useState} from 'react';
import  {
    Nav,
    NavLink,
    NavItem,
    TabContent,
    TabPane,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import style from './FeedResume.module.css';
import _ from 'lodash';
import ResumeCollapse from './ResumeCollapse';
import classnames from 'classnames';

const FeedResume = (props)=>{
    const {
        handleClickOnResume,
        resumes,
        currentUser
    } = props;
    const [isMyResume, setIsMyResume] = useState(false);

    const toggle = tab => {
      if(isMyResume !== tab) setIsMyResume(tab);
    }

    return (
        <div>
            <Nav tabs>
            <NavItem>
                <NavLink
                className={classnames({ active: isMyResume === false})}
                onClick={() => { toggle(false); }}
                >
                All
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                className={classnames({ active: isMyResume === true })}
                onClick={() => { toggle(true); }}
                >
                My
                </NavLink>
            </NavItem>
            </Nav>
            <TabContent activeTab={!isMyResume?'1':'2'}>
            <TabPane tabId="1">
            {
                _.isEmpty(resumes)?
                ''
                //TODO::EmptyMsg
                :
                resumes.map( (resume, index) =>{
                    return (
                        <div className={style.containerResume} key={resume.id}>
                            <ResumeCollapse key={resume.id}  handleClickOnResume={handleClickOnResume.bind( null,resume)} resume={resume}></ResumeCollapse>
                        </div>
                    );
                } )
            }
            </TabPane>
            <TabPane tabId="2">
            {
                _.isEmpty(resumes)?
                ''
                //TODO::EmptyMsg
                :
                resumes.map( (resume, index) =>{
                    return (
                        resume.idUser === currentUser.id?
                        <div className={style.containerResume} key={resume.id}>
                            <ResumeCollapse key={resume.id}  handleClickOnResume={handleClickOnResume.bind( null,resume)} resume={resume}></ResumeCollapse>
                        </div>
                        :``
                    );
                } )
            }
            </TabPane>
            </TabContent>
        </div>
    );
}
export default FeedResume;