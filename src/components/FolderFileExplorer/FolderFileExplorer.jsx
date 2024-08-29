import React from "react";
import { useFolderFileExplorer } from "./useFolderFileExplorer";
import { SkeletonDirectory } from "./components/SkeletonDirectory";
import "./FolderFileExplorer.css";

export const FolderFileExplorer = () => {
  const { fileStructure, isFolderOpen, setIsFolderOpen, handleClick } =
    useFolderFileExplorer();
  return (
    <div className="main-container">
      <div className="container">
        <h1 className="text-center">Folder/File Explorer</h1>
        <SkeletonDirectory
          fileStructure={fileStructure.root}
          index={0}
          isFolderOpen={isFolderOpen}
          setIsFolderOpen={setIsFolderOpen}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};
