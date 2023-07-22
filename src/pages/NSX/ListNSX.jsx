import React, { Component } from 'react'
import NSXService from '../../service/NSXService';
import { Link } from "react-router-dom";
import "./NSX.scss"
import "../admin/home/home.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import { Navbar } from 'react-bootstrap';


class ListNSX extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            nsx: []
        }
        this.addNSX = this.addNSX.bind(this);
        this.editNSX = this.editNSX.bind(this);
        this.deleteNSX = this.deleteNSX.bind(this);
        
    }
    
    deleteNSX(id) {
        NSXService.deleteNSX(id)
        window.location.href = "/nsx"
    }
    viewNSX() {
        this.props.history.push('/nsx');
    }
    editNSX(id) {
        this.props.history.push(`/editNsx/${id}`);
    }

    componentDidMount() {
        NSXService.getNSX().then((res) => {
            this.setState({ nsx: res.data });
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

                        <h2 className="text-center">List Nhà Sản Xuất</h2>
                        <Link to="/addNSX/" style={{ textDecoration: "none" }}>
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
                                        this.state.nsx.map(
                                            nsx =>
                                                <tr key={nsx.id}>
                                                    <td> {nsx.ma} </td>
                                                    <td>{nsx.ten}</td>
                                                    <td> {nsx.tinhTrang === 1 ? "Hoạt động" : "Ngừng hoạt động"}</td>
                                                    {/* <td>
                                                        <button onClick={() => this.deleteNSX(nsx.id)} className="btn btn-info">Delete </button>
                                                        <button style={{ marginLeft: "10px" }} onClick={() => this.viewEmployee(nsx.id)} className="btn btn-info">View </button>
                                                    </td> */}
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