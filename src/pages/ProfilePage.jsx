import { useContext, useEffect, useState } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../contexts/UserContextProvider'
import axios from 'axios'

export default function ProfilePage() {

    const navigate = useNavigate()

    const { currentUser } = useContext(userContext)
    const uid = currentUser ? currentUser.uid : null
    const [profile, setProfile] = useState({})
    console.log("first and "+ uid)

    const fetchProfile = async() => {
        try {
            console.log(uid)
            const response = await axios.get(`https://buddy-finder-api.vercel.app/profile/${uid}`)
            console.log(response.data)
            setProfile(response.data)
        } catch (err) {
            console.log(err)
        }
    } 

    useEffect(() => {
        console.log(uid)
        if (uid) {
            fetchProfile()
        }
    }, [uid])
    
    return (
    
        <Container>
            <Row>
                <Col xs={12} md={4} className="text-center">
                    <Image src='src/assets/magnifyingGlass' roundedCircle fluid/>
                </Col>
                <Col xs={12} md={8} className='d-flex flex-column align-items-center text-center'>
                    <h1>{profile.name}</h1>
                    <p>{profile.age} years old {profile.gender}</p>
                </Col>
            </Row>
            <Row>
                <h2>Address</h2>
                <p>{profile.useraddress}</p>
            </Row>
            <Row>
                <h2>Routines</h2>
                <p></p>
            </Row>
            <Row className='position-absolute' style={{ bottom: '20px', right: '20px' }}>
                <Col className='d-flex justify-content-end'>
                    <Button className="p-2" onClick={() => navigate("/home/editProfile")}>Edit Profile</Button>
                </Col>
            </Row>
        </Container>
    )
}
