import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//Sign Up page
const SignUp = () => {

    const [errors, setErrors] = useState({});
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

        //validate errors
        const newErrors = validateForm(user);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Form submission logic here
            console.log('Form submitted successfully!');
            saveUser(user);
        } else {
            console.log(`Form submission failed
             due to validation errors.`);
        }


    }
    //This method will be used to validate input signup data
    const validateForm = (data) => {
        const errors = {};
        //validate username is not null
        if (!data.username.trim()) {
            errors.username = 'Username is required';
        }
        //Validate password meet rquirements
        if (!data.password) {
            errors.password = 'Password is required';
        } else if (data.password.length < 8) {
            errors.password = `Password must be at 
            least 8 characters long`;
        }
        return errors;
    };

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
                {errors.username &&
                    <span className="error-message">
                        {errors.username}
                    </span>
                }

            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="password" value={password} onChange={addPassword} />
                {errors.password &&
                    <span className="error-message">
                        {errors.password}
                    </span>
                }
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default SignUp;