import React from 'react'
import Navbar from '../components/Navbar'
import { Route, Routes } from 'react-router-dom'
import ArrayobjUp from '../pages/ArrayobjUp'
import ObjUp from '../pages/ObjUp'
import Toggle from '../pages/Toggle'
import ArrayUp from '../pages/ArrayUp'

const AppRoute = () => {
  return (
    <>
    <Navbar/>
    <Routes>
     
     <Route path='/' element={<ArrayUp/>}/>
     <Route path='/objup' element={<ObjUp/>}/>
     <Route path='/arrobjup' element={<ArrayobjUp/>}/>
     <Route path='/toggle' element={<Toggle/>}/>

    </Routes>
    </>
  )
}

export default AppRoute