import React from "react";
const Download_03: React.FC<
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
        d="m20.73 10.983-3.177-1.589.895-1.788 3.999 2a1 1 0 0 1 .481 1.265l-3.999 10a1 1 0 0 1-.928.629H6a1 1 0 0 1-.929-.629l-3.998-10a1 1 0 0 1 .48-1.265l4-2 .894 1.788-3.176 1.589L6.678 19.5h10.646z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 2.5v8.586l1.293-1.293 1.414 1.414L12 14.914l-3.707-3.707 1.414-1.414L11 11.086V2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Download_03;
