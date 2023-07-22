import React, { Component } from 'react'
import Box from '@mui/material/Box';
import Sidebar from '../../components/sidebar/Sidebar';
import { Navbar } from 'react-bootstrap';
import SanPhamChiTietService from '../../service/SanPhamChiTietService';
import LoaiService from '../../service/LoaiService';
import NSXService from '../../service/NSXService';
import ManHinhService from '../../service/ManHinhService';
import MauSacService from '../../service/MauSacService';
import SanPhamService from '../../service/SanPhamService';
import DayDeoService from '../../service/DayDeoService';



class CreateSanPham extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // step 2
      ma: '',
      ten: '',
      idLoai: [],
      selectedLoai: '',
      idNsx: [],
      selectedNsx: '',
      giaBan: '',
      idMauSac: [],
      selectedMauSac: '',
      idManHinh: [],
      selectedManHinh: '',
      idDayDeo: [],
      selectedDayDeo: '',
      idSanPham: [],
      selectedSanPham: '',
      tinhTrang: ''
    }
    this.changeMa = this.changeMa.bind(this);
    this.changeTen = this.changeTen.bind(this);
    this.changeGiaBan = this.changeGiaBan.bind(this);
    this.changeTinhTrang = this.changeTinhTrang.bind(this);
    this.changeLoai = this.changeLoai.bind(this);
    this.changeMauSac = this.changeMauSac.bind(this);
    this.changeManHinh = this.changeManHinh.bind(this);
    this.changeDayDeo = this.changeDayDeo.bind(this);
    this.changeNsx = this.changeNsx.bind(this);
    this.changeSanPham = this.changeSanPham.bind(this);
    this.saveSPCT = this.saveSPCT.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }
  componentDidMount() {
    // Lấy dữ liệu cho combobox "loai"
    LoaiService.getLoai().then((res) => {
      this.setState({ idLoai: res.data });
    });

    // Lấy dữ liệu cho combobox "nsx"
    NSXService.getNSX().then((res) => {
      this.setState({ idNsx: res.data });
    });

    MauSacService.getMS().then((res) => {
      this.setState({ idMauSac: res.data });
    });

    ManHinhService.getMH().then((res) => {
      this.setState({ idManHinh: res.data });
    });

    SanPhamService.getSP().then((res) => {
      this.setState({ idSanPham: res.data });
    });

    DayDeoService.getDayDeo().then((res) => {
      this.setState({ idDayDeo: res.data });
    });

  }
  changeLoai = (event) => {
    this.setState({ selectedLoai: event.target.value });
  }
  changeManHinh = (event) => {
    this.setState({ selectedManHinh: event.target.value });
  }
  changeMauSac = (event) => {
    this.setState({ selectedMauSac: event.target.value });
  }
  changeDayDeo = (event) => {
    this.setState({ selectedDayDeo: event.target.value });
  }
  changeMa = (event) => {
    this.setState({ ma: event.target.value });
  }
  changeTen = (event) => {
    this.setState({ ten: event.target.value });
  }
  changeNsx = (event) => {
    this.setState({ selectedNsx: event.target.value });
  }
  changeTinhTrang = (event) => {
    this.setState({ tinhTrang: event.target.value });
  }
  changeGiaBan = (event) => {
    this.setState({ giaBan: event.target.value });
  }
  changeSanPham = (event) => {
    this.setState({ selectedSanPham: event.target.value });
  }

  saveSPCT(e) {
    e.preventDefault();
    let sp = {
      ma: this.state.ma,
      ten: this.state.ten,
      idLoai: { id: this.state.selectedLoai },
      idNsx: { id: this.state.selectedNsx },
      idMauSac: { id: this.state.selectedMauSac },
      idManHinh: { id: this.state.selectedManHinh },
      idDayDeo: { id: this.state.selectedDayDeo },
      idSanPham: { id: this.state.selectedSanPham },
      giaBan: this.state.giaBan,
      tinhTrang: this.state.tinhTrang
    }
    console.log("SPCT" + JSON.stringify(sp));
    SanPhamChiTietService.createSP(sp)
      .then((response) => {
        window.location.href =('/products')
        console.log(response.data);
      })
      .catch((error) => {
        // Xử lý lỗi khi gọi API
        console.error(error);
      });
      window.location.href =('/products')
  }
  render() {
    return (
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <h2 className="text-center">Add Sản Phẩm</h2>
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
                <label htmlFor="">Tên</label>
                <input type="text" placeholder='Nhập tên' name='ten' className='form-control'
                  value={this.state.ten} onChange={this.changeTen} />
              </div>
              <label htmlFor="">Loại</label>
              <select
                className="form-select"
                name="idLoai"
                value={this.state.selectedLoai}
                onChange={this.changeLoai}
              >
                <option value={0}>Loai</option>
                {this.state.idLoai.map((loai) => (
                  <option key={loai.id} value={loai.id}>
                    {loai.ten}
                  </option>
                ))}
              </select>
              <label htmlFor="">Màu sắc</label>
              <select
                className="form-select"
                name="idMauSac"
                value={this.state.selectedMauSac}
                onChange={this.changeMauSac}
              >
                <option value={0}>Màu sắc</option>
                {this.state.idMauSac.map((ms) => (
                  <option key={ms.id} value={ms.id}>
                    {ms.ten}
                  </option>
                ))}
              </select>
              <label htmlFor="">Màn hình</label>
              <select
                className="form-select"
                name="idManHinh"
                value={this.state.selectedManHinh}
                onChange={this.changeManHinh}
              >
                <option value={0}>Màn hình</option>
                {this.state.idManHinh.map((mh) => (
                  <option key={mh.id} value={mh.id}>
                    {mh.tinhTrongXuoc == 1 ? "Chống xước" : "Không chống xước"}
                  </option>
                ))}
              </select>
              <label htmlFor="">Sản phẩm</label>
              <select
                className="form-select"
                name="idSanPham"
                value={this.state.selectedSanPham}
                onChange={this.changeSanPham}
              >
                <option value={0}>Sản phẩm</option>
                {this.state.idSanPham.map((sp) => (
                  <option key={sp.id} value={sp.id}>
                    {sp.ten}
                  </option>
                ))}
              </select>
              <label htmlFor="">Dây đeo</label>
              <select
                className="form-select"
                name="idDayDeo"
                value={this.state.selectedDayDeo}
                onChange={this.changeDayDeo}
              >
                <option value={0}>Dây đeo</option>
                {this.state.idDayDeo.map((dd) => (
                  <option key={dd.id} value={dd.id}>
                    {dd.ten}
                  </option>
                ))}
              </select>
              <label htmlFor="">NSX</label>
              <select
                className="form-select"
                name="idNsx"
                value={this.state.selectedNsx}
                onChange={this.changeNsx}
              >
                <option value={0}>Nhà sản xuất</option>
                {this.state.idNsx.map((nsx) => (
                  <option key={nsx.id} value={nsx.id}>
                    {nsx.ten}
                  </option>
                ))}
              </select>
              <div className='form-group'>
                <label htmlFor="">Giá bán</label>
                <input type="text" placeholder='Nhập giá bán' name='giaBan' className='form-control'
                  value={this.state.giaBan} onChange={this.changeGiaBan} />
              </div>
              <div className="md-3">
                <label>Trang Thái</label>
                <input type="radio" name='tinhTrang'
                  value={0}
                  onChange={this.changeTinhTrang} /> Ngừng hoạt động
                <input type="radio" name='tinhTrang'
                  value={1}
                  onChange={this.changeTinhTrang} />Hoạt động
              </div>
              <button className='btn btn-primary' onClick={this.saveSPCT}>Add</button>
            </div>
          </Box>
        </div>
      </div>
    )
  }

}
export default CreateSanPham;


