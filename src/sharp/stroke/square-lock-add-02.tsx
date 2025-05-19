import React from "react";
const SquareLockAdd_02: React.FC<
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
        d="M16.983 16v2m0 0v2m0-2h1.998m-1.998 0h-1.997m5.993 0c0 2.21-1.79 4-3.996 4a4 4 0 0 1-3.995-4c0-2.21 1.789-4 3.995-4a4 4 0 0 1 3.996 4Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.507 9.006V6.53c0-2.566-1.948-4.532-4.385-4.532-2.438 0-4.577 1.966-4.577 4.532l-.12 2.476M19 12.007V9.006H2.98L2.983 22h8.02"
      />
    </svg>
  );
};
export default SquareLockAdd_02;
