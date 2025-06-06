import React from "react";
const ProgrammingFlag: React.FC<
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
        d="M3.5 15h14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-14zm0 0v6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 7.5 16.5 9 15 10.5m-6-3L7.5 9 9 10.5m3.5-4-1 5"
      />
    </svg>
  );
};
export default ProgrammingFlag;
