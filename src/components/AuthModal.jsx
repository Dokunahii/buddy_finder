import React from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'

export default function AuthModal({ email, setEmail, password, setPassword, showAuthModal, handleCloseAuthModal , handleAuth , isSigningUp }) {

  return (
    <Modal show={showAuthModal} fullscreen={true} onHide={handleCloseAuthModal}>
        <Modal.Header closeButton>
            {isSigningUp ? "Sign Up" : "Log In"}
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className='mb-3'>
                    <FloatingLabel
                        controlId='email'
                        label="Email"
                    >
                        <Form.Control
                            type='email'
                            placeholder='name@gmail.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <FloatingLabel
                        controlId='password'
                        label="Password"
                    >
                        <Form.Control
                            type='password'
                            placeholder='123456'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FloatingLabel>
                </Form.Group>
                <Button
                    variant='primary' 
                    onClick={handleAuth}
                >
                    {isSigningUp ? "Sign Up" : "Log In"}
                </Button>
            </Form>
        </Modal.Body>
    </Modal>
  )
}
