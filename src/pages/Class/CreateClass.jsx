import React, { Component } from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import { Navbar } from 'react-bootstrap';

import KhachHangService from '../../service/KhachHangService';
import LoaiService from '../../service/LoaiService';
import ClassService from '../../service/ClassService';

function back() {
    // eslint-disable-next-line no-restricted-globals
    history.back();
};
class CreateClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            course: '',
            subjectId: '',
            subjects: [],
            errorMessage: ''
        };
        // this.changeMa = this.changeMa.bind (this)
        this.handleChange = this.handleChange.bind(this);
        this.save = this.save.bind(this);
    }
    componentDidMount() {
        LoaiService.getLoai() // Assuming this service fetches the list of subjects
            .then(response => {
                this.setState({ subjects: response.data.content });
            })
            .catch(error => {
                console.error("Error fetching subjects:", error);
                this.setState({ errorMessage: "Error loading subjects" });
            });
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    save(e) {
        e.preventDefault();
        let kh = {
            name: this.state.name,
            course: this.state.course,
            subjectId: this.state.subjectId
        };
        console.log('kh => ' + JSON.stringify(kh));

        ClassService.createKH(kh)
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
            <div className="home" style={{backgroundImage:'url(https://treobangron.com.vn/wp-content/uploads/2022/09/background-hoc-tap-51.jpg)'}}>
                <Sidebar />
                <div className="homeContainer">
                    <Navbar />
                    <div className='container' style={{ marginLeft: '150px' }}>
                        <h2 style={{color:'yellow'}}>Create Class</h2>
                        {this.state.errorMessage && (
                            <p style={{ color: 'red' }}>{this.state.errorMessage}</p>
                        )}
                        <form onSubmit={this.save}>
                            <div>
                                <label style={{color:'yellow'}}>Name</label>
                                <input placeholder='Tên lớp' type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                            </div>
                            <div>
                                <label style={{color:'yellow'}}>Course</label>
                                <input placeholder='Kì học' type="text" name="course" value={this.state.course} onChange={this.handleChange} />
                            </div>
                            <div>
                                <label style={{color:'yellow'}}>Subject</label>
                                <select name="subjectId" value={this.state.subjectId} onChange={this.handleChange}>
                                    <option value="">Select Subject</option>
                                    {this.state.subjects.map(subject => (
                                        <option key={subject.id} value={subject.id}>
                                            {subject.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Other fields */}

                            <button type="submit">Save</button>
                            <button type="button" onClick={back}>Back</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default CreateClass;