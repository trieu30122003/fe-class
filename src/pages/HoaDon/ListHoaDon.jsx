import React, { Component } from 'react'
import "./KhachHang.scss"
import "../admin/home/home.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import { Navbar } from 'react-bootstrap';
import HoaDonService from '../../service/HoaDonService';

class ListHoaDon extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hoadons: []
        }
        this.addHD = this.addHD.bind(this);
        this.editHD = this.editHD.bind(this);

    }

    viewHD(id) {
        this.props.history.push(`/hien-thi/${id}`);
    }
    editHD(id) {
        this.props.history.push(`/hien-thi/${id}`);
    }

    componentDidMount() {
        HoaDonService.getHD().then((res) => {
            this.setState({ hoadons: res.data });
        });
    }

    addHD() {
        this.props.history.push('/hien-thi/');
    }

    render() {
        return (
            <div className="home">
                <Sidebar />
                <div className="homeContainer">
                    <Navbar />
                    <div className='container'>
                        <h2 className="text-center">List Hóa Đơn</h2>
                        <div className="row">
                            <button className="btn btn-primary" style={{ width: "100px", margin: "10px" }} onClick={this.addEmployee}> Add </button>
                        </div>
                        <br></br>
                        <div className="row">
                            <table style={{ margin: "10px" }} id="customers">
                            <thead>
                                    <tr>
                                        <th> Mã</th>
                                        <th> Ngày Tạo</th>
                                        <th> Ngày Ship</th>
                                        <th> Ngày Nhận</th>
                                        <th> Tên Người Nhận </th>
                                        <th> Địa Chỉ</th>
                                        <th> SĐT</th>
                                        <th> Số tiền giảm</th>
                                        <th> Tình Trạng</th>
                                        <th> Tổng tiền</th>
                                        <th> Thành tiền</th>
                                        <th> Khách Hàng</th>
                                        <th> Nhân Viên</th>
                                        <th> Phương thức thanh toán</th>
                                        <th> Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                         this.state.hoadons.map(
                                            hd =>
                                                <tr key={hd.id}>
                                                    <td> {hd.ma} </td>
                                                    <td> {hd.ngayTao}</td>
                                                    <td> {hd.ngayShip}</td>
                                                    <td> {hd.ngayNhan}</td>
                                                    <td> {hd.tenNguoiNhan}</td>
                                                    <td> {hd.diaChi}</td>
                                                    <td> {hd.sdt}</td>
                                                    <td> {hd.soTienGiam}</td>
                                                    <td> {hd.tinhTrang === 1 ? "Đã Thanh Toán" : "Chưa Thanh Toán"}</td>
                                                    <td> {hd.tongTien}</td>
                                                    <td> {hd.thanhTien}</td>
                                                    <td> {hd.idKhachHang.ma}</td>
                                                    <td> {hd.idNhanVien.ma}</td>
                                                    <td> {hd.idPhuongThucThanhToan.ma}</td>
                                                    <td>
                                                        <button onClick={() => this.editEmployee(hd.id)} className="btn btn-info">Update </button>
                                                        <button style={{ marginLeft: "10px" }} onClick={() => this.viewEmployee(hd.id)} className="btn btn-info">View </button>
                                                    </td>
                                                </tr>
                                        )
                                    }
                                </tbody>
                                       
                            </table>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default ListHoaDon;