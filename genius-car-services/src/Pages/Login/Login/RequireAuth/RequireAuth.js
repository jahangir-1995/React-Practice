import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../../firebase.init';

const RequireAuth = ({children}) => {
    const [user] = useAuthState(auth);
    const location = useLocation();

    if(!user){
        return <Navigate to="/login" state= {{ from: location }} replace />
    }
    /* if(user.providerData[0]?.providerId === "password" && !user.emailVerified){
        
    } */ // ONLY INPUT EMAIL VERIFY KORBE...;
    return children;
};

export default RequireAuth;