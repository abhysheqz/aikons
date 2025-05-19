import React from "react";
const Lifebuoy: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM12 7V3m0 14v4m5-9h4M7 12H3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.897 3.476a4 4 0 1 1 5.627 5.627m0 5.794a4 4 0 1 1-5.627 5.627m-5.793 0a4 4 0 1 1-5.627-5.627m0-5.793a4 4 0 1 1 5.627-5.627"
      />
    </svg>
  );
};
export default Lifebuoy;
