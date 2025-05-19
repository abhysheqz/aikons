import React from "react";
const DrawingMode: React.FC<
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
        d="M9 3.188a5.812 5.812 0 1 0 0 11.625v1.937A7.75 7.75 0 1 1 16.75 9h-1.937A5.81 5.81 0 0 0 9 3.188"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9 8.25h13a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75V9A.75.75 0 0 1 9 8.25"
      />
    </svg>
  );
};
export default DrawingMode;
