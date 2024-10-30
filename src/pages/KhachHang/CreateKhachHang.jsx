import React, { Component } from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import { Navbar } from 'react-bootstrap';

import KhachHangService from '../../service/KhachHangService';
import { Margin } from '@mui/icons-material';

function back() {
    // eslint-disable-next-line no-restricted-globals
    history.back();
};
class CreateKhachHang extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fullName: '',
            dob: '',
            gender: '',
            address: '',
            phoneNumber: '',
            email: '',
            password: '',
            role: '',
            errorMessage: ''
        };
        // this.changeMa = this.changeMa.bind (this)
        this.handleChange = this.handleChange.bind(this);
        this.save = this.save.bind(this);
    }
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    save(e) {
        e.preventDefault();
        let kh = {
            fullName: this.state.fullName,
            dob: this.state.dob,
            gender: this.state.gender,
            address: this.state.address,
            phoneNumber: this.state.phoneNumber,
            email: this.state.email,
            password: this.state.password,
            role: this.state.role
        };
        console.log('kh => ' + JSON.stringify(kh));

        KhachHangService.createKH(kh)
            .then(response => {
                console.log('Customer created successfully', response);
                back();// Navigate back to customer list
            })
            .catch(error => {

                this.setState({ errorMessage: error.response.data.message });

            });
    }



    render() {
        return (
            <div className="home" style={{backgroundImage:'url(https://png.pngtree.com/thumb_back/fh260/background/20210601/pngtree-green-border-student-education-tool-minimalistic-background-image_722637.jpg)'}}>
                <Sidebar />
                <div>
                    <Navbar />
                    <div className='container' style={{marginLeft:'150px'}}>
                        <h2>Create Student</h2>
                        {this.state.errorMessage && (
                            <p style={{ color: 'red' }}>{this.state.errorMessage}</p>
                        )}
                        <form onSubmit={this.save}>
                            <div>
                                <label>Name</label>
                                <input type="text" name="fullName" value={this.state.name} onChange={this.handleChange} />
                            </div>
                            <div>
                                <label>Date of Birth</label>
                                <input type="date" name="dob" value={this.state.dob} onChange={this.handleChange} />
                            </div>
                            <div>
                                <label>Gender</label>
                                <select name="gender" value={this.state.gender} onChange={this.handleChange}>
                                    <option value="">Select Gender</option> {/* Default option */}
                                    <option value="Nam">Nam</option>
                                    <option value="Nữ">Nữ</option>
                                    <option value="Khác">Khác</option>
                                </select>
                            </div>

                            <div>
                                <label>Address</label>
                                <input type="text" name="address" value={this.state.address} onChange={this.handleChange} />
                            </div>
                            <div>
                                <label>Phone Number</label>
                                <input type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} />
                            </div>
                            <div>
                                <label>Email</label>
                                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                            </div>
                            {/* <div>
                                <label>Password</label>
                                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                            </div> */}
                            <div>
                                <label>Role</label>
                                <select name="role" value={this.state.role} onChange={this.handleChange}>
                                    <option value="">Select Role</option>
                                    <option value="STUDENT">STUDENT</option>
                                    <option value="TEACHER">TEACHER</option>
                                </select>
                            </div>

                            <button type="submit">Save</button>

                            <button type="button" onClick={back} style={{ marginLeft: '10px' }}>Back</button>

                        </form>
                    </div>
                </div>
            </div>
        );
    }

}
export default CreateKhachHang;