import { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import EditImageModal from '../components/EditImageModal'
import axios from 'axios'

export default function EditProfilePage({isEditing}) {

  const [showEditImageModal, setShowEditImageModal] = useState(false)
  const handleOpenEditImageModal = () => setShowEditImageModal(true)
  const handleCloseEditImageModal = () => setShowEditImageModal(false)

  const [userName, setUserName] = useState("")
  const [userAddress, setuserAddress] = useState("")
  const [gender, setGender] = useState(null)
  const [age, setAge] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    isEditing ? handleEdit():handleCreate()
  }

  const handleEdit = async() => {
    axios.put()
  }

  const handleCreate = async() => {
    axios.post()
  }

  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className='mb-3' controlId='userName'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            required
            type='text'
            value={userName}
            onChange={(e) => {setUserName(e.target.value)}}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='userAddress'>
          <Form.Label>User Address(optional)</Form.Label>
          <Form.Control
            type='text'
            as="textarea"
            rows={3}
            value={userAddress}
            onChange={(e) => {setuserAddress(e.target.value)}}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='userAddress'>
          <Form.Label>Gender</Form.Label>
          <Form.Control
            required
            type='text'
            as="textarea"
            rows={3}
            value={userAddress}
            onChange={(e) => {
              const numericValue = e.target.value.replace(/\D/g, '');
              setAge(numericValue.slice(0, 2))
            }}
          />
        </Form.Group>
        <Form.Select
          required
          onChange={(e) => {setGender(e.target.value)}}
        >
          <option>-</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </Form.Select>
      </Form>
      <Button onClick={handleOpenEditImageModal}>Upload Image</Button>
      <EditImageModal handleCloseEditImageModal={handleCloseEditImageModal} showEditImageModal={showEditImageModal}/>
    </Container>
  )
}
