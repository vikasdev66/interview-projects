import form from "../../Assets/form.png";
import checkbox from "../../Assets/checkbox.png";
import stopwatch from "../../Assets/stopwatch.png";
import todo from "../../Assets/todo.png";
import accordion from "../../Assets/accordion.png";
import folderFileExplorer from "../../Assets/folderFileExplorer.png";
import infiniteScroll from "../../Assets/infiniteScroll.png";
import progressStep from "../../Assets/progressStep.png";

export const ProjectList = [
  {
    id: "1",
    name: "Form",
    description:
      "This Form component is a registration form built in React that allows users to input personal information such as name, email, age, gender, hobbies, and language preference. Upon submission, the form data is saved and reset for further entries.",
    gitRepoLink:
      "https://github.com/vikasdev66/react-interview-projects/blob/main/src/components/FormTry/FormTry.jsx",
    path: "/form",
    image: form,
  },
  {
    id: "2",
    name: "Checkbox",
    description:
      "The Checkbox component is a React component that demonstrates two different approaches to managing checkbox selections: a standard method and an event delegation method. It allows users to select or deselect individual items or all items at once, with the state managed centrally for easy tracking of selected items.",
    gitRepoLink:
      "https://github.com/vikasdev66/react-interview-projects/blob/main/src/components/CheckboxTry/CheckboxTry.jsx",
    path: "/checkbox",
    image: checkbox,
  },
  {
    id: "3",
    name: "Stopwatch",
    description:
      "The `Stopwatch` component is a simple React stopwatch that tracks elapsed time in hours, minutes, and seconds. Users can start, pause, and reset the timer, with the timer state being updated every second while running.",
    gitRepoLink:
      "https://github.com/vikasdev66/react-interview-projects/blob/main/src/components/Stopwatch/Stopwatch.jsx",
    path: "/stopwatch",
    image: stopwatch,
  },
  {
    id: "4",
    name: "Todo List",
    description:
      "This `TodoList` component is a simple React application that allows users to manage their tasks using a form. It integrates local storage to persist tasks, enabling users to add, mark as completed, and delete tasks. The interface uses Ant Design components and icons for a clean and interactive user experience.",
    gitRepoLink:
      "https://github.com/vikasdev66/react-interview-projects/blob/main/src/components/TodoList/TodoList.jsx",
    path: "/todoList",
    image: todo,
  },
  {
    id: "5",
    name: "Accordion",
    description:
      "This React component renders an interactive accordion using the `useState` hook. Users can toggle the visibility of answers by clicking on the associated questions. The component dynamically changes the display of each accordion item based on the selected index.",
    gitRepoLink:
      "https://github.com/vikasdev66/react-interview-projects/blob/main/src/components/Accordion/Accordion.jsx",
    path: "/accordion",
    image: accordion,
  },
  {
    id: "6",
    name: "Folder/File Explorer",
    description:
      "The `FolderFileExplorer` component is a dynamic React-based file explorer that visually represents a folder structure, allowing users to toggle folder visibility by clicking. It leverages a custom hook, `useFolderFileExplorer`, to manage state and interactions, making it easy to expand or collapse folders and navigate through nested directories. The `SkeletonDirectory` component recursively renders the file structure, providing a seamless and interactive user experience.",
    gitRepoLink:
      "https://github.com/vikasdev66/react-interview-projects/blob/main/src/components/FolderFileExplorer/FolderFileExplorer.jsx",
    path: "/folder-file-explorer",
    image: folderFileExplorer,
  },
  {
    id: "7",
    name: "Infinite Scroll",
    description:
      "The `InfiniteScroll` component in React dynamically loads and displays images as the user scrolls, creating a seamless browsing experience. It utilizes a custom `useInfiniteScroll` hook to fetch and append new photos to the list as the user reaches the bottom of the page. The component also includes a loading indicator to show when new content is being fetched.",
    gitRepoLink:
      "https://github.com/vikasdev66/react-interview-projects/blob/main/src/components/InfiniteScroll/InfiniteScroll.jsx",
    path: "/infinite-scroll",
    image: infiniteScroll,
  },
  {
    id: "8",
    name: "Progress Step",
    description:
      "This React component implements a step-by-step progress tracker with navigation controls using Ant Design's Button component. The `ProgressStepUse` component manages the current step state, allowing users to move between steps, while the `ProgressStep` component visually indicates the active step. The setup is ideal for multi-step forms or wizards.",
    gitRepoLink:
      "https://github.com/vikasdev66/react-interview-projects/blob/main/src/components/ProgressStep/ProgressStepUse.jsx",
    path: "/progress-step",
    image: progressStep,
  },
];
