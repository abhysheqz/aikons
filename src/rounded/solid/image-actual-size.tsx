import React from "react";
const ImageActualSize: React.FC<
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
        d="M13.5 3a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15M4 10.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.707 16.293a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0M10.526 7.15A1 1 0 0 1 11 8v5a1 1 0 1 1-2 0V9.5a1 1 0 0 1-.447-1.894l1-.5a1 1 0 0 1 .973.043M18.026 7.15A1 1 0 0 1 18.5 8v5a1 1 0 1 1-2 0V9.5a1 1 0 0 1-.447-1.894l1-.5a1 1 0 0 1 .973.043M13.5 8a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1m0 3a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0V12a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ImageActualSize;
