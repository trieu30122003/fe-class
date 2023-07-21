import { Component } from "react";
import Sidebar from '../../components/sidebar/Sidebar';
import { Navbar } from 'react-bootstrap';
import NhanVienService from "../../service/NhanVienService";

class CreateNhanVien extends Component {
    constructor(pops) {
        super(pops)
        
        this.state = {
            // step 2
            // id: this.props.match.params.id,
            ma: '',
            ten: '',
            ho: ''
        }
        this.changeMa = this.changeMa.bind(this)
        this.changeTen = this.changeTen.bind(this)
        this.changeHo = this.changeHo.bind(this)
        this.save = this.save.bind(this)

    }
    save = (e) => {
        e.prevenDefault();
        let nv = { ma: this.state.ma, 
            ten: this.state.ten,
             ho: this.state.ho };
        console.log('nv =>' + JSON.stringify(nv));
        NhanVienService.createNV(nv);
        
    };

    changeMa(event) {
        this.setState({ ma: event.target.value })
    };
    changeTen(event) {
        this.setState({ ten: event.target.value })
    };
    changeHo(event) {
        this.setState({ ho: event.target.value })
    };

    changeHo= (event) => {
        this.setState({ho: event.target.value});
    }

    // changeTenDem= (event) => {
    //     this.setState({emailId: event.target.value});
    // }

    cancel(){
        this.props.history.push('/new/');
    }

    // getTitle(){
    //     if(this.state.id === '_add'){
    //         return <h3 className="text-center">Add </h3>
    //     }else{
    //         return <h3 className="text-center">Update </h3>
    //     }
    // }
    render() {
        return (
            <div className="home">
                <Sidebar />
                    <div className="homeContainer">
                        <Navbar />
                            <h2 className="text-center"> ADD NHÂN VIÊN</h2>
                            <div className="card-body">
                                <form action="">
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


                                    <div className='form-group'>
                                        <label htmlFor="">Họ</label>
                                        <input type="text" placeholder='Nhập tên' name='ho' className='form-control'
                                            value={this.state.ho} onChange={this.changeHo} />
                                    </div>
                                    <button className='btn btn-outline-primary' onClick={this.save}> ADD</button>
                                </form>

                            </div>
                    
                    </div>
            </div>

        );
    };




}
export default CreateNhanVien;