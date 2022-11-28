import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import Aside from '../components/aside'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function HistorySepatu() {
   
    const [nama, setNama] = useState('')
    const [warna, setWarna] = useState('')
    const [ukuran, setUkuran] = useState(0)
    const [bahan, setBahan] = useState('')
    const [jenis, setJenis] = useState('')
    const [stock, setStock] = useState(0)
    const history = useNavigate();
    
    useEffect(() => {
      // const header = `${localStorage.getItem('token')}`
      if(!(localStorage.getItem('token')) === true){
        history('/')
      }
    }, [history])


  return (
    <>
    <div className='d-flex'>
        <Aside isActive={4}/>
        <div class="w-100 d-flex flex-column align-items-center">
        <Header fix={true}/>
    <div style={{height:"100vh",display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        
        <div className="border p-4 " style={{width:'500px'}}>
        <div class="alert alert-primary" role="alert">
  Data Sepatu Masuk Sejumlah 100pcs
</div>
<div class="alert alert-secondary" role="alert">
  A simple secondary alert—check it out!
</div>
<div class="alert alert-success" role="alert">
  A simple success alert—check it out!
</div>
<div class="alert alert-danger" role="alert">
  A simple danger alert—check it out!
</div>
<div class="alert alert-warning" role="alert">
  A simple warning alert—check it out!
</div>
<div class="alert alert-info" role="alert">
  A simple info alert—check it out!
</div>
<div class="alert alert-light" role="alert">
  A simple light alert—check it out!
</div>
<div class="alert alert-dark" role="alert">
  A simple dark alert—check it out!
</div>
        
        </div>

    </div>
        </div>
    </div>


    
    </>
  )
}

export default HistorySepatu