import React from 'react'
import { Card } from 'react-bootstrap'

export default function PostCard( {meeting} ) {
  return (
    <Card className='d-flex justify-content-between flex-row p-3' border='info'>
        <Card.Img 
          variant="top" 
          src='src/assets/MagnifyingGlass.png' 
          style={{overflow: "hidden", height: "160px", width: "200px"}} 
          className='h-100 w-160 mb-3 mb-md-0'
        />
        <Card.Body variant="light">
            <Card.Title>{meeting.title}</Card.Title>
            <Card.Text>
              date: {meeting.date} <br/>
              time: {meeting.time}
            </Card.Text>
            <Card.Title>Address</Card.Title>
            <Card.Text>{meeting.address}</Card.Text>
        </Card.Body>
        <Card.Body variant="secondary">
            <Card.Title>Joining</Card.Title>
            <Card.Text>{meeting.name}</Card.Text>
        </Card.Body>
    </Card>
  )
}
