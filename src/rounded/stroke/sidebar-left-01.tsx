import React from "react";
const SidebarLeft_01: React.FC<
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
        d="M2 12c0-3.75 0-5.625.955-6.939A5 5 0 0 1 4.06 3.955C5.375 3 7.251 3 11 3h2c3.75 0 5.625 0 6.939.955a5 5 0 0 1 1.106 1.106C22 6.375 22 8.251 22 12s0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C18.625 21 16.749 21 13 21h-2c-3.75 0-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106C2 17.625 2 15.749 2 12ZM9.5 3.5v17"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 7h1.5M5 11h1.5M17 10l-1.226 1.057c-.516.445-.774.667-.774.943s.258.498.774.943L17 14"
      />
    </svg>
  );
};
export default SidebarLeft_01;
