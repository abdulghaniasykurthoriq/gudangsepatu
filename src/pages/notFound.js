import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {

    const navigate = useNavigate();
  return (
    <div className='vh-100 d-flex align-items-center justify-content-center'>
        <div className='d-flex flex-column align-items-center'>
            <h1>Kamu nyasar hehe .. . </h1>
            <button onClick={() => navigate('/')} className="btn btn-primary align-self-center">sini yuk</button>
        </div>
    </div>
  )
}

export default NotFound