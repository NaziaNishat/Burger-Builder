import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-cff9e-default-rtdb.firebaseio.com/'
});

export default instance;