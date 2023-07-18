import React, { Component } from 'react'
import KhachHangService from '../../service/KhachHangService';
import { Link } from 'react-router-dom';
import "./KhachHang.scss"
import "../admin/home/home.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import { Navbar } from 'react-bootstrap';

class ListKhachHang extends Component {
    constructor(props) {
        super(props)

        this.state = {
            khachHangs: []
        }
        this.addKH = this.addKH.bind(this);
        this.editKH = this.editKH.bind(this);

    }

    viewKH(id) {
        this.props.history.push(`/new/${id}`);
    }
    editKH(id) {
        this.props.history.push(`/new/${id}`);
    }

    componentDidMount() {
        KhachHangService.getKH().then((res) => {
            this.setState({ khachHangs: res.data });
        });
    }

    addKH() {
        this.props.history.push('/new/');
    }

    render() {
        return (
            <div className="home">
                <Sidebar />
                <div className="homeContainer">
                    <Navbar />
                    <div className='container'>
                        <h2 className="text-center">List Khách Hàng</h2>
                        <Link to={'/addKH'}>
                        <div className="row">
                            <button className="btn btn-primary" style={{ width: "100px", margin: "10px" }} onClick={this.addEmployee}> Add </button>
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
                                        this.state.khachHangs.map(
                                            kh =>
                                                <tr key={kh.id}>
                                                    <td> {kh.ma} </td>
                                                    <td>{kh.ho} {kh.tenDem} {kh.ten}</td>
                                                    <td> {kh.ngaySinh}</td>
                                                    <td> {kh.gioiTinh}</td>
                                                    <td> {kh.diaChi}</td>
                                                    <td> {kh.sdt}</td>
                                                    <td> {kh.email}</td>
                                                    <td> {kh.tinhTrang == 1 ? "Hoạt động" : "Ngừng hoạt động"}</td>
                                                    <td>
                                                        <button onClick={() => this.editEmployee(kh.id)} className="btn btn-info">Update </button>
                                                        <button style={{ marginLeft: "10px" }} onClick={() => this.viewEmployee(kh.id)} className="btn btn-info">View </button>
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