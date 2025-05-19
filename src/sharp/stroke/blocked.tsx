import React from "react";
const Blocked: React.FC<
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
        d="M15.5 10.5h-7V16h7zM14 10.5V9a2 2 0 1 0-4 0v1.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M21 11V5c-5-.5-9-3-9-3S8 4.5 3 5v6c0 7.5 9 11 9 11s9-3.5 9-11Z"
      />
    </svg>
  );
};
export default Blocked;
