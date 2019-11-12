import axios from 'axios';

const axiosOrders = axios.create({
    baseURL: "https://react-burgerbuilder-1c5e1.firebaseio.com/"
});

export default axiosOrders;