import TodoForm from "./todo-form/TodoForm";
import TodoList from "./todo-list/TodoList";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import EditTodo from "./edit-todo/EditTodo";
import { useSelector, useDispatch } from "react-redux";
import {
  updateTitle,
  fetchTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../../redux/slices/todoSlice";

function Todo() {
  const [show, setShow] = useState(false);
  const [selectedTaskItem, setSelectedTaskItem] = useState({});
  const { title, highPriorityList, mediumPriorityList, lowPriorityList } =
    useSelector((state) => state.todo);
  const dispatch = useDispatch();

  // To know component has successfully loaded
  // first time
  useEffect(() => {
    // first time load.
    dispatch(fetchTasks());
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const openEditModal = (task) => {
    setSelectedTaskItem(task);
    handleShow();
  };
  const handleDeleteTask = async (id) => dispatch(deleteTask(id));
  const handleAddTask = async (task) => dispatch(createTask(task));
  const handleUpdateTask = async (task, id) =>
    dispatch(updateTask({ task, id }));

  return (
    <>
      {show && (
        <EditTodo
          selectedTaskItem={selectedTaskItem}
          show={show}
          onClose={handleClose}
          onUpdateTask={handleUpdateTask}
        />
      )}
      <section>
        <Row>
          <Col md={4} lg={4}>
            <TodoForm onAddTask={handleAddTask} />
          </Col>
          <Col md={8} lg={8}>
            <TodoList
              highPriorities={highPriorityList}
              mediumPriorities={mediumPriorityList}
              lowPriorities={lowPriorityList}
              onDeleteTask={handleDeleteTask}
              onOpenEditModal={openEditModal}
            />
          </Col>
        </Row>
      </section>
    </>
  );
}

export default Todo;
