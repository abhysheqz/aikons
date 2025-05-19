import React from "react";
const RiceBowl_01: React.FC<
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
        d="M7 19c-1.38-.574-4.938-2.513-5-7h18c-.062 4.487-3.62 6.426-5 7l.576 1.675A1 1 0 0 1 14.63 22H7.38a1 1 0 0 1-.947-1.32z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.5 12c0-1.791-1.9-3.012-3.5-2.308M3.5 12c0-1.293.969-2.359 2.215-2.501-.814-1.84.911-3.905 2.824-3.482m0 0c.476-2.69 4.446-2.69 4.922 0 1.957-.433 3.612 1.665 2.831 3.466M8.539 6.017A2.5 2.5 0 0 1 10 6.965M17 9l5-6M15.5 6 18 2"
      />
    </svg>
  );
};
export default RiceBowl_01;
