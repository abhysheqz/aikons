import React from "react";
const Sofa_03: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 16v3m10-3v3M4.5 9l.77-2.053A3 3 0 0 1 8.079 5h7.842a3 3 0 0 1 2.809 1.947L19.5 9"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.209 12.515 6 10.5C5.5 9.5 4.873 9 4 9a2 2 0 1 0 0 4l.947 1.894A2 2 0 0 0 6.737 16h10.529a2 2 0 0 0 1.789-1.106L20.002 13a2 2 0 1 0 0-4c-.873 0-1.5.5-2 1.5l-1.21 2.015a1 1 0 0 1-.858.485H8.066a1 1 0 0 1-.857-.486Z"
      />
    </svg>
  );
};
export default Sofa_03;
