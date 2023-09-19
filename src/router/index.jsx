import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Login from '../pages/Login'
import DetailProduct from '../pages/DetailProduct'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<DetailProduct />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
