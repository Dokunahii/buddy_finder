import { useState } from 'react'
import { Button, Image, Modal } from 'react-bootstrap'
import Cropper from 'react-easy-crop'
import getCroppedImg from '../features/CroppedImage'
import imageUrl from "../assets/wha-huh.png"

export default function EditImageModal({showEditImageModal ,handleCloseEditImageModal}) {

    /*
    if (zoom == null) {
        zoom = 1
    }
    if (crop == null) {
        crop = 1
    }
    if (aspects == null) {
        aspect = aspects[0]
    }
    */
    

    const aspects = [
        4 / 3
    ]

    const [zoom, setZoom] = useState(1)
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [aspect, setAspect] = useState(aspects[0])
    const [croppedImageAreaPixels, setCroppedImageAreaPixels] = useState(null)

    const onCropChange = (crop) => {
        setCrop(crop)
    }

    const onZoomChange = (zoom) => {
        setZoom(zoom)
    }

    const onCropComplete = (croppedArea, croppedImageAreaPixels) => {
        setCroppedImageAreaPixels(croppedImageAreaPixels)
    }

    const onCrop = async () => {
        const croppedImageUrl = await getCroppedImg(imageUrl,croppedImageAreaPixels)
        //ends here
    }

    return(
        <>
        <Modal show={showEditImageModal} onHide={handleCloseEditImageModal}>
            <Modal.Header>
                <Modal.Title>crop image</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{ position: 'relative', height: '400px', width: '100%' }}>
                    <Cropper 
                        image={imageUrl} 
                        zoom={zoom} 
                        crop={crop} 
                        aspect={aspect}
                        onCropChange={onCropChange} 
                        onZoomChange={onZoomChange}
                        onCropComplete={onCropComplete}
                    />
                </div>
                <div>
                    <input 
                        style={{position: "fixed", bottom: "0px", width: "100%", height: "80px"}}
                        type='range' 
                        min={1} 
                        max={3} 
                        step={0.1} 
                        value={zoom} 
                        onInput={(e) => onZoomChange(e.target.value)}
                    />
                </div>
                <div>
                    <Button onClick={handleCloseEditImageModal}>cancel</Button>
                    <Button>reset</Button>
                    <Button onClick={onCrop}>crop</Button>
                </div>

            </Modal.Body>
        </Modal>
        </>
    )
}
