import React, { Component } from 'react';
import KhachHangService from '../../service/KhachHangService';
import "./KhachHang.scss";
import "../admin/home/home.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NhanVienService from '../../service/NhanVienService';

class ListKhachHang extends Component {
    constructor(props) {
        super(props);

        this.state = {
            kh: [], // Initialize kh as an empty array
            currentPage: 0, // Track the current page
            totalPages: 0, // Track total pages
            pageSize: 10, // Number of items per page
        };

        this.editKH = this.editKH.bind(this);
        this.fetchKhachHang = this.fetchKhachHang.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    editKH(id) {
        this.props.history.push(`/new/${id}`);
    }

    // Fetch KhachHang with pagination
    fetchKhachHang(page) {
        NhanVienService.getKH(page, this.state.pageSize)
            .then((res) => {
                if (res.data && res.data.content && Array.isArray(res.data.content)) {
                    this.setState({
                        kh: res.data.content,
                        totalPages: res.data.totalPages, // Update total pages
                        currentPage: page, // Update current page
                    });
                } else {
                    console.error("Unexpected response format:", res);
                    this.setState({ kh: [], totalPages: 0 });
                }
            })
            .catch(error => {
                console.error("Error fetching customer data:", error);
                this.setState({ kh: [], totalPages: 0 });
            });
    }

    componentDidMount() {
        this.fetchKhachHang(this.state.currentPage); // Fetch KhachHang for the initial page
    }

    handlePageChange(page) {
        this.fetchKhachHang(page); // Fetch KhachHang for the new page
    }

    render() {
        return (
            <div className="home">
                <Sidebar />
                <div className="homeContainer">
                    <Navbar />
                    <div className='container'>
                        <h2 className="text-center">List Giảng Viên</h2>

                        <br />

                        <div className="row">
                            <table style={{ margin: "10px" }} id="customers">
                                <thead>
                                    <tr>
                                        <th> Mã</th>
                                        <th> Họ và tên</th>
                                        <th> Ngày sinh</th>
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
                                            kh => (
                                                <tr key={kh.id}>
                                                    <td> {kh.id} </td>
                                                    <td>{kh.name || 'N/A'}</td>
                                                    <td> {kh.dob ? new Date(kh.dob).toLocaleDateString() : 'N/A'}</td>
                                                    <td> {kh.gender}</td>
                                                    <td> {kh.address}</td>
                                                    <td> {kh.phoneNumber}</td>
                                                    <td> {kh.email}</td>
                                                    <td> {kh.isDeleted ? "Ngừng hoạt động" : "Hoạt động"}</td>
                                                    <td>
                                                        <Link to={`/detail/${kh.id}`}>
                                                            <button className="btn btn-info">View </button>
                                                        </Link>
                                                    </td>
                                                </tr>
                                            )
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination Controls */}
                        <div className="pagination">
                            <button 
                                disabled={this.state.currentPage === 0} 
                                onClick={() => this.handlePageChange(this.state.currentPage - 1)}
                            >
                                Previous
                            </button>
                            {Array.from({ length: this.state.totalPages }).map((_, index) => (
                                <button 
                                    key={index} 
                                    onClick={() => this.handlePageChange(index)} 
                                    style={{ fontWeight: this.state.currentPage === index ? 'bold' : 'normal' }}
                                >
                                    {index + 1}
                                </button>
                            ))}
                            <button 
                                disabled={this.state.currentPage >= this.state.totalPages - 1} 
                                onClick={() => this.handlePageChange(this.state.currentPage + 1)}
                            >
                                Next
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default ListKhachHang;
