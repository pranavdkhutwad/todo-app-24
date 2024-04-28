import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TodoItem from "../todo-item/TodoItem";
function TodoList({
  highPriorities,
  mediumPriorities,
  lowPriorities,
  onDeleteTask,
  onOpenEditModal,
}) {
  return (
    <Row>
      <Col md={4} lg={4}>
        <h5>High priority list</h5>
        {highPriorities.map((task) => (
          <TodoItem
            task={task}
            onOpenEditModal={onOpenEditModal}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </Col>
      <Col md={4} lg={4}>
        <h5>Medium priority list</h5>
        {mediumPriorities.map((task) => (
          <TodoItem
            task={task}
            onOpenEditModal={onOpenEditModal}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </Col>
      <Col md={4} lg={4}>
        <h5>Low priority list</h5>
        {lowPriorities.map((task) => (
          <TodoItem
            task={task}
            onOpenEditModal={onOpenEditModal}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </Col>
    </Row>
  );
}

export default TodoList;
