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

    const loadRooms = async () => {
        const response = await dataSource.get('/rooms');
        setRoomList(response.data);
        console.log('Selected user is ', username);
    }
    const handleSelectionOne = (roomId, username) => {
        console.log('Selected ID is ', roomId);
        console.log('Selected user is ', username);
        props.onClick(roomId, username);
    };

    const renderedList = () => {
        return roomList.map((room) => {
            return (
                <Card key={room.roomId} username={username} page="Rooms"
                    pictureURL={room.pictureURL}
                    roomId={room.roomId}
                    description={room.description}
                    price={room.price}
                    buttonText={"Book!"}
                    onClick={() => handleSelectionOne(room.roomId, this.username)}
                />
            );
        });
    };

    return <div className="container">{renderedList()}</div>
}

export default Rooms;