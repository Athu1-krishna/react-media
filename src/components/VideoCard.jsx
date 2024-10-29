import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'

const VideoCard = () => {
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Card style={{ height: '250px' }}>
        <Card.Img onClick={handleShow} variant="top" height={'150px'} src="https://i.pinimg.com/enabled_lo/736x/d4/ec/de/d4ecde0d5df25113423d19bae55084d5.jpg" />
        <Card.Body>
          <Card.Text className='d-flex justify-content-between'>
            <p>Caption</p>
            <button className="btn">
              <i className="fa-solid fa-trash text-danger"></i>
            </button>
          </Card.Text>
        </Card.Body>
      </Card>
      <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/1B6DI_o-9G8?si=ycUm2vqPx99x04Ln?autoplay=1" title="Caption" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        </Modal.Body>
        
      </Modal>
    </div>

  )
}

export default VideoCard