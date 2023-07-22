import axios from 'axios';

const NHANVIEN_API_BASE_URL = "http://localhost:8080/nhan-vien/new";

class NhanVienService {

    getNV(){
        return axios.get(NHANVIEN_API_BASE_URL+ '/');
    }

    createNV(employee){
        return axios.post(NHANVIEN_API_BASE_URL, employee);
    }

    getNVById(id){
        return axios.get(NHANVIEN_API_BASE_URL + '/' + id);
    }

    updateNV(nv, employeeId){
        return axios.put(NHANVIEN_API_BASE_URL + '/' + employeeId, nv);
    }

}

export default new NhanVienService ()