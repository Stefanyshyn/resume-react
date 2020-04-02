import { useMemo, useState } from 'react';
import UserModel from '../models/user-front';
import Uploader from '../utils/uploader';

export function useUserProfile({user}){    
    const currentUser = useMemo(()=> user?user:UserModel.getCurrentUser(), [user]);

    const [state, setState] = useState({
        avatar: currentUser.profile.avatar,
            newAvatar: null,
            username: currentUser.username,
            name: currentUser.profile.name||'',
    
            isSaveResume: false
    })

    const handleSubmit = async (e)=>{
        console.log('re-render')
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
    };

    const handleSelectFile = (e)=>{
        const file = e.target.files[0];
        setState((s)=>({...s,
            newAvatar: file,
            avatar: URL.createObjectURL(file) 
        }))
    };

    const handleChange = (e)=>{
        const {value, name} = e.target;
        
        setState((s)=>({...s,[name]: value}))
    };

    return {
        state,
        handleSubmit,
        handleChange,
        handleSelectFile,
    }
}
