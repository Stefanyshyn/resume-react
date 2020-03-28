import { useMemo, useState, useCallback } from 'react';
import UserModel from '../models/user-front';
import Uploader from '../utils/uploader';

function useUserProfile({user}){    
    const currentUser = useMemo(()=> user?user:UserModel.getCurrentUser(), [user]);
        
    const [state, setState] = useState({
        avatar: currentUser.profile.avatar,
            newAvatar: null,
            username: currentUser.username,
            name: currentUser.profile.name,
    
            isSaveResume: false
    })



    const handleSubmit = useCallback(async (e)=>{
        e.preventDefault();
        setState((s)=>({...s,isSaveResume:true}))
        const {avatar, newAvatar, name} = state;
        
        let urlImage = avatar;
        if(newAvatar){
            urlImage = await Uploader.upload(newAvatar);
        }

        let user = {
            id: currentUser.id,
            usernane: currentUser.username,
            profile: {
                name: name,
                avatar: urlImage
            }
        }
        UserModel.update(user);
        setState((s)=>({...s,isSaveResume:false}))
    }, [state] );

    const handleSelectFile = useCallback((e)=>{
        const file = e.target.files[0];
        setState((s)=>({...s,
            newAvatar: file,
            avatar: URL.createObjectURL(file) 
        }))
    },[state]);

    const handleChange = useCallback((e)=>{
        const {value, name} = e.target;
        setState((s)=>({...s,[name]: value}))
    },[state]);

    return {
        state,
        handleSubmit,
        handleChange,
        handleSelectFile,
    }
}

export default useUserProfile;