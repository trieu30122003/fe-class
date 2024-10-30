import React, { Component } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import { Navbar } from 'react-bootstrap';
import ScoreServices from '../../service/DayDeoService';
import LoaiService from '../../service/LoaiService';
import KhachHangService from '../../service/KhachHangService';
// import './CreateScore.scss'

function back() {
    // eslint-disable-next-line no-restricted-globals
    history.back();
};

class CreateSubject extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            name:'',
            isDeleted:false
        };

        this.handleChange = this.handleChange.bind(this);
        this.save = this.save.bind(this);
    }
    // componentDidMount() {
    //     // Fetch all subjects
    //     LoaiService.getLoai()
    //         .then(response => {
    //             this.setState({ subjects: response.data.content });
    //         })
    //         .catch(error => {
    //             console.error("Error fetching subjects:", error);
    //             this.setState({ errorMessage: "Error loading subjects" });
    //         });

    //     // Fetch all students
    //     KhachHangService.getKH()
    //         .then(response => {
    //             this.setState({ users: response.data.content });
    //         })
    //         .catch(error => {
    //             console.error("Error fetching students:", error);
    //             this.setState({ errorMessage: "Error loading students" });
    //         });
    // }
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    save(e) {
        e.preventDefault();
        let scoreData = {
            // id: this.state.id,
            // dateScore: this.state.dateScore,
            // mark: this.state.mark,
            // subjectId: this.state.subjectId,
            // userCode: this.state.userCode,
            name: this.state.name,
            isDeleted: this.state.isDeleted
        };
        console.log('Score data => ' + JSON.stringify(scoreData));

        LoaiService.createNSX(scoreData)
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
            <div className="home" style={{backgroundImage:'url(https://img.lovepik.com/background/20211021/medium/lovepik-modern-medical-chemistry-science-and-technology-background-image_500358408.jpg)'}}>
                <Sidebar />
                <div className="homeContainer">
                    <Navbar />
                    <div className="container" style={{marginLeft:'150px'}}>
                        <h2 style={{color:'white'}}>Create Subject</h2>
                        {this.state.errorMessage && (
                            <p style={{ color: 'red' }}>{this.state.errorMessage}</p>
                        )}
                        <form onSubmit={this.save}>
                            <div style={{position:'relative', left:'120px'}}>
                                <label style={{color:'pink'}}>Name</label>
                                <input placeholder='Nhập tên môn học' type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                            </div>
                            <button type="submit">Save</button>
                            <button type="button" onClick={back}>Back</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateSubject;
