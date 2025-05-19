import React from "react";
const Cursor_02: React.FC<
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
        d="m3.675 3.034 17.007 6.541a.496.496 0 0 1-.021.934l-7.38 2.46a.5.5 0 0 0-.313.313l-2.46 7.379a.496.496 0 0 1-.933.021L3.035 3.675a.496.496 0 0 1 .64-.64Z"
      />
    </svg>
  );
};
export default Cursor_02;
