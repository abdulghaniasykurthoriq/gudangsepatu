import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import Aside from '../components/aside'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function HistorySepatu() {
   
    const [sepatu_id, setSepatu_id] = useState('')
    const [status, setStatus] = useState('')
    const [tanggal, setTanggal] = useState('')
    const [data,setData] = useState([])
    const history = useNavigate();
    
    useEffect(() => {
      // const header = `${localStorage.getItem('token')}`
      if(!(localStorage.getItem('token')) === true){
        history('/')
      }
      
      axios.get('https://gudangsepatu.herokuapp.com/api/history'
      ).then(
        result => {
          setData(result.data);
          console.log('result.data', result.data)
        }
      ).catch(

      )

    }, [history])


  return (
    <>
    <div className='d-flex'>
        <Aside isActive={4}/>
        <div className="w-100 d-flex flex-column align-items-center">
        <Header fix={true}/>
    <div style={{height:"100vh",display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        
        <div classNameName="border p-4 " style={{width:'500px'}}>
        {
          data.map(history => {
            return(
              <div key={history._id} className="alert alert-primary" role="alert">
         Sepatu {history.status} dari {history.dari} ke {history.untuk}
         sebanyak {history.total_sepatu}
        </div>
            )
          })

        }


        {/* <div className="alert alert-primary" role="alert">
         Sepatu adidas Masuk dari Indramayu ke gudang
         sebanyak 2000
        </div> */}


{/* <div className="alert alert-secondary" role="alert">
  A simple secondary alert—check it out!
</div>
<div className="alert alert-success" role="alert">
  A simple success alert—check it out!
</div>
<div className="alert alert-danger" role="alert">
  A simple danger alert—check it out!
</div>
<div className="alert alert-warning" role="alert">
  A simple warning alert—check it out!
</div>
<div className="alert alert-info" role="alert">
  A simple info alert—check it out!
</div>
<div className="alert alert-light" role="alert">
  A simple light alert—check it out!
</div>
<div className="alert alert-dark" role="alert">
  A simple dark alert—check it out!
</div> */}
        
        </div>

    </div>
        </div>
    </div>


    
    </>
  )
}

export default HistorySepatu