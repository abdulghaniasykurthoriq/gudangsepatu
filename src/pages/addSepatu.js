import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import Aside from '../components/aside'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddSepatu() {
   
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

  const onSubmit = (e) =>{
    
    e.preventDefault()
    const payload = {
      nama,
      warna,
      ukuran,
      bahan,
      jenis,
      stock
    }

       axios.post('https://gudangsepatu.herokuapp.com/api',payload,
       {
        headers:{
          'content-type':'multipart/form-data'
        }
       }
       ).then(response=>{
        history('/dashboard')
       }).catch(
        history('/dashboard')
       )
      
      // alert('not login')
      // history('/dashboard')
  }

  return (
    <>
    <div className='d-flex'>
        <Aside isActive={2}/>
        <div class="w-100 d-flex flex-column align-items-center">
        <Header fix={true}/>
    <div style={{height:"100vh",display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        
        <div className="border p-4 " style={{width:'500px'}}>
        
        <form id="myForm" onSubmit={onSubmit}>
        {/* <input type="file" onChange={(e) => setImage(e.target.files[0])}  /> */}
                {/* <UploadImage onChange={(e) => setImage(e)} img={imagePreview}/> */}
                <div className="mb-3">
                  <label  className="form-label">Nama</label>
                  <input onChange={(e) => setNama(e.target.value) } className="form-control"/>
                </div>
                <div className="mb-3">
                  <label  className="form-label">Warna</label>
                  <input onChange={(e) => setWarna(e.target.value) } type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label  className="form-label">Ukuran</label>
                  <input onChange={(e) => setUkuran(e.target.value) } type={'number'} className="form-control" />
                </div>
                <div className="mb-3">
                  <label  className="form-label">Bahan</label>
                  <input onChange={(e) => setBahan(e.target.value) }  className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Jenis</label>
                  <input onChange={(e) => setJenis(e.target.value) }  className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Stock</label>
                  <input type={'number'} onChange={(e) => setStock(e.target.value) }  className="form-control" />
                </div>
                
                <button type="submit" className="btn btn-primary">Tambah</button>
              </form>
        </div>

    </div>
        </div>
    </div>


    
    </>
  )
}

export default AddSepatu