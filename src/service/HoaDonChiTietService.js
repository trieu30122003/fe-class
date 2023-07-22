import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/hdct/hien-thi/";

class HoaDonChiTietService {

    getHDCT(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createHDCT(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getHDCTById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateHDCT(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

}

export default new HoaDonChiTietService()