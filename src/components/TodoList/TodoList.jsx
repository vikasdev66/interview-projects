import { Input } from "antd";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import { useTodo } from "./useTodo";
import "./TodoList.css";

export function TodoList() {
  const {
    Form,
    form,
    handleSubmit,
    validateTodo,
    todo,
    setTodo,
    todoList,
    doneItems,
    handleCheck,
    handleDelete,
  } = useTodo();
  return (
    <div className="main-container">
      <div className="container">
        <h1 className="text-center">Todo List Using Localstorage</h1>
        <Form onFinish={handleSubmit} form={form}>
          <Form.Item
            rules={[
              { required: true, message: "Please enter todo" },
              { validator: validateTodo },
            ]}
            name="todo"
          >
            <Input
              type="text"
              value={todo}
              onChange={(e) => {
                setTodo(e.target.value);
              }}
              placeholder="Please enter your todo"
            />
          </Form.Item>
        </Form>
        <div className="flex flex-col gap-2 w-6/12 mt-5">
          {todoList?.map((todoItem, index) => {
            return (
              <div
                key={index}
                className="todo-item flex items-center justify-between"
              >
                <div className={!!doneItems[todoItem] ? "line-through" : ""}>
                  {todoItem}
                </div>
                <div className="flex gap-4">
                  <RiDeleteBin5Line
                    className="cursor-pointer hover:text-red-500"
                    onClick={() => {
                      handleDelete(todoItem);
                    }}
                  />
                  <FaCheck
                    className={`cursor-pointer ${
                      !!doneItems[todoItem] && "text-green-600"
                    }`}
                    onClick={() => {
                      handleCheck(todoItem);
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
