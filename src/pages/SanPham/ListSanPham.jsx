import React, { Component } from 'react'
import SanPhamService from '../../service/SanPhamChiTietService';
import { Link } from 'react-router-dom';
import "./SanPham.scss"
import "../admin/home/home.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import { Navbar } from 'react-bootstrap';

class ListSanPham extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sanPhams: []
        }
        this.addSP = this.addSP.bind(this);
        this.editSP = this.editSP.bind(this);

    }

    viewSP(id) {
        window.location.href=(`/products/${id}`);
    }
    editSP(id) {
        this.props.history.push(`/products/${id}`);
    }

    componentDidMount() {
        SanPhamService.getSP().then((res) => {
            this.setState({ sanPhams: res.data });
        });
    }

    addSP() {
        this.props.history.push('/products/');
    }

    render() {
        return (
            <div className="home">
                <Sidebar />
                <div className="homeContainer">
                    <Navbar />
                    <div className='container'>
                        <h2 className="text-center">List Sản Phẩm</h2>
                        <Link to="/addSP" style={{ textDecoration: "none" }}>
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
                                        <th> Tên</th>
                                        <th> Loại</th>
                                        <th> Màu sắc</th>
                                        <th> Dây đeo</th>
                                        <th> Màn hình</th>
                                        <th> Nhà sản xuất</th>
                                        <th> Giá bán</th>
                                        <th> Trạng thái</th>
                                        <th> Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.sanPhams.map(
                                            sp =>
                                                <tr key={sp.id}>
                                                    <td> {sp.ma} </td>
                                                    <td>{sp.ten}</td>
                                                    <td>{sp.idLoai.ten}</td>
                                                    <td>{sp.idMauSac.ten}</td>
                                                    <td>{sp.idDayDeo.ten}</td>
                                                    <td>{sp.idManHinh.tinhChongXuoc == 1?"Chống xước":"Không chống xước"} </td>
                                                    <td>{sp.idNsx.ten}</td>
                                                    <td>{sp.giaBan}</td>
                                                    <td> {sp.tinhTrang == 1 ? "Hoạt động" : "Ngừng hoạt động"}</td>
                                                    <td>
                                                        <button onClick={() => this.editEmployee(sp.id)} className="btn btn-info">Update </button>
                                                        <button style={{ marginLeft: "10px" }} onClick={() => this.viewSP(sp.id)} className="btn btn-info">View </button>
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

export default ListSanPham;