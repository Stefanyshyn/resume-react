import { useState } from 'react';
import UserModel from '../models/user-front';

export function useUserProfile({user}){    
    
    const [state, setState] = useState({
        avatar: currentUser.profile.avatar,
            newAvatar: null,
            username: currentUser.username,
            name: currentUser.profile.name||'',
    
            isSaveResume: false
    })

    return {
        state,
      
    }
}
