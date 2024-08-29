import {
  Home,
  FormTry,
  CheckboxTry,
  Stopwatch,
  TodoList,
  Accordion,
  FolderFileExplorer,
} from "./components/index";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/form", element: <FormTry /> },
      { path: "/checkboxTry", element: <CheckboxTry /> },
      { path: "/stopwatch", element: <Stopwatch /> },
      { path: "/todoList", element: <TodoList /> },
      { path: "/accordion", element: <Accordion /> },
      { path: "/folder-file-explorer", element: <FolderFileExplorer /> },
    ],
  },
]);

function App() {
  return (
    <div className="app-container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
