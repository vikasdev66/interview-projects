import { useState } from "react";
import { FolderFileExplorerData } from "./FolderFileExplorerData";

export const useFolderFileExplorer = () => {
  const [isFolderOpen, setIsFolderOpen] = useState({});
  const [fileStructure, setFileStructure] = useState(FolderFileExplorerData);
  const handleClick = (e, type, name) => {
    e.stopPropagation();
    if (type === "folder") {
      setIsFolderOpen((prev) => {
        return { ...prev, [name]: !isFolderOpen[name] };
      });
    }
  };
  return {
    fileStructure,
    setFileStructure,
    isFolderOpen,
    setIsFolderOpen,
    handleClick,
  };
};
