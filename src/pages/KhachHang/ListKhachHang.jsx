import React, { Component } from 'react';
import KhachHangService from '../../service/KhachHangService';
import "./KhachHang.scss";
import "../admin/home/home.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
        KhachHangService.getKH(page, this.state.pageSize)
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
                        <h2 className="text-center">List Học Sinh</h2>

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
                                        <th> Pass</th>
                                        <th> Trạng thái</th>
                                        <th> Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.kh.map(
                                            kh => (
                                                <tr key={kh.id}>
                                                    <td> {kh.code} </td>
                                                    <td>{kh.name || 'N/A'}</td>
                                                    <td> {kh.dob ? new Date(kh.dob).toLocaleDateString() : 'N/A'}</td>
                                                    <td> {kh.gender}</td>
                                                    <td> {kh.address}</td>
                                                    <td> {kh.phoneNumber}</td>
                                                    <td> {kh.email}</td>
                                                    <td> {kh.password}</td>
                                                    <td> {kh.isDeleted ? "Ngừng hoạt động" : "Hoạt động"}</td>
                                                    <td>
                                                        <Link to={`/detail/${kh.id}`}>
                                                            <button className="btn btn-info view-button">View</button>
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

                        {/* CSS styles */}
                        <style>{`
                            .home {
                                display: flex;
                                background-color: #f8f9fa;
                            }

                            .homeContainer {
                                flex: 1;
                                padding: 20px;
                            }

                            h2 {
                                margin-bottom: 20px;
                                color: #003366;
                                font-family: 'Arial', sans-serif;
                            }

                            .row {
                                margin-top: 20px;
                            }

                            table {
                                width: 100%;
                                border-collapse: collapse;
                                margin: 10px 0;
                            }

                            th, td {
                                padding: 10px;
                                text-align: left;
                                border: 1px solid #dddddd;
                            }

                            th {
                                background-color: #003366;
                                color: white;
                            }

                            tr:nth-child(even) {
                                background-color: #f2f2f2;
                            }

                            tr:hover {
                                background-color: #e2e2e2;
                            }

                            .pagination {
                                margin-top: 20px;
                                display: flex;
                                justify-content: center;
                            }

                            .pagination button {
                                margin: 0 5px;
                                padding: 10px 15px;
                                border: none;
                                background-color: #007bff;
                                color: white;
                                cursor: pointer;
                                border-radius: 5px;
                            }

                            .pagination button:disabled {
                                background-color: #cccccc;
                                cursor: not-allowed;
                            }

                            .pagination button:hover:not(:disabled) {
                                background-color: #0056b3;
                            }

                            .pagination button:focus {
                                outline: none;
                            }

                            .view-button {
                                background-color: #28a745; /* Màu nền xanh lá */
                                color: white; /* Màu chữ trắng */
                                padding: 10px 15px; /* Padding cho nút */
                                border: none; /* Không có viền */
                                border-radius: 5px; /* Bo góc */
                                cursor: pointer; /* Con trỏ khi hover */
                                transition: background-color 0.3s ease; /* Hiệu ứng chuyển màu */
                            }

                            .view-button:hover {
                                background-color: #218838; /* Màu nền khi hover */
                            }

                            .view-button:focus {
                                outline: none; /* Ẩn đường viền khi nút được nhấn */
                            }
                        `}</style>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListKhachHang;
