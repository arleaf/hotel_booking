import React, { useEffect, useState } from "react";
import Card from "./Card";
import dataSource from "./dataSource";
import { Link } from 'react-router-dom';

//This page returns all hotel reservations booked by the user
const Reservation = (props) => {

    const [reservelist, setReserveList] = useState([]);
    const [text, setText] = useState(`Resvervations for ${props.username}`);
    const [username, setUser] = useState(props.username);

    console.log("USERNAME:", props.username);

    let refresh = false;
    useEffect(() => {
        loadRooms();
    }, [refresh]);

    //return all rooms booked by user from API
    const loadRooms = async () => {
        console.log("USERNAME:", username);
        console.log(`/rooms/${username}`);
        const response = await dataSource.get(`/rooms/${username}`);
        //set list to api response
        setReserveList(response.data);
    }
    //Cancel reservation by updating API
    const handleCancelOne = (roomId, username) => {
        console.log('Selected ID is ', roomId);
        console.log('Selected user is ', username);
        props.onClick(roomId, username);
    };


    //Return all rooms booked by user
    const renderedreserveList = () => {
        return reservelist.map((room) => {
            return (
                <div style={{
                    display: 'grid',
                    placeItems: 'center',

                }}>
                    <Card key={room.roomId} username={username} page="Reservations"
                        pictureURL={room.pictureURL}
                        roomId={room.roomId}
                        description={room.description}
                        price={room.price}
                        buttonText={"Cancel"}
                        onClick={() => handleCancelOne(room.roomId, this.username)}
                    />
                </div>
            );
        });
    };

    return <div className="Reservation-container"><h1>{text}</h1><br></br>{renderedreserveList()} <Link to='/rooms'>Book Here</Link></div>
}
export default Reservation;
