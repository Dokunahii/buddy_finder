import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import PostCard from "../components/PostCard";

export default function HomePage() {

    const [meetings, setMeetings] = useState([])

    const fetchAllMeetings = async() => {
        try {
            const response = await axios.get("http://localhost:3000/meetings")
            console.log(response.data)
            return response.data
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchAllMeetings()
            .then((data) => {setMeetings(data)})
    }, [])
    
  return (
    <Container>
        <Row>
            <Col xs={12} sm={3}>
                <Form.Group controlId="search">
                    <Form.Label>Search:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="search"
                    />
                </Form.Group>
            </Col>
            <Col xs={12} sm={9}>
                <Row>
                    {meetings.length > 0 ? 
                        meetings.map((meeting) => <PostCard meeting={meeting} key={meeting.id}/>)
                        : <p>No meetings available</p>                    
                    }
                </Row>
            </Col>

        </Row>
    </Container>
  )
}
