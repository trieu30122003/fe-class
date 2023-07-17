import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/nsx/hien-thi/";

class NSXService {

    getNSX(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createNSX(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getNSXById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateNSX(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

}

export default new NSXService()