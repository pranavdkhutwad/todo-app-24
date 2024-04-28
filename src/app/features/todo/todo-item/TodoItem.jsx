import Card from "react-bootstrap/Card";
import { getBorderClass } from "../utils/todo";
import { Pencil, Trash } from "react-bootstrap-icons";
import PropTypes from "prop-types";

function TodoItem({ task, onDeleteTask, onOpenEditModal }) {
  return (
    <Card className={`mb-3 ${getBorderClass(task.priority)}`}>
      <Card.Header className="d-flex justify-content-between">
        <div>{task.name}</div>
        <div>
          <Pencil
            onClick={() => onOpenEditModal(task)}
            className="me-3 text-info"
          />
          <Trash
            className="text-danger"
            onClick={() => onDeleteTask(task.id)}
          />
        </div>
      </Card.Header>
      <Card.Body>{task.desc}</Card.Body>
    </Card>
  );
}

TodoItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onOpenEditModal: PropTypes.func.isRequired,
};
export default TodoItem;
