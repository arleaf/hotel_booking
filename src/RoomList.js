import React from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import dataSource from "./dataSource";

const RoomList = (props) => {
    // const handleSelectionOne = (carId, uri) => {
    //   console.log('Selected ID is ', carId);
    //  props.onClick(carId, navigator, uri);
    // };
    console.log('props RoomList ', props);
    const navigator = useNavigate();


    const handleBook = () => {

    };

    const rooms = props.roomsList.map((room) => {
        return (
            <Card
                key={room.roomId}
                roomId={room.roomId}
                roomDescription={room.description}
                roomPicture={room.picture}
                isReserved={room.isReserved}
                reservedBy={room.reservedBy}
                price={room.price}
                buttonText='Book'
                onClick={handleBook}
            />
        );
    });
    return <div className="container">{rooms}</div>;
};

export default RoomList;