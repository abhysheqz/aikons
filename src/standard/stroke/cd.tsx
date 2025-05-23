import React from "react";
const Cd: React.FC<
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
        strokeWidth={1.5}
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M6.5 15.99a6.9 6.9 0 0 0 1.43 1.51m8.096-11c.569.44 1.067.972 1.474 1.573M14.5 12a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"
      />
    </svg>
  );
};
export default Cd;
