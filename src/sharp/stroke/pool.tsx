import React from "react";
const Pool: React.FC<
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
        strokeWidth={1.5}
        d="M22 21h-1c-1.451 0-2.722-.859-3-2-.278 1.141-1.549 2-3 2s-2.722-.859-3-2c-.278 1.141-1.549 2-3 2s-2.722-.859-3-2c-.278 1.141-1.549 2-3 2H2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m18 3-2 2v12M10 3 8 5v12M8 7h8m-8 4h8m-8 4h8"
      />
    </svg>
  );
};
export default Pool;
