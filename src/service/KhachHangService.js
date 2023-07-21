import axios from 'axios';

const KHACHHANG_API_BASE_URL = "http://localhost:8080/khach-hang/new";


class KhachHangService {

    getKH(){
        return axios.get(KHACHHANG_API_BASE_URL + '/');
    }

    createKH(kh){
        return axios.post(KHACHHANG_API_BASE_URL, kh);
    }

    getKHById(id){
        return axios.get(KHACHHANG_API_BASE_URL + '/' + id);
    }

    updateKH(kh, employeeId){
        return axios.put(KHACHHANG_API_BASE_URL + '/' + employeeId, kh);
    }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default new KhachHangService()