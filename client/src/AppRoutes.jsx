import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './components/layouts/Dashboard'
import About from './pages/About'
import Contact from './pages/Contact'
import Policy from './pages/Policy'
import NotFound from './pages/NotFound'
import Community from './pages/Community'
import Blog from './pages/Blog'
import StudyTime from './pages/StudyTime'
import ChatDashboard from './components/layouts/ChatDashboard'
import Profile from './pages/chat/Profile'
import ChatMessage from './pages/chat/ChatMessage'
import SearchFriend from './pages/SearchFriend'



const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/community' element={<Community />} />
        <Route path='/blogs' element={<Blog />} />
        <Route path='/study-time' element={<StudyTime />} />
      </Route>

      <Route path="/profile" element={<ChatDashboard />}>
        <Route index element={<Profile />}></Route>
      </Route >

      <Route path="/search-friend" element={<ChatDashboard />}>
        <Route index element={<SearchFriend />}></Route>
      </Route >

      <Route path='chat-messages' element={<ChatMessage />} />

      <Route path='contact' element={<Contact />} />
      <Route path='privicy-policy' element={<Policy />} />
      <Route path='*' element={<NotFound />} />

    </Routes >
  )
}

export default AppRoutes