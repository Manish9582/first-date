import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './components/layouts/Dashboard'
import About from './pages/About'
import Contact from './pages/Contact'
import Policy from './pages/Policy'
import NotFound from './pages/NotFound'
import Community from './pages/Community'
import Blog from './pages/Blog'
import News from './pages/News'



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/community' element={<Community />} />
        <Route path='/blogs' element={<Blog />} />
        <Route path='/daily-news' element={<News />} />
      </Route>
      <Route path='contact' element={<Contact />} />
      <Route path='privicy-policy' element={<Policy />} />
      <Route path='*' element={<NotFound />} />
    </Routes >
  )
}

export default AppRoutes