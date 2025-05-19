import React from "react";
const PlayListAdd: React.FC<
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
        d="M18 13.5a1 1 0 0 1 1 1V17h2.5a1 1 0 1 1 0 2H19v2.5a1 1 0 1 1-2 0V19h-2.5a1 1 0 1 1 0-2H17v-2.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.5 8h21v7.708a2.5 2.5 0 0 0-1-.208h-1v-1a2.5 2.5 0 0 0-5 0v1h-1a2.5 2.5 0 0 0 0 5h1v1c0 .356.074.694.208 1H4.5a3 3 0 0 1-3-3zM9.97 1.5 6.507 6H1.5V4.5a3 3 0 0 1 3-3zM19.493 1.5 16.03 6h6.47V4.5a3 3 0 0 0-3-3zM12.493 1.5 9.03 6h4.477l3.461-4.5z"
      />
    </svg>
  );
};
export default PlayListAdd;
