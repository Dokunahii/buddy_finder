import { useContext, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import EditImageModal from '../components/EditImageModal'
import axios from 'axios'
import UserContextProvider, { userContext } from '../contexts/UserContextProvider'
import MapAutocomplete from '../features/MapAutocomplete'

export default function EditProfilePage({isEditing}) {

  const ageRange = () => {
    let array = []
    for (let i = 1; i<=99 ; i++) {
      array.push(i)
    }
    return array
  }

  const [showEditImageModal, setShowEditImageModal] = useState(false)
  const handleOpenEditImageModal = () => setShowEditImageModal(true)
  const handleCloseEditImageModal = () => setShowEditImageModal(false)

  const [inputValue, setInputValue] = useState('');
  const [userName, setUserName] = useState("")
  const [gender, setGender] = useState("male")
  const [age, setAge] = useState(1)

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
      await axios.post("https://buddy-finder-api.vercel.app/signUp", {
        firebaseuid: uid,
        name: userName,
        useraddress: inputValue,
        age: parseInt(age),
        gender: gender,
      })

    } catch (err) {
      console.error(err)
    }
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
        <MapAutocomplete inputValue = {inputValue} setInputValue={setInputValue} />
        <Form.Group className='mb-3' controlId='userAddress'>
          <Form.Label>Gender</Form.Label>
          <Form.Select
            required
            onChange={(e) => {setGender(e.target.value)}}
          >
            <option value="male">male</option>
            <option value="female">female</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className='mb-3' controlId='age'>
          <Form.Label>Age</Form.Label>
          <Form.Select
            required
            onChange={(e) => {setAge(e.target.value)}}
          >
            {ageRange().map((num) => 
              <option value={num} key={num}>{num}</option>
            )}
          </Form.Select>
        </Form.Group>
        <Button type='submit'>
          Sign Up
        </Button>
      </Form>
      <Button onClick={handleOpenEditImageModal}>Upload Image</Button>
      <EditImageModal handleCloseEditImageModal={handleCloseEditImageModal} showEditImageModal={showEditImageModal}/>
    </Container>
  )
}
