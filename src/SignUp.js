import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//Sign Up page
const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    //sets username to textbox event
    const addUsername = (event) => {
        setUsername(event.target.value);
    }
    //sets username to password event
    const addPassword = (event) => {
        setPassword(event.target.value);
    }

    //creates user on form submit
    const handleFormSubmit = (event) => {
        event.preventDefault();

        const user = {
            username: username,
            password: password,
        };
        saveUser(user);
    }

    const saveUser = async (user) => {
        //redirect to available rooms once created
        navigate("/rooms")
    };

    //Signup form, creates user on submit
    return (
        <form onSubmit={handleFormSubmit}>
            <h1>Sign Up</h1>
            <div className="form-group">
                <label for="Email Address">Username</label>
                <input type="username" className="form-control" id="username" aria-describedby="emailHelp" value={username} onChange={addUsername} />

            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="password" value={password} onChange={addPassword} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default SignUp;