import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const addUsername = (event) => {
        setUsername(event.target.value);
    }
    const addPassword = (event) => {
        setPassword(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const user = {
            username: username,
            password: password,
        };

        saveUser(user);
    }

    const saveUser = async (user) => {
        navigate("/rooms")
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <h1>Sign Up</h1>
            <div className="form-group">
                <label for="Email Address">Username</label>
                <input type="username" className="form-control" id="username" aria-describedby="emailHelp" value={username} onChange={addUsername} />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
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