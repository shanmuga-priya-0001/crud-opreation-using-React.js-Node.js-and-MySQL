import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';


export const Update = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: '',
        email: ''
    });

    
     useEffect(() => {
        axios.get(`http://localhost:8081/read/${id}`)
            .then(res => {
             
                setValues({
                    name: res.data[0].name,
                    email: res.data[0].email
                });
            })
            .catch(err => console.error('Error fetching user data:', err));
    }, [id]);

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8081/update/${id}`, values)
            .then(res => {
                console.log('User updated successfully:', res);
                navigate('/');
            })
            .catch(err => console.error('Error updating user:', err));
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    return (
        <div className='d-flex vh-100 bg-dark justify-content-center align-items-center' >
            <div className='w-50  bg-white rounded p-5'>
                <h1>Edit User-Profile</h1>
                <form onSubmit={handleUpdate} >
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            className='form-control'
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            required

                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            className='form-control'
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button className='btn btn-success' type="submit">Update</button>
                </form>

            </div>
        </div>

    )
}
