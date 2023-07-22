import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/san-pham/hien-thi/";

class SanPhamService {

    getSP(){
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

// eslint-disable-next-line import/no-anonymous-default-export
export default new SanPhamService()