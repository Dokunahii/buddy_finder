import { Col, Container, Form, Row } from "react-bootstrap";
import PostCard from "../components/PostCard";

export default function HomePage() {
  return (
    <Container>
        <Row>
            <Col sm={3}>
                <Form.Group controlId="search">
                    <Form.Label>Search:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="search"
                    />
                </Form.Group>
            </Col>
            <Col>
                <Row>
                    <PostCard/>
                </Row>
            </Col>

        </Row>
    </Container>
  )
}
