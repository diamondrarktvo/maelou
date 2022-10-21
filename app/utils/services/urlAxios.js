import Axios from 'axios';

const url = 'http://localhost:3000/api/v1';
// const uRI = "http://localhost:3000/api/v1"

const RouteAxios = Axios.create({
   baseURL: url,
});

export { RouteAxios, url };
