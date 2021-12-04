import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { edittask } from "../Rdx/actions";


function EditTask({todo}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  const dispatch= useDispatch()
  const handleClick = ()=>{
    dispatch(edittask(todo.id, editedtask));
    handleClose()
  }
    const [editedtask, setEditedtask] = useState(todo.description);
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <input value={editedtask} onChange={(e)=>setEditedtask(e.target.value)}      ></input>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClick}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default EditTask