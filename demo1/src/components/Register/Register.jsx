import React, { useState } from "react";
import { toast } from 'react-hot-toast';

const Register = () => {

    const [userData, setUserData] = useState({name: '', email: '', password: ''})

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
        console.log(userData)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (userData.name && userData.email && userData.password) {
            if (userData.password.length >= 8) {
                const response = { data: {success: true} }
                if (response.data.success) {
                    toast.success("registration successfull")
                    setUserData({name: '', email: '', password: ''})
                }
            } else {
                toast.error("password should be 8 digits")
            }
        } else {
            toast.error("All fields are mandatory")
        }
    }
    
  return (
<div>
            <h1>Register Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label> <br />
                <input type="text" name="name" onChange={handleChange} value={userData.name}/> <br />
                <label>Email:</label> <br />
                <input type="email" name="email" onChange={handleChange} value={userData.email}/> <br />
                <label>Password</label> <br />
                <input type="password" name="password" onChange={handleChange} value={userData.password}/> <br />
                <input type="submit" value="register"/>
            </form>
        </div>
  );
};

export default Register;
