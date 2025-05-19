import React from "react";
const Vest: React.FC<
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
        strokeWidth={2}
        d="M10.5 13.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 2h6M6 3.5 9 2l4.594 10.566a2 2 0 0 1-.11 1.812L9 22l-5-2v-9c3-2.5 2.5-6.5 2-7.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12 9 3-7 3 1.5c-.5 1-1 5 2 7.5v9l-5 2-3-5"
      />
    </svg>
  );
};
export default Vest;
