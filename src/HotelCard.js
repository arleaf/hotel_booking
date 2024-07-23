import React from "react";
import ReactDOM from 'react-dom';

const hotelCard = (props) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={props.pictureURL} className="card-img-top" alt="Image Name" />
            <div className="card-body">
                <h5 className="card-title">Book Now!</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">Sign Up</a>
                <a href="#" className="btn btn-primary">Login</a>
            </div>
        </div>
    )

}

export default hotelCard;