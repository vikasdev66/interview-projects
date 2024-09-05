import { useState } from "react";
import {
  Home,
  FormTry,
  CheckboxTry,
  Stopwatch,
  TodoList,
  Accordion,
  FolderFileExplorer,
  InfiniteScroll,
  ProgressStepUse,
} from "./components/index";
import { ProjectListContext } from "./context/ProjectListContext";
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
      { path: "/checkbox", element: <CheckboxTry /> },
      { path: "/stopwatch", element: <Stopwatch /> },
      { path: "/todoList", element: <TodoList /> },
      { path: "/accordion", element: <Accordion /> },
      { path: "/folder-file-explorer", element: <FolderFileExplorer /> },
      { path: "/infinite-scroll", element: <InfiniteScroll /> },
      { path: "/progress-step", element: <ProgressStepUse /> },
    ],
  },
]);

function App() {
  const [projectListData, setProjectListData] = useState([]);
  return (
    <ProjectListContext.Provider
      value={{ projectListData, setProjectListData }}
    >
      <div className="app-container">
        <RouterProvider router={router} />
      </div>
    </ProjectListContext.Provider>
  );
}

export default App;
