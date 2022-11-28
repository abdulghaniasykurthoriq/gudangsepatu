import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddSepatu from './pages/addSepatu'
import Dashboard from './pages/dashboard'
import EditSepatu from './pages/editSepatu'
import HistorySepatu from './pages/historySepatu'
import Login from './pages/login'
import NotFound from './pages/notFound'
import OutSepatu from './pages/outSepatu'
import Profile from './pages/profile'

function App() {
  return (
    <>

      <Routes>
          <Route exact path='/' element={<Login/>} />
          <Route exact path='/profile' element={<Profile/>} />
          <Route exact path='/dashboard' element={<Dashboard/>} />
          <Route exact path='/add' element={<AddSepatu/>} />
          <Route exact path='/edit/:id' element={<EditSepatu/>} />
          <Route exact path='/out' element={<OutSepatu/>} />
          <Route exact path='/history' element={<HistorySepatu/>} />
          <Route path='*' element={<NotFound/>}/>
      </Routes>

    </>
  )
}

export default App