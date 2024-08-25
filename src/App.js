import { FormTry, CheckboxTry, Stopwatch } from "./components/index";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <FormTry /> },
      { path: "/checkboxTry", element: <CheckboxTry /> },
      { path: "/stopwatch", element: <Stopwatch /> },
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
