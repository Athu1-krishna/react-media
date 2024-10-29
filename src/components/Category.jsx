import React, { useState } from 'react'
import { Modal, Form, FloatingLabel, Button } from 'react-bootstrap'

const Category = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="d-flex justify-content-around">
        <h3>All Category</h3>
        <button onClick={handleShow} className="btn btn-warning ms-3 rounded-circle fw-bolder fs-5">+</button>
      </div>

      {/* display all category */}
      <div className="container-fluid mt-3">
        {/* Single category view */}
        <div className="border rounded p-3 mb-3">
          <div className="d-flex justify-content-between">
            <h5>Category Name</h5>
            <button className="btn"><i className="fa-solid fa-trash text-danger"></i></button>
            {/* display category videos */}
            <div className="row mt-">
              <div className="col-lg-4">
                {/* video card  */}
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category Details!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingCategoryName" label="Category Name" className="mb-3">
            <Form.Control type="text" placeholder="Category Name" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className='btn btn-info' variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
    
  )
}

export default Category