import { useState, useEffect } from "react";
import { Form } from "antd";

export const useTodo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [doneItems, setDoneItems] = useState({});
  const [form] = Form.useForm();
  const handleSubmit = () => {
    try {
      setTodoList((prev) => {
        const items = [...prev, todo.trim()];
        localStorage.setItem("todo", JSON.stringify(items));
        return items;
      });
      setDoneItems((prev) => {
        const items = { ...prev, [todo.trim()]: false };
        localStorage.setItem("doneItems", JSON.stringify(items));
        console.log(items);
        return items;
      });
      form.resetFields();
      setTodo("");
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = (todoItem) => {
    try {
      const deletedTodo = todoList.filter((item) => item !== todoItem);
      const deletedDone = Object.keys(doneItems)
        .filter((key) => key !== todoItem)
        .reduce((acc, key) => ({ ...acc, [key]: doneItems[key] }), {});
      setTodoList(deletedTodo);
      setDoneItems(deletedDone);
      localStorage.setItem("todo", JSON.stringify(deletedTodo));
      localStorage.setItem("doneItems", JSON.stringify(deletedDone));
    } catch (e) {
      console.error(e);
    }
  };

  const handleCheck = (todoItem) => {
    setDoneItems((prev) => {
      const items = { ...prev, [todoItem]: !!!doneItems[todoItem] };
      localStorage.setItem("doneItems", JSON.stringify(items));
      return items;
    });
  };

  const validateTodo = (_, value) => {
    if (todoList?.includes(value)) {
      return Promise.reject(new Error("This todo already exist"));
    }
    return Promise.resolve();
  };

  useEffect(() => {
    setTodoList(JSON.parse(localStorage.getItem("todo")) || []);
    setDoneItems(JSON.parse(localStorage.getItem("doneItems")) || {});
  }, []);
  return {
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
  };
};
