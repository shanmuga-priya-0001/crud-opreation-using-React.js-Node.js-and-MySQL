import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const View = () => {

    const {id} = useParams();
    const [student, setStudent] = useState([]);
    useEffect(() =>{
        axios.get('http://localhost:8081/read/'+id)
        .then(res => {
            setStudent(res.data[0])
            console.log(res)})
        .catch(err => console.log(err))
    },[id])

  return (
    <div className='d-flex vh-100 bg-dark justify-content-center align-items-center '>
        <div className='w-58 bg-light rounded p-3 text-start'>
    <div className='p-2'>
        <h1>info</h1>
        <h3>User-ID:{student.id}</h3>
        <h3>User-Name:{student.name}</h3>
        <h3>User-Email:{student.email}</h3>
        </div>
        <Link to='/' className='btn btn-primary'>BACK</Link>
        <Link to={`/edit/${student.id}`} className='btn btn-info'> EDIT</Link>
    
    
    
    </div>
    </div>
  )
}
