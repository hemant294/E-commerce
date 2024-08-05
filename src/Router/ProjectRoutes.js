import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Home from "../Pages/Home"
import Contect from "../Pages/Contect"
import Login from "../Pages/Login"
import About from "../Pages/About"
import Cart from '../Pages/Cart'
import Products from '../Pages/Products'
import ShowProduct from '../Pages/ShowProduct'

export class ProjectRoutes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='/' element={<Home />}/>
                <Route path='/home' element={<Home />}/>
                <Route path='/product' element={<Products />}/>
                <Route path='/product/:id' element={<ShowProduct />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/contect' element={<Contect />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/cart' element={<Cart />}/>
            </Route>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default ProjectRoutes