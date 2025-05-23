import React from "react";
const Tsunami: React.FC<
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
        d="M7 12s0 3 3 4M22 21.373a4.92 4.92 0 0 1-4.74 0 2.99 2.99 0 0 0-2.89 0s-.021 0-.021.019c-1.446.81-3.295.81-4.719 0-.892-.498-2.019-.498-2.89 0m0-.019a4.92 4.92 0 0 1-4.74 0M22 16.5c-5.247 0-11-4.253-11-9.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.74 19c-1.061-3.923-1.135-9.862.8-12.893 1.924-3.012 4.107-3.765 4.795-3.874 1.225-.4 4.093-.558 5.946 1.866.523.823 1.165 2.539.28 3.921-.636-.436-2.382-1.58-4.027-.968C8.648 7.754 7.912 7.605 7 7"
      />
    </svg>
  );
};
export default Tsunami;
