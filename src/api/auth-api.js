import axios from './axios'; // ไม่ใช้ Library โดยตรง

export const register = input => axios.post('/auth/register', input);
export const login = input => axios.post('/auth/login', input)
export const fetchMe = () => axios.get('/auth/me')