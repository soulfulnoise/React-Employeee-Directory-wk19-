import axios from "axios";

const BASEURL ="https://randomuser.me/api/?results=50&nat=us";

export default {
    search:function(query){
        console.log(url)
        return axios.get(BASEURL + query);
    }
};