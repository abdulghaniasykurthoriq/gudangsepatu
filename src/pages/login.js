import axios from 'axios'
import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const history = useNavigate()
  // const [data,setData] = useState([])
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const payload = {email,password};
  const onSubmit = async(e) =>{
      e.preventDefault()
      try {
        await axios.post('https://gudangsepatu.herokuapp.com/api/user',payload)
        .then(result => {
          localStorage.setItem('token',result.data.accessToken);
          localStorage.setItem('user',JSON.stringify(result.data.user));
          history('/dashboard');
        })
      } catch (error) {
        console.log('error', error)
      }
      // alert('not login')
      // history('/dashboard')
  }

  
  return (
    
    

    <div style={{height:"100vh",display:"flex", justifyContent:"center", alignItems:"center"}}>

        
        <div className="border p-4" >
        <form id="myForm" onSubmit={onSubmit}>
                <div className="mb-3">
                  <label  className="form-label">Email address</label>
                  <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label  className="form-label">Password</label>
                  <input onChange={(e) => setPassword(e.target.value)} value={password}  type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                  <input  type="checkbox" className="form-check-input" id="exampleCheck1"/>
                  <label className="form-check-label" >Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
        </div>

    </div>
  )
}

export default Login