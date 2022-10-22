import Axios from 'axios';
import { Platform } from 'react-native';

const url = 'https://maelou-server.loca.lt/api/v1';
//const url = 'https://maelou.hoagtarget.com/';
//const uRI = "http://localhost:3000/api/v1"

const RouteAxios = Axios.create({
   baseURL: url,
});

export { RouteAxios, url };
