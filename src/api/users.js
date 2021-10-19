import axios from 'axios';

// export default axios.create({
//     baseURL: "http://localhost:3006/",
// })

const url = "http://localhost:3006/users";

export const getUsers = async () => {
    return await axios.get(url);
}

export const addUser = async (user) => {
    return await axios.post(url, user);
}