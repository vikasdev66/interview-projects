import { useState } from "react";
import { FileStructureData } from "./FileStructureData";

export const useFileStructure = () => {
  const [isFolderOpen, setIsFolderOpen] = useState({});
  const [fileStructure, setFileStructure] = useState(FileStructureData);
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
