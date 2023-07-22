import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "./KhachHang.scss"
import "../admin/home/home.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import { Navbar } from 'react-bootstrap';
import NhanVienService from '../../service/NhanVienService';

class ListNhanVien extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nhanViens: []
        }
        this.addNV = this.addNV.bind(this);
        this.editNV = this.editNV.bind(this);

    }

    viewNV(id) {
        this.props.history.push(`/nhan-vien/new/${id}`);
    }
    editNV(id) {
        this.props.history.push(`/new/${id}`);
    }

    componentDidMount() {
        NhanVienService.getNV().then((res) => {
            this.setState({ nhanViens: res.data });

        });
    }

    addNV() {
        this.props.history.push('/new/');
    }

    render() {
        return (
            <div className="home">
                <Sidebar />
                <div className="homeContainer">
                    <Navbar />
                    <div className='container'>
                        <h2 className="text-center">List Nhân Viên</h2>
                        <Link to="/nhan-vien/add" style={{ textDecoration: "none" }}>
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
                                        <th> Ngày sinh</th>
                                        <th> Giới tính</th>
                                        <th> Địa chỉ</th>
                                        <th> Số điện thoại</th>
                                        <th> Chức vụ</th>
                                        <th> Trạng thái</th>
                                        <th> Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.nhanViens.map(
                                            nv =>
                                                <tr key={nv.id}>
                                                    <td> {nv.ma} </td>
                                                    <td>{nv.ho} {nv.tenDem} {nv.ten}</td>
                                                    <td> {nv.ngaySinh}</td>
                                                    <td> {nv.gioiTinh}</td>
                                                    <td> {nv.diaChi}</td>
                                                    <td> {nv.sdt}</td>
                                                    <td> {nv.idChucVu.ten}</td>

                                                    <td> {nv.trangThai == 1 ? "Hoạt động" : "Ngừng hoạt động"}</td>
                                                    <td>
                                                        {/* <button onClick={() => this.editEmployee(nv.id)} className="btn btn-info">Update </button> */}
                                                        <Link to={`/nhan-vien/new/${nv.id}`}>
                                                            <button className="btn btn-info">View </button>
                                                        </Link>
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

export default ListNhanVien;