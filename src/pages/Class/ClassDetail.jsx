import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ClassService from '../../service/ClassService';
import Sidebar from '../../components/sidebar/Sidebar';
import { Navbar } from 'react-bootstrap';
import "./ClassDetail.scss"
function back() {
    // eslint-disable-next-line no-restricted-globals
    history.back();
}

const ClassDetail = () => {
    const { id } = useParams(); // Get 'id' from URL parameters
    const [classDetails, setClassDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (id) {
            ClassService.getKHById(id)
                .then(response => {
                    setClassDetails(response.data);
                    setLoading(false);
                })
                .catch(err => {
                    console.error('Error fetching class details:', err);
                    setError('Lớp trống');
                    setLoading(false);
                });
        }
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return (
            <div>
                <p>{error}</p>
                <button onClick={() => back()} style={{ marginTop: '10px' }}>Quay lại</button>
            </div>
        );
    }
        return (
            <div className="home">
                <Sidebar />
                <div className="homeContainer">
                    <Navbar />
                    <div className='container'>
                        {classDetails ? (
                            <form>
                                <h3>View Class </h3>
                                <p>Class ID: <input type="text" value={classDetails.classId} readOnly disabled /></p>
                                <p>Class Name: <input type="text" value={classDetails.className} onChange={(e) => setClassDetails({ ...classDetails, className: e.target.value })}  disabled/></p>
                                <p>Course: <input type="text" value={classDetails.course} onChange={(e) => setClassDetails({ ...classDetails, course: e.target.value })} disabled/></p>
                                <p>Subject Name: <input type="text" value={classDetails.subjectName} onChange={(e) => setClassDetails({ ...classDetails, subjectName: e.target.value })} disabled/></p>
                                <p>Start Date: <input type="date" value={classDetails.startDate?.split('T')[0]} onChange={(e) => setClassDetails({ ...classDetails, startDate: e.target.value })}disabled /></p>
                                <p>Start Time:
                                    <input
                                        type="datetime-local"
                                        value={classDetails.startTime ? new Date(classDetails.startTime).toISOString().slice(0, 16) : ""}
                                        onChange={(e) => {
                                            const dateTime = e.target.value;
                                            setClassDetails({ ...classDetails, startTime: new Date(dateTime).toISOString() });
                                        }}
                                        disabled
                                    />
                                </p>

                                <p>End Time:
                                    <input
                                        type="datetime-local"
                                        value={classDetails.endTime ? new Date(classDetails.endTime).toISOString().slice(0, 16) : ""}
                                        onChange={(e) => {
                                            const dateTime = e.target.value;
                                            setClassDetails({ ...classDetails, endTime: new Date(dateTime).toISOString() });
                                        }}
                                        disabled
                                    />
                                </p>
                                <p>Duration: <input type="number" value={classDetails.duration} onChange={(e) => setClassDetails({ ...classDetails, duration: e.target.value })} disabled/></p>

                                <div>
                                    <h4>Students</h4>
                                    {classDetails.students && classDetails.students.length > 0 ? (
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Name</th>
                                                    <th>Dob</th>
                                                    <th>Gender</th>
                                                    <th>Address</th>
                                                    <th>Phone</th>
                                                    <th>Email</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {classDetails.students.map(student => (
                                                    <tr key={student.id}>
                                                        <td>{student.id}</td>
                                                        <td>{student.name}</td>
                                                        <td>{student.dob?.split('T')[0]}</td>
                                                        <td>{student.gender}</td>
                                                        <td>{student.address}</td>
                                                        <td>{student.phoneNumber}</td>
                                                        <td>{student.email}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    ) : (
                                        <p>No students assigned</p>
                                    )}
                                </div>

                                <div>
                                    <h4>Teachers</h4>
                                    {classDetails.teachers && classDetails.teachers.length > 0 ? (
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Name</th>
                                                    <th>Dob</th>
                                                    <th>Gender</th>
                                                    <th>Address</th>
                                                    <th>Phone</th>
                                                    <th>Email</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {classDetails.teachers.map(teacher => (
                                                    <tr key={teacher.id}>
                                                        <td>{teacher.id}</td>
                                                        <td>{teacher.name}</td>
                                                        <td>{teacher.dob?.split('T')[0]}</td>
                                                        <td>{teacher.gender}</td>
                                                        <td>{teacher.address}</td>
                                                        <td>{teacher.phoneNumber}</td>
                                                        <td>{teacher.email}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    ) : (
                                        <p>No teachers assigned</p>
                                    )}
                                </div>

                                <button type="button" onClick={back} style={{ marginLeft: '10px' }}>Back</button>
                            </form>
                        ) : (
                            <p>No class details found.</p>
                        )}
                    </div>
                </div>
            </div>
        );
};

export default ClassDetail;
