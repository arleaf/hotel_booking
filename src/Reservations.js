import React, { useEffect, useState } from "react"
import { ReactDOM } from "react";
import Card from "./Card";
import LoginPage from './Login';
import dataSource from "./dataSource";
import RoomList from "./RoomList";
import { Link } from 'react-router-dom';

const Reservation = (props) => {
    const [reservelist, setReserveList] = useState([]);
    const [text, setText] = useState(`Resvervations for ${props.username}`);
    const [username, setUser] = useState(props.username);
    console.log("USERNAME:", props.username);

    let refresh = false;
    useEffect(() => {
        loadRooms();
    }, [refresh]);

    const loadRooms = async () => {
        console.log("USERNAME:", username);
        console.log(`/rooms/${username}`);
        const response = await dataSource.get(`/rooms/${username}`);
        setReserveList(response.data);
    }
    const handleCancelOne = (roomId, username) => {
        console.log('Selected ID is ', roomId);
        console.log('Selected user is ', username);
        props.onClick(roomId, username);
    };


    const renderedreserveList = () => {
        return reservelist.map((room) => {
            return (
                <Card key={room.roomId} username={username} page="Reservations"
                    pictureURL={room.pictureURL}
                    roomId={room.roomId}
                    description={room.description}
                    price={room.price}
                    buttonText={"Cancel"}
                    onClick={() => handleCancelOne(room.roomId, this.username)}
                />
            );
        });
    };





    return <div className="container"><h1>{text}</h1><br></br>{renderedreserveList()} <footer><Link to='/rooms'>Book Here</Link></footer></div>
}
//note, passed username to here need to display all room by this user now!
export default Reservation;

//reservations working need 2 work on booking mechanism now