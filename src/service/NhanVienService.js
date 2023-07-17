import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/nhan-vien/new/";

class NhanVienService {

    getNV(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createNV(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getNVById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateNV(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

}

export default new NhanVienService ()