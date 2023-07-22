import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/pttt/hien-thi/";

class PhuongThucThanhToanService {

    getPTTT(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createPTTT(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getPTTTById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updatePTTT(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default new PhuongThucThanhToanService()