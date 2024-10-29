import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { storage } from "../firebase"
import { Button, Form } from "react-bootstrap"
import { useState } from "react"
import firebase from "firebase/compat/app"

export default function ImageHandler() {
  const imageRef = ref(storage, "Images/Profiles")

  const [file, setFile] = useState(null)

  const uploadStorage = async() => {
    if (file == null) return

    await uploadBytes(imageRef, file)
    .then((snapshot) => {
      alert("file succesfully uploaded")
    })
  }

  const downloadStorage = async() => {
    await getDownloadURL(ref(storage, 'images/stars.jpg'))
    .then((url) => {
      // `url` is the download URL for 'images/stars.jpg'
  
      // Or inserted into an <img> element
      const img = document.getElementById('myimg');
      img.setAttribute('src', url);
    })
    .catch((error) => {
      console.log(error)
    });
  }

  

  const deleteStorage = async() => {
    const desertRef = ref(storage, 'Images/Profiles');

    // Delete the file
    deleteObject(desertRef).then(() => {
      console.log("successfully")
    }).catch((error) => {
      console.log(error)
    });
  }
    
  return (
    <>
      <Form.Group>
        <Form.Label>Upload Image</Form.Label>
        <Form.Control type="file" onChange={(e) => setFile(e.target.files[0])}/>
      </Form.Group>
      <Button onClick={uploadStorage}>upload</Button>
      <Button onClick={downloadStorage}>download</Button>
      <Button onClick={deleteStorage}>delete</Button>
    </>
  )
}
