import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Womens } from '../pages/Womens'
import { PageNotFound } from '../pages/PageNotFound'
import { Cart } from '../pages/Cart'
import { WomenSinglePage } from '../pages/WomenSinglePage'
import { Checkout } from '../pages/CheckoutPage'

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/women' element={<Womens/>}></Route>
      <Route path='/women/:id' element={<WomenSinglePage/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='*' element={<PageNotFound/>}/>
      <Route path='/checkout' element={<Checkout/>}></Route>
    </Routes>
  )
}
