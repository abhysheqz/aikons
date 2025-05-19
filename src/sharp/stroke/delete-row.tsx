import React from "react";
const DeleteRow: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.5 21H21V3H3v18h2.5M9 21l3-3m0 0 3-3m-3 3-3-3m3 3 3 3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M3 9h18M9 3v6m6-6v6"
      />
    </svg>
  );
};
export default DeleteRow;
