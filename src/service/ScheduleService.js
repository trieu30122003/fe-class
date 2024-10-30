import axios from 'axios';

const SCHEDULE_API_BASE_URL = "http://localhost:8080/schedule";

class ScheduleService {
    getKH(){
        return axios.get(SCHEDULE_API_BASE_URL + '/');
    }

    createKH(kh){
        return axios.post(SCHEDULE_API_BASE_URL + '/create', kh);
    }

}

export default new ScheduleService()