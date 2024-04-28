import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm, Controller } from "react-hook-form";

function TodoForm({ onAddTask }) {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      desc: "",
      priority: "",
    },
  });

  const handleAddTodo = (task) => {
    onAddTask(task);
  };

  return (
    <Card>
      <Card.Body>
        <Form onSubmit={handleSubmit(handleAddTodo)}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Task name</Form.Label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Form.Control {...field} type="text" placeholder="Task name" />
              )}
              rules={{ required: true, minLength: 3 }}
            />
            {errors?.name?.type === "required" && (
              <small className="text-danger">Field is required</small>
            )}
            {errors?.name?.type === "minLength" && (
              <small className="text-danger">
                At-least 3 characters required.
              </small>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="desc">
            <Form.Label>Task description</Form.Label>
            <Controller
              name="desc"
              control={control}
              render={({ field }) => (
                <Form.Control
                  {...field}
                  as="textarea"
                  rows={3}
                  placeholder="Task description"
                />
              )}
              rules={{ required: true }}
            />
            {errors?.desc?.type === "required" && (
              <small className="text-danger">Field is required</small>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="priority">
            <Form.Label>Task priority</Form.Label>
            <Controller
              name="priority"
              control={control}
              render={({ field }) => (
                <Form.Control
                  {...field}
                  type="number"
                  placeholder="Task priority"
                />
              )}
              rules={{ required: true, pattern: /[1-3]/ }}
            />
            {errors?.priority?.type === "required" && (
              <small className="text-danger">Field is required</small>
            )}
            {errors?.priority?.type === "pattern" && (
              <small className="text-danger">Only 1, 2 or 3 allowed.</small>
            )}
          </Form.Group>
          <div className="d-grid">
            <Button variant="success" type="submit">
              Add
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default TodoForm;
