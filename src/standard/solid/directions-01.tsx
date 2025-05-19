import React from "react";
const Directions_01: React.FC<
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
        d="M5.168 2.445A1 1 0 0 1 6 2h6a1 1 0 0 1 1 1v6q0 .045-.004.089v11.916h-2V10H6a1 1 0 0 1-.832-.445l-2-3a1 1 0 0 1 0-1.11z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.3 8.25H18a.75.75 0 0 1 .625.334l2 3a.75.75 0 0 1 0 .832l-2 3a.75.75 0 0 1-.624.334h-3.704V9.134Q14.3 9.068 14.3 9z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 21a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Directions_01;
