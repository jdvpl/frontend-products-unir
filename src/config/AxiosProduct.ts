import axios from 'axios';


export const clientAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APIURL,
});