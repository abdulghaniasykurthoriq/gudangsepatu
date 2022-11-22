import React from 'react'
import CardProfile from '../components/cardProfile'

function Profile() {
  return (
    <div className='vh-100 wh-100 d-flex justify-centent-center align-items-center'>
        <div className='d-flex w-100  justify-content-center'>
            <CardProfile imageSrc={1} src={'../../assets/niko.jpg'} name={'Niko'} text={'Menjadi Seorang programer adalah hal yang sangat keren, aku bangga jadi programer'}/>
            <CardProfile imageSrc={2} src={'../../assets/niko.jpg'} name={'Agat'} text={'Andai saja dari dulu saya mengerti bahwa ngoding itu asyik, pasti aku bakal jadi senior programer'}/>
            <CardProfile imageSrc={3} name={'Oji'} text={'Mengelola Data Sangat penting jadi aku harus bisa memanipulasi data menjadi data yang siap dipakai untuk dikembangkan'}/>
        </div>
    </div>
  )
}

export default Profile