import React, { Component } from 'react';
import KhachHangService from '../service/KhachHangService';


class CreateKhachHang extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            ma: '',
            ho: '',
            tenDem: '',
            ten: '',
            ngaySinh: '',
            gioiTinh: '',
            diaChi: '',
            sdt: '',
            matKhau: '',
            email: '',
            tinhTrang: ''
        }
        this.changeMa = this.changeMa.bind(this);
        this.changeHo = this.changeHo.bind(this);
        this.saveOrUpdateKH = this.saveOrUpdateKH.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            KhachHangService.getKHById(this.state.id).then( (res) =>{
                let kh = res.data;
                this.setState({ma: kh.ma,
                    ho: kh.ho,
                    tenDem : kh.tenDem,
                    ten : kh.ten,
                    ngaySinh : kh.ngaySinh,
                    gioiTinh : kh.gioiTinh,
                    diaChi : kh.diaChi,
                    sdt : kh.sdt,
                    matKhau : kh.matKhau,
                    tinhTrang : kh.tinhTrang

                });
            });
        }        
    }
    saveOrUpdateKH = (e) => {
        e.preventDefault();
        let kh = {ma: this.state.ma, ho: this.state.ho, tenDem: this.state.tenDem, ten: this.state.ten, ngaySinh: this.state.ngaySinh, gioiTinh: this.state.gioiTinh, diaChi: this.state.diaChi, sdt: this.state.sdt, matKhau: this.state.matKhau, tinhTrang: this.state.tinhTrang};
        console.log('kh => ' + JSON.stringify(kh));

        // step 5
        if(this.state.id === '_add'){
            KhachHangService.createKH(kh).then(res =>{
                this.props.history.push('/new');
            });
        }else{
            KhachHangService.updateKH(kh, this.state.id).then( res => {
                this.props.history.push('/new/{id}');
            });
        }
    }
    
    changeMa= (event) => {
        this.setState({ma: event.target.value});
    }

    changeHo= (event) => {
        this.setState({ho: event.target.value});
    }

    changeTenDem= (event) => {
        this.setState({emailId: event.target.value});
    }

    cancel(){
        this.props.history.push('/new/');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add </h3>
        }else{
            return <h3 className="text-center">Update </h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Mã: </label>
                                            <input placeholder="Mã" name="ma" className="form-control" 
                                                value={this.state.ma} onChange={this.changeMa}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Họ: </label>
                                            <input placeholder="Họ" name="ho" className="form-control" 
                                                value={this.state.ho} onChange={this.changeHo}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateKH}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateKhachHang