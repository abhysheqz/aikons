import React from "react";
const Forrst: React.FC<
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
        d="m13.5 18.5 3-3M13.5 14.5 15 13M10.5 16.5l-2.5-2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.425 21H3.077c-.82 0-1.338-.87-.94-1.578L11.06 3.547a1.081 1.081 0 0 1 1.88 0l8.923 15.875c.398.708-.12 1.578-.94 1.578h-6.348a1.07 1.07 0 0 1-1.075-1.062v-7.405c0-.587-.481-1.062-1.075-1.062h-.85c-.594 0-1.075.475-1.075 1.062v7.405c0 .586-.481 1.062-1.075 1.062Z"
      />
    </svg>
  );
};
export default Forrst;
