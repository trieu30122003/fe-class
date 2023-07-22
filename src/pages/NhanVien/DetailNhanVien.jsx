import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import NhanVienService from "../../service/NhanVienService";


const AddEmployee = () => {
    const [ma, setMa] = useState('');
    const [sdt, setSdt] = useState('');
    const [ten, setTen] = useState('');
    const [tenDem, setTenDem] = useState('');
    const [ho, setHo] = useState('');
    const [ngaySinh, setNgaySinh] = useState('');
    const [diaChi, setDiaChi] = useState('');
    const [matKhau, setMatKhau] = useState('');
    const [trangThai, setTrangThai] = useState('');
    const history = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            NhanVienService.getNVById(id)
                .then(nv => {
                    setMa(nv.data.ma);
                    setSdt(nv.data.sdt);
                    setTen(nv.data.ten);
                    setHo(nv.data.ho);
                    setTenDem(nv.data.tenDem);
                    setNgaySinh(nv.data.ngaySinh);
                    setDiaChi(nv.data.diaChi);
                    setTrangThai(nv.data.trangThai);
                    setMatKhau(nv.data.matKhau);
                })
                .catch(error => {
                    console.log('Lỗi!', error);
                })
        }
    }, [id])
    return (
        <div className="container">
            <hr />
            <form>
                <div className="form-group">
                    <h1 color="red">NHÂN VIÊN</h1>
                    <label htmlFor="">MÃ</label>
                    <input type="text" placeholder="ma" name="ma" className='form-control' value={ma} readOnly />
                </div>

                <div className="form-group">     
                    <label htmlFor="">Tên</label>
                    <input type="text" placeholder="tên" name="ten" className='form-control' value={ten} readOnly />
                </div>

                <div className="form-group">     
                    <label htmlFor="">Tên đệm</label>
                    <input type="text" placeholder="Tên đệm" name="tenDem" className='form-control' value={tenDem} readOnly />
                </div>

                <div className="form-group">     
                    <label htmlFor="">Họ</label>
                    <input type="text" placeholder="Họ" name="ho" className='form-control' value={ho} readOnly />
                </div>

                <div className="form-group">     
                    <label htmlFor="">Ngày sinh</label>
                    <input type="date" placeholder="Ngày sinh" name="ngaySinh" className='form-control' value={ngaySinh} readOnly />
                </div>

                <div className="form-group">     
                    <label htmlFor="">Địa chỉ</label>
                    <input type="text" placeholder="Địa chỉ" name="diaChi" className='form-control' value={diaChi} readOnly />
                </div>


                <div className="form-group">     
                    <label htmlFor="">Mật khẩu</label>
                    <input type="text" placeholder="Mật khẩu" name="matKhau" className='form-control' value={matKhau} readOnly />
                </div>


                <div className="form-group">
                    <label htmlFor="">SĐT</label>
                    <input type="text" className="form-control col-4" id="sdt"
                        name='sdt' value={sdt} readOnly
                        placeholder="sdt"
                    />
                </div>

                
                <div className="form-group">     
                    <label htmlFor="">Trạng thái</label>
                    <input type="text" placeholder="Trạng thái" name="trangThai" className='form-control' value={trangThai == 1?"Hoạt động":"Ngừng hoạt động"} readOnly />
                </div>
            </form>
            <hr />
            <div className="form-group">
            <Link to="/nhan-vien/new">
            <button type="button" class="btn btn-success">Trở về danh sách</button>
            </Link>
            </div>
        
            <Link to="/nhan-vien/new">
            <button type="button" class="btn btn-danger">Cập nhật</button>
            </Link>
        </div>
    )

}


export default AddEmployee;