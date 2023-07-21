import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/mau-sac/hien-thi";

class LoaiService {

    getMS(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createMS(nsx){
        return axios.post(EMPLOYEE_API_BASE_URL, nsx);
    }

    getMSById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateNSX(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteMS(idMS){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + idMS);
    }
}

export default new LoaiService()