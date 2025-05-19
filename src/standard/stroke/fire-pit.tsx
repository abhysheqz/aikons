import React from "react";
const FirePit: React.FC<
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
        d="M8.5 2c7.5.5 6.5 9 6.5 9s2.435-.5 3-2.5c.585.863.976 2.382 1 4 .046 3.07-1.45 6.5-7 6.5-4.439 0-7-3.5-7-6 0-2 .52-3.249 1.674-4.5C9.902 5 8.5 2 8.5 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.599 15c-1.94-3 1.454-6 1.454-6-.323 1.167-.582 3.7.97 4.5.969.5 2.423-.5 2.423-.5s.485 2.5-1.454 3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7 20.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.5 19h13a1.5 1.5 0 0 1 0 3h-13"
      />
    </svg>
  );
};
export default FirePit;
