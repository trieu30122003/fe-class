import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import HoaDonService from "../../service/HoaDonService";

const ViewEmployee = () => {
    const [ma, setMa] = useState('');
    const [ngayTao, setNgayTao] = useState('');
    const [ngayShip, setNgayShip] = useState('');
    const [ngayNhan, setNgayNhan] = useState('');
    const [tenNguoiNhan, setTenNguoiNhan] = useState('');
    const [diaChi, setDiaChi] = useState('');
    const [sdt, setSdt] = useState('');
    const [soTienGiam, setSoTienGiam] = useState('');
    const [tinhTrang, setTinhTrang] = useState('');
    const [tongTien, setTongTien] = useState('');
    const [thanhTien, setThanhTien] = useState('');
    const [idKhachHang, setidKhachHang] = useState('');
    const [idNhanVien, setidNhanVien] = useState('');
    const [idPhuongThucThanhToan, setidPhuongThucThanhToan] = useState('');
    const history = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            HoaDonService.getHDById(id)
                .then(hd => {
                    setMa(hd.data.ma);
                    setNgayTao(hd.data.ngayTao);
                    setNgayShip(hd.data.ngayShip);
                    setNgayNhan(hd.data.ngayNhan);
                    setTenNguoiNhan(hd.data.tenNguoiNhan);
                    setDiaChi(hd.data.diaChi);
                    setSdt(hd.data.sdt);
                    setSoTienGiam(hd.data.soTienGiam);
                    setTinhTrang(hd.data.tinhTrang);
                    setTongTien(hd.data.tongTien);
                    setThanhTien(hd.data.thanhTien);
                    setidKhachHang(hd.data.idKhachHang);
                    setidNhanVien(hd.data.idNhanVien);
                    setidPhuongThucThanhToan(hd.data.idPhuongThucThanhToan);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [id])
    return (
        <div className="container">
            <h3>Hóa Đơn :{ma}</h3> 
            <hr />
            <form>
                <div className='form-group'>
                    <label htmlFor="">Mã</label>
                    <input type="text" placeholder=' mã' name='ma' className='form-control'
                        value={ma} />
                </div>
                <div className='form-group'>
                    <label htmlFor="">Ngày Tạo</label>
                    <input type="text" placeholder=' Ngày Tạo' name='ngayTao' className='form-control'
                        value={ngayTao} />
                </div>
                <div className='form-group'>
                    <label htmlFor="">Ngày Ship</label>
                    <input type="text" placeholder=' Ngày Ship' name='ngayShip' className='form-control'
                        value={ngayShip} />
                </div>
                <div className='form-group'>
                    <label htmlFor="">Ngày Nhận</label>
                    <input type="text" placeholder=' Ngày Nhận' name='ngayNhan' className='form-control'
                        value={ngayNhan} />
                </div>
                <div className='form-group'>
                    <label htmlFor="">Người Nhận</label>
                    <input type="text" placeholder=' Người Nhận' name='nguoiNhan' className='form-control'
                        value={tenNguoiNhan} />
                </div>
                <div className='form-group'>
                    <label htmlFor="">Địa Chỉ</label>
                    <input type="text" placeholder=' Địa Chỉ' name='diaChi' className='form-control'
                        value={diaChi} />
                </div>
                <div className='form-group'>
                    <label htmlFor="">SĐT</label>
                    <input type="text" placeholder='SĐT' name='sdt' className='form-control'
                        value={sdt} />
                </div>
                <div className='form-group'>
                    <label htmlFor="">Tiền Giảm</label>
                    <input type="text" placeholder='Tiền Giảm' name='soTienGiam' className='form-control'
                        value={soTienGiam} />
                </div>
                <div className='form-group'>
                    <label htmlFor="">Tình trạng</label>
                    <input type="text" placeholder='Tình trạng' name='tinhTrang' className='form-control'
                        value={tinhTrang === 1 ? "Đã Thanh Toán" : "Chưa Thanh Toán" } />
                </div>
                
                <div className='form-group'>
                    <label htmlFor="">Tổng tiền</label>
                    <input type="text" placeholder='Tổng tiền' name='tongTien' className='form-control'
                        value={tongTien} />
                </div>
                <div className='form-group'>
                    <label htmlFor="">Thành Tiền </label>
                    <input type="text" placeholder='Thành tiền ' name='thanhTien' className='form-control'
                        value={tongTien - soTienGiam} />
                </div>
                <div className='form-group'>
                    <label htmlFor="">Khách Hàng </label>
                    <input type="text" placeholder='Khách Hàng ' name='khachHang' className='form-control'
                        value={idKhachHang.ma} />
                </div>
                <div className='form-group'>
                    <label htmlFor="">Nhân Viên </label>
                    <input type="text" placeholder='Nhân Viên ' name='nhanVien' className='form-control'
                        value={idNhanVien.ma} />
                </div>
                <div className='form-group'>
                    <label htmlFor="">Phương Thức Thanh Toán </label>
                    <input type="text" placeholder='Phương Thức ' name='phuongThucThanhToan' className='form-control'
                        value={idPhuongThucThanhToan.ma} />
                </div>
            </form>
            <hr />
            <Link to="/hoa-don/hien-thi">Back to List</Link>

        </div>
    )
}
export default ViewEmployee;