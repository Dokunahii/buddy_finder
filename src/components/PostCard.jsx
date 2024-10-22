import React from 'react'
import { Card } from 'react-bootstrap'

export default function PostCard() {
  return (
    <Card className='d-flex justify-content-between flex-row p-3' border='info'>
        <Card.Img variant="top" src='src/assets/MagnifyingGlass.png' style={{overflow: "hidden", height: "160px", width: "200px"}} className='h-100 w-160'/>
        <Card.Body variant="light">
            <Card.Title>Card Title</Card.Title>
            <Card.Text>beginner,day,time</Card.Text>
        </Card.Body>
        <Card.Body variant="secondary">
            <Card.Title>Tags</Card.Title>
        </Card.Body>
    </Card>
  )
}
