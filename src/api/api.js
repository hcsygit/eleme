import axios from 'axios';

let base = '';
//获取验证码
export const GetCode = params => { return axios.post(`${base}/api/GetCode`, params).then(res => res.data); };