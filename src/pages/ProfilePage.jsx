import { useContext } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../contexts/UserContextProvider'
import axios from 'axios'

export default function ProfilePage() {

    const navigate = useNavigate()

    const [currentUser] = useContext(userContext)
    const uid = currentUser.uid 

    const fetchProfile = async() => {
        try {
            await axios.get()
        }
    } 

  return (
    
    <Container>
        <Row>
            <Col xs={6} md={4}>
                <Image src='src/assets/magnifyingGlass' roundedCircle fluid/>
            </Col>
            <Col className='d-flex flex-column text-center'>
                <h1>Name</h1>
                <p>age years old male</p>
            </Col>
        </Row>
        <Row>
            <h2>Address</h2>
        </Row>
        <Row>
            <h2>Routines</h2>
        </Row>
        <Row className='position-absolute' style={{ bottom: '20px', right: '20px' }}>
            <Col className='d-flex justify-content-end'>
                <Button className="p-2" onClick={() => navigate("/home/editProfile")}>Edit Profile</Button>
            </Col>
        </Row>
    </Container>
  )
}
