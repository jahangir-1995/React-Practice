import { useNavigate } from "react-router-dom";
import React from 'react';

const Friend = (props) => {
    const {name, username, id} = props.friend;
     const navigate = useNavigate();

     const showFrdDetail = () => {
         const path = `/friend/${id}`;
         navigate(path);
     }
    return (
        <div>
            <h2>Name: {name}</h2>
            <button onClick={showFrdDetail}>{username}: {id}</button>
        </div>
    );
};

export default Friend;