import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import AuthModal from '../components/AuthModal';
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
    const img = "src/assets/magnifyingGlass.png"
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const navigate = useNavigate()
    const [isSigningUp, setisSigningUp] = useState(false)
    const handleAuth = () => {
        isSigningUp ? handleSignUp() : handleLogIn()
        navigate("home")
    }
    
    const [showAuthModal, setShowAuthModal] = useState(false)
    const handleOpenModal = () => setShowAuthModal(true)
    const handleCloseModal = () => setShowAuthModal(false)

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    const handleLogIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

  return (
    <Container style={{height: "100vh", overflow: "hidden"}} fluid >
        <Row>
            <Col>
                <Image src={img} fluid />
            </Col>
            <Col>
                <h1>Can't find a Community?</h1>
                <p>We've got you covered</p>

                <Col className='d-grid'>
                    <Button
                        variant='outline-dark'
                    >
                        Log In as Anonymous
                    </Button>

                    <Button
                        variant='outline-dark'
                    >
                        <i className='bi bi-google'></i> Continue with Google
                    </Button>

                    <Button
                        variant='primary'
                        onClick={() => {
                            setisSigningUp(false)
                            handleOpenModal()
                        }}
                    >
                        Log In
                    </Button>

                    <p>or</p>

                    <span 
                        id='signUpSpan'
                        onClick={() => {
                            setisSigningUp(true)
                            handleOpenModal()
                        }}
                    >
                        Sign Up
                    </span>
                </Col>
                <AuthModal 
                    email={email}
                    setEmail={setEmail} 
                    password={password}
                    setPassword={setPassword} 
                    showAuthModal={showAuthModal}
                    handleCloseAuthModal={handleCloseModal}
                    handleAuth={handleAuth}
                    isSigningUp={isSigningUp}
                />
            </Col>
        </Row>
    </Container>
    )
}
