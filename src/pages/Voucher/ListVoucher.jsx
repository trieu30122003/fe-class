import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "../admin/home/home.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import { Navbar } from 'react-bootstrap';
import voucherService from '../../service/VoucherService';

class ListVoucher extends Component {
    constructor(props) {
        super(props)

        this.state = {
            vouCher: []
        }
        this.addVoucher = this.addVoucher.bind(this);
        this.editVouCher = this.editVouCher.bind(this);

    }

    viewVouCher(id) {
        this.props.history.push(`/voucher/new/${id}`);
    }
    editVouCher(id) {
        this.props.history.push(`/new/${id}`);
    }

    componentDidMount() {
        voucherService.getVC().then((res) => {
            this.setState({ vouCher: res.data });
        });
    }

    addVoucher() {
        this.props.history.push('/new/');
    }
    render() {
        return (
            <div className="home">
                <Sidebar />
                <div className="homeContainer">
                    <Navbar />
                    <div className='container'>
                        <h2 className="text-center">List Voucher</h2>
                        <div className="row">
                            <button className="btn btn-primary" style={{ width: "100px", margin: "10px" }} onClick={this.addEmployee}> Add </button>
                        </div>
                        <br></br>
                        <div className="row">
                            <table style={{ margin: "10px" }} id="customers">

                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th> Code</th>
                                        <th> Tên </th>
                                        <th> Ngày Bắt Đầu </th>
                                        <th> Ngày Kết Thúc </th>
                                        <th> Số Tiền Giảm </th>
                                        <th> Số Lương </th>
                                        <th> Trạng Thái </th>
                                        <th> Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.vouCher.map(
                                            vc =>
                                                <tr key={vc.id}>
                                                    <td>{vc.id}</td>
                                                    <td> {vc.code} </td>
                                                    <td>{vc.ten}</td>
                                                    <td>{vc.ngayBatDau}</td>
                                                    <td>{vc.ngayKetThuc}</td>
                                                    <td>{vc.soTienGiam}</td>
                                                    <td>{vc.soLuong}</td>
                                                    <td>{vc.trangThai==1?"Hoạt Động":"Không Hoạt Động"}</td>
                                                    <td>
                                                        <Link to={`/voucher/new/${vc.id}`}>
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

export default ListVoucher;