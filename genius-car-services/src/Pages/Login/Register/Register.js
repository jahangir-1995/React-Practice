import React from 'react';
import {Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate();

    const navigateLogIn = () => {
        navigate("/login");
    }

    const handleRegister = event => {
        event.preventDefault();
    }

    return (
        <div className='register-form'>
            <h2 className='text-info text-center mt-3'>Please Register</h2>

            <form onSubmit={handleRegister}>
                <input type="text" name='name' placeholder='your name' required/>
                <br />
                <input type="email" name="email" id="" placeholder='Emails' required/> 
                <br />
                <input type="password" name="password" id="" placeholder='Password' required/>
                <br />
                <input type="submit" value="Register" />
            </form>

            <p>Already have account? <Link to='/login' className='text-danger text-decoration-none' onClick={navigateLogIn}>Log In</Link></p>

        </div>
    );
};

export default Register;