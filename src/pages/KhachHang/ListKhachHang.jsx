import React, { Component } from 'react'
import KhachHangService from '../../service/KhachHangService';
import "./KhachHang.scss"
import "../admin/home/home.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class ListKhachHang extends Component {
    constructor(props) {
        super(props)

        this.state = {
            kh: []
        }
        // this.addKH = this.addKH.bind(this);
        this.editKH = this.editKH.bind(this);

    }

    viewKH(id) {
        this.props.history.push(`/new/view/${id}`);
    }
    editKH(id) {
        this.props.history.push(`/new/${id}`);
    }


    componentDidMount() {
        KhachHangService.getKH().then((res) => {
            this.setState({ kh: res.data });
        });
    }

    // addKH() {
    //     this.props.history.push('/create/');
    // }

    render() {
        return (
            <div className="home">
                <Sidebar />
                <div className="homeContainer">
                    <Navbar />
                    <div className='container'>

                        <h2 className="text-center">List Khách Hàng</h2>

                        <Link to="/new/add" style={{ textDecoration: "none" }}>
                            <div className="row">
                                <button className="btn btn-primary" style={{ width: "100px", margin: "10px" }}> Add </button>
                            </div>
                        </Link>

                        <br></br>

                        <div className="row">
                            <table style={{ margin: "10px" }} id="customers">
                                <thead>
                                    <tr>
                                        <th> Mã</th>
                                        <th> Họ và tên</th>
                                        <th>  Ngày sinh</th>
                                        <th> Giới tính</th>
                                        <th> Địa chỉ</th>
                                        <th> SĐT</th>
                                        <th> Email</th>
                                        <th> Trạng thái</th>
                                        <th> Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.kh.map(
                                            kh =>
                                                <tr key={kh.id}>
                                                    <td> {kh.ma} </td>
                                                    <td>{kh.ho} {kh.tenDem} {kh.ten}</td>
                                                    <td> {kh.ngaySinh}</td>
                                                    <td> {kh.gioiTinh}</td>
                                                    <td> {kh.diaChi}</td>
                                                    <td> {kh.sdt}</td>
                                                    <td> {kh.email}</td>
                                                    <td> {kh.tinhTrang === 1 ? "Hoạt động" : "Ngừng hoạt động"}</td>
                                                    <td>
                                                        <Link to={`/new/${kh.id}`}>
                                                            <button className="btn btn-info">View </button>
                                                        </Link>
                                                        {/* <button style={{ marginLeft: "10px" }} onClick={() => this.viewKH(kh.id)} className="btn btn-info">View </button> */}
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

export default ListKhachHang;