import { useState } from "react";
import { Link, useNavigate , useParams } from "react-router-dom";
import { useEffect } from "react";
import VoucherService from "../../service/VoucherService";


const AddEmployee  = () => {
    const[code, setcode] = useState('');
    const[ten, setten] = useState('');
    const[ngayBatDau, setNgayBatDau] = useState('');
    const[ngayKetThuc, setNgayKetThuc] = useState('');
    const[soTienGiam, setsoTienGiam] = useState('');
    const[soLuong, setsoLuong] = useState('');
    const[trangThai, settrangThai] = useState('');

    const history = useNavigate ();
    const {id} = useParams();
    
    useEffect(() => {
        if (id) {
            VoucherService.getVCById(id)
                .then(vc => {
                    setcode(vc.data.code);
                    setten(vc.data.ten);
                    setNgayBatDau(vc.data.ngayBatDau);
                    setNgayKetThuc(vc.data.ngayKetThuc);
                    setsoTienGiam(vc.data.soTienGiam);
                    setsoLuong(vc.data.soLuong);
                    settrangThai(vc.data.trangThai);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [id])
    return(
        <div className="container">
            <h3>{code}</h3>
            <hr/>
            <form>
            <div className='form-group'>
                                <label htmlFor="">Code</label>
                                <input type="text" placeholder='Code' name='code' className='form-control'
                                    value={code} readOnly />
                            </div>
                                 
                <div className="form-group">
                    <label htmlFor="">Ten</label>
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="ten"
                        value={ten} readOnly
                        onChange={(e) => setten(e.target.value)}
                        placeholder="Enter Ten"
                    />

                </div>
                <div className='form-group'>
                                <label htmlFor="">Ngày bắt đầu</label>
                                <input type="date" placeholder='Ngày Bắt Đầu' name='ngayBatDau' className='form-control'
                                    value={ngayBatDau} readOnly />
                            </div>    
                            <div className='form-group'>
                                <label htmlFor="">Ngày Kết Thúc</label>
                                <input type="date" placeholder='Ngày Kết Thúc' name='ngayKetThuc' className='form-control'
                                    value={ngayKetThuc} readOnly />
                            </div>    
                            <div className='form-group'>
                                <label htmlFor="">Số Tiền Giảm</label>
                                <input type="text" placeholder='Số Tiền Giảm' name='soTienGiam' className='form-control'
                                    value={soTienGiam} readOnly />
                            </div>   
                            <div className='form-group'>
                                <label htmlFor="">Số Lượng</label>
                                <input type="text" placeholder='Số lượng' name='soLuong' className='form-control'
                                    value={soLuong} readOnly />
                            </div>       
                            <div className='form-group'>
                                <label htmlFor="">Trạng Thái</label>
                                <input type="text" placeholder='Trạng Thái' name='trangThai' className='form-control'
                                    value={trangThai==1?"Hoạt Động":"Không Hoạt Động"} readOnly />
                            </div>   
                
               
            </form>
            <hr/>
            <Link to="/voucher/new/">Back to List</Link>
        </div>
    )
}

export default AddEmployee ;