import React, { useState, useEffect } from 'react';
import KhachHangService from '../../service/KhachHangService';

import { useParams, Link, useNavigate } from 'react-router-dom';

const DetailTeacher = () => {
    const { id } = useParams(); // Get the id from the URL
    const navigate = useNavigate();
    const [kh, setKh] = useState({}); // State for storing customer details

    // Fetch the single KhachHang object by ID from the URL
    const fetchKhachHang = (id) => {
        KhachHangService.detail(id)
            .then((res) => {
                if (res.data) {
                    setKh(res.data); // Update state with the fetched data
                } else {
                    console.error("Unexpected response format:", res);
                    setKh({});
                }
            })
            .catch(error => {
                console.error("Error fetching customer data:", error);
                setKh({});
            });
    };

    useEffect(() => {
        fetchKhachHang(id); // Fetch customer data when the component mounts
    }, [id]);

    return (
        <div className="homeStudent">
            {/* <Sidebar /> */}
            <div className="homeContainer">
                {/* <Navbar /> */}
                <div className='container'>
                    <h2 className="text-center">Chi tiết</h2>
                    <br />

                    <div className="row">
                        {kh ? (
                            <div className="student-details">
                                <div className="detail-item">
                                    <strong>Mã:</strong> {kh.code}
                                </div>
                                <div className="detail-item">
                                    <strong>Họ và tên:</strong> {kh.fullName || 'N/A'}
                                </div>
                                <div className="detail-item">
                                    <strong>Ngày sinh:</strong> {kh.dob ? new Date(kh.dob).toLocaleDateString() : 'N/A'}
                                </div>
                                <div className="detail-item">
                                    <strong>Giới tính:</strong> {kh.gender}
                                </div>
                                <div className="detail-item">
                                    <strong>Địa chỉ:</strong> {kh.address}
                                </div>
                                <div className="detail-item">
                                    <strong>SĐT:</strong> {kh.phoneNumber}
                                </div>
                                <div className="detail-item">
                                    <strong>Email:</strong> {kh.email}
                                </div>
                                <div className="detail-item">
                                    <strong>Trạng thái:</strong> {kh.isDeleted ? "Ngừng hoạt động" : "Hoạt động"}
                                </div>
                            </div>
                        ) : (
                            <p>No customer data available.</p>
                        )}
                    </div>


                    <h3>Danh sách lịch học</h3>
                    <div className="row">
                        <table className="table" id="customers">
                            <thead>
                                <tr>
                                    <th> Lớp</th>
                                    <th> Khóa học</th>
                                    <th> Môn học</th>
                                    <th> Ngày bắt đầu</th>
                                    <th> Thời gian bắt đầu</th>
                                    <th> Thời gian kết thúc</th>
                                    <th> Thời lượng</th>
                                </tr>
                            </thead>
                            <tbody>
                                {kh.list && kh.list.length > 0 ? (
                                    kh.list.map((schedule, index) => (
                                        <tr key={index}>
                                            <td> {schedule.className} </td>
                                            <td> {schedule.course}</td>
                                            <td> {schedule.subjectName}</td>
                                            <td> {new Date(schedule.startDate).toLocaleDateString()}</td>
                                            <td> {new Date(schedule.startTime).toLocaleTimeString()}</td>
                                            <td> {new Date(schedule.endTime).toLocaleTimeString()}</td>
                                            <td> {schedule.duration}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="8">No schedule available.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div style={{textAlign:'center'}} className="row">
                        <button className="btn btn-back" onClick={() => navigate('/login')}>
                            Quay lại trang đăng nhập
                        </button>
                    </div>

                </div>
            </div>

            <style>{`
            .btn-back {
    background-color: #007bff; /* Primary blue color */
    color: white; /* White text */
    border: none; /* No border */
    border-radius: 5px; /* Rounded corners */
    padding: 10px 20px; /* Vertical and horizontal padding */
    font-size: 16px; /* Font size */
    cursor: pointer; /* Pointer cursor on hover */
    transition: background-color 0.3s, transform 0.2s; /* Smooth transition for hover effects */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
}

.btn-back:hover {
    background-color: #0056b3; /* Darker blue on hover */
    transform: scale(1.05); /* Slightly enlarge on hover */
}

.btn-back:focus {
    outline: none; /* Remove outline on focus */
}

                .homeStudent {
                    background-color: #f4f4f4; /* Light gray background for the entire component */
                    min-height: 100vh; /* Full height */
                    padding: 20px; /* Padding around the component */
                }

                .homeContainer {
                    background-color: #ffffff; /* White background for the container */
                    border-radius: 8px; /* Rounded corners */
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
                    padding: 20px; /* Inner padding */
                }

                .student-details {
                    background-color: #eaf7e5; /* Light chalkboard green for details */
                    padding: 20px; /* Padding for detail box */
                    border-radius: 5px; /* Rounded corners */
                    margin-bottom: 20px; /* Margin below details */
                }

                .detail-item {
                    margin: 10px 0; /* Margin between detail items */
                    font-size: 16px; /* Font size */
                }

                .detail-item strong {
                    color: #2e5638; /* Darker text for labels */
                }

                .table {
                    width: 100%; /* Full width */
                    border-collapse: collapse; /* Merge borders */
                    margin-bottom: 20px; /* Margin below the table */
                }

                #customers {
                    border: 1px solid #ddd; /* Border around the table */
                }

                #customers th, #customers td {
                    padding: 12px 15px; /* Padding for table cells */
                    text-align: left; /* Align text to the left */
                    border-bottom: 1px solid #ddd; /* Bottom border for cells */
                }

                #customers th {
                    background-color: #2e5638; /* Chalkboard green header */
                    color: white; /* White text for headers */
                }

                #customers tbody tr:hover {
                    background-color: #f1f1f1; /* Light gray on hover */
                }

                .btn-secondary {
                    margin-top: 20px; /* Spacing above button */
                }
            `}</style>
        </div>
    );
};

export default DetailTeacher;
