import React from "react";
import { useFileStructure } from "./useFileStructure";
import { SkeletonDirectory } from "./components/SkeletonDirectory";
import "./FileStructure.css";

export const FileStructure = () => {
  const { fileStructure, isFolderOpen, setIsFolderOpen, handleClick } =
    useFileStructure();
  return (
    <div className="main-container">
      <div className="container">
        <h1 className="text-center">File Structure</h1>
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
