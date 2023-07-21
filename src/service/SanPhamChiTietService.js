import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/san-pham-ct/products/";

class SanPhamService {

    getSP(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createSP(spct){
        return axios.post(EMPLOYEE_API_BASE_URL, spct);
    }

    getSPById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateSP(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

}

export default new SanPhamService()