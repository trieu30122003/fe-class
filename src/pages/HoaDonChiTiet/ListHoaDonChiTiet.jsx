import React, { Component } from 'react'
import "./KhachHang.scss"
import "../admin/home/home.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import { Navbar } from 'react-bootstrap';
import HoaDonChiTietService from '../../service/HoaDonChiTietService';

class ListHoaDonChiTiet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hoadonchitiets: []
        }
        this.addHDCT = this.addHDCT.bind(this);
        this.editHDCT = this.editHDCT.bind(this);

    }
    viewHDCT(id) {
        this.props.history.push(`/hien-thi/${id}`);
    }
    editHDCT(id) {
        this.props.history.push(`/hien-thi/${id}`);
    }

    componentDidMount() {
        HoaDonChiTietService.getHDCT().then((res) => {
            this.setState({ hoadonchitiets: res.data });
        });
    }

    addHDCT() {
        this.props.history.push('/hien-thi/');
    }

    render() {
        return (
            <div className="home">
                <Sidebar />
                <div className="homeContainer">
                    <Navbar />
                    <div className='container'>
                        <h2 className="text-center">List Hóa Đơn Chi Tiết</h2>
                        <div className="row">
                            <button className="btn btn-primary" style={{ width: "100px", margin: "10px" }} onClick={this.addEmployee}> Add </button>
                        </div>
                        <br></br>
                        <div className="row">
                            <table style={{ margin: "10px" }} id="customers">

                            <thead>
                                    <tr>
                                        <th> Chi tiết sản phẩm</th>
                                        <th> Hóa Đơn</th>
                                        <th> Đơn Giá</th>
                                        <th> Trạng Thái </th>
                                        <th> Action</th>
                                    </tr>

                                </thead>
                                <tbody>
                                    {
                                  this.state.hoadonchitiets.map(
                                    hdct =>
                                        <tr key={hdct.id}>
                                            <td> {hdct.idCtsp.ma} </td>
                                            <td> {hdct.idHoaDon.ma}</td>
                                            <td> {hdct.donGia}</td>
                                            <td> {hdct.tinhTrang === 1 ? "Đã Thanh Toán" : "Chưa Thanh Toán"}</td>
                                            <td>
                                                <button onClick={() => this.editEmployee(hdct.id)} className="btn btn-info">Update </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewEmployee(hdct.id)} className="btn btn-info">View </button>
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

export default ListHoaDonChiTiet;