import axios from "axios";
import { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import ImageHandler from "../features/ImageHandler";
import MapAutocomplete from "../features/MapAutocomplete";
import { userContext } from "../contexts/UserContextProvider";

export default function EditPostPage({ isEditing }) {

    const [inputValue, setInputValue] = useState('');
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [title, setTitle] = useState("")

    const handleSubmit = (e) => {
        isEditing = false
        e.preventDefault()
        isEditing ? handleEdit():handleCreate()
    }

    const { currentUser } = useContext(userContext)
    const uid = currentUser ? currentUser.uid : null
  
    const handleEdit = async() => {
      axios.put()
    }
  
    const handleCreate = async() => {
      try {
        await axios.post("http://localhost:3000/meeting", {
          firebaseuid: uid,
          address: inputValue,
          date: date,
          time: time,
          title: title
        })
  
      } catch (err) {
        console.error(err)
      }
    }

    return (
      <Container>

        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3" controlId="date">
            <Form.Label>Date</Form.Label>
            <Form.Control
              required
              value={date}
              onChange={(e) => {setDate(e.target.value)}}
              type="date"
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="time">
          <Form.Label>Time</Form.Label>
          <Form.Control
            required
            value={time}
            onChange={(e) => {setTime(e.target.value)}}
            type="time"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="time">
          <Form.Label>Title</Form.Label>
          <Form.Control
            required
            value={title}
            onChange={(e) => {setTitle(e.target.value)}}
            type="text"
          />
        </Form.Group>
        <MapAutocomplete inputValue = {inputValue} setInputValue={setInputValue} />
        <Button type="submit">
          Create Post
        </Button>
      </Form>
      <ImageHandler/>
    </Container>
  );
}
