import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/hdct/hien-thi/";

class HoaDonService {

    getHD(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createHD(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getHDById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateHD(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

}

export default new HoaDonService()