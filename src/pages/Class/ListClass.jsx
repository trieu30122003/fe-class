import React, { Component } from 'react';
import "../admin/home/home.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ClassService from '../../service/ClassService';
import AddIcon from '@mui/icons-material/Add';
class ListClass extends Component {
    constructor(props) {
        super(props);

        this.state = {
            kh: [],
            currentPage: 0,
            totalPages: 0,
            pageSize: 10,
        };

        this.editKH = this.editKH.bind(this);
        this.fetchClasses = this.fetchClasses.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    editKH(id) {
        this.props.history.push(`/new/${id}`);
    }

    fetchClasses(page) {
        ClassService.getKH(page, this.state.pageSize)
            .then((res) => {
                if (res.data && res.data.content && Array.isArray(res.data.content)) {
                    this.setState({
                        kh: res.data.content,
                        totalPages: res.data.totalPages,
                        currentPage: page,
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
        this.fetchClasses(this.state.currentPage);
    }

    handlePageChange(page) {
        this.fetchClasses(page);
    }

    render() {
        return (
            <div className="home" style={{ backgroundColor: '#2e5638' }}>
                <Sidebar />
                <div className="homeContainer">
                    {/* <Navbar /> */}
                    <div className='container' style={{ marginLeft: '200px' }}>
                        <h2 style={{ color: 'white' }} className="text-center">List Class</h2>

                        <br />
                        <Link to="/add-class" style={{ textDecoration: "none" }}>
                            <div className="row">
                                <button className="btn btn-primary add-btn rainbow-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <AddIcon style={{ color: 'white' }} />
                                </button>
                            </div>

                            <style>{`
        .rainbow-btn {
            background: linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet);
            background-size: 400% 400%;
            animation: rainbow 5s ease infinite;
            border: none;
            color: white;
            padding: 5px;
            font-size: 10px;
            cursor: pointer;
            transition: transform 0.2s;
        }
        
        @keyframes rainbow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        
        .rainbow-btn:hover {
            transform: scale(1.05); /* Slightly enlarges the button on hover */
        }
    `}</style>
                        </Link>
                        <div className="table-container">
                            <table className="table" id="customers">
                                <thead>
                                    <tr>
                                        <th> Tên lớp</th>
                                        <th> Khoa</th>
                                        <th> Môn học</th>
                                        <th> Trạng thái</th>
                                        <th> Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.kh.map(kh => (
                                        <tr key={kh.id}>
                                            <td>{kh.name || 'N/A'}</td>
                                            <td>{kh.course || 'N/A'}</td>
                                            <td>{kh.subjectName || 'N/A'}</td>
                                            <td>{kh.isDeleted ? "Ngừng hoạt động" : "Hoạt động"}</td>
                                            <td>
                                                <Link to={`/class-detail/${kh.id}`}>
                                                    <button className="btn btn-info">View</button>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>


                        <div className="pagination">
                            <button
                                className="pagination-btn"
                                disabled={this.state.currentPage === 0}
                                onClick={() => this.handlePageChange(this.state.currentPage - 1)}
                            >
                                Previous
                            </button>
                            {Array.from({ length: this.state.totalPages }).map((_, index) => (
                                <button
                                    key={index}
                                    className={`pagination-btn ${this.state.currentPage === index ? 'active' : ''}`}
                                    onClick={() => this.handlePageChange(index)}
                                >
                                    {index + 1}
                                </button>
                            ))}
                            <button
                                className="pagination-btn"
                                disabled={this.state.currentPage >= this.state.totalPages - 1}
                                onClick={() => this.handlePageChange(this.state.currentPage + 1)}
                            >
                                Next
                            </button>
                        </div>
                    </div>

                    {/* Inline CSS */}
                    <style>{`
                    .table-container {
            background-color: #ffffff; /* Solid white background */
            padding: 20px; /* Padding around the table */
            border-radius: 8px; /* Rounded corners */
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
        }

        #customers {
            width: 100%;
            border-collapse: collapse;
        }

        #customers th, #customers td {
            padding: 12px 15px;
            border: 1px solid #ddd;
            text-align: left;
        }

        #customers th {
            background-color: #2e5638; /* Chalkboard green header */
            color: white;
        }

        #customers tbody tr:nth-child(even) {
            background-color: #f2f2f2; /* Alternate row color */
        }
    
    h2 {
        font-size: 24px;
        color: #333;
        margin-bottom: 20px;
    }
    .add-btn {
        width: 100px;
        margin: 10px;
    }
   
    .pagination {
    background-color: #ffffff; /* Solid white background */
            padding: 5px; /* Padding around the table */
            border-radius: 8px; /* Rounded corners */
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    }
    .pagination-btn {
        background-color: #007bff;
        color: white;
        border: none;
        padding: 8px 12px;
        margin: 2px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    .pagination-btn:disabled {
        background-color: #ddd;
        cursor: not-allowed;
    }
    .pagination-btn.active {
        font-weight: bold;
        background-color: #0056b3;
    }
    .btn-info {
        background-color: #17a2b8;
        color: white;
    }
    .btn-info:hover {
        background-color: #138496;
    }
`}</style>

                </div>
            </div>
        );
    }
}

export default ListClass;
