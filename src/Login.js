import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

//Logs user in
const LoginPage = (props) => {

    const [username, setUsername] = useState("");

    //Sets username on buttonclick in username textbox
    const addUsername = (event) => {
        setUsername(event.target.value);
    }

    //Logins user once form is submitted
    const handleLogin = () => {
        console.log('handleLogin from ', from);
        console.log('handleLogin navigate ', navigate);
        props.onClick(from, navigate, username);
    };


    console.log('in LoginPage', props);
    let navigate = useNavigate();
    let location = useLocation();

    let state = location.state;
    let from = state?.from?.pathname ? state.from.pathname : '/';


    //Returns Login Form
    return (
        <div>
            <form onSubmit={handleLogin}>
                <h1>Login</h1>
                <div className="form-group">
                    <label for="Email Address">username</label>
                    <input type="username" className="form-control" id="username" aria-describedby="emailHelp" value={username} onChange={addUsername} />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Login Here</button>
            </form>
        </div>
    );
};

export default LoginPage;