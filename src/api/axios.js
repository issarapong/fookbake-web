import axios from 'axios';
import { BACKEND_URL } from '../config/env';
import { getAccessToken } from '../utils/localstorage';

axios.defaults.baseURL = BACKEND_URL;


//ใช้ Intercepter ดักข้อมูลขาออก เพื่อแก้ไข/ตรวจสอบ ก่อนส่งไป Server
axios.interceptors.request.use(config => {
const token = getAccessToken();
if(token) {
    config.headers.Authorization = `Bearer ${token}` ;
}
return config;
},
err => Promise.reject(err)
)                   

export default axios;