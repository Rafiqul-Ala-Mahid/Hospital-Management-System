import axios from 'axios'
/// random string
const BASEURL = "http://localhost:4000";
const API = axios.create({baseURL:BASEURL})
export const ra = async (x)=>{
    const s = await API.get(x);
    return s;
}
export const POST=async(x,y)=>{
    console.log(x+"  "+y)
    const res=await API.post(x,y)
    return res;
}