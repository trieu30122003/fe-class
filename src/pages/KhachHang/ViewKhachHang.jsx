import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import KhachHangService from '../../service/KhachHangService';
import Sidebar from '../../components/sidebar/Sidebar';

function back() {
    // eslint-disable-next-line no-restricted-globals
    history.back();
}

const ViewKhachHang = () => {
    const { id } = useParams(); // Get 'id' from URL parameters
    const [customer, setCustomer] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        if (id) {
            KhachHangService.getKHById(id)
                .then(response => {
                    setCustomer(response.data);
                    setLoading(false);
                })
                .catch(err => {
                    console.error('Error fetching customer details:', err);
                    setError('Failed to fetch customer details');
                    setLoading(false);
                });
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (customer) {
            KhachHangService.updateKH(customer) // Correctly update using the customer object
                .then(response => {
                    console.log('Customer updated successfully:', response.data);
                    back();
                })
                .catch(err => {
                    console.error('Error updating customer:', err);
                    setError('Failed to update customer details');
                });
        } else {
            console.error('Customer data is undefined');
        }
    };

    // Show loading state or error message
    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    // Render customer details and form for editing
    return (
        <div>
            <style>
                {`
                /* General Styles */
                body {
                    font-family: Arial, sans-serif;
                    background-image: url('https://cdnphoto.dantri.com.vn/_8gq5JYNOzsS171zNH7lvj5XNnE=/zoom/1200_630/2021/05/24/sinh-vien-fpt-aptech-gianh-quan-quan-cuoc-thi-quoc-te-ve-lap-trinh-techwiz-2021-2-crop-1621857056963.jpeg'); /* Replace with your image URL */
                    background-size: cover; /* Cover the entire viewport */
                    background-position: center; /* Center the background image */
                    margin: 0;
                    padding: 20px;
                }

                /* Main Container Styles */
                .main-container {
                    display: flex; /* Use flexbox to align items */
                    justify-content: space-between; /* Space out the blocks */
                    max-width: 800px; /* Max width for the main container */
                    margin: auto; /* Center the container */
                }

                /* Form Container Styles */
                .form-container {
                    background-color: rgba(0, 0, 0, 0.7); /* Use a semi-transparent black background */
                    border-radius: 5px; /* Bo góc */
                    padding: 20px; /* Khoảng cách bên trong */
                    flex: 1; /* Allow the form to take up available space */
                    margin-right: 20px; /* Space between the form and the image */
                    color: white; /* Màu chữ trắng */
                }

                /* Image Styles */
                .customer-image {
                    width: 250px; /* Width of the image */
                    height: auto; /* Maintain aspect ratio */
                    border-radius: 5px; /* Rounded corners */
                    height: 100%; /* Set height to 100% of the container */
                    margin-right: 20px
                }

                h3 {
                    color: #ffffff; /* Màu tiêu đề trắng */
                }

                /* Input Styles */
                input[type="text"],
                input[type="date"],
                input[type="email"] {
                    width: 100%; /* Chiều rộng 100% */
                    padding: 10px; /* Khoảng cách bên trong */
                    margin: 10px 0; /* Khoảng cách trên và dưới */
                    border: 1px solid #ced4da; /* Viền xám */
                    border-radius: 4px; /* Bo góc */
                    box-sizing: border-box; /* Tính toán chiều rộng bao gồm padding */
                    color: black; /* Màu chữ đen trong input */
                }

                /* Label Styles */
                label {
                    color: white; /* Màu chữ trắng cho nhãn */
                }

                /* Button Styles */
                button {
                    background-color: #007bff; /* Màu nền nút */
                    color: white; /* Màu chữ trắng */
                    border: none; /* Không viền */
                    padding: 10px 15px; /* Khoảng cách bên trong */
                    border-radius: 5px; /* Bo góc */
                    cursor: pointer; /* Con trỏ khi hover */
                    transition: background-color 0.3s; /* Hiệu ứng chuyển màu */
                }

                button:hover {
                    background-color: #0056b3; /* Màu nền khi hover */
                }

                /* Error and Loading Message Styles */
                p {
                    color: #ffffff; /* Màu chữ trắng cho các đoạn văn bản */
                }
                `}
            </style>
            
            <div className="main-container">
                {/* Image Block */}
                <div style={{ marginTop:'55px', height: '100%', display: 'flex', alignItems: 'center' }}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVFEWHOQTncWKinhmbqULjkyUIKwDToE-u4A&s" alt="Customer" className="customer-image" />
                </div>

                {/* Form Block */}
                <div className="form-container">
                    {customer ? (
                        <form onSubmit={handleSubmit}>
                            <h3>Edit Customer Details</h3>
                            <p>
                                <label>Mã:</label> 
                                <input type="text" value={customer.code} disabled />
                            </p>
                            <p>
                                <label>Name:</label> 
                                <input type="text" value={customer.name} onChange={(e) => setCustomer({...customer, name: e.target.value})} />
                            </p>
                            <p>
                                <label>Date of Birth:</label> 
                                <input type="date" value={customer.dob.split('T')[0]} onChange={(e) => setCustomer({...customer, dob: e.target.value})} />
                            </p>
                            <p>
                                <label>Gender:</label> 
                                <input type="text" value={customer.gender} onChange={(e) => setCustomer({...customer, gender: e.target.value})} />
                            </p>
                            <p>
                                <label>Address:</label> 
                                <input type="text" value={customer.address} onChange={(e) => setCustomer({...customer, address: e.target.value})} />
                            </p>
                            <p>
                                <label>Phone Number:</label> 
                                <input type="text" value={customer.phoneNumber} onChange={(e) => setCustomer({...customer, phoneNumber: e.target.value})} />
                            </p>
                            <p>
                                <label>Email:</label> 
                                <input type="email" value={customer.email} onChange={(e) => setCustomer({...customer, email: e.target.value})} />
                            </p>
                            <p>
                                <label>Role:</label> 
                                <input type="text" value={customer.role} onChange={(e) => setCustomer({...customer, role: e.target.value})} />
                            </p>
                            <button type="submit">Update Customer</button>
                            
                            <button type="button" onClick={back} style={{ marginLeft: '10px' }}>Back</button>
                        </form>
                    ) : (
                        <p>No customer found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ViewKhachHang;
