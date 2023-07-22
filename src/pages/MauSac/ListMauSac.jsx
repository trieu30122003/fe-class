import React, { Component } from 'react'
import MauSacService from '../../service/MauSacService';
import { Link } from "react-router-dom";
import "./MauSac.scss"
import "../admin/home/home.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import { Navbar } from 'react-bootstrap';


class ListNSX extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            mauSacs: []
        }
        this.addNSX = this.addNSX.bind(this);
        this.editNSX = this.editNSX.bind(this);
        this.deleteMS = this.deleteMS.bind(this);
        
    }
    
    deleteMS(id) {
        MauSacService.deleteMS(id)
        window.location.href = "/mau-sac/"
    }
    viewNSX() {
        this.props.history.push('/nsx');
    }
    editNSX(id) {
        this.props.history.push(`/editNsx/${id}`);
    }

    componentDidMount() {
        MauSacService.getMS().then((res) => {
            this.setState({ mauSacs: res.data });
        });
    }

    addNSX() {
        this.props.history.push('/addNSX');
    }

    render() {
        return (
            <div className="home">
                <Sidebar />
                <div className="homeContainer">
                    <Navbar />
                    <div className='container'>

                        <h2 className="text-center">List màu sắc</h2>
                        <Link to="/addMS/" style={{ textDecoration: "none" }}>
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
                                        <th> Trạng thái</th>
                                        <th> Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.mauSacs.map(
                                            ms =>
                                                <tr key={ms.id}>
                                                    <td> {ms.ma} </td>
                                                    <td>{ms.ten}</td>
                                                    <td> {ms.tinhTrang == 1 ? "Hoạt động" : "Ngừng hoạt động"}</td>
                                                    <td>
                                                        <button onClick={() => this.deleteMS(ms.id)} className="btn btn-info">Delete </button>
                                                        <button style={{ marginLeft: "10px" }} onClick={() => this.viewEmployee(ms.id)} className="btn btn-info">View </button>
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

export default ListNSX;