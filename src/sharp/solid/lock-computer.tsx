import React from "react";
const LockComputer: React.FC<
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
        fill="currentColor"
        d="M1.25 3.22c0-.535.438-.97.977-.97H12v1.941H3.205V16.81h17.59V13.5h1.955v4.28c0 .535-.437.97-.977.97H2.227a.974.974 0 0 1-.977-.97z"
      />
      <path fill="currentColor" d="M14.5 20.75H17v2H7v-2h2.5V18h5z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.5 15.5h-3v-2h3zM18.5 1.25A2.75 2.75 0 0 0 15.75 4v.75h-1.5v7h8.5v-7h-1.5V4a2.75 2.75 0 0 0-2.75-2.75M17.25 4v.75h2.5V4a1.25 1.25 0 1 0-2.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LockComputer;
