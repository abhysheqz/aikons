import React from "react";
const FolderFileStorage: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M14.25 14c0-.966.784-1.75 1.75-1.75h3.086c.464 0 .909.184 1.237.513l1.914 1.914c.329.328.513.773.513 1.237V20A1.75 1.75 0 0 1 21 21.75h-5A1.75 1.75 0 0 1 14.25 20z"
      />
      <path
        fill="currentColor"
        d="M12.391 6.244 9.898 2.945a1.75 1.75 0 0 0-1.396-.695H3A1.75 1.75 0 0 0 1.25 4v15A2.75 2.75 0 0 0 4 21.75h9V14a3 3 0 0 1 3-3h3.086a3 3 0 0 1 2.121.879l1.543 1.543V8.994A2.75 2.75 0 0 0 20 6.244z"
      />
    </svg>
  );
};
export default FolderFileStorage;
