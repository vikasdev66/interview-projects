import React, { useState, useEffect } from "react";
import { Form } from "antd";

export const useTodo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [form] = Form.useForm();
  const handleSubmit = (e) => {
    try {
      setTodoList((prev) => {
        console.log(prev);
        const items = [...prev, todo.trim()];
        localStorage.setItem("todo", JSON.stringify(items));
        return items;
      });
      console.log(todo, e.todo);
      form.resetFields();
      setTodo("");
    } catch (e) {
      throw new Error(e);
    }
  };

  const handleDelete = (todoItem) => {
    try {
      const deletedTodo = todoList.filter((item) => item !== todoItem);
      const deletedChecked = checkedItems.filter((item) => item !== todoItem);
      setTodoList(deletedTodo);
      setCheckedItems(deletedChecked);
      localStorage.setItem("todo", JSON.stringify(deletedTodo));
      localStorage.setItem("checkedItems", JSON.stringify(deletedChecked));
    } catch (e) {
      throw new Error(e);
    }
  };

  const handleCheck = (todoItem) => {
    setCheckedItems((prev) => {
      console.log(prev);
      const items = [...prev, todoItem];
      localStorage.setItem("checkedItems", JSON.stringify(items));
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
    setTodoList(JSON.parse(localStorage.getItem("todo")));
    setCheckedItems(JSON.parse(localStorage.getItem("checkedItems")));
  }, []);
  return {
    Form,
    form,
    handleSubmit,
    validateTodo,
    todo,
    setTodo,
    todoList,
    checkedItems,
    handleCheck,
    handleDelete,
  };
};
