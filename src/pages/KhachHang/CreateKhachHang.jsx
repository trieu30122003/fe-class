import React, { Component } from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import { Navbar } from 'react-bootstrap';

import KhachHangService from '../../service/KhachHangService';

function back() {
    // eslint-disable-next-line no-restricted-globals
    history.back();
};
class CreateKhachHang extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ma: '',
            ten: ''
            
        }
        this.changeMa = this.changeMa.bind (this)
        this.changeTen = this.changeTen.bind (this)
        this.save = this.save.bind (this)
    }
    save = (e) => {
        e.preventDefault();
        let kh = {ma: this.state.ma, ten: this.state.ten};
        console.log('kh  =>' + JSON.stringify(kh)) ;

        KhachHangService.createKH(kh);
        back()
    };
    
    changeMa(event) {
        this.setState({ ma: event.target.value })
    }
    changeTen(event) {
        this.setState({ ten: event.target.value })
    }   


    render() {
        return (
            <div className="home">
                <Sidebar />
                <div className="homeContainer">
                    <Navbar />
                    <h2 className="text-center">Add Khách Hàng</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group'>
                                <label htmlFor="">Mã</label>
                                <input type="text" placeholder='Nhập mã' name='ma' className='form-control'
                                    value={this.state.ma} onChange={this.changeMa} />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="">Tên</label>
                                <input type="text" placeholder='Nhập tên' name='ten' className='form-control'
                                    value={this.state.ten} onChange={this.changeTen} />
                            </div>
                            <button className='btn btn-outline-primary' onClick={this.save}> ADD</button>   
                        </form>
                    </div>
                </div>
            </div>

        )
    }

}
export default CreateKhachHang;