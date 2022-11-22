import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import Header from '../components/header'
import Aside from '../components/aside'
import axios from 'axios'

function EditSepatu() {
  const history = useNavigate()
  const {id} = useParams();
  const [nama, setNama] = useState('')
  const [warna, setWarna] = useState('')
  const [ukuran, setUkuran] = useState(0)
  const [bahan, setBahan] = useState('')
  const [jenis, setJenis] = useState('')
  const [stock, setStock] = useState(0)
    useEffect(() => {
      const header = `${localStorage.getItem('token')}`
      if(!(localStorage.getItem('token')) === true){
        history('/')
      }
      if(id){
        axios.get('https://gudangsepatu.herokuapp.com/api/'+id, {headers:{'Authorization':header}})
        .then((response) => {
          const {data} = response;
          setNama(data.nama)
          setWarna(data.warna)
          setUkuran(data.ukuran)
          setBahan(data.bahan)
          setJenis(data.jenis)
          setStock(data.stock)
        })
      }

    }, [id,history])
  
    
  
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
       axios.patch(`https://gudangsepatu.herokuapp.com/api/${id}`,payload)
       .then(response => {
          history('/dashboard')
       })
  }
  
  

  return (
    <>
    <div className='d-flex'>
        <Aside />
        <div className="w-100 d-flex flex-column align-items-center">
        <Header fix={true}/>
    <div style={{height:"100vh",display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        
        <div className="border p-4" >
        <form id="myForm" onSubmit={onSubmit}>
                <div className="mb-3">
                  <label  className="form-label">Nama</label>
                  <input value={nama} onChange={(e) => setNama(e.target.value) } className="form-control"/>
                </div>
                <div className="mb-3">
                  <label  className="form-label">Warna</label>
                  <input value={warna} onChange={(e) => setWarna(e.target.value) } type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label type={'number'}  className="form-label">Ukuran</label>
                  <input value={ukuran} onChange={(e) => setUkuran(e.target.value) } type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label  className="form-label">Bahan</label>
                  <input value={bahan} onChange={(e) => setBahan(e.target.value) }  className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Jenis</label>
                  <input  value={jenis} onChange={(e) => setJenis(e.target.value) }  className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Stock</label>
                  <input type={'number'} value={stock} onChange={(e) => setStock(e.target.value) }  className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
        </div>

    </div>
        </div>
    </div>


    
    </>
  )
}

export default EditSepatu