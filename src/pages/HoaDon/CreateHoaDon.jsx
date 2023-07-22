import React, { Component } from 'react'
import Box from '@mui/material/Box';
import Sidebar from '../../components/sidebar/Sidebar';
import { Navbar } from 'react-bootstrap';
import HoaDonService from '../../service/HoaDonService';
import KhachHangService from '../../service/KhachHangService';
import NhanVienService from '../../service/NhanVienService';
import PhuongThucThanhToanService from '../../service/PhuongThucThanhToanService';

class CreateHoaDon extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            ma: '',
            ngayTao: '',
            ngayShip: '',
            ngayNhan: '',
            tenNguoiNhan: '',
            diaChi: '',
            sdt: '',
            soTienGiam: '',
            tinhTrang: '',
            tongTien: '',
            thanhTien: '',
            idKhachHang: [],
            selectedKhachHang: '',
            idNhanVien: [],
            selectedNhanVien: '',
            idPhuongThucThanhToan: [],
            selectedPhuongThucThanhToan: '',
        }
        this.changeMa = this.changeMa.bind(this);
        this.changeNgayTao = this.changeNgayTao.bind(this);
        this.changeNgayShip = this.changeNgayShip.bind(this);
        this.changeNgayNhan = this.changeNgayNhan.bind(this);
        this.changeTenNguoiNhan = this.changeTenNguoiNhan.bind(this);
        this.changeDiaChi = this.changeDiaChi.bind(this);
        this.changeSdt = this.changeSdt.bind(this);
        this.changeSoTienGiam = this.changeSoTienGiam.bind(this);
        this.changeTinhTrang = this.changeTinhTrang.bind(this);
        this.changeTongTien = this.changeTongTien.bind(this);
        this.changeThanhTien = this.changeThanhTien.bind(this);
        this.changeKhachHang = this.changeKhachHang.bind(this);
        this.changeNhanVien = this.changeNhanVien.bind(this);
        this.changePhuongThucThanhToan = this.changePhuongThucThanhToan.bind(this);
        this.savehd = this.savehd.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
    }
    componentDidMount() {
        //lây dữ liệu cho khách hàng 
        KhachHangService.getKH().then((res) => {
            this.setState({ idKhachHang: res.data });
        });
        NhanVienService.getNV().then((res) => {
            this.setState({ idNhanVien: res.data });
        });
        PhuongThucThanhToanService.getPTTT().then((res) => {
            this.setState({ idPhuongThucThanhToan: res.data });
        });
        
    }
    // eslint-disable-next-line no-unreachable
    changeMa = (event) => {
        this.setState({ ma: event.target.value });
    }
    // eslint-disable-next-line no-dupe-class-members
    changeNgayTao = (event) => {
        this.setState({ ngayTao: event.target.value });
    }
    changeNgayShip = (event) => {
        this.setState({ ngayShip: event.target.value });
    }
    changeNgayNhan = (event) => {
        this.setState({ ngayNhan: event.target.value });
    }
    changeTenNguoiNhan = (event) => {
        this.setState({ tenNguoiNhan: event.target.value });
    }
    changeDiaChi = (event) => {
        this.setState({ diaChi: event.target.value });
    }
    changeSdt = (event) => {
        this.setState({ sdt: event.target.value });
    }
    changeSoTienGiam = (event) => {
        this.setState({ soTienGiam: event.target.value });
    }
    changeTinhTrang = (event) => {
        this.setState({ tinhTrang: event.target.value });
    }
    changeTongTien = (event) => {
        this.setState({ tongTien: event.target.value });
    }
    changeThanhTien = (event) => {
        this.setState({ thanhTien: event.target.value });
    }
    changeKhachHang = (event) => {
        this.setState({ selectedKhachHang: event.target.value });
    }
    changeNhanVien = (event) => {
        this.setState({ selectedNhanVien: event.target.value });
    }
    changePhuongThucThanhToan = (event) => {
        this.setState({selectedPhuongThucThanhToan: event.target.value });
    }
    savehd(e){
        e.preventDefault();
        let hd = {
            ma:this.state.ma,
            ngayTao:this.state.ngayTao,
            ngayShip:this.state.ngayShip,
            ngayNhan:this.state.ngayNhan,
            tenNguoiNhan:this.state.tenNguoiNhan,
            diaChi:this.state.diaChi,
            sdt:this.state.sdt,
            soTienGiam:this.state.soTienGiam,
            tinhTrang:this.state.tinhTrang,
            tongTien:this.state.tongTien,
            thanhTien:this.state.thanhTien,
            idKhachHang:{ id: this.state.selectedKhachHang },
            idNhanVien:{ id: this.state.selectedNhanVien },
            idPhuongThucThanhToan:{ id: this.state.selectedPhuongThucThanhToan },
        }
        console.log("hd" + JSON.stringify(hd));
        HoaDonService.createHD(hd)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            // Xử lý lỗi khi gọi API
            console.error(error);
          });
          window.location.href =('/hoa-don/hien-thi/')
    }
    render() {
        return (
          <div className="home">
            <Sidebar />
            <div className="homeContainer">
              <Navbar />
              <h2 className="text-center">Add Hóa Đơn </h2>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '60ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <div className='form-group'>
                    <label htmlFor="">Mã</label>
                    <input type="text" placeholder='Nhập mã' name='ma' className='form-control'
                      value={this.state.ma} onChange={this.changeMa} />
                  </div>

                  <div className='form-group'>
                    <label htmlFor="">Ngày Tạo</label>
                    <input type="date" placeholder='Nhập Ngày Tạo' name='ngayTao' className='form-control'
                      value={this.state.ngayTao} onChange={this.changeNgayTao} />
                  </div>

                  <div className='form-group'>
                    <label htmlFor="">Ngày Ship</label>
                    <input type="date" placeholder='Nhập Ngày Ship' name='ngayShip' className='form-control'
                      value={this.state.ngayShip} onChange={this.changeNgayShip} />
                  </div>

                  <div className='form-group'>
                    <label htmlFor="">Tên Người Nhận</label>
                    <input type="text" placeholder='Nhập Tên Người Nhận' name='tenNguoiNhan' className='form-control'
                      value={this.state.tenNguoiNhan} onChange={this.changeTenNguoiNhan} />
                  </div>

                  <div className='form-group'>
                    <label htmlFor="">Địa Chỉ</label>
                    <input type="text" placeholder='Nhập Địa Chỉ' name='diaChi' className='form-control'
                      value={this.state.diaChi} onChange={this.changeDiaChi} />
                  </div>

                  <div className='form-group'>
                    <label htmlFor="">SĐT</label>
                    <input type="text" placeholder='Nhập SĐT' name='sdt' className='form-control'
                      value={this.state.sdt} onChange={this.changeSdt} />
                  </div>

                  <div className='form-group'>
                    <label htmlFor="">Số Tiền Giảm</label>
                    <input type="text" placeholder='Nhập Tiền Giảm' name='soTienGiam' className='form-control'
                      value={this.state.soTienGiam} onChange={this.changeSoTienGiam} />
                  </div>

                  <div className="md-3">
                    <label>Tình Trạng</label>
                    <input type="radio" name='tinhTrang'
                      value={0}
                      onChange={this.changeTinhTrang} />Đã Thanh Toán 
                    <input type="radio" name='tinhTrang'
                      value={1}
                      onChange={this.changeTinhTrang} />Chưa Thanh Toán 
                  </div>

                  <div className='form-group'>
                    <label htmlFor="">Tổng Tiền</label>
                    <input type="text" placeholder='Nhập Tổng Tiền' name='tongTien' className='form-control'
                      value={this.state.tongTien} onChange={this.changeTongTien} />
                  </div>

                  <label htmlFor="">Khách Hàng</label>
                  <select
                    className="form-select"
                    name="idKhachHang"
                    value={this.state.selectedKhachHang}
                    onChange={this.changeKhachHang}
                  >
                    <option value={0}>Khách Hàng</option>
                    {this.state.idKhachHang.map((khachHang) => (
                      <option key={khachHang.id} value={khachHang.id}>
                        {khachHang.ma}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="">Nhân Viên</label>
                  <select
                    className="form-select"
                    name="idNhanVien"
                    value={this.state.selectedNhanVien}
                    onChange={this.changeNgayNhan}
                  >
                    <option value={0}>Nhân Viên</option>
                    {this.state.idNhanVien.map((nhanVien) => (
                      <option key={nhanVien.id} value={nhanVien.id}>
                        {nhanVien.ma}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="">Phương Thức Thanh Toán</label>
                  <select
                    className="form-select"
                    name="idPhuongThucThanhToan"
                    value={this.state.selectedPhuongThucThanhToan}
                    onChange={this.changePhuongThucThanhToan}
                  >
                    <option value={0}>Phương Thức</option>
                    {this.state.idPhuongThucThanhToan.map((pttt) => (
                      <option key={pttt.id} value={pttt.id}>
                        {pttt.ma}
                      </option>
                    ))}
                  </select>
                  
                  
                  <button className='btn btn-primary' onClick={this.savehd}>Add</button>
                </div>
              </Box>
            </div>
          </div>
        )
      }
}
export default CreateHoaDon;