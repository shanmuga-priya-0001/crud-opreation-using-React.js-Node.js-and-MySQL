import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom';

export const ViewEditDelete = () => {

    
    const [datas, setDatas] = useState([]);
   // const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost:8081/student')
        .then(res => setDatas(res.data))
        .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) =>  {
       
        axios.delete('http://localhost:8081/delete/'+id)
        
        .then(res => 
        { 
            window.location.reload();
            
         console.log(res);
        }
        )
        .catch(err => console.log(err));
    }


  return (
    <div className='d-flex vh-100 bg-dark justify-content-center align-items-center'>
        <div className='w-58 bg-white rounded p-3'>
        <h1>ViewEditDelete</h1>
        <div className='p-5'>
           <Link to='/create' className='btn btn-success' > +ADD NEWUSER</Link>
        </div>

    <table className='table'>
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ACTION</th>
            </tr>
        </thead>
        <tbody>
            {datas.map((student, index) => {
                return <tr key={index}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>                        
                    <Link to={`/read/${student.id}`} className='btn btn-sm btn-info'>Read</Link>
                        <Link to={`/edit/${student.id}`} className='btn btn-sm btn-primary'>edit</Link>
                        <button onClick={() => handleDelete(student.id)} className='btn btn-sm btn-danger'>delete</button>
                    </td>
                </tr>
            })}
        </tbody>
    </table>
    </div>
    </div>
  )
}
