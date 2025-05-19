import React from "react";
const PlayListMinus: React.FC<
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
        d="M13.5 18a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.5 8h21v7.708a2.5 2.5 0 0 0-1-.208h-7a2.5 2.5 0 0 0 0 5h7c.31 0 .607-.056.88-.16a3 3 0 0 1-2.88 2.16h-15a3 3 0 0 1-3-3zM9.97 1.5 6.507 6H1.5V4.5a3 3 0 0 1 3-3zM19.493 1.5 16.03 6h6.47V4.5a3 3 0 0 0-3-3zM12.493 1.5 9.03 6h4.477l3.461-4.5z"
      />
    </svg>
  );
};
export default PlayListMinus;
