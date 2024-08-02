import React,{ useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

  
export const ReactToMysql = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
   // const [message, setMessage] = useState('');
  
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post('http://localhost:8081/api/store', {
              name,
              email
          });
          navigate('/')
          console.log(response);
         // setMessage(response.data.message);
          setName('');
          setEmail('');
      } catch (error) {
        console.log(error);
          //setMessage('Error saving user: ' + error.message);
      }
  };
  
   

  
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center' >   
        <div className='w-50  bg-white rounded p-5'>
         <h1>Create User</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        className='form-control'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        className='form-control'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button className='btn btn-success' type="submit">Submit</button>
            </form>
            
    </div>
    </div>
 
  )
}
