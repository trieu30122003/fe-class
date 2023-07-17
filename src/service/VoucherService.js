import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/voucher/new/";

class VoucherService {

    getVC(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createVC(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getVCById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateVC(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

}

export default new VoucherService()