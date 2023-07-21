import React, { Component } from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import { Navbar } from 'react-bootstrap';
import MauSacService from '../../service/MauSacService';


class CreateNSX extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ma: '',
            ten: '',
            tinhTrang: ''

        }
        this.changeMaHandler = this.changeMaHandler.bind(this)
        this.changeTenHandler = this.changeTenHandler.bind(this)
        this.changeTrangThaiHandler = this.changeTrangThaiHandler.bind(this)
        this.saveMauSac = this.saveMauSac.bind(this)
    }
    saveMauSac(e){
        e.preventDefault();
        let ms = { ma: this.state.ma, ten: this.state.ten, tinhTrang: this.state.tinhTrang };
        console.log('mauSac  =>' + JSON.stringify(ms));
        MauSacService.createMS(ms).then(res =>{
            alert("Thêm thành công");
        })
        window.location.href="/mau-sac/"
    }
    changeMaHandler(event) {
        this.setState({ ma: event.target.value })
    }
    changeTenHandler(event) {
        this.setState({ ten: event.target.value })
    }
    changeTrangThaiHandler(event) {
        this.setState({ tinhTrang: event.target.value })
    }
    cancel() {
        this.props.history.push("/nsx")
    }
    render() {
        return (
            <div className="home">
                <Sidebar />
                <div className="homeContainer">
                    <Navbar />
                    <h2 className="text-center">Add Sản Phẩm</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group'>
                                <label htmlFor="">Mã</label>
                                <input type="text" placeholder='Nhập mã' name='ma' className='form-control'
                                    value={this.state.ma} onChange={this.changeMaHandler} />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="">Tên</label>
                                <input type="text" placeholder='Nhập tên' name='ten' className='form-control'
                                    value={this.state.ten} onChange={this.changeTenHandler} />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="">Trạng Thái</label>
                                <input type="text" placeholder='Nhập trạng thái' name='tinhTrang' className='form-control'
                                    value={this.state.tinhTrang} onChange={this.changeTrangThaiHandler} />
                            </div>
                            <button className='btn btn-outline-primary' onClick={this.saveMauSac}> ADD</button>

                        </form>

                    </div>

                </div>
            </div>

        )
    }

}
export default CreateNSX;