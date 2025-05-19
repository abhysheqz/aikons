import React from "react";
const GeometricShapes_01: React.FC<
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
        d="M3 1.25A1.75 1.75 0 0 0 1.25 3v6c0 .966.784 1.75 1.75 1.75h6A1.75 1.75 0 0 0 10.75 9V3A1.75 1.75 0 0 0 9 1.25zm15.59 1.157a1.25 1.25 0 0 0-2.18 0l-3.644 6.48a1.25 1.25 0 0 0 1.09 1.863h7.29a1.25 1.25 0 0 0 1.089-1.863zM13.25 18a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0m-9.543-4.207a1 1 0 0 0-1.414 1.414L5.086 18l-2.793 2.793a1 1 0 1 0 1.414 1.414L6.5 19.414l2.793 2.793a1 1 0 0 0 1.414-1.414L7.914 18l2.793-2.793a1 1 0 1 0-1.414-1.414L6.5 16.586z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GeometricShapes_01;
