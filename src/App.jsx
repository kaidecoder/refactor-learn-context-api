import React,{useState} from 'react'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import CartPage from './components/CartPage'


const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route>
          <Route
          path="/"
          element={<Home />}
          />
          <Route
          path="/cart"
          element={<CartPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
