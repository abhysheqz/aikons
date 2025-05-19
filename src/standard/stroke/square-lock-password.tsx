import React from "react";
const SquareLockPassword: React.FC<
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
        d="M16.5 9V6.5a4.5 4.5 0 1 0-9 0V9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M18 9H6a2 2 0 0 0-2 2l.001 9a2 2 0 0 0 2 2H18a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.491 15.5h.009m-5 0h.009"
      />
    </svg>
  );
};
export default SquareLockPassword;
