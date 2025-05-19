import React from "react";
const MouseRightClick_06: React.FC<
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
        d="M10.5 5.5V2m0 10V9"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.5 22c6 0 7.5-4.51 7.5-10S16.5 2 10.5 2 3 6.51 3 12s1.5 10 7.5 10Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 12H3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M19 3.167 19.381 2m.59 3.567L21 6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9 7c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54c.184-.077.417-.077.883-.077s.699 0 .883.076a1 1 0 0 1 .54.541C12 6.301 12 6.534 12 7v.5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C11.199 9 10.966 9 10.5 9s-.699 0-.883-.076a1 1 0 0 1-.54-.541C9 8.199 9 7.966 9 7.5z"
      />
    </svg>
  );
};
export default MouseRightClick_06;
