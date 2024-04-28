import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function EditTodo({ onUpdateTask, selectedTaskItem, show, onClose }) {
  const [task, setTask] = useState({
    name: selectedTaskItem.name,
    desc: selectedTaskItem.desc,
    priority: selectedTaskItem.priority,
  });

  const handleUpdateTask = () => {
    onUpdateTask(task, selectedTaskItem.id);
    onClose();
  };
  const handleNameChange = (e) => {
    setTask({ ...task, name: e.target.value });
  };

  const handleDescChange = (e) => {
    setTask({ ...task, desc: e.target.value });
  };

  const handlePriorityChange = (e) => {
    setTask({ ...task, priority: e.target.value });
  };
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Task name</Form.Label>
            <Form.Control
              value={task.name}
              onChange={handleNameChange}
              type="text"
              placeholder="Task name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="desc">
            <Form.Label>Task description</Form.Label>
            <Form.Control
              as="textarea"
              value={task.desc}
              onChange={handleDescChange}
              rows={3}
              placeholder="Task description"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="priority">
            <Form.Label>Task priority</Form.Label>
            <Form.Control
              value={task.priority}
              onChange={handlePriorityChange}
              type="number"
              placeholder="Task priority"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleUpdateTask}>
          Edit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditTodo;
