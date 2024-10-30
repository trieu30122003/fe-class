import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/score";

class ScoreServices {

    create(kh){
        return axios.post(EMPLOYEE_API_BASE_URL+'/create',kh);
    }

}

export default new ScoreServices()