import React from "react";
const DialpadSquare_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 2h4v4H2zM10 2h4v4h-4zM18 2h4v4h-4zM2 10h4v4H2zM10 10h4v4h-4zM18 10h4v4h-4zM10 18h4v4h-4z"
      />
    </svg>
  );
};
export default DialpadSquare_02;
