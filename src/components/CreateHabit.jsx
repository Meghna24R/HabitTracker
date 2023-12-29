//component to display when the user wants to create a new habit

import { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addHabit } from '../features/habitsSlice'
import { details } from '../features/habitsSlice'

const CreateHabit = (props) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  // handle new habits
  const AddHabitHandler = () => {
    dispatch(addHabit({ title, description, details }));
    setTitle("");
    setDescription("");
    props.onHide()
  }

  return (
    // Modal Component
    <Modal {...props} size='sm' aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Dialog className='modal-sm'>
        <Modal.Body>
          <Form onSubmit={() => AddHabitHandler}>
            {/* Form to enter the title of new habit to be added */}
            <Form.Group controlId='title'>
              <Form.Label>Habit Title</Form.Label>
              <Form.Control
                type='text'
                placeholder='enter title'
                value={title}
                autoFocus={true}
                required={true}
                onChange={(e) => setTitle(e.target.value)}></Form.Control>
            </Form.Group>

            {/* Form to enter the description of new habit to be added */}
            <Form.Group controlId='description'>
              <Form.Label>Describe it </Form.Label>
              <Form.Control
                type='text'
                placeholder='short description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}></Form.Control>
            </Form.Group>

            {/* Button to be clicked after filling in the details which takes to AddHabitHandler method */}
            <Modal.Footer>
              <Button onClick={() => AddHabitHandler()}>Add Habit</Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal.Dialog>
    </Modal>
  )
}

export default CreateHabit