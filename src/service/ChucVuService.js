import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/chuc-vu/new/";

class ChucVuService {

    getChucVu(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createCV(cv){
        return axios.post(EMPLOYEE_API_BASE_URL, cv);
    }

    getNSXCVId(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateCV(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteCV(idNSX){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + idNSX);
    }
}

export default new ChucVuService()