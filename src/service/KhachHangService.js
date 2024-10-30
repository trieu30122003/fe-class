import axios from 'axios';

const KHACHHANG_API_BASE_URL = "http://localhost:8080/user";


class KhachHangService {

    getKH(page,size){
        return axios.post(`${KHACHHANG_API_BASE_URL}/?page=${page}&size=${size}`,{
            "role": "STUDENT"
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
    detail(id){
        return axios.get(`${KHACHHANG_API_BASE_URL}/detail-role-student?id=${id}&role=`)
    }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default new KhachHangService()