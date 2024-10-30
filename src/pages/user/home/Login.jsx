import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Sử dụng useNavigate thay vì useHistory

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // Khởi tạo useNavigate

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Attempt login
            const response = await axios.post('http://localhost:8080/api/auth/login', { email, password });

            // Log the entire response to debug
            console.log("Response: ", response);

            // Check if login is successful
            if (response.status === 200) {
                const { role, id } = response.data; // Assuming the response contains 'role' and 'id'
                setRole(role); // Update the role in state

                // If the user is a STUDENT, navigate to /view-student/{id}
                if (role === 'STUDENT') {
                    navigate(`/view-student/${id}`); // Redirect to student's detail page
                } else if (role === 'SRO') {
                    navigate(`/new/`)
                } else if(role==='TEACHER'){
                    navigate(`/view-teacher/${id}`);
                }
                else {
                    alert('Login successful!'); // Alert for other roles
                }
            }
        } catch (error) {
            // Log the error to debug
            console.log("Error: ", error);

            // Handle errors
            if (error.response) {
                setErrorMessage(error.response.data); // API-specific error message
            } else {
                setErrorMessage('An error occurred. Please try again.'); // Generic error message
            }
        }
    };

    const containerStyle = {
        maxWidth: '400px',
        margin: '50px auto',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 11px 11px ',

    };

    const titleStyle = {
        textAlign: 'center',
        marginBottom: '20px',
        color: '#FFC107', // A specific shade of yellow (golden yellow)
    };


    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
    };

    const labelStyle = {
        fontWeight: 'bold',
        marginBottom: '8px',
        color: '#FFC107',
    };

    const inputStyle = {
        width: '95%',
        padding: '10px',
        marginBottom: '15px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '16px',
    };

    const buttonStyle = {
        backgroundImage: 'linear-gradient(45deg, rgba(0, 0, 0, 0.85) 50%, rgba(255, 0, 0, 0.7) 50%)', // Darker black and lighter red
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        width: '100%',
        marginTop: '10px',
    };




    const errorStyle = {
        color: 'red',
        textAlign: 'center',
        marginTop: '10px',
    };
    const login = {
        backgroundImage: 'url("https://aptechsaigon.edu.vn/gw-content/images/1596682456-WloylHT.jpg")',
        backgroundSize: 'cover', // Ensures the image fully covers the screen
        backgroundPosition: 'center', // Centers the background image
        backgroundRepeat: 'no-repeat',
        width: '100vw', // Full viewport width
        height: '100vh', // Full viewport height
        margin: '0', // Remove any default margins
        padding: '0', // Remove padding
        overflow: 'hidden', // Prevents scrolling issues with background
    };

    const pawIconStyle = {
        position: 'absolute',
        top: '70px', // Positioned at the top
        right: '400px', // Positioned on the right side
        width: '50px',
        height: '50px',
        opacity: '0.7',
        zIndex: '1', // Ensures the icon appears on top of other elements
        transform: 'rotate(45deg)', // Rotates the icon 45 degrees to the right
    };
    
    return (
        <div style={login}>
            <div style={containerStyle}>
                <h2 style={titleStyle}>Login</h2>
                <form style={formStyle} onSubmit={handleLogin}>
                    <div>
                        <label style={labelStyle}>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={inputStyle}
                        />
                    </div>
                    <div>
                        <label style={labelStyle}>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={inputStyle}
                        />
                    </div>
                    <button type="submit" style={buttonStyle}>Login</button>
                    {errorMessage && <p style={errorStyle}>{errorMessage}</p>}
                </form>
                <img src="https://media.istockphoto.com/id/181885044/vi/vec-to/in-ch%C3%A2n.jpg?s=612x612&w=0&k=20&c=_T6bdeV2j-AMlSaijw3esjHHmVKxvcsc0Wcol1WQM8o=" alt="Paw Icon" style={pawIconStyle} /> 
            </div>
        </div>
    );
};

export default Login;
