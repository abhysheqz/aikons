import React from "react";
const VacuumCleaner: React.FC<
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
        d="M6 21a2 2 0 1 1 0-4 2 2 0 0 1 0 4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 21h1.974c.64 0 1.124-.565 1.01-1.179l-.914-4.9C11.538 12.07 8.994 10 6.024 10 5.458 10 5 10.447 5 10.999V14.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.5 21 12.858 6.934A6.87 6.87 0 0 0 6.649 3 4.65 4.65 0 0 0 2 7.65v.188A4.39 4.39 0 0 0 5 12M22 21h-5.5"
      />
    </svg>
  );
};
export default VacuumCleaner;
