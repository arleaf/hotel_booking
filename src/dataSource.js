import axios from "axios";

//Used to connect to RoomsAPI
export default axios.create({
    baseURL: 'http://localhost:3000'
});