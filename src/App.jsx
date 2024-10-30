import { Nav, Navbar } from 'react-bootstrap'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import UserContextProvider from './contexts/UserContextProvider'
import AuthPage from './pages/AuthPage'
import EditPostPage from './pages/EditPostPage'
import EditProfilePage from './pages/EditProfilePage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'

function Layout() {
  return(
    <>
      <Navbar>
        <Navbar.Brand href='/home'>Home</Navbar.Brand>
        <Nav>
          <Nav.Link href='/home/profile'>Profile</Nav.Link>
          <Nav.Link href='/home/editPost'>Post</Nav.Link>
          <Nav.Link href='/'>Sign Out</Nav.Link>
        </Nav>
      </Navbar>
      <Outlet/>
    </>
  )
}

function App() {

  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthPage/>}/>
          <Route path='home' element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='profile' element={<ProfilePage/>}/>
            <Route path='editProfile' element={<EditProfilePage/>}/>  
            <Route path='editPost' element={<EditPostPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  )
}


export default App
