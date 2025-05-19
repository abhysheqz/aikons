import React from "react";
const Waiter: React.FC<
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
        d="M20 22.002v-7a2 2 0 0 0-2.001-2H17c0 5-5 7-5 7s-5-2-5-7H6a2 2 0 0 0-2 2v7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12 13.5 2-1v2zm0 0-2-1v2zM15.5 6.5v-1a3.5 3.5 0 1 0-7 0v1a3.5 3.5 0 0 0 7 0"
      />
    </svg>
  );
};
export default Waiter;
