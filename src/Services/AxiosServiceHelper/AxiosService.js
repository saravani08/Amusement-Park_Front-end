import axios from "axios";

const PostRequest = async(url,request) => {

    try {
        return await axios.post(url, request);
    }catch(error){
        console.log(error)
        return undefined
    }
}

const GetRequest = async(url) => {
    try{
        return await axios.get(url);
    }catch(error){
        console.log(error)
        return undefined
    }
}