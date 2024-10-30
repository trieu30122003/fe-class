import React, { Component } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import { Navbar } from 'react-bootstrap';
import ScoreServices from '../../service/DayDeoService';
import LoaiService from '../../service/LoaiService';
import KhachHangService from '../../service/KhachHangService';
import './CreateScore.scss'

function back() {
    // eslint-disable-next-line no-restricted-globals
    history.back();
};

class CreateScore extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            dateScore: '',
            mark: '',
            subjectId: '',
            userCode: '',
            userId: '',
            isDeleted: false,
            errorMessage: null,
            subjects:[],
            users:[]
        };

        this.handleChange = this.handleChange.bind(this);
        this.save = this.save.bind(this);
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

        // Fetch all students
        KhachHangService.getKH()
            .then(response => {
                this.setState({ users: response.data.content });
                console.log('us:',response.data.content);
                
            })
            .catch(error => {
                console.error("Error fetching students:", error);
                this.setState({ errorMessage: "Error loading students" });
            });
    }
    handleChange(event) {
        const { name, value } = event.target;
        
        // Update the userCode based on the selected userId
        if (name === "userId") {
            const selectedUser = this.state.users.find(user => user.id === value);
            this.setState({ userCode: selectedUser ? selectedUser.code : '' });
        }
    
        this.setState({ [name]: value });
    }
    

    save(e) {
        e.preventDefault();
        let scoreData = {
            // id: this.state.id,
            dateScore: this.state.dateScore,
            mark: this.state.mark,
            subjectId: this.state.subjectId,
            userCode: this.state.userCode,
            userId: this.state.userId,
            isDeleted: this.state.isDeleted
        };
        console.log('Score data => ' + JSON.stringify(scoreData));

        ScoreServices.create(scoreData)
            .then(response => {
                console.log('Score created successfully', response);
                back(); // Quay lại danh sách
            })
            .catch(error => {
                this.setState({ errorMessage: error.response?.data?.message || "An error occurred" });
            });
    }

    render() {
        return (
            <div className="home" style={{backgroundImage:'url(https://media.viez.vn/prod/2021/10/24/image_0f1e3a8c30.png)'}}>
                <Sidebar />
                <div className="homeContainer">
                    <Navbar />
                    <div className="container" style={{marginLeft:'150px'}}>
                        <h2>Create Score</h2>
                        {this.state.errorMessage && (
                            <p style={{ color: 'red' }}>{this.state.errorMessage}</p>
                        )}
                        <form onSubmit={this.save}>
                            {/* <div>
                                <label>ID</label>
                                <input type="text" name="id" value={this.state.id} onChange={this.handleChange} required />
                            </div> */}
                            <div>
                                <label>Date Score</label>
                                <input type="date" name="dateScore" value={this.state.dateScore} onChange={this.handleChange} required />
                            </div>
                            <div>
                                <label>Mark</label>
                                <input type="number" step="0.1" name="mark" value={this.state.mark} onChange={this.handleChange} required />
                            </div>
                            <div>
                                <label>Subject</label>
                                <select name="subjectId" value={this.state.subjectId} onChange={this.handleChange}>
                                    <option value="">Select Subject</option>
                                    {this.state.subjects.map(classItem => (
                                        <option key={classItem.id} value={classItem.id}>
                                            {classItem.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {/* <div>
                                <label>Subject ID</label>
                                <input type="text" name="subjectId" value={this.state.subjectId} onChange={this.handleChange} required />
                            </div> */}
                            <div>
    <label>User</label>
    <select name="userId" value={this.state.userId} onChange={this.handleChange}>
        <option value="">Select User</option>
        {this.state.users.map(user => (
            <option key={user.id} value={user.id}>
                {user.name}
            </option>
        ))}
    </select>
</div>

<div>
    <label>Mã sinh viên</label>
    <input type="text" name="userCode" value={this.state.userCode} disabled />
</div>

                            {/* <div>
                                <label>User ID</label>
                                <input type="text" name="userId" value={this.state.userId} onChange={this.handleChange} required />
                            </div> */}


                            <button type="submit">Save</button>
                            <button type="button" onClick={back} style={{ marginLeft: '10px' }}>Back</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateScore;
