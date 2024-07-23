import React from "react";
import dataSource from "./dataSource";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//Component displays different hotel rooms in card format
const Card = (props) => {
    const navigate = useNavigate();
    const [username, setUser] = useState(props.username);

    //functions books hotel room and updates API
    const bookRoom = (roomId) => {
        console.log('ID clicked is ' + roomId);
        console.log('user name is ' + username);

        //Cancel booking
        if (props.page == "Reservations") {
            let room = {
                "roomId": roomId,
                "isReserved": 1,
                "reservedBy": null
            }
            cancelBooking(room);
        }
        //Book room
        else {
            let room = {
                "roomId": roomId,
                "isReserved": 1,
                "reservedBy": username
            }
            saveBooking(room);
        }

    };

    //Cancel room and Update API
    const cancelBooking = async (room) => {
        let response;
        response = await dataSource.put('/rooms', room);
        console.log("room: ", room)
        console.log(response);
        console.log(response.data);
        console.log("room cancelled");
        navigate('/rooms');

    }

    //Book room and save it to the API
    const saveBooking = async (room) => {
        let response;
        response = await dataSource.put('/rooms', room);
        console.log("room: ", room)
        console.log(response);
        console.log(response.data);
        console.log("room booked");
        navigate('/reservations');

    }

    return (
        //Return Card with Hotel room properties
        //Displays hotel rooms as card component
        <div className="card" style={{ width: '18rem' }}>
            <img src={props.pictureURL} className="card-img-top" alt="title" />
            <div className="card-body">
                <h5 className="card-title">Room {props.roomId}</h5>
                <p className="card-text">{props.description}</p>
                <h4 className="card-price">{props.price}</h4>
                <button
                    onClick={() => bookRoom(props.roomId)}
                    className="btn btn-primary">{props.buttonText}</button>
            </div>
        </div>
    )

}

export default Card;