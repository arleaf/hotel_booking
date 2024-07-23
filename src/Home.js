import React from "react";
import { ReactDOM } from "react";


const Home = () => {
    return (
        <div class="homepage">
            {/* Welcome Page */}
            <div class="WelcomePage">
                <img src="https://investorplace.com/wp-content/uploads/2018/02/hotelmsn.jpg" class="image" />
                <h5 class="h5">To book now please create an account or Login</h5>
                <a href="/signup" className="btn btn-primary">Sign Up</a>
                <a href="login" className="btn btn-primary">Login</a>
            </div>
        </div>
    )
}

export default Home;