import axios from 'axios';

const KHACHHANG_API_BASE_URL = "http://localhost:8080/user";

class NhanVienService {

    getKH(page,size){
        return axios.post(`${KHACHHANG_API_BASE_URL}/?page=${page}&size=${size}`,{
            "role": "TEACHER"
        });
    }

    createKH(kh){
        return axios.post(KHACHHANG_API_BASE_URL + '/create', kh);
    }

    getKHById(id) { 
        return axios.get(`${KHACHHANG_API_BASE_URL}/detail?id=${id}`);
    }
    

    updateKH(kh){
        console.log("sdfsdf:  ",kh);
        
        return axios.post(KHACHHANG_API_BASE_URL + '/update' ,  kh);
    }
}

export default new NhanVienService ()