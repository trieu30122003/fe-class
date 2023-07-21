import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/man-hinh/hien-thi/";

class LoaiService {

    getMH(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createNSX(nsx){
        return axios.post(EMPLOYEE_API_BASE_URL, nsx);
    }

    getNSXById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateNSX(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteNSX(idNSX){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + idNSX);
    }
}

export default new LoaiService()