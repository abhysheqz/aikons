import React from "react";
const Edit_03: React.FC<
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
        d="m19.537 10.476 1.554-1.554a2.25 2.25 0 0 0 0-3.182L18.259 2.91a2.25 2.25 0 0 0-3.181 0l-1.554 1.554zM18.476 11.537l-8.498 8.499c-.4.4-.914.667-1.472.764l-5.377.939a.75.75 0 0 1-.868-.868l.939-5.376a2.75 2.75 0 0 1 .764-1.472l8.5-8.5z"
      />
    </svg>
  );
};
export default Edit_03;
