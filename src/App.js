import React, { useState } from 'react';
import './App.css'
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import NavBar from './NavBar';
import LoginPage from './Login';
import PrivateRoute from './PrivateRoute';
import Home from './Home';
import Rooms from './Rooms';
import SignUp from './SignUp';
import Reservation from './Reservations';

const App = () => {
    const [user, setUser] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    //Checked if user is logged in
    const handleLogin = (from, navigate, username) => {
        console.log('USER is ', user);
        setIsLoggedIn(true);
        setUser(username);
        console.log('in handleLogin from', from);
        console.log('in handleLogin navigate', navigate);
        //navigate to login if not logged in or to page if logged in
        navigate(from, { replace: true });

    };

    return (
        //Routing to pages
        <BrowserRouter>

            <span className="hotel-name" href='#'>
                Arleth's Hotel
            </span>
            <NavBar />
            <Routes>
                <Route path='/' element={<RootElement />} />

                <Route
                    path='/reservations'
                    //If user is not logged in, they cannot access the reservation page
                    element={
                        <PrivateRoute authorized={isLoggedIn} username={user}>
                            <Reservation username={user} />
                        </PrivateRoute>
                    }
                />
                <Route path='/login' element={<LoginPage onClick={handleLogin} />} />
                <Route path='/rooms' element={<Rooms username={user} />} />
                <Route path='/signUp' element={<SignUp />} />
            </Routes>



        </BrowserRouter>
    )
}

const RootElement = () => <Home></Home>;
export default App;