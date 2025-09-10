    import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './components/About'
import Properties from './components/Properties'
import Contact from './components/Contact'
import SignIn from './components/SignIn'
    
    const Myroute = () => {
      return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/Properties' element={<Properties/>}/>
                <Route path='/Contact' element={<Contact/>}/>
                <Route path='/Signin' element={<SignIn/>}/>

                </Route>
            </Routes>
            </BrowserRouter>
        </div>
      )
    }
    
    export default Myroute