import React from "react";
const Cells: React.FC<
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
        d="m19.5 16.5 2-4-2-4h-5l-2 4 2 4zM9.5 10.5l2-4-2-4h-5l-2 4 2 4zM9.5 21.5l2-4-2-4h-5l-2 4 2 4z"
      />
    </svg>
  );
};
export default Cells;
