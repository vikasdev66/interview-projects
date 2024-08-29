export const SkeletonDirectory = ({
  fileStructure,
  isFolderOpen,
  handleClick,
}) => {
  return (
    <div
      onClick={(e) => {
        handleClick(e, fileStructure?.type, fileStructure?.name);
      }}
    >
      <span className="cursor-pointer">
        {fileStructure?.children?.length > 0 && (
          <span
            className={`arrowForward-icon inline-block ${
              isFolderOpen[fileStructure?.name]
                ? "arrowForward-icon-rotate"
                : ""
            }`}
          >
            {">"}
          </span>
        )}
        {fileStructure?.type}: {fileStructure?.name}
      </span>

      <div
        className={`skeletonDirectory ${
          isFolderOpen[fileStructure?.name] ? "" : "hidden"
        }`}
      >
        {!!fileStructure?.children && fileStructure?.children?.length > 0
          ? fileStructure?.children?.map((child, index) => {
              return (
                <SkeletonDirectory
                  fileStructure={child}
                  isFolderOpen={isFolderOpen}
                  handleClick={handleClick}
                  key={index}
                />
              );
            })
          : ""}
      </div>
    </div>
  );
};
