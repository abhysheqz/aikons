import React from "react";
const Key_02: React.FC<
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
        fillRule="evenodd"
        d="M16.086 2.108c-1.388-.715-2.996-.3-4.023.727l-2.21 2.21a3.77 3.77 0 0 0-.788 4.17l.457.97a.25.25 0 0 1-.05.283l-7.21 7.21a1.75 1.75 0 0 0-.512 1.238v2.586c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-1.25H7.5a.75.75 0 0 0 .75-.75v-1.25H9.5a.75.75 0 0 0 .53-.22l3.503-3.504a.25.25 0 0 1 .284-.049l.969.457.024.01a3.77 3.77 0 0 0 4.146-.798l2.21-2.21c1.028-1.027 1.442-2.635.727-4.023-1.332-2.588-3.22-4.475-5.807-5.807M17.53 7.53a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Key_02;
