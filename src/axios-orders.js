import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://rishabh-burgerbuilder.firebaseio.com/'
});


export default instance;