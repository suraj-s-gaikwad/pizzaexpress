import React ,{}from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'
import About from './About'
import Menu from './Menu'
import Contact from './Contact'
import {Box} from '@mui/material'

import './Style.css'
import Footer from './Footer'






export default function Myapp() {

  
    



   


  return (
    <div>
         <Box >
            <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="Menu" element={<Menu/>} />
          <Route path="About" element={<About/>} />
          <Route path="Contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
       
      </Box>
         
        <Footer/>
       
      

      
       
    
      
    </div>
  )}

