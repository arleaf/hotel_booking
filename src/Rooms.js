import React, { useEffect, useState } from "react"
import Card from "./Card";
import dataSource from "./dataSource";

const Rooms = (props) => {

    const [roomList, setRoomList] = useState([]);
    const [username, setUser] = useState(props.username);

    let refresh = false;
    useEffect(() => {
        loadRooms();
    }, [refresh]);

    //Load Available rooms for booking
    const loadRooms = async () => {
        //fetch API response and set to list
        const response = await dataSource.get('/rooms');
        setRoomList(response.data);
        console.log('Selected user is ', username);
    }
    //Books the room for user
    const handleBook = (roomId, username) => {
        console.log('Selected ID is ', roomId);
        console.log('Selected user is ', username);
        props.onClick(roomId, username);
    };

    //return list of available rooms as cards and display
    const renderedList = () => {
        return roomList.map((room) => {
            return (
                <Card key={room.roomId} username={username} page="Rooms"
                    pictureURL={room.pictureURL}
                    roomId={room.roomId}
                    description={room.description}
                    price={room.price}
                    buttonText={"Book!"}
                    onClick={() => handleBook(room.roomId, this.username)}
                />
            );
        });
    };

    return <div className="container">{renderedList()}</div>
}

export default Rooms;