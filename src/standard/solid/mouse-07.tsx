import React from "react";
const Mouse_07: React.FC<
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
        fillRule="evenodd"
        d="M5 1.25a.75.75 0 0 1 .75.75v.5c0 .138.112.25.25.25h6c.966 0 1.75.783 1.75 1.75V6a.75.75 0 0 1-1.5 0V4.5a.25.25 0 0 0-.25-.25H6A1.75 1.75 0 0 1 4.25 2.5V2A.75.75 0 0 1 5 1.25"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 5.25c-.837 0-1.712.04-2.516.095-2.263.154-4.118 1.843-4.42 4.132A35 35 0 0 0 5.75 14c0 1.726.157 3.373.338 4.698.298 2.185 2.031 3.835 4.227 3.97a43.711 43.711 0 0 0 5.37 0c2.196-.134 3.93-1.785 4.227-3.97.18-1.325.338-2.972.338-4.698 0-1.65-.144-3.23-.314-4.523-.302-2.289-2.157-3.978-4.42-4.132A38 38 0 0 0 13 5.25m1 3.25a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mouse_07;
