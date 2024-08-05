import React, { Component } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

export class Layout extends Component {
  render() {
    return (
        <>
           <Header />
           <Outlet /> 
        </>
    )
  }
}

export default Layout