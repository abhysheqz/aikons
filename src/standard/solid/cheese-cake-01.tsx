import React from "react";
const CheeseCake_01: React.FC<
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
        d="M15.243 3.97a1 1 0 0 0-.485-1.94c-1.706.426-2.672 1.52-3.068 2.322a3.251 3.251 0 0 0 .81 6.398 3.25 3.25 0 0 0 1.487-6.14 3 3 0 0 1 1.256-.64"
      />
      <path
        fill="currentColor"
        d="M15.25 12h5.027l-2.254-3.943a1 1 0 0 0-.773-.5V7.5c0-.688-.146-1.341-.41-1.931a3 3 0 0 1 2.92 1.496l3.108 5.44A1 1 0 0 1 23 13v3.25h-4a.75.75 0 0 0 0 1.5h4V19a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-1.25h9a.75.75 0 0 0 0-1.5H1V13a1 1 0 0 1 .6-.916l6.482-2.836a4.76 4.76 0 0 0 1.136 1.686L6.78 12h6.969v3.5a.75.75 0 0 0 1.5 0z"
      />
    </svg>
  );
};
export default CheeseCake_01;
