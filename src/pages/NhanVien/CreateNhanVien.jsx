import { Component } from "react";
import Sidebar from '../../components/sidebar/Sidebar';
import { Navbar } from 'react-bootstrap';
import NhanVienService from "../../service/NhanVienService";
import ChucVuService from "../../service/ChucVuService";

class CreateNhanVien extends Component {
    constructor(pops) {
        super(pops)

        this.state = {
            // step 2
            // id: this.props.match.params.id,
            ma: '',
            ten: '',
            ho: '',
            chucVu: [],
            selectedChucVu: ''
        }
        this.changeMa = this.changeMa.bind(this)
        this.changeTen = this.changeTen.bind(this)
        this.changeHo = this.changeHo.bind(this)
        this.changeChucVu = this.changeChucVu.bind(this)
        this.save = this.save.bind(this)

    }
    componentDidMount() {
        //lấy dữ liệu từ cbb chức vụ
        ChucVuService.getChucVu().then((res) => {
            this.setState({ chucVu: res.data });
        });
    }
    save(e) {
        e.prevenDefault();
        let nv = {
            ma: this.state.ma,
            ten: this.state.ten,
            ho: this.state.ho,
            chucVu: { id: this.state.chucVu }
        };
        console.log('nv =>' + JSON.stringify(nv));
        NhanVienService.createNV(nv).then(res => {
            window.location.href = ('/nhan-vien/new/')
            console.log(res.data);
        })
            .catch((error) => {
                console.error(error);
            });
        window.location.href = ('/nhan-vien/new/')

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
    changeChucVu(event) {
        this.setState({ selectedChucVu: event.target.value })
    };

    // changeTenDem= (event) => {
    //     this.setState({emailId: event.target.value});
    // }

    cancel() {
        this.props.history.push('/nhan-vien/new/');
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

                            <div className="form-group">
                            <label htmlFor="">Chức vụ</label>
                                <select
                                    className="form-select"
                                    name="idChucVu"
                                    value={this.state.selectChucVu}
                                    onChange={this.changeChucVu}
                                >
                                    <option value={0}>Chức vụ</option>
                                    {this.state.chucVu.map((chucVu) => (
                                        <option key={chucVu.id} value={chucVu.id}>
                                            {chucVu.ten}
                                        </option>
                                    ))}
                                </select>
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