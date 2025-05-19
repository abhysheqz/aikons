import React from "react";
const Cupcake_02: React.FC<
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
        d="M8 9c-1.707.488-3 2.224-3 4m3-4c1.97-.563 6.027-.75 6.827-2.993M8 9c0-4 4-3 4-7 2.047 0 3.503 2.11 2.827 4.007m0 0c1.627-.14 2.717 1.731 1.858 3.071m0 0c-.274.427-.724.775-1.185 1.041m1.185-1.04C18.642 9.534 19 11.293 19 13"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.24 22h7.52a2 2 0 0 0 1.791-1.11l1.107-2.231c.587-1.181 1.342-2.348 1.342-3.71 0-2.599-4-2.599-4 0 0-2.599-4-2.599-4 0 0-2.599-4-2.599-4 0 0-2.599-4-2.599-4 0 0 1.362.755 2.529 1.342 3.71l1.107 2.23A2 2 0 0 0 8.24 22"
      />
    </svg>
  );
};
export default Cupcake_02;
