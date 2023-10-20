import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import EditStudent from './EditStudent';
import Contact from './Contact';
import AddNewStudent from './AddNewStudent';
import Student from './Student';
function RouteCompo() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/student' element={<Student />} />

      <Route path='/student-desc' element={<AddNewStudent />} />

      <Route path='/student-desc/:ID' element={<EditStudent />} />

      <Route path='/contact' element={<Contact />} />
      
    </Routes>
  )
}

export default RouteCompo
