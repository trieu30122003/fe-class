import React, { Component } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import { Navbar } from 'react-bootstrap';
import LoaiService from '../../service/LoaiService';
import ClassService from '../../service/ClassService';
import KhachHangService from '../../service/KhachHangService';
import NhanVienService from '../../service/NhanVienService';
import ClassUserService from '../../service/ClassUserService';
import ScheduleService from '../../service/ScheduleService';

function back() {
    // eslint-disable-next-line no-restricted-globals
    history.back();
}

class AddUserToClass extends Component {
    constructor(props) {
        super(props);

        this.state = {
            classId: '', // Selected Class ID
            userId: '', // User ID
            subjectId: '', // Subject ID
            scheduleId: '', // Schedule ID
            classes: [],
            schedule: [],
            teachers: [], // List of classes
            students: [], // List of students
            subjects: [], // List of subjects
            studentIds: [], // List of selected student IDs
            errorMessage: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleStudentChange = this.handleStudentChange.bind(this);
        this.save = this.save.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this); // Bind this method
    }

    componentDidMount() {
        // Fetch all subjects
        LoaiService.getLoai()
            .then(response => {
                this.setState({ subjects: response.data.content });
            })
            .catch(error => {
                console.error("Error fetching subjects:", error);
                this.setState({ errorMessage: "Error loading subjects" });
            });

        // Fetch all classes
        ClassService.getKH()
            .then(response => {
                this.setState({ classes: response.data.content });
                console.log(response.data.content);

            })
            .catch(error => {
                console.error("Error fetching classes:", error);
                this.setState({ errorMessage: "Error loading classes" });
            });
        NhanVienService.getKH()
            .then(response => {
                this.setState({ teachers: response.data.content });
                console.log(response.data.content);

            })
            .catch(error => {
                console.error("Error fetching classes:", error);
                this.setState({ errorMessage: "Error loading classes" });
            });
        ScheduleService.getKH()
            .then(response => {
                this.setState({ schedule: response.data });
                // console.log(response.data.content);

            })
            .catch(error => {
                console.error("Error fetching classes:", error);
                this.setState({ errorMessage: "Error loading classes" });
            });


        // Fetch all students
        KhachHangService.getKH()
            .then(response => {
                this.setState({ students: response.data.content });
            })
            .catch(error => {
                console.error("Error fetching students:", error);
                this.setState({ errorMessage: "Error loading students" });
            });
    }

    handleChange(event) {
        const { name, value } = event.target;
        console.log(`Changed: ${name} = ${value}`);
    
        if (name === 'scheduleId') {
            this.setState({ scheduleId: value }); // Cập nhật scheduleId
        } else {
            this.setState({ [name]: value }); // Cập nhật các trường khác
        }
    }
    
    handleStudentChange(event) {
        const selectedStudents = Array.from(event.target.selectedOptions, option => option.value);
        this.setState({ studentIds: selectedStudents });
    }
    handleCheckboxChange(event) {
        const { value, checked } = event.target;
        const studentId = parseInt(value); // Convert to number if needed

        if (checked) {
            // Add the student ID to the array if it's checked
            this.setState(prevState => ({
                studentIds: [...prevState.studentIds, studentId]
            }));
        } else {
            // Remove the student ID from the array if it's unchecked
            this.setState(prevState => ({
                studentIds: prevState.studentIds.filter(id => id !== studentId)
            }));
        }
    }


    save(e) {
        e.preventDefault();
        let studentClassRequests = this.state.studentIds.map(studentId => ({
            classesId: this.state.classId,
            userId: studentId
        }));
        let requestData = {
            classId: this.state.classId,
            userId: this.state.userId,
            studentIds: studentClassRequests,
            subjectId: this.state.subjectId,
            scheduleId: this.state.scheduleId
        };
        console.log('Request Data => ' + JSON.stringify(requestData));

        ClassUserService.createKH(requestData)
            .then(response => {
                console.log('Class created successfully', response);
                back(); // Navigate back to previous page
            })
            .catch(error => {
                this.setState({ errorMessage: error.response?.data?.message || 'Error saving class' });
            });
    }

    render() {
        return (
            <div className="home">
                <Sidebar />
                <div className="homeContainer">
                    <Navbar />
                    <div className='container'>
                        <h2>Create Class</h2>
                        {this.state.errorMessage && (
                            <p style={{ color: 'red' }}>{this.state.errorMessage}</p>
                        )}
                        <form onSubmit={this.save}>
                            <div>
                                <label>Class</label>
                                <select name="classId" value={this.state.classId} onChange={this.handleChange}>
                                    <option value="">Select Class</option>
                                    {this.state.classes.map(classItem => (
                                        <option key={classItem.id} value={classItem.id}>
                                            {classItem.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label>Teacher</label>
                                <select name="userId" value={this.state.userId} onChange={this.handleChange}>
                                    <option value="">Select Teacher</option>
                                    {this.state.teachers.map(classItem => (
                                        <option key={classItem.id} value={classItem.id}>
                                            {classItem.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            


                            {/* <div>
                                <label>Schedule ID</label>
                                <input type="text" name="scheduleId" value={this.state.scheduleId} onChange={this.handleChange} />
                            </div> */}
                            <div>
                                <label>Students</label>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Select</th>
                                            <th> Mã</th>
                                            <th> Họ và tên</th>
                                            <th> Ngày sinh</th>
                                            <th> Giới tính</th>
                                            <th> Địa chỉ</th>
                                            <th> SĐT</th>
                                            <th> Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.students.map(student => (
                                            <tr key={student.id}>
                                                <td>
                                                    <input
                                                        type="checkbox"
                                                        name="studentIds"
                                                        value={student.id}
                                                        checked={this.state.studentIds.includes(student.id)}
                                                        onChange={this.handleCheckboxChange}
                                                    />
                                                </td>
                                                <td>{student.id}</td>
                                                <td>{student.name}</td>
                                                <td>{student.dob ? new Date(student.dob).toLocaleDateString() : 'N/A'}</td>
                                                <td>{student.gender}</td>
                                                <td>{student.address}</td>
                                                <td>{student.phoneNumber}</td>
                                                <td>{student.email}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
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

export default AddUserToClass;
