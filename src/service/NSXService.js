import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/nsx/all";

class NSXService {

    getNSX(){
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

}

export default new NSXService()