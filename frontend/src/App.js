import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SomeList from './components/SomeList'
import SomeForm from './components/SomeForm'
import Navbar from './components/Navbar'
import {Container} from '@mui/material'
import SurveyList from './components/SurveyList' 
import SurveyForm from './components/SurveyForm'
//import React, { useState } from 'react'
//import Axios from 'axios'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Container>
        <Routes>
          <Route path='/' element={<SurveyList />} />
          <Route path='/some/new' element={<SurveyForm />} />
          <Route path='/surveys/:id/edit' element={<SurveyForm />} />
          {/* <Route path='/some/new' element={<SomeForm />} /> */}
          {/* ' Falta la ruta para editar' */}
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App