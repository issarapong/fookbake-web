import axios from './axios'; // ไม่ใช้ Library โดยตรง

export const register = input => axios.post('/auth/register', input);