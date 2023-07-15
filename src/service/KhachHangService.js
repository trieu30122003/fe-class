import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/khach-hang/new/";

class KhachHangService {

    getKH(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createKH(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getKHById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateKH(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

}

export default new KhachHangService()