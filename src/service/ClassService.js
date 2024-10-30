import axios from 'axios';

const CLASS_API_BASE_URL = "http://localhost:8080/classes";

class ClassService {

    getKH(){
        return axios.post(CLASS_API_BASE_URL + '/search',{});
    }

    createKH(kh){
        return axios.post(CLASS_API_BASE_URL + '/create', kh);
    }

    getKHById(id) { 
        return axios.get(`${CLASS_API_BASE_URL}/detail?id=${id}`);
    }
    

    updateKH(kh){
        console.log("sdfsdf:  ",kh);
        
        return axios.post(CLASS_API_BASE_URL + '/update' ,  kh);
    }
}

export default new ClassService()