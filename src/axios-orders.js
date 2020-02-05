import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-78c2d.firebaseio.com/'
});

export default instance;