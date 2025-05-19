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
        d="M1 4a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2h-1.332l2.32 14.846a1 1 0 1 1-1.976.308L19.425 10H4.575L2.988 20.154a1 1 0 0 1-1.976-.308L3.332 5H2a1 1 0 0 1-1-1"
      />
    </svg>
  );
};
export default Table_02;
