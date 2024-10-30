import axios from 'axios';

const CLASS_API_BASE_URL = "http://localhost:8080/classes-users";

class ClassUserService {


    createKH(kh){
        return axios.post(CLASS_API_BASE_URL + '/create', kh);
    }

}

export default new ClassUserService()