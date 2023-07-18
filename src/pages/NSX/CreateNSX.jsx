import React, { Component } from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import { Navbar } from 'react-bootstrap';
import NSXService from '../../service/NSXService';


class CreateNSX extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ma: '',
            ten: '',
            tinh_trang: ''
            
        }
        this.changeMaHandler = this.changeMaHandler.bind (this)
        this.changeTenHandler = this.changeTenHandler.bind (this)
        this.changeTrangThaiHandler = this.changeTrangThaiHandler.bind (this)
        this.saveNSX = this.saveNSX.bind (this)
    }
    saveNSX = (e) => {
        e.preventDefault();
        let nsx = {ma: this.state.ma, ten: this.state.ten, tinh_trang: this.state.tinh_trang};
        console.log('nsx  =>' + JSON.stringify(nsx)) ;

        NSXService.createNSX(nsx).then(res => {
            this.props.history.push("/nsx/");
        });
    }
    changeMaHandler(event) {
        this.setState({ ma: event.target.value })
    }
    changeTenHandler(event) {
        this.setState({ ten: event.target.value })
    }
    changeTrangThaiHandler(event) {
        this.setState({ tinh_trang: event.target.value })
    }
    cancel(){
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
                                <input type="text" placeholder='Nhập trạng thái' name='tinh_trang' className='form-control'
                                    value={this.state.tinh_trang} onChange={this.changeTrangThaiHandler} />
                            </div>
                            <button className='btn btn-outline-primary' onClick={this.saveNSX}> ADD</button>
                           
                        </form>
                        
                    </div>

                </div>
            </div>

        )
    }

}
export default CreateNSX;