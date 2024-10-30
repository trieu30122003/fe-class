import React, { Component } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import { Navbar } from 'react-bootstrap';
import KhachHangService from '../../service/KhachHangService';
import ScheduleService from '../../service/ScheduleService';
import ClassService from '../../service/ClassService';

function back() {
    // eslint-disable-next-line no-restricted-globals
    history.back();
}

class CreateSchedule extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: null, // Thêm id nếu cần
            startDate: '',
            startTime: '',
            endTime: '',
            duration: null,
            classes: [],
            classId: null,
            isDeleted: false, // Mặc định là false
            errorMessage: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.save = this.save.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    componentDidMount() {

        ClassService.getKH()
            .then(response => {
                this.setState({ classes: response.data.content });
                console.log(response.data.content);

            })
            .catch(error => {
                console.error("Error fetching classes:", error);
                this.setState({ errorMessage: "Error loading classes" });
            });

    }
    save(e) {
        e.preventDefault();
        let kh = {
            id: this.state.id,
            startDate: this.state.startDate,
            startTime: this.state.startTime,
            endTime: this.state.endTime,
            duration: this.state.duration,
            classId: this.state.classId,
            isDeleted: this.state.isDeleted,
            
        };

        console.log('kh => ' + JSON.stringify(kh));

        ScheduleService.createKH(kh)
            .then(response => {
                console.log('Customer created successfully', response);
                back(); // Navigate back to customer list
            })
            .catch(error => {
                this.setState({ errorMessage: error.response.data.message });
            });
    }

    render() {
        return (
            <div className="home" style={{backgroundImage:'url(https://i.pinimg.com/736x/07/37/97/0737979f18fd7439ce8629d15a03e1b7--calendar-wallpaper-wallpaper-desktop.jpg)'}}>
                <Sidebar />
                <div className="homeContainer">
                    <Navbar />
                    <div className='container' style={{ marginLeft: '150px' }}>
                        <h2>Create Schedule</h2>
                        {this.state.errorMessage && (
                            <p style={{ color: 'red' }}>{this.state.errorMessage}</p>
                        )}
                        <form onSubmit={this.save}>

                            {/* Các trường mới cho ID, StartDate, StartTime, EndTime, Duration, ClassId, IsDeleted */}
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
                                <label>Start Date</label>
                                <input type="date" name="startDate" value={this.state.startDate} onChange={this.handleChange} />
                            </div>
                            <div>
                                <label>Start Time</label>
                                <input
                                    type="datetime-local"
                                    name="startTime"
                                    value={this.state.startTime}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div>
                                <label>End Time</label>
                                <input
                                    type="datetime-local"
                                    name="endTime"
                                    value={this.state.endTime}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div style={{ position:'relative',left:'100px' }}>
                                <label>Duration</label>
                                <input placeholder='Giờ học' type="number" step="0.1" name="duration" value={this.state.duration || ''} onChange={this.handleChange} />
                            </div>
                            {/* <div>
                                <label>Is Deleted</label>
                                <input type="checkbox" name="isDeleted" checked={this.state.isDeleted} onChange={(e) => this.setState({ isDeleted: e.target.checked })} />
                            </div> */}

                            <button type="submit">Save</button>
                            <button type="button" onClick={back}>Back</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateSchedule;
