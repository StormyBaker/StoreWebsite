import axios from "axios"

export default async function Product(){
    return await axios.get("http://192.168.2.34:3000")
}