import React from "react";
const RightTriangle: React.FC<
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
        d="M4 15h3a2 2 0 0 1 2 2v3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 10.997h.994a1 1 0 0 1 1 1v6.998a1 1 0 0 0 1 1h7.004a1 1 0 0 1 1 1V22M4.002 7.502 3.997 4.42c-.001-.892 1.077-1.34 1.707-.71l14.593 14.584c.63.629.186 1.705-.704 1.707l-3.092.007"
      />
    </svg>
  );
};
export default RightTriangle;
