import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import AuthPage from './pages/AuthPage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import { Nav, Navbar } from 'react-bootstrap'
import EditProfilePage from './pages/EditProfilePage'

function Layout() {
  return(
    <>
      <Navbar>
        <Navbar.Brand href='/home'>Home</Navbar.Brand>
        <Nav>
          <Nav.Link href='/home/profile'>Profile</Nav.Link>
        </Nav>
      </Navbar>
      <Outlet/>
    </>
  )
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthPage/>}/>
        <Route path='home' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='profile' element={<ProfilePage/>}/>
          <Route path='editProfile' element={<EditProfilePage/>}/>  
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App
