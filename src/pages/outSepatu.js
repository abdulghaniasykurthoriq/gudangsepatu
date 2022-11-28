import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import Aside from '../components/aside'
import axios from 'axios'
import {  useNavigate, useParams } from 'react-router-dom'

function OutSepatu() {
    const {id} = useParams();
    const [idSepatu, setIdSepatu] = useState('')
    const [untuk, setUntuk] = useState('')
    const [total_sepatu, setTotalSepatu] = useState(0)
    const [stock, setStock] = useState(0)
    const history = useNavigate();
    
    useEffect(() => {
      const header = `${localStorage.getItem('token')}`
      if(!(localStorage.getItem('token')) === true){
        history('/')
      }
      if(id){
        axios.get('https://gudangsepatu.herokuapp.com/api/sepatu/'+id, {headers:{'Authorization':header}})
        .then((response) => {
          const {data} = response;
          // idSepatu(data._id)
          setIdSepatu(id)
          setStock(data.stock)
        })
      }
      
    }, [id,history])

  
  const onSubmit = (e) =>{
    
    e.preventDefault();
    console.log('stock', stock);
    console.log('update STOCK', stock - total_sepatu)
    let updateStock = stock - total_sepatu ;
    axios.patch(`https://gudangsepatu.herokuapp.com/api/sepatu/${id}`,{stock:updateStock})
    axios.post(`https://gudangsepatu.herokuapp.com/api/history`,{
      status:"keluar",
      dari:"gudang",
      untuk,
      tanggal: new Date(),
      total_sepatu
    })
  }

  return (
    <>
    <div className='d-flex'>
        <Aside isActive={3}/>
        <div className="w-100 d-flex flex-column align-items-center">
        <Header fix={true}/>
    <div style={{height:"100vh",display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        
        <div className="border p-4 " style={{width:'500px'}}>
        
        <form id="myForm" onSubmit={onSubmit}>
                <div className="mb-3">
                  <label  className="form-label">id sepatu</label>
                  <input value={idSepatu} readOnly={true} className="form-control"/>
                </div>
                <div className="mb-3">
                  <label  className="form-label">status</label>
                  <input value={"kirim"} readOnly={true} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label  className="form-label">dari</label>
                  <input value={"gudang"} readOnly={true} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label  className="form-label">untuk</label>
                  <input value={untuk} onChange={(e) => setUntuk(e.target.value) }  className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">total sepatu yang akan dikim</label>
                  <p>Max: {stock}</p>
                  <input 
                    value={total_sepatu} 
                    type={'number'} 
                    onChange={(e) => {
                      setTotalSepatu(e.target.value)
                    } 
                    
                    }  className="form-control" />
                </div>
                
                <button type="submit" className="btn btn-primary">Kirim</button>
              </form>
        </div>

    </div>
        </div>
    </div>


    
    </>
  )
}

export default OutSepatu