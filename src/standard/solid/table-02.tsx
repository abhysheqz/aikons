import React from "react";
const Table_02: React.FC<
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
        d="M4.482 3H2a1 1 0 0 0 0 2h1.332l-2.32 14.846a1 1 0 0 0 1.976.308L4.575 10h14.85l1.587 10.154a1 1 0 0 0 1.976-.308L20.668 5H22a1 1 0 1 0 0-2H4.482"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Table_02;
