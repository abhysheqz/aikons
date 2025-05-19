import React from "react";
const Luggage_02: React.FC<
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
        d="M8.25 1.25h7.5v1.5h-7.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.75 1.25v7.5h-1.5v-7.5zm4 0v7.5h-1.5v-7.5zM7.75 19.75h2v3h-2zM14.25 19.75h2v3h-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.25 8A.75.75 0 0 1 6 7.25h12a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75zm5.5 2.25v8h-1.5v-8zm4 8v-8h-1.5v8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Luggage_02;
