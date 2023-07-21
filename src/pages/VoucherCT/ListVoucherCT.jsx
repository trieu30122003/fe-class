import React, { Component } from 'react'
import KhachHangService from '../../service/KhachHangService';
import { Link } from 'react-router-dom';
import "../admin/home/home.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import { Navbar } from 'react-bootstrap';
import voucherService from '../../service/VoucherServiceCT';

class ListVoucherCT extends Component {
    constructor(props) {
        super(props)

        this.state = {
            vouCherct: []
        }
        this.addVoucher = this.addVoucher.bind(this);
        this.editVouCher = this.editVouCher.bind(this);

    }

    viewVouCher(id) {
        this.props.history.push(`/new/${id}`);
    }
    editVouCher(id) {
        this.props.history.push(`/new/${id}`);
    }

    componentDidMount() {
        voucherService.getVC().then((res) => {
            this.setState({ vouCherct: res.data });
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
                                        <th>id_voucher</th>
                                        <th>id_hoa_don</th>
                                        <th>Tổng tiền</th>
                                        <th>Trạng Thái</th>
                                        <th> Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.vouCherct.map(
                                            vc =>
                                                <tr key={vc.id}>
                                                    <td>{vc.idVoucher.ten}</td>
                                                    <td>{vc.idHoaDon.ma}</td>
                                                    <td>{vc.tongTienGiam}</td>
                                                    <td>{vc.trangThai==1?"Hoạt Động":"Không Hoạt Động"}</td>
                                                 <td>
                                                        <button onClick={() => this.editEmployee(vc.id)} className="btn btn-info">Update </button>
                                                        <button style={{ marginLeft: "10px" }} onClick={() => this.viewEmployee(vc.id)} className="btn btn-info">View </button>
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

export default ListVoucherCT;