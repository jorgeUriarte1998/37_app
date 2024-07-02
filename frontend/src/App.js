import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import {Container} from '@mui/material'
import SurveyList from './components/SurveyList' 
import SurveyForm from './components/SurveyForm'
import {BarChart} from './components/BarChart'
//import React, { useState } from 'react'
//import Axios from 'axios'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Container>
        <Routes>
          <Route path='/' element={<SurveyList />} />
          <Route path='/survey/new' element={<SurveyForm />} />
          <Route path='/surveys/:id/edit' element={<SurveyForm />} />
          <Route path='/barchart' element={<BarChart />} />
          {/* <Route path='/some/new' element={<SomeForm />} /> */}
          {/* ' Falta la ruta para editar' */}
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App