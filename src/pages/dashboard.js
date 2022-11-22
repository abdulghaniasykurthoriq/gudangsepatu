import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import Aside from '../components/aside'
import { Link, useNavigate, redirect } from 'react-router-dom'
import axios from 'axios'

function Dashboard() {
  let angka = 0;
  const [data, setData] = useState([])
  const history = useNavigate()
  useEffect(() =>{
    
    const header = `${localStorage.getItem('token')}`
    if(!(localStorage.getItem('token')) === true){
      history('/')
    }
    axios.get('http://localhost:3001/api',{headers:{'Authorization':header}})
    .then(result => {
      setData(result.data)
    })
    .catch(err => {
      if(err.response.status === 403){
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        return redirect('/')
      }
    })
  },[history])

  const handleDelete = (id) => {
     axios.delete('https://gudangsepatu.herokuapp.com/api/'+id)
    .then(result => {
      
    })
  }

  return (
    <div className='d-flex'>
    <Aside isActive={1}/>
    <div className="w-100 d-flex flex-column align-items-center">
            <Header/>
            
            <div style={{width:"1000px", height: "max-content"}} className="border mt-3 h-full">
                <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">No</th>
                        <th scope="col">Nama</th>
                        <th scope="col">Ukuran</th>
                        <th scope="col">Pilihan</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        data.map(sepatu => {
                          angka++
                          return(
                            <tr key={angka}>
                              <th scope="row">{angka}</th>
                              <td>{sepatu.nama}</td>
                              <td>{sepatu.ukuran}</td>
                              <td>
                                  <Link to={'/edit/'+ sepatu._id }><button type="button" className="btn btn-primary">Edit</button></Link> 
                                  <button onClick={(e) => handleDelete(sepatu._id)} className="btn btn-danger">Delete</button>
                              </td>
                            </tr>
                            
                          )
                        })
                      }
                      
                    </tbody>
                  </table>
              </div>
              </div>
    </div>
  )
}

export default Dashboard