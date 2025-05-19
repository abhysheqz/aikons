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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M6 21a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M10 21h3l-1.104-6.073A6 6 0 0 0 5.993 10H5v5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M19.5 21 12.858 6.934A6.87 6.87 0 0 0 6.649 3 4.65 4.65 0 0 0 2 7.65C2 9.537 3.5 12 5 12m14.5 9H22m-2.5 0h-3"
      />
    </svg>
  );
};
export default VacuumCleaner;
